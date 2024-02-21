exports.id = 835;
exports.ids = [835];
exports.modules = {

/***/ 398:
/***/ ((module) => {

function e(r){var o,t,f="";if("string"==typeof r||"number"==typeof r)f+=r;else if("object"==typeof r)if(Array.isArray(r))for(o=0;o<r.length;o++)r[o]&&(t=e(r[o]))&&(f&&(f+=" "),f+=t);else for(o in r)r[o]&&(f&&(f+=" "),f+=o);return f}function r(){for(var r,o,t=0,f="";t<arguments.length;)(r=arguments[t++])&&(o=e(r))&&(f&&(f+=" "),f+=o);return f}module.exports=r,module.exports.clsx=r;

/***/ }),

/***/ 89367:
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ 70882:
/***/ ((module) => {

// Only Node.JS has a process variable that is of [[Class]] process
module.exports.isNode = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';


/***/ }),

/***/ 57643:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var currentNonce;
exports.setNonce = function (nonce) {
    currentNonce = nonce;
};
exports.getNonce = function () {
    if (currentNonce) {
        return currentNonce;
    }
    if (true) {
        return __webpack_require__.nc;
    }
    return undefined;
};


/***/ }),

/***/ 5993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 17446:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(61928),
    hashDelete = __webpack_require__(32859),
    hashGet = __webpack_require__(13478),
    hashHas = __webpack_require__(14021),
    hashSet = __webpack_require__(25935);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 14060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(88252),
    listCacheDelete = __webpack_require__(21992),
    listCacheGet = __webpack_require__(58758),
    listCacheHas = __webpack_require__(9525),
    listCacheSet = __webpack_require__(40323);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 52586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 51753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(17066),
    mapCacheDelete = __webpack_require__(92106),
    mapCacheGet = __webpack_require__(58728),
    mapCacheHas = __webpack_require__(33772),
    mapCacheSet = __webpack_require__(33577);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 17203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 31959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 8428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(51753),
    setCacheAdd = __webpack_require__(6599),
    setCacheHas = __webpack_require__(99060);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 77381:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(14060),
    stackClear = __webpack_require__(48847),
    stackDelete = __webpack_require__(57083),
    stackGet = __webpack_require__(75353),
    stackHas = __webpack_require__(87109),
    stackSet = __webpack_require__(34202);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 40636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 77388:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 56990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 85753:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 55256:
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 92325:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 6043:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIndexOf = __webpack_require__(58348);

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;


/***/ }),

/***/ 42550:
/***/ ((module) => {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;


/***/ }),

/***/ 25212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(12490),
    isArguments = __webpack_require__(1767),
    isArray = __webpack_require__(49403),
    isBuffer = __webpack_require__(17424),
    isIndex = __webpack_require__(10006),
    isTypedArray = __webpack_require__(96026);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 30517:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 64945:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 95911:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 25383:
/***/ ((module) => {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),

/***/ 93630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(63136),
    eq = __webpack_require__(53395);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 49762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(53395);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 68077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    keys = __webpack_require__(65889);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 86259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    keysIn = __webpack_require__(64042);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 63136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(5258);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 27748:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    arrayEach = __webpack_require__(55256),
    assignValue = __webpack_require__(93630),
    baseAssign = __webpack_require__(68077),
    baseAssignIn = __webpack_require__(86259),
    cloneBuffer = __webpack_require__(10552),
    copyArray = __webpack_require__(52127),
    copySymbols = __webpack_require__(81684),
    copySymbolsIn = __webpack_require__(798),
    getAllKeys = __webpack_require__(84886),
    getAllKeysIn = __webpack_require__(51944),
    getTag = __webpack_require__(58340),
    initCloneArray = __webpack_require__(43767),
    initCloneByTag = __webpack_require__(77835),
    initCloneObject = __webpack_require__(17086),
    isArray = __webpack_require__(49403),
    isBuffer = __webpack_require__(17424),
    isMap = __webpack_require__(67625),
    isObject = __webpack_require__(99224),
    isSet = __webpack_require__(21185),
    keys = __webpack_require__(65889),
    keysIn = __webpack_require__(64042);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 96918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 16801:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(82277),
    createBaseEach = __webpack_require__(46821);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 59544:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(79910);

/**
 * The base implementation of methods like `_.max` and `_.min` which accepts a
 * `comparator` to determine the extremum value.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The iteratee invoked per iteration.
 * @param {Function} comparator The comparator used to compare values.
 * @returns {*} Returns the extremum value.
 */
function baseExtremum(array, iteratee, comparator) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    var value = array[index],
        current = iteratee(value);

    if (current != null && (computed === undefined
          ? (current === current && !isSymbol(current))
          : comparator(current, computed)
        )) {
      var computed = current,
          result = value;
    }
  }
  return result;
}

module.exports = baseExtremum;


/***/ }),

/***/ 86349:
/***/ ((module) => {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;


/***/ }),

/***/ 9307:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(64945),
    isFlattenable = __webpack_require__(95227);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ }),

/***/ 95163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(11982);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 82277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(95163),
    keys = __webpack_require__(65889);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 78016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(54783),
    toKey = __webpack_require__(27172);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 66175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(64945),
    isArray = __webpack_require__(49403);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 92931:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    getRawTag = __webpack_require__(34995),
    objectToString = __webpack_require__(3637);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 18910:
/***/ ((module) => {

/**
 * The base implementation of `_.gt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is greater than `other`,
 *  else `false`.
 */
function baseGt(value, other) {
  return value > other;
}

module.exports = baseGt;


/***/ }),

/***/ 19792:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 58348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(86349),
    baseIsNaN = __webpack_require__(80859),
    strictIndexOf = __webpack_require__(10816);

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? strictIndexOf(array, value, fromIndex)
    : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;


/***/ }),

/***/ 8066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 93323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(84670),
    isObjectLike = __webpack_require__(71338);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 84670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    equalArrays = __webpack_require__(59284),
    equalByTag = __webpack_require__(39923),
    equalObjects = __webpack_require__(36015),
    getTag = __webpack_require__(58340),
    isArray = __webpack_require__(49403),
    isBuffer = __webpack_require__(17424),
    isTypedArray = __webpack_require__(96026);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 52151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(58340),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 58302:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    baseIsEqual = __webpack_require__(93323);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 80859:
/***/ ((module) => {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;


/***/ }),

/***/ 78979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(87102),
    isMasked = __webpack_require__(23513),
    isObject = __webpack_require__(99224),
    toSource = __webpack_require__(4285);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 64282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(58340),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 59310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isLength = __webpack_require__(41610),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 26209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(1429),
    baseMatchesProperty = __webpack_require__(33941),
    identity = __webpack_require__(2737),
    isArray = __webpack_require__(49403),
    property = __webpack_require__(48802);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 80907:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(83225),
    nativeKeys = __webpack_require__(11704);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 68071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224),
    isPrototype = __webpack_require__(83225),
    nativeKeysIn = __webpack_require__(99493);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 89903:
/***/ ((module) => {

/**
 * The base implementation of `_.lt` which doesn't coerce arguments.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if `value` is less than `other`,
 *  else `false`.
 */
function baseLt(value, other) {
  return value < other;
}

module.exports = baseLt;


/***/ }),

/***/ 1429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(58302),
    getMatchData = __webpack_require__(87225),
    matchesStrictComparable = __webpack_require__(11313);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 33941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(93323),
    get = __webpack_require__(73999),
    hasIn = __webpack_require__(44637),
    isKey = __webpack_require__(44241),
    isStrictComparable = __webpack_require__(73231),
    matchesStrictComparable = __webpack_require__(11313),
    toKey = __webpack_require__(27172);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 28452:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 27757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(78016);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 6160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(2737),
    overRest = __webpack_require__(51340),
    setToString = __webpack_require__(67572);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 44344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(8500),
    defineProperty = __webpack_require__(5258),
    identity = __webpack_require__(2737);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 70841:
/***/ ((module) => {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),

/***/ 52723:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(16801);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),

/***/ 12490:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    arrayMap = __webpack_require__(30517),
    isArray = __webpack_require__(49403),
    isSymbol = __webpack_require__(79910);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 68220:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(15599);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 96571:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 9847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(8428),
    arrayIncludes = __webpack_require__(6043),
    arrayIncludesWith = __webpack_require__(42550),
    cacheHas = __webpack_require__(57163),
    createSet = __webpack_require__(63565),
    setToArray = __webpack_require__(24663);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;


/***/ }),

/***/ 51458:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(54783),
    last = __webpack_require__(28481),
    parent = __webpack_require__(84109),
    toKey = __webpack_require__(27172);

/**
 * The base implementation of `_.unset`.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {Array|string} path The property path to unset.
 * @returns {boolean} Returns `true` if the property is deleted, else `false`.
 */
function baseUnset(object, path) {
  path = castPath(path, object);
  object = parent(object, path);
  return object == null || delete object[toKey(last(path))];
}

module.exports = baseUnset;


/***/ }),

/***/ 57163:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 54783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(49403),
    isKey = __webpack_require__(44241),
    stringToPath = __webpack_require__(33348),
    toString = __webpack_require__(97885);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 73666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSlice = __webpack_require__(70841);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),

/***/ 83066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(77388);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 10552:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(90191);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 15306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(83066);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 35107:
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 57424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 78008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(83066);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 52127:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 26403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(93630),
    baseAssignValue = __webpack_require__(63136);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 81684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    getSymbols = __webpack_require__(96073);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    getSymbolsIn = __webpack_require__(21589);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 56510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 46821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(20058);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 11982:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 68601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castSlice = __webpack_require__(73666),
    hasUnicode = __webpack_require__(59159),
    stringToArray = __webpack_require__(63934),
    toString = __webpack_require__(97885);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),

/***/ 24085:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIteratee = __webpack_require__(26209),
    isArrayLike = __webpack_require__(20058),
    keys = __webpack_require__(65889);

/**
 * Creates a `_.find` or `_.findLast` function.
 *
 * @private
 * @param {Function} findIndexFunc The function to find the collection index.
 * @returns {Function} Returns the new find function.
 */
function createFind(findIndexFunc) {
  return function(collection, predicate, fromIndex) {
    var iterable = Object(collection);
    if (!isArrayLike(collection)) {
      var iteratee = baseIteratee(predicate, 3);
      collection = keys(collection);
      predicate = function(key) { return iteratee(iterable[key], key, iterable); };
    }
    var index = findIndexFunc(collection, predicate, fromIndex);
    return index > -1 ? iterable[iteratee ? collection[index] : index] : undefined;
  };
}

module.exports = createFind;


/***/ }),

/***/ 63565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Set = __webpack_require__(31959),
    noop = __webpack_require__(32342),
    setToArray = __webpack_require__(24663);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && (1 / setToArray(new Set([,-0]))[1]) == INFINITY) ? noop : function(values) {
  return new Set(values);
};

module.exports = createSet;


/***/ }),

/***/ 77773:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPlainObject = __webpack_require__(7997);

/**
 * Used by `_.omit` to customize its `_.cloneDeep` use to only clone plain
 * objects.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {string} key The key of the property to inspect.
 * @returns {*} Returns the uncloned value or `undefined` to defer cloning to `_.cloneDeep`.
 */
function customOmitClone(value) {
  return isPlainObject(value) ? undefined : value;
}

module.exports = customOmitClone;


/***/ }),

/***/ 5258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 59284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(8428),
    arraySome = __webpack_require__(95911),
    cacheHas = __webpack_require__(57163);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 39923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    Uint8Array = __webpack_require__(77388),
    eq = __webpack_require__(53395),
    equalArrays = __webpack_require__(59284),
    mapToArray = __webpack_require__(64250),
    setToArray = __webpack_require__(24663);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 36015:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(84886);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 2420:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var flatten = __webpack_require__(92598),
    overRest = __webpack_require__(51340),
    setToString = __webpack_require__(67572);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ }),

/***/ 66356:
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ 84886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(66175),
    getSymbols = __webpack_require__(96073),
    keys = __webpack_require__(65889);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 51944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(66175),
    getSymbolsIn = __webpack_require__(21589),
    keysIn = __webpack_require__(64042);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 76830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(72638);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 87225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(73231),
    keys = __webpack_require__(65889);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 69153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(78979),
    getValue = __webpack_require__(14450);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 89739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(14573);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 34995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 96073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(92325),
    stubArray = __webpack_require__(26051);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 21589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(64945),
    getPrototype = __webpack_require__(89739),
    getSymbols = __webpack_require__(96073),
    stubArray = __webpack_require__(26051);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 58340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(5993),
    Map = __webpack_require__(52586),
    Promise = __webpack_require__(17203),
    Set = __webpack_require__(31959),
    WeakMap = __webpack_require__(56990),
    baseGetTag = __webpack_require__(92931),
    toSource = __webpack_require__(4285);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 14450:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 70013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(54783),
    isArguments = __webpack_require__(1767),
    isArray = __webpack_require__(49403),
    isIndex = __webpack_require__(10006),
    isLength = __webpack_require__(41610),
    toKey = __webpack_require__(27172);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 59159:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),

/***/ 61928:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 32859:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 13478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 14021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 25935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 43767:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 77835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(83066),
    cloneDataView = __webpack_require__(15306),
    cloneRegExp = __webpack_require__(35107),
    cloneSymbol = __webpack_require__(57424),
    cloneTypedArray = __webpack_require__(78008);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 17086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(96918),
    getPrototype = __webpack_require__(89739),
    isPrototype = __webpack_require__(83225);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 95227:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    isArguments = __webpack_require__(1767),
    isArray = __webpack_require__(49403);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ }),

/***/ 10006:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 36685:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(53395),
    isArrayLike = __webpack_require__(20058),
    isIndex = __webpack_require__(10006),
    isObject = __webpack_require__(99224);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 44241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(49403),
    isSymbol = __webpack_require__(79910);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 72638:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 23513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(56510);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 83225:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 73231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 88252:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 21992:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 58758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 40323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 17066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(17446),
    ListCache = __webpack_require__(14060),
    Map = __webpack_require__(52586);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 92106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 58728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 33772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 33577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 64250:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 11313:
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 50817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(58885);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 65418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 11704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(14573);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 99493:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 97952:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(66356);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 3637:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 14573:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 51340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(85753);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 84109:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(78016),
    baseSlice = __webpack_require__(70841);

/**
 * Gets the parent value at `path` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array} path The path to get the parent value of.
 * @returns {*} Returns the parent value.
 */
function parent(object, path) {
  return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
}

module.exports = parent;


/***/ }),

/***/ 90191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(66356);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 6599:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 99060:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 24663:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 67572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(44344),
    shortOut = __webpack_require__(60762);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 60762:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 48847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(14060);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 57083:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 75353:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 87109:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 34202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(14060),
    Map = __webpack_require__(52586),
    MapCache = __webpack_require__(51753);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 10816:
/***/ ((module) => {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;


/***/ }),

/***/ 63934:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var asciiToArray = __webpack_require__(25383),
    hasUnicode = __webpack_require__(59159),
    unicodeToArray = __webpack_require__(93040);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),

/***/ 33348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(50817);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 27172:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(79910);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 4285:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 15599:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 93040:
/***/ ((module) => {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),

/***/ 8500:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 27487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224),
    now = __webpack_require__(86145),
    toNumber = __webpack_require__(5922);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 53395:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 22875:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createFind = __webpack_require__(24085),
    findIndex = __webpack_require__(57671);

/**
 * Iterates over elements of `collection`, returning the first element
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {*} Returns the matched element, else `undefined`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'age': 36, 'active': true },
 *   { 'user': 'fred',    'age': 40, 'active': false },
 *   { 'user': 'pebbles', 'age': 1,  'active': true }
 * ];
 *
 * _.find(users, function(o) { return o.age < 40; });
 * // => object for 'barney'
 *
 * // The `_.matches` iteratee shorthand.
 * _.find(users, { 'age': 1, 'active': true });
 * // => object for 'pebbles'
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.find(users, ['active', false]);
 * // => object for 'fred'
 *
 * // The `_.property` iteratee shorthand.
 * _.find(users, 'active');
 * // => object for 'barney'
 */
var find = createFind(findIndex);

module.exports = find;


/***/ }),

/***/ 57671:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFindIndex = __webpack_require__(86349),
    baseIteratee = __webpack_require__(26209),
    toInteger = __webpack_require__(99308);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * This method is like `_.find` except that it returns the index of the first
 * element `predicate` returns truthy for instead of the element itself.
 *
 * @static
 * @memberOf _
 * @since 1.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the found element, else `-1`.
 * @example
 *
 * var users = [
 *   { 'user': 'barney',  'active': false },
 *   { 'user': 'fred',    'active': false },
 *   { 'user': 'pebbles', 'active': true }
 * ];
 *
 * _.findIndex(users, function(o) { return o.user == 'barney'; });
 * // => 0
 *
 * // The `_.matches` iteratee shorthand.
 * _.findIndex(users, { 'user': 'fred', 'active': false });
 * // => 1
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.findIndex(users, ['active', false]);
 * // => 0
 *
 * // The `_.property` iteratee shorthand.
 * _.findIndex(users, 'active');
 * // => 2
 */
function findIndex(array, predicate, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseFindIndex(array, baseIteratee(predicate, 3), index);
}

module.exports = findIndex;


/***/ }),

/***/ 92598:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFlatten = __webpack_require__(9307);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array == null ? 0 : array.length;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ }),

/***/ 73999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(78016);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 44637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(19792),
    hasPath = __webpack_require__(70013);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 2737:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 1767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(8066),
    isObjectLike = __webpack_require__(71338);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 49403:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 20058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(87102),
    isLength = __webpack_require__(41610);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 17424:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(90191),
    stubFalse = __webpack_require__(47110);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 87102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObject = __webpack_require__(99224);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 41610:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 67625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(52151),
    baseUnary = __webpack_require__(96571),
    nodeUtil = __webpack_require__(97952);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 9506:
/***/ ((module) => {

/**
 * Checks if `value` is `null` or `undefined`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is nullish, else `false`.
 * @example
 *
 * _.isNil(null);
 * // => true
 *
 * _.isNil(void 0);
 * // => true
 *
 * _.isNil(NaN);
 * // => false
 */
function isNil(value) {
  return value == null;
}

module.exports = isNil;


/***/ }),

/***/ 73340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ 99224:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 71338:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 7997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    getPrototype = __webpack_require__(89739),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 21185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(64282),
    baseUnary = __webpack_require__(96571),
    nodeUtil = __webpack_require__(97952);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 83131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isArray = __webpack_require__(49403),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 79910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 96026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(59310),
    baseUnary = __webpack_require__(96571),
    nodeUtil = __webpack_require__(97952);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 65889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(25212),
    baseKeys = __webpack_require__(80907),
    isArrayLike = __webpack_require__(20058);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 64042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(25212),
    baseKeysIn = __webpack_require__(68071),
    isArrayLike = __webpack_require__(20058);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 28481:
/***/ ((module) => {

/**
 * Gets the last element of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to query.
 * @returns {*} Returns the last element of `array`.
 * @example
 *
 * _.last([1, 2, 3]);
 * // => 3
 */
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : undefined;
}

module.exports = last;


/***/ }),

/***/ 70972:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(63136),
    baseForOwn = __webpack_require__(82277),
    baseIteratee = __webpack_require__(26209);

/**
 * Creates an object with the same keys as `object` and values generated
 * by running each own enumerable string keyed property of `object` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, key, object).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns the new mapped object.
 * @see _.mapKeys
 * @example
 *
 * var users = {
 *   'fred':    { 'user': 'fred',    'age': 40 },
 *   'pebbles': { 'user': 'pebbles', 'age': 1 }
 * };
 *
 * _.mapValues(users, function(o) { return o.age; });
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 *
 * // The `_.property` iteratee shorthand.
 * _.mapValues(users, 'age');
 * // => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
 */
function mapValues(object, iteratee) {
  var result = {};
  iteratee = baseIteratee(iteratee, 3);

  baseForOwn(object, function(value, key, object) {
    baseAssignValue(result, key, iteratee(value, key, object));
  });
  return result;
}

module.exports = mapValues;


/***/ }),

/***/ 75138:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(59544),
    baseGt = __webpack_require__(18910),
    baseIteratee = __webpack_require__(26209);

/**
 * This method is like `_.max` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the maximum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.maxBy(objects, function(o) { return o.n; });
 * // => { 'n': 2 }
 *
 * // The `_.property` iteratee shorthand.
 * _.maxBy(objects, 'n');
 * // => { 'n': 2 }
 */
function maxBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseGt)
    : undefined;
}

module.exports = maxBy;


/***/ }),

/***/ 58885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(51753);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 82900:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseExtremum = __webpack_require__(59544),
    baseIteratee = __webpack_require__(26209),
    baseLt = __webpack_require__(89903);

/**
 * This method is like `_.min` except that it accepts `iteratee` which is
 * invoked for each element in `array` to generate the criterion by which
 * the value is ranked. The iteratee is invoked with one argument: (value).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Math
 * @param {Array} array The array to iterate over.
 * @param {Function} [iteratee=_.identity] The iteratee invoked per element.
 * @returns {*} Returns the minimum value.
 * @example
 *
 * var objects = [{ 'n': 1 }, { 'n': 2 }];
 *
 * _.minBy(objects, function(o) { return o.n; });
 * // => { 'n': 1 }
 *
 * // The `_.property` iteratee shorthand.
 * _.minBy(objects, 'n');
 * // => { 'n': 1 }
 */
function minBy(array, iteratee) {
  return (array && array.length)
    ? baseExtremum(array, baseIteratee(iteratee, 2), baseLt)
    : undefined;
}

module.exports = minBy;


/***/ }),

/***/ 32342:
/***/ ((module) => {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ 86145:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 50846:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(30517),
    baseClone = __webpack_require__(27748),
    baseUnset = __webpack_require__(51458),
    castPath = __webpack_require__(54783),
    copyObject = __webpack_require__(26403),
    customOmitClone = __webpack_require__(77773),
    flatRest = __webpack_require__(2420),
    getAllKeysIn = __webpack_require__(51944);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * The opposite of `_.pick`; this method creates an object composed of the
 * own and inherited enumerable property paths of `object` that are not omitted.
 *
 * **Note:** This method is considerably slower than `_.pick`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [paths] The property paths to omit.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.omit(object, ['a', 'c']);
 * // => { 'b': '2' }
 */
var omit = flatRest(function(object, paths) {
  var result = {};
  if (object == null) {
    return result;
  }
  var isDeep = false;
  paths = arrayMap(paths, function(path) {
    path = castPath(path, object);
    isDeep || (isDeep = path.length > 1);
    return path;
  });
  copyObject(object, getAllKeysIn(object), result);
  if (isDeep) {
    result = baseClone(result, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
  }
  var length = paths.length;
  while (length--) {
    baseUnset(result, paths[length]);
  }
  return result;
});

module.exports = omit;


/***/ }),

/***/ 48802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(28452),
    basePropertyDeep = __webpack_require__(27757),
    isKey = __webpack_require__(44241),
    toKey = __webpack_require__(27172);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 9462:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arraySome = __webpack_require__(95911),
    baseIteratee = __webpack_require__(26209),
    baseSome = __webpack_require__(52723),
    isArray = __webpack_require__(49403),
    isIterateeCall = __webpack_require__(36685);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),

/***/ 26051:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 47110:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 46529:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toNumber = __webpack_require__(5922);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = (value < 0 ? -1 : 1);
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;


/***/ }),

/***/ 99308:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toFinite = __webpack_require__(46529);

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? (remainder ? result - remainder : result) : 0;
}

module.exports = toInteger;


/***/ }),

/***/ 5922:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(68220),
    isObject = __webpack_require__(99224),
    isSymbol = __webpack_require__(79910);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 97885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(498);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 64226:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createCaseFirst = __webpack_require__(68601);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),

/***/ 44626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollBar = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_style_singleton_1 = __webpack_require__(17034);
var constants_1 = __webpack_require__(19461);
var utils_1 = __webpack_require__(42989);
var Style = (0, react_style_singleton_1.styleSingleton)();
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function (_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) { gapMode = 'margin'; }
    return "\n  .".concat(constants_1.noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' &&
            "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";"),
    ]
        .filter(Boolean)
        .join(''), "\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(constants_1.zeroRightClassName, " .").concat(constants_1.zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(constants_1.fullWidthClassName, " .").concat(constants_1.fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body {\n    ").concat(constants_1.removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
/**
 * Removes page scrollbar and blocks page scroll when mounted
 */
var RemoveScrollBar = function (props) {
    var noRelative = props.noRelative, noImportant = props.noImportant, _a = props.gapMode, gapMode = _a === void 0 ? 'margin' : _a;
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */
    var gap = React.useMemo(function () { return (0, utils_1.getGapWidth)(gapMode); }, [gapMode]);
    return React.createElement(Style, { styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '') });
};
exports.RemoveScrollBar = RemoveScrollBar;


/***/ }),

/***/ 19461:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = void 0;
exports.zeroRightClassName = 'right-scroll-bar-position';
exports.fullWidthClassName = 'width-before-scroll-bar';
exports.noScrollbarsClassName = 'with-scroll-bars-hidden';
/**
 * Name of a CSS variable containing the amount of "hidden" scrollbar
 * ! might be undefined ! use will fallback!
 */
exports.removedBarSizeVariable = '--removed-body-scroll-bar-size';


/***/ }),

/***/ 2786:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGapWidth = exports.removedBarSizeVariable = exports.noScrollbarsClassName = exports.fullWidthClassName = exports.zeroRightClassName = exports.RemoveScrollBar = void 0;
var component_1 = __webpack_require__(44626);
Object.defineProperty(exports, "RemoveScrollBar", ({ enumerable: true, get: function () { return component_1.RemoveScrollBar; } }));
var constants_1 = __webpack_require__(19461);
Object.defineProperty(exports, "zeroRightClassName", ({ enumerable: true, get: function () { return constants_1.zeroRightClassName; } }));
Object.defineProperty(exports, "fullWidthClassName", ({ enumerable: true, get: function () { return constants_1.fullWidthClassName; } }));
Object.defineProperty(exports, "noScrollbarsClassName", ({ enumerable: true, get: function () { return constants_1.noScrollbarsClassName; } }));
Object.defineProperty(exports, "removedBarSizeVariable", ({ enumerable: true, get: function () { return constants_1.removedBarSizeVariable; } }));
var utils_1 = __webpack_require__(42989);
Object.defineProperty(exports, "getGapWidth", ({ enumerable: true, get: function () { return utils_1.getGapWidth; } }));


/***/ }),

/***/ 42989:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getGapWidth = exports.zeroGap = void 0;
exports.zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0,
};
var parse = function (x) { return parseInt(x || '', 10) || 0; };
var getOffset = function (gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [parse(left), parse(top), parse(right)];
};
var getGapWidth = function (gapMode) {
    if (gapMode === void 0) { gapMode = 'margin'; }
    if (typeof window === 'undefined') {
        return exports.zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0]),
    };
};
exports.getGapWidth = getGapWidth;


/***/ }),

/***/ 70840:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var UI_1 = __webpack_require__(33254);
var sidecar_1 = tslib_1.__importDefault(__webpack_require__(20902));
var ReactRemoveScroll = React.forwardRef(function (props, ref) { return (React.createElement(UI_1.RemoveScroll, tslib_1.__assign({}, props, { ref: ref, sideCar: sidecar_1.default }))); });
ReactRemoveScroll.classNames = UI_1.RemoveScroll.classNames;
exports["default"] = ReactRemoveScroll;


/***/ }),

/***/ 35320:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScrollSideCar = exports.getDeltaXY = exports.getTouchXY = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_remove_scroll_bar_1 = __webpack_require__(2786);
var react_style_singleton_1 = __webpack_require__(17034);
var aggresiveCapture_1 = __webpack_require__(73731);
var handleScroll_1 = __webpack_require__(87557);
var getTouchXY = function (event) {
    return 'changedTouches' in event ? [event.changedTouches[0].clientX, event.changedTouches[0].clientY] : [0, 0];
};
exports.getTouchXY = getTouchXY;
var getDeltaXY = function (event) { return [event.deltaX, event.deltaY]; };
exports.getDeltaXY = getDeltaXY;
var extractRef = function (ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function (x, y) { return x[0] === y[0] && x[1] === y[1]; };
var generateStyle = function (id) { return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n"); };
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = React.useRef([]);
    var touchStartRef = React.useRef([0, 0]);
    var activeAxis = React.useRef();
    var id = React.useState(idCounter++)[0];
    var Style = React.useState(react_style_singleton_1.styleSingleton)[0];
    var lastProps = React.useRef(props);
    React.useEffect(function () {
        lastProps.current = props;
    }, [props]);
    React.useEffect(function () {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = tslib_1.__spreadArray([props.lockRef.current], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function (el) { return el.classList.add("allow-interactivity-".concat(id)); });
            return function () {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function (el) { return el.classList.remove("allow-interactivity-".concat(id)); });
            };
        }
        return;
    }, [props.inert, props.lockRef.current, props.shards]);
    var shouldCancelEvent = React.useCallback(function (event, parent) {
        if ('touches' in event && event.touches.length === 2) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = (0, exports.getTouchXY)(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        var canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        }
        else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = (0, handleScroll_1.locationCouldBeScrolled)(moveDirection, target);
            // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return (0, handleScroll_1.handleScroll)(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = React.useCallback(function (_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? (0, exports.getDeltaXY)(event) : (0, exports.getTouchXY)(event);
        var sourceEvent = shouldPreventQueue.current.filter(function (e) { return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta); })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || [])
                .map(extractRef)
                .filter(Boolean)
                .filter(function (node) { return node.contains(event.target); });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = React.useCallback(function (name, delta, target, should) {
        var event = { name: name, delta: delta, target: target, should: should, shadowParent: getOutermostShadowParent(target) };
        shouldPreventQueue.current.push(event);
        setTimeout(function () {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function (e) { return e !== event; });
        }, 1);
    }, []);
    var scrollTouchStart = React.useCallback(function (event) {
        touchStartRef.current = (0, exports.getTouchXY)(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getDeltaXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = React.useCallback(function (event) {
        shouldCancel(event.type, (0, exports.getTouchXY)(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    React.useEffect(function () {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove,
        });
        document.addEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        return function () {
            lockStack = lockStack.filter(function (inst) { return inst !== Style; });
            document.removeEventListener('wheel', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, aggresiveCapture_1.nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, aggresiveCapture_1.nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return (React.createElement(React.Fragment, null,
        inert ? React.createElement(Style, { styles: generateStyle(id) }) : null,
        removeScrollBar ? React.createElement(react_remove_scroll_bar_1.RemoveScrollBar, { gapMode: props.gapMode }) : null));
}
exports.RemoveScrollSideCar = RemoveScrollSideCar;
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while (node !== null) {
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}


/***/ }),

/***/ 33254:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RemoveScroll = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var constants_1 = __webpack_require__(19461);
var use_callback_ref_1 = __webpack_require__(33609);
var medium_1 = __webpack_require__(35210);
var nothing = function () {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */
var RemoveScroll = React.forwardRef(function (props, parentRef) {
    var ref = React.useRef(null);
    var _a = React.useState({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing,
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = tslib_1.__rest(props, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]);
    var SideCar = sideCar;
    var containerRef = (0, use_callback_ref_1.useMergeRefs)([ref, parentRef]);
    var containerProps = tslib_1.__assign(tslib_1.__assign({}, rest), callbacks);
    return (React.createElement(React.Fragment, null,
        enabled && (React.createElement(SideCar, { sideCar: medium_1.effectCar, removeScrollBar: removeScrollBar, shards: shards, noIsolation: noIsolation, inert: inert, setCallbacks: setCallbacks, allowPinchZoom: !!allowPinchZoom, lockRef: ref, gapMode: gapMode })),
        forwardProps ? (React.cloneElement(React.Children.only(children), tslib_1.__assign(tslib_1.__assign({}, containerProps), { ref: containerRef }))) : (React.createElement(Container, tslib_1.__assign({}, containerProps, { className: className, ref: containerRef }), children))));
});
exports.RemoveScroll = RemoveScroll;
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false,
};
RemoveScroll.classNames = {
    fullWidth: constants_1.fullWidthClassName,
    zeroRight: constants_1.zeroRightClassName,
};


/***/ }),

/***/ 73731:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonPassive = void 0;
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
                return true;
            },
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
exports.nonPassive = passiveSupported ? { passive: false } : false;


/***/ }),

/***/ 87557:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handleScroll = exports.locationCouldBeScrolled = void 0;
var alwaysContainsScroll = function (node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function (node, overflow) {
    var styles = window.getComputedStyle(node);
    return (
    // not-not-scrollable
    styles[overflow] !== 'hidden' &&
        // contains scroll inside self
        !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function (node) { return elementCanBeScrolled(node, 'overflowY'); };
var elementCouldBeHScrolled = function (node) { return elementCanBeScrolled(node, 'overflowX'); };
var locationCouldBeScrolled = function (axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), s = _a[1], d = _a[2];
            if (s > d) {
                return true;
            }
        }
        current = current.parentNode;
    } while (current && current !== ownerDocument.body);
    return false;
};
exports.locationCouldBeScrolled = locationCouldBeScrolled;
var getVScrollVariables = function (_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight,
    ];
};
var getHScrollVariables = function (_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth,
    ];
};
var elementCouldBeScrolled = function (axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function (axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function (axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */
    return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function (axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        if (target instanceof ShadowRoot) {
            target = target.host;
        }
        else {
            target = target.parentNode;
        }
    } while (
    // portaled content
    (!targetInLock && target !== document.body) ||
        // self content
        (targetInLock && (endTarget.contains(target) || endTarget === target)));
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScroll) < 1) || (!noOverscroll && delta > availableScroll))) {
        shouldCancelScroll = true;
    }
    else if (!isDeltaPositive &&
        ((noOverscroll && Math.abs(availableScrollTop) < 1) || (!noOverscroll && -delta > availableScrollTop))) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
exports.handleScroll = handleScroll;


/***/ }),

/***/ 32864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
exports.f = void 0;
var tslib_1 = __webpack_require__(16158);
var Combination_1 = tslib_1.__importDefault(__webpack_require__(70840));
exports.f = Combination_1.default;


/***/ }),

/***/ 35210:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.effectCar = void 0;
var use_sidecar_1 = __webpack_require__(88221);
exports.effectCar = (0, use_sidecar_1.createSidecarMedium)();


/***/ }),

/***/ 20902:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var use_sidecar_1 = __webpack_require__(88221);
var SideEffect_1 = __webpack_require__(35320);
var medium_1 = __webpack_require__(35210);
exports["default"] = (0, use_sidecar_1.exportSidecar)(medium_1.effectCar, SideEffect_1.RemoveScrollSideCar);


/***/ }),

/***/ 10200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleSingleton = void 0;
var hook_1 = __webpack_require__(49812);
/**
 * create a Component to add styles on demand
 * - styles are added when first instance is mounted
 * - styles are removed when the last instance is unmounted
 * - changing styles in runtime does nothing unless dynamic is set. But with multiple components that can lead to the undefined behavior
 */
var styleSingleton = function () {
    var useStyle = (0, hook_1.styleHookSingleton)();
    var Sheet = function (_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
exports.styleSingleton = styleSingleton;


/***/ }),

/***/ 49812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleHookSingleton = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var singleton_1 = __webpack_require__(91995);
/**
 * creates a hook to control style singleton
 * @see {@link styleSingleton} for a safer component version
 * @example
 * ```tsx
 * const useStyle = styleHookSingleton();
 * ///
 * useStyle('body { overflow: hidden}');
 */
var styleHookSingleton = function () {
    var sheet = (0, singleton_1.stylesheetSingleton)();
    return function (styles, isDynamic) {
        React.useEffect(function () {
            sheet.add(styles);
            return function () {
                sheet.remove();
            };
        }, [styles && isDynamic]);
    };
};
exports.styleHookSingleton = styleHookSingleton;


/***/ }),

/***/ 17034:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.styleHookSingleton = exports.stylesheetSingleton = exports.styleSingleton = void 0;
var component_1 = __webpack_require__(10200);
Object.defineProperty(exports, "styleSingleton", ({ enumerable: true, get: function () { return component_1.styleSingleton; } }));
var singleton_1 = __webpack_require__(91995);
Object.defineProperty(exports, "stylesheetSingleton", ({ enumerable: true, get: function () { return singleton_1.stylesheetSingleton; } }));
var hook_1 = __webpack_require__(49812);
Object.defineProperty(exports, "styleHookSingleton", ({ enumerable: true, get: function () { return hook_1.styleHookSingleton; } }));


/***/ }),

/***/ 91995:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stylesheetSingleton = void 0;
var get_nonce_1 = __webpack_require__(57643);
function makeStyleTag() {
    if (!document)
        return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = (0, get_nonce_1.getNonce)();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    }
    else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function () {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function (style) {
            if (counter == 0) {
                if ((stylesheet = makeStyleTag())) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function () {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        },
    };
};
exports.stylesheetSingleton = stylesheetSingleton;


/***/ }),

/***/ 91859:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.assignRef = void 0;
/**
 * Assigns a value for a given ref, no matter of the ref format
 * @param {RefObject} ref - a callback function or ref object
 * @param value - a new value
 *
 * @see https://github.com/theKashey/use-callback-ref#assignref
 * @example
 * const refObject = useRef();
 * const refFn = (ref) => {....}
 *
 * assignRef(refObject, "refValue");
 * assignRef(refFn, "refValue");
 */
function assignRef(ref, value) {
    if (typeof ref === 'function') {
        ref(value);
    }
    else if (ref) {
        ref.current = value;
    }
    return ref;
}
exports.assignRef = assignRef;


/***/ }),

/***/ 70319:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCallbackRef = void 0;
/**
 * creates a Ref object with on change callback
 * @param callback
 * @returns {RefObject}
 *
 * @see {@link useCallbackRef}
 * @see https://reactjs.org/docs/refs-and-the-dom.html#creating-refs
 */
function createCallbackRef(callback) {
    var current = null;
    return {
        get current() {
            return current;
        },
        set current(value) {
            var last = current;
            if (last !== value) {
                current = value;
                callback(value, last);
            }
        },
    };
}
exports.createCallbackRef = createCallbackRef;


/***/ }),

/***/ 33609:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRefToCallback = exports.refToCallback = exports.transformRef = exports.useTransformRef = exports.useMergeRefs = exports.mergeRefs = exports.createCallbackRef = exports.useCallbackRef = exports.assignRef = void 0;
var assignRef_1 = __webpack_require__(91859);
Object.defineProperty(exports, "assignRef", ({ enumerable: true, get: function () { return assignRef_1.assignRef; } }));
// callback ref
var useRef_1 = __webpack_require__(19308);
Object.defineProperty(exports, "useCallbackRef", ({ enumerable: true, get: function () { return useRef_1.useCallbackRef; } }));
var createRef_1 = __webpack_require__(70319);
Object.defineProperty(exports, "createCallbackRef", ({ enumerable: true, get: function () { return createRef_1.createCallbackRef; } }));
// merge ref
var mergeRef_1 = __webpack_require__(16256);
Object.defineProperty(exports, "mergeRefs", ({ enumerable: true, get: function () { return mergeRef_1.mergeRefs; } }));
var useMergeRef_1 = __webpack_require__(60233);
Object.defineProperty(exports, "useMergeRefs", ({ enumerable: true, get: function () { return useMergeRef_1.useMergeRefs; } }));
// transform ref
var useTransformRef_1 = __webpack_require__(18750);
Object.defineProperty(exports, "useTransformRef", ({ enumerable: true, get: function () { return useTransformRef_1.useTransformRef; } }));
var transformRef_1 = __webpack_require__(11461);
Object.defineProperty(exports, "transformRef", ({ enumerable: true, get: function () { return transformRef_1.transformRef; } }));
// refToCallback
var refToCallback_1 = __webpack_require__(15601);
Object.defineProperty(exports, "refToCallback", ({ enumerable: true, get: function () { return refToCallback_1.refToCallback; } }));
Object.defineProperty(exports, "useRefToCallback", ({ enumerable: true, get: function () { return refToCallback_1.useRefToCallback; } }));


/***/ }),

/***/ 16256:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.mergeRefs = void 0;
var assignRef_1 = __webpack_require__(91859);
var createRef_1 = __webpack_require__(70319);
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link useMergeRefs} to be used in ReactComponents
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = mergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function mergeRefs(refs) {
    return (0, createRef_1.createCallbackRef)(function (newValue) { return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); }); });
}
exports.mergeRefs = mergeRefs;


/***/ }),

/***/ 15601:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useRefToCallback = exports.refToCallback = void 0;
/**
 * Unmemoized version of {@link useRefToCallback}
 * @see {@link useRefToCallback}
 * @param ref
 */
function refToCallback(ref) {
    return function (newValue) {
        if (typeof ref === 'function') {
            ref(newValue);
        }
        else if (ref) {
            ref.current = newValue;
        }
    };
}
exports.refToCallback = refToCallback;
var nullCallback = function () { return null; };
// lets maintain a weak ref to, well, ref :)
// not using `kashe` to keep this package small
var weakMem = new WeakMap();
var weakMemoize = function (ref) {
    var usedRef = ref || nullCallback;
    var storedRef = weakMem.get(usedRef);
    if (storedRef) {
        return storedRef;
    }
    var cb = refToCallback(usedRef);
    weakMem.set(usedRef, cb);
    return cb;
};
/**
 * Transforms a given `ref` into `callback`.
 *
 * To transform `callback` into ref use {@link useCallbackRef|useCallbackRef(undefined, callback)}
 *
 * @param {ReactRef} ref
 * @returns {Function}
 *
 * @see https://github.com/theKashey/use-callback-ref#reftocallback
 *
 * @example
 * const ref = useRef(0);
 * const setRef = useRefToCallback(ref);
 * 👉 setRef(10);
 * ✅ ref.current === 10
 */
function useRefToCallback(ref) {
    return weakMemoize(ref);
}
exports.useRefToCallback = useRefToCallback;


/***/ }),

/***/ 11461:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.transformRef = void 0;
var assignRef_1 = __webpack_require__(91859);
var createRef_1 = __webpack_require__(70319);
/**
 * Transforms one ref to another
 * @example
 * ```tsx
 * const ResizableWithRef = forwardRef((props, ref) =>
 *   <Resizable {...props} ref={transformRef(ref, i => i ? i.resizable : null)}/>
 * );
 * ```
 */
function transformRef(ref, transformer) {
    return (0, createRef_1.createCallbackRef)(function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });
}
exports.transformRef = transformRef;


/***/ }),

/***/ 60233:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useMergeRefs = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var assignRef_1 = __webpack_require__(91859);
var useRef_1 = __webpack_require__(19308);
var currentValues = new WeakMap();
/**
 * Merges two or more refs together providing a single interface to set their value
 * @param {RefObject|Ref} refs
 * @returns {MutableRefObject} - a new ref, which translates all changes to {refs}
 *
 * @see {@link mergeRefs} a version without buit-in memoization
 * @see https://github.com/theKashey/use-callback-ref#usemergerefs
 * @example
 * const Component = React.forwardRef((props, ref) => {
 *   const ownRef = useRef();
 *   const domRef = useMergeRefs([ref, ownRef]); // 👈 merge together
 *   return <div ref={domRef}>...</div>
 * }
 */
function useMergeRefs(refs, defaultValue) {
    var callbackRef = (0, useRef_1.useCallbackRef)(defaultValue || null, function (newValue) {
        return refs.forEach(function (ref) { return (0, assignRef_1.assignRef)(ref, newValue); });
    });
    // handle refs changes - added or removed
    React.useLayoutEffect(function () {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function (ref) {
                if (!nextRefs_1.has(ref)) {
                    (0, assignRef_1.assignRef)(ref, null);
                }
            });
            nextRefs_1.forEach(function (ref) {
                if (!prevRefs_1.has(ref)) {
                    (0, assignRef_1.assignRef)(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [refs]);
    return callbackRef;
}
exports.useMergeRefs = useMergeRefs;


/***/ }),

/***/ 19308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useCallbackRef = void 0;
var react_1 = __webpack_require__(18038);
/**
 * creates a MutableRef with ref change callback
 * @param initialValue - initial ref value
 * @param {Function} callback - a callback to run when value changes
 *
 * @example
 * const ref = useCallbackRef(0, (newValue, oldValue) => console.log(oldValue, '->', newValue);
 * ref.current = 1;
 * // prints 0 -> 1
 *
 * @see https://reactjs.org/docs/hooks-reference.html#useref
 * @see https://github.com/theKashey/use-callback-ref#usecallbackref---to-replace-reactuseref
 * @returns {MutableRefObject}
 */
function useCallbackRef(initialValue, callback) {
    var ref = (0, react_1.useState)(function () { return ({
        // value
        value: initialValue,
        // last callback
        callback: callback,
        // "memoized" public interface
        facade: {
            get current() {
                return ref.value;
            },
            set current(value) {
                var last = ref.value;
                if (last !== value) {
                    ref.value = value;
                    ref.callback(value, last);
                }
            },
        },
    }); })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
exports.useCallbackRef = useCallbackRef;


/***/ }),

/***/ 18750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useTransformRef = void 0;
var assignRef_1 = __webpack_require__(91859);
var useRef_1 = __webpack_require__(19308);
/**
 * Create a _lense_ on Ref, making it possible to transform ref value
 * @param {ReactRef} ref
 * @param {Function} transformer. 👉 Ref would be __NOT updated__ on `transformer` update.
 * @returns {RefObject}
 *
 * @see https://github.com/theKashey/use-callback-ref#usetransformref-to-replace-reactuseimperativehandle
 * @example
 *
 * const ResizableWithRef = forwardRef((props, ref) =>
 *  <Resizable {...props} ref={useTransformRef(ref, i => i ? i.resizable : null)}/>
 * );
 */
function useTransformRef(ref, transformer) {
    return (0, useRef_1.useCallbackRef)(null, function (value) { return (0, assignRef_1.assignRef)(ref, transformer(value)); });
}
exports.useTransformRef = useTransformRef;


/***/ }),

/***/ 43164:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.setConfig = exports.config = void 0;
exports.config = {
    onError: function (e) { return console.error(e); },
};
var setConfig = function (conf) {
    Object.assign(exports.config, conf);
};
exports.setConfig = setConfig;


/***/ }),

/***/ 24614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.env = void 0;
var detect_node_es_1 = __webpack_require__(70882);
exports.env = {
    isNode: detect_node_es_1.isNode,
    forceCache: false,
};


/***/ }),

/***/ 11183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportSidecar = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var SideCar = function (_a) {
    var sideCar = _a.sideCar, rest = tslib_1.__rest(_a, ["sideCar"]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return React.createElement(Target, tslib_1.__assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
exports.exportSidecar = exportSidecar;


/***/ }),

/***/ 3711:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sidecar = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var hook_1 = __webpack_require__(13421);
// eslint-disable-next-line @typescript-eslint/ban-types
function sidecar(importer, errorComponent) {
    var ErrorCase = function () { return errorComponent; };
    return function Sidecar(props) {
        var _a = (0, hook_1.useSidecar)(importer, props.sideCar), Car = _a[0], error = _a[1];
        if (error && errorComponent) {
            return ErrorCase;
        }
        // @ts-expect-error type shenanigans
        return Car ? React.createElement(Car, tslib_1.__assign({}, props)) : null;
    };
}
exports.sidecar = sidecar;


/***/ }),

/***/ 13421:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useSidecar = void 0;
var react_1 = __webpack_require__(18038);
var env_1 = __webpack_require__(24614);
var cache = new WeakMap();
var NO_OPTIONS = {};
function useSidecar(importer, effect) {
    var options = (effect && effect.options) || NO_OPTIONS;
    if (env_1.env.isNode && !options.ssr) {
        return [null, null];
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return useRealSidecar(importer, effect);
}
exports.useSidecar = useSidecar;
function useRealSidecar(importer, effect) {
    var options = (effect && effect.options) || NO_OPTIONS;
    var couldUseCache = env_1.env.forceCache || (env_1.env.isNode && !!options.ssr) || !options.async;
    var _a = (0, react_1.useState)(couldUseCache ? function () { return cache.get(importer); } : undefined), Car = _a[0], setCar = _a[1];
    var _b = (0, react_1.useState)(null), error = _b[0], setError = _b[1];
    (0, react_1.useEffect)(function () {
        if (!Car) {
            importer().then(function (car) {
                var resolved = effect ? effect.read() : car.default || car;
                if (!resolved) {
                    console.error('Sidecar error: with importer', importer);
                    var error_1;
                    if (effect) {
                        console.error('Sidecar error: with medium', effect);
                        error_1 = new Error('Sidecar medium was not found');
                    }
                    else {
                        error_1 = new Error('Sidecar was not found in exports');
                    }
                    setError(function () { return error_1; });
                    throw error_1;
                }
                cache.set(importer, resolved);
                setCar(function () { return resolved; });
            }, function (e) { return setError(function () { return e; }); });
        }
    }, []);
    return [Car, error];
}


/***/ }),

/***/ 88221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportSidecar = exports.renderCar = exports.createSidecarMedium = exports.createMedium = exports.setConfig = exports.useSidecar = exports.sidecar = void 0;
var hoc_1 = __webpack_require__(3711);
Object.defineProperty(exports, "sidecar", ({ enumerable: true, get: function () { return hoc_1.sidecar; } }));
var hook_1 = __webpack_require__(13421);
Object.defineProperty(exports, "useSidecar", ({ enumerable: true, get: function () { return hook_1.useSidecar; } }));
var config_1 = __webpack_require__(43164);
Object.defineProperty(exports, "setConfig", ({ enumerable: true, get: function () { return config_1.setConfig; } }));
var medium_1 = __webpack_require__(28626);
Object.defineProperty(exports, "createMedium", ({ enumerable: true, get: function () { return medium_1.createMedium; } }));
Object.defineProperty(exports, "createSidecarMedium", ({ enumerable: true, get: function () { return medium_1.createSidecarMedium; } }));
var renderProp_1 = __webpack_require__(95919);
Object.defineProperty(exports, "renderCar", ({ enumerable: true, get: function () { return renderProp_1.renderCar; } }));
var exports_1 = __webpack_require__(11183);
Object.defineProperty(exports, "exportSidecar", ({ enumerable: true, get: function () { return exports_1.exportSidecar; } }));


/***/ }),

/***/ 28626:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createSidecarMedium = exports.createMedium = void 0;
var tslib_1 = __webpack_require__(16158);
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function () {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function (data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function () {
                buffer = buffer.filter(function (x) { return x !== item; });
            };
        },
        assignSyncMedium: function (cb) {
            assigned = true;
            while (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function (x) { return cb(x); },
                filter: function () { return buffer; },
            };
        },
        assignMedium: function (cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function () {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function () { return Promise.resolve().then(executeQueue); };
            cycle();
            buffer = {
                push: function (x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function (filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                },
            };
        },
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) { middleware = ItoI; }
    return innerCreateMedium(defaults, middleware);
}
exports.createMedium = createMedium;
// eslint-disable-next-line @typescript-eslint/ban-types
function createSidecarMedium(options) {
    if (options === void 0) { options = {}; }
    var medium = innerCreateMedium(null);
    medium.options = tslib_1.__assign({ async: true, ssr: false }, options);
    return medium;
}
exports.createSidecarMedium = createSidecarMedium;


/***/ }),

/***/ 95919:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.renderCar = void 0;
var tslib_1 = __webpack_require__(16158);
var React = tslib_1.__importStar(__webpack_require__(18038));
var react_1 = __webpack_require__(18038);
function renderCar(WrappedComponent, defaults) {
    function State(_a) {
        var stateRef = _a.stateRef, props = _a.props;
        var renderTarget = (0, react_1.useCallback)(function SideTarget() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            (0, react_1.useLayoutEffect)(function () {
                stateRef.current(args);
            });
            return null;
        }, []);
        // @ts-ignore
        return React.createElement(WrappedComponent, tslib_1.__assign({}, props, { children: renderTarget }));
    }
    var Children = React.memo(function (_a) {
        var stateRef = _a.stateRef, defaultState = _a.defaultState, children = _a.children;
        var _b = (0, react_1.useState)(defaultState.current), state = _b[0], setState = _b[1];
        (0, react_1.useEffect)(function () {
            stateRef.current = setState;
        }, []);
        return children.apply(void 0, state);
    }, function () { return true; });
    return function Combiner(props) {
        var defaultState = React.useRef(defaults(props));
        var ref = React.useRef(function (state) { return (defaultState.current = state); });
        return (React.createElement(React.Fragment, null,
            React.createElement(State, { stateRef: ref, props: props }),
            React.createElement(Children, { stateRef: ref, defaultState: defaultState, children: props.children })));
    };
}
exports.renderCar = renderCar;


/***/ }),

/***/ 89878:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._check_private_redeclaration = _check_private_redeclaration;
function _check_private_redeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}


/***/ }),

/***/ 94655:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_apply_descriptor_get = _class_apply_descriptor_get;
function _class_apply_descriptor_get(receiver, descriptor) {
    if (descriptor.get) return descriptor.get.call(receiver);

    return descriptor.value;
}


/***/ }),

/***/ 39767:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_apply_descriptor_set = _class_apply_descriptor_set;
function _class_apply_descriptor_set(receiver, descriptor, value) {
    if (descriptor.set) descriptor.set.call(receiver, value);
    else {
        if (!descriptor.writable) {
            // This should only throw in strict mode, but class bodies are
            // always strict and private fields can only be used inside
            // class bodies.
            throw new TypeError("attempted to set read only private field");
        }
        descriptor.value = value;
    }
}


/***/ }),

/***/ 77562:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports._ = exports._class_extract_field_descriptor = _class_extract_field_descriptor;
function _class_extract_field_descriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) throw new TypeError("attempted to " + action + " private field on non-instance");

    return privateMap.get(receiver);
}


/***/ }),

/***/ 50750:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _class_apply_descriptor_get = __webpack_require__(94655);
var _class_extract_field_descriptor = __webpack_require__(77562);

exports._ = __webpack_unused_export__ = _class_private_field_get;
function _class_private_field_get(receiver, privateMap) {
    var descriptor = _class_extract_field_descriptor._(receiver, privateMap, "get");
    return _class_apply_descriptor_get._(receiver, descriptor);
}


/***/ }),

/***/ 38734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _check_private_redeclaration = __webpack_require__(89878);

exports._ = __webpack_unused_export__ = _class_private_field_init;
function _class_private_field_init(obj, privateMap, value) {
    _check_private_redeclaration._(obj, privateMap);
    privateMap.set(obj, value);
}


/***/ }),

/***/ 9052:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


var _class_apply_descriptor_set = __webpack_require__(39767);
var _class_extract_field_descriptor = __webpack_require__(77562);

exports._ = __webpack_unused_export__ = _class_private_field_set;
function _class_private_field_set(receiver, privateMap, value) {
    var descriptor = _class_extract_field_descriptor._(receiver, privateMap, "set");
    _class_apply_descriptor_set._(receiver, descriptor, value);
    return value;
}


/***/ }),

/***/ 11863:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VS: () => (/* binding */ getTransformOrigins),
/* harmony export */   Yv: () => (/* binding */ getShouldUseAxisPlacement),
/* harmony export */   Yx: () => (/* binding */ toReactAriaPlacement),
/* harmony export */   sK: () => (/* binding */ getArrowPlacement)
/* harmony export */ });
/* unused harmony export toOverlayPlacement */
"use client";

// src/overlays/utils.ts
var getTransformOrigins = (placement) => {
  const origins = {
    top: {
      originY: 1
    },
    bottom: {
      originY: 0
    },
    left: {
      originX: 1
    },
    right: {
      originX: 0
    },
    "top-start": {
      originX: 0,
      originY: 1
    },
    "top-end": {
      originX: 1,
      originY: 1
    },
    "bottom-start": {
      originX: 0,
      originY: 0
    },
    "bottom-end": {
      originX: 1,
      originY: 0
    },
    "right-start": {
      originX: 0,
      originY: 0
    },
    "right-end": {
      originX: 0,
      originY: 1
    },
    "left-start": {
      originX: 1,
      originY: 0
    },
    "left-end": {
      originX: 1,
      originY: 1
    }
  };
  return (origins == null ? void 0 : origins[placement]) || {};
};
var toReactAriaPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    "top-start": "top start",
    "top-end": "top end",
    "bottom-start": "bottom start",
    "bottom-end": "bottom end",
    "left-start": "left top",
    "left-end": "left bottom",
    "right-start": "right top",
    "right-end": "right bottom"
  };
  return mapPositions[placement];
};
var toOverlayPlacement = (placement) => {
  const mapPositions = {
    top: "top",
    bottom: "bottom",
    left: "left",
    right: "right",
    center: "top"
  };
  return mapPositions[placement];
};
var getShouldUseAxisPlacement = (axisPlacement, overlayPlacement) => {
  if (overlayPlacement.includes("-")) {
    const [position] = overlayPlacement.split("-");
    if (position.includes(axisPlacement)) {
      return false;
    }
  }
  return true;
};
var getArrowPlacement = (dynamicPlacement, placement) => {
  if (placement.includes("-")) {
    const [, position] = placement.split("-");
    return `${dynamicPlacement}-${position}`;
  }
  return dynamicPlacement;
};




/***/ }),

/***/ 50447:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ button_default)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3XT5V4LF.mjs
var chunk_3XT5V4LF = __webpack_require__(19830);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/button/dist/chunk-BOMWXXSL.mjs
"use client";

// src/button-group-context.ts

var [ButtonGroupProvider, useButtonGroupContext] = (0,chunk_3XT5V4LF/* createContext */.k)({
  name: "ButtonGroupContext",
  strict: false
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var chunk_MCFSCOSB = __webpack_require__(77241);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var dist_import = __webpack_require__(74997);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
var chunk_3TAVD5Y3 = __webpack_require__(3595);
// EXTERNAL MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-BSXPKUBX.mjs + 1 modules
var chunk_BSXPKUBX = __webpack_require__(64480);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-2PIR7DFM.mjs
var chunk_2PIR7DFM = __webpack_require__(28737);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs + 16 modules
var chunk_6AEINX52 = __webpack_require__(18383);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs
var chunk_XHQUSKIE = __webpack_require__(26313);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-33DU6C7I.mjs




// src/components/button.ts
var chunk_33DU6C7I_button = (0,chunk_6AEINX52.tv)({
  base: [
    "z-0",
    "group",
    "relative",
    "inline-flex",
    "items-center",
    "justify-center",
    "box-border",
    "appearance-none",
    "outline-none",
    "select-none",
    "whitespace-nowrap",
    "min-w-max",
    "font-normal",
    "subpixel-antialiased",
    "overflow-hidden",
    "tap-highlight-transparent",
    ...chunk_XHQUSKIE/* dataFocusVisibleClasses */.Dh
  ],
  variants: {
    variant: {
      solid: "",
      bordered: "border-medium bg-transparent",
      light: "bg-transparent",
      flat: "",
      faded: "border-medium",
      shadow: "",
      ghost: "border-medium bg-transparent"
    },
    size: {
      sm: "px-unit-3 min-w-unit-16 h-unit-8 text-tiny gap-unit-2 rounded-small",
      md: "px-unit-4 min-w-unit-20 h-unit-10 text-small gap-unit-2 rounded-medium",
      lg: "px-unit-6 min-w-unit-24 h-unit-12 text-medium gap-unit-3 rounded-large"
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: ""
    },
    radius: {
      none: "rounded-none",
      sm: "rounded-small",
      md: "rounded-medium",
      lg: "rounded-large",
      full: "rounded-full"
    },
    fullWidth: {
      true: "w-full"
    },
    isDisabled: {
      true: "opacity-disabled pointer-events-none"
    },
    isInGroup: {
      true: "[&:not(:first-child):not(:last-child)]:rounded-none"
    },
    isIconOnly: {
      true: "px-unit-0 !gap-unit-0",
      false: "[&>svg]:max-w-[theme(spacing.unit-8)]"
    },
    disableAnimation: {
      true: "!transition-none",
      false: "data-[pressed=true]:scale-[0.97] transition-transform-colors-opacity motion-reduce:transition-none"
    }
  },
  defaultVariants: {
    size: "md",
    variant: "solid",
    color: "default",
    fullWidth: false,
    isDisabled: false,
    isInGroup: false,
    disableAnimation: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: chunk_2PIR7DFM/* colorVariants */.J.solid.default
    },
    {
      variant: "solid",
      color: "primary",
      class: chunk_2PIR7DFM/* colorVariants */.J.solid.primary
    },
    {
      variant: "solid",
      color: "secondary",
      class: chunk_2PIR7DFM/* colorVariants */.J.solid.secondary
    },
    {
      variant: "solid",
      color: "success",
      class: chunk_2PIR7DFM/* colorVariants */.J.solid.success
    },
    {
      variant: "solid",
      color: "warning",
      class: chunk_2PIR7DFM/* colorVariants */.J.solid.warning
    },
    {
      variant: "solid",
      color: "danger",
      class: chunk_2PIR7DFM/* colorVariants */.J.solid.danger
    },
    {
      variant: "shadow",
      color: "default",
      class: chunk_2PIR7DFM/* colorVariants */.J.shadow.default
    },
    {
      variant: "shadow",
      color: "primary",
      class: chunk_2PIR7DFM/* colorVariants */.J.shadow.primary
    },
    {
      variant: "shadow",
      color: "secondary",
      class: chunk_2PIR7DFM/* colorVariants */.J.shadow.secondary
    },
    {
      variant: "shadow",
      color: "success",
      class: chunk_2PIR7DFM/* colorVariants */.J.shadow.success
    },
    {
      variant: "shadow",
      color: "warning",
      class: chunk_2PIR7DFM/* colorVariants */.J.shadow.warning
    },
    {
      variant: "shadow",
      color: "danger",
      class: chunk_2PIR7DFM/* colorVariants */.J.shadow.danger
    },
    {
      variant: "bordered",
      color: "default",
      class: chunk_2PIR7DFM/* colorVariants */.J.bordered.default
    },
    {
      variant: "bordered",
      color: "primary",
      class: chunk_2PIR7DFM/* colorVariants */.J.bordered.primary
    },
    {
      variant: "bordered",
      color: "secondary",
      class: chunk_2PIR7DFM/* colorVariants */.J.bordered.secondary
    },
    {
      variant: "bordered",
      color: "success",
      class: chunk_2PIR7DFM/* colorVariants */.J.bordered.success
    },
    {
      variant: "bordered",
      color: "warning",
      class: chunk_2PIR7DFM/* colorVariants */.J.bordered.warning
    },
    {
      variant: "bordered",
      color: "danger",
      class: chunk_2PIR7DFM/* colorVariants */.J.bordered.danger
    },
    {
      variant: "flat",
      color: "default",
      class: chunk_2PIR7DFM/* colorVariants */.J.flat.default
    },
    {
      variant: "flat",
      color: "primary",
      class: chunk_2PIR7DFM/* colorVariants */.J.flat.primary
    },
    {
      variant: "flat",
      color: "secondary",
      class: chunk_2PIR7DFM/* colorVariants */.J.flat.secondary
    },
    {
      variant: "flat",
      color: "success",
      class: chunk_2PIR7DFM/* colorVariants */.J.flat.success
    },
    {
      variant: "flat",
      color: "warning",
      class: chunk_2PIR7DFM/* colorVariants */.J.flat.warning
    },
    {
      variant: "flat",
      color: "danger",
      class: chunk_2PIR7DFM/* colorVariants */.J.flat.danger
    },
    {
      variant: "faded",
      color: "default",
      class: chunk_2PIR7DFM/* colorVariants */.J.faded.default
    },
    {
      variant: "faded",
      color: "primary",
      class: chunk_2PIR7DFM/* colorVariants */.J.faded.primary
    },
    {
      variant: "faded",
      color: "secondary",
      class: chunk_2PIR7DFM/* colorVariants */.J.faded.secondary
    },
    {
      variant: "faded",
      color: "success",
      class: chunk_2PIR7DFM/* colorVariants */.J.faded.success
    },
    {
      variant: "faded",
      color: "warning",
      class: chunk_2PIR7DFM/* colorVariants */.J.faded.warning
    },
    {
      variant: "faded",
      color: "danger",
      class: chunk_2PIR7DFM/* colorVariants */.J.faded.danger
    },
    {
      variant: "light",
      color: "default",
      class: [chunk_2PIR7DFM/* colorVariants */.J.light.default, "data-[hover=true]:bg-default/40"]
    },
    {
      variant: "light",
      color: "primary",
      class: [chunk_2PIR7DFM/* colorVariants */.J.light.primary, "data-[hover=true]:bg-primary/20"]
    },
    {
      variant: "light",
      color: "secondary",
      class: [chunk_2PIR7DFM/* colorVariants */.J.light.secondary, "data-[hover=true]:bg-secondary/20"]
    },
    {
      variant: "light",
      color: "success",
      class: [chunk_2PIR7DFM/* colorVariants */.J.light.success, "data-[hover=true]:bg-success/20"]
    },
    {
      variant: "light",
      color: "warning",
      class: [chunk_2PIR7DFM/* colorVariants */.J.light.warning, "data-[hover=true]:bg-warning/20"]
    },
    {
      variant: "light",
      color: "danger",
      class: [chunk_2PIR7DFM/* colorVariants */.J.light.danger, "data-[hover=true]:bg-danger/20"]
    },
    {
      variant: "ghost",
      color: "default",
      class: chunk_2PIR7DFM/* colorVariants */.J.ghost.default
    },
    {
      variant: "ghost",
      color: "primary",
      class: chunk_2PIR7DFM/* colorVariants */.J.ghost.primary
    },
    {
      variant: "ghost",
      color: "secondary",
      class: chunk_2PIR7DFM/* colorVariants */.J.ghost.secondary
    },
    {
      variant: "ghost",
      color: "success",
      class: chunk_2PIR7DFM/* colorVariants */.J.ghost.success
    },
    {
      variant: "ghost",
      color: "warning",
      class: chunk_2PIR7DFM/* colorVariants */.J.ghost.warning
    },
    {
      variant: "ghost",
      color: "danger",
      class: chunk_2PIR7DFM/* colorVariants */.J.ghost.danger
    },
    {
      isInGroup: true,
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      size: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      size: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      isRounded: true,
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      isInGroup: true,
      radius: "none",
      class: "rounded-none first:rounded-s-none last:rounded-e-none"
    },
    {
      isInGroup: true,
      radius: "sm",
      class: "rounded-none first:rounded-s-small last:rounded-e-small"
    },
    {
      isInGroup: true,
      radius: "md",
      class: "rounded-none first:rounded-s-medium last:rounded-e-medium"
    },
    {
      isInGroup: true,
      radius: "lg",
      class: "rounded-none first:rounded-s-large last:rounded-e-large"
    },
    {
      isInGroup: true,
      radius: "full",
      class: "rounded-none first:rounded-s-full last:rounded-e-full"
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "default",
      className: chunk_XHQUSKIE/* collapseAdjacentVariantBorders */.Zs.default
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "primary",
      className: chunk_XHQUSKIE/* collapseAdjacentVariantBorders */.Zs.primary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "secondary",
      className: chunk_XHQUSKIE/* collapseAdjacentVariantBorders */.Zs.secondary
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "success",
      className: chunk_XHQUSKIE/* collapseAdjacentVariantBorders */.Zs.success
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "warning",
      className: chunk_XHQUSKIE/* collapseAdjacentVariantBorders */.Zs.warning
    },
    {
      isInGroup: true,
      variant: ["ghost", "bordered"],
      color: "danger",
      className: chunk_XHQUSKIE/* collapseAdjacentVariantBorders */.Zs.danger
    },
    {
      isIconOnly: true,
      size: "sm",
      class: "min-w-unit-8 w-unit-8 h-unit-8"
    },
    {
      isIconOnly: true,
      size: "md",
      class: "min-w-unit-10 w-unit-10 h-unit-10"
    },
    {
      isIconOnly: true,
      size: "lg",
      class: "min-w-unit-12 w-unit-12 h-unit-12"
    },
    {
      variant: ["solid", "faded", "flat", "bordered", "shadow"],
      class: "data-[hover=true]:opacity-hover"
    }
  ]
});
var buttonGroup = (0,chunk_6AEINX52.tv)({
  base: "inline-flex items-center justify-center h-auto",
  variants: {
    fullWidth: {
      true: "w-full"
    }
  },
  defaultVariants: {
    fullWidth: false
  }
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/use-aria-button/dist/index.mjs
var dist = __webpack_require__(59106);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-EB2I5ZVA.mjs
var chunk_EB2I5ZVA = __webpack_require__(91665);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/ripple/dist/chunk-MCG5YV3A.mjs
"use client";

// src/use-ripple.ts


function useRipple(props = {}) {
  const [ripples, setRipples] = (0,react_.useState)([]);
  const onClick = (0,react_.useCallback)((event) => {
    const trigger = event.currentTarget;
    const size = Math.max(trigger.clientWidth, trigger.clientHeight);
    const rect = trigger.getBoundingClientRect();
    setRipples((prevRipples) => [
      ...prevRipples,
      {
        key: (0,chunk_EB2I5ZVA/* getUniqueID */.QI)(prevRipples.length.toString()),
        size,
        x: event.clientX - rect.x - size / 2,
        y: event.clientY - rect.y - size / 2
      }
    ]);
  }, []);
  const onClear = (0,react_.useCallback)((key) => {
    setRipples((prevState) => prevState.filter((ripple) => ripple.key !== key));
  }, []);
  return { ripples, onClick, onClear, ...props };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/button/dist/chunk-SWIMKC2Y.mjs
"use client";


// src/use-button.ts










function useButton(props) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const groupContext = useButtonGroupContext();
  const isInGroup = !!groupContext;
  const {
    ref,
    as,
    children,
    startContent: startContentProp,
    endContent: endContentProp,
    autoFocus,
    className,
    spinner,
    fullWidth = (_a = groupContext == null ? void 0 : groupContext.fullWidth) != null ? _a : false,
    size = (_b = groupContext == null ? void 0 : groupContext.size) != null ? _b : "md",
    color = (_c = groupContext == null ? void 0 : groupContext.color) != null ? _c : "default",
    variant = (_d = groupContext == null ? void 0 : groupContext.variant) != null ? _d : "solid",
    disableAnimation = (_e = groupContext == null ? void 0 : groupContext.disableAnimation) != null ? _e : false,
    radius = groupContext == null ? void 0 : groupContext.radius,
    disableRipple = (_f = groupContext == null ? void 0 : groupContext.disableRipple) != null ? _f : false,
    isDisabled: isDisabledProp = (_g = groupContext == null ? void 0 : groupContext.isDisabled) != null ? _g : false,
    isIconOnly = (_h = groupContext == null ? void 0 : groupContext.isIconOnly) != null ? _h : false,
    isLoading = false,
    spinnerPlacement = "start",
    onPress,
    onClick,
    ...otherProps
  } = props;
  const Component = as || "button";
  const shouldFilterDOMProps = typeof Component === "string";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const { isFocusVisible, isFocused, focusProps } = (0,dist_import/* useFocusRing */.Fx)({
    autoFocus
  });
  const isDisabled = isDisabledProp || isLoading;
  const styles = (0,react_.useMemo)(
    () => chunk_33DU6C7I_button({
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      disableAnimation,
      isIconOnly,
      className
    }),
    [
      size,
      color,
      variant,
      radius,
      fullWidth,
      isDisabled,
      isInGroup,
      isIconOnly,
      disableAnimation,
      className
    ]
  );
  const { onClick: onRippleClickHandler, onClear: onClearRipple, ripples } = useRipple();
  const handleClick = (0,react_.useCallback)(
    (e) => {
      if (disableRipple || isDisabled || disableAnimation)
        return;
      domRef.current && onRippleClickHandler(e);
    },
    [disableRipple, isDisabled, disableAnimation, domRef, onRippleClickHandler]
  );
  const { buttonProps: ariaButtonProps, isPressed } = (0,dist/* useAriaButton */.j)(
    {
      elementType: as,
      isDisabled,
      onPress,
      onClick: (0,utils_dist_import/* chain */.tS)(onClick, handleClick),
      ...otherProps
    },
    domRef
  );
  const { isHovered, hoverProps } = (0,interactions_dist_import/* useHover */.XI)({ isDisabled });
  const getButtonProps = (0,react_.useCallback)(
    (props2 = {}) => ({
      "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
      "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
      "data-pressed": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isPressed),
      "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
      "data-hover": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isHovered),
      "data-loading": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isLoading),
      ...(0,utils_dist_import/* mergeProps */.dG)(
        ariaButtonProps,
        focusProps,
        hoverProps,
        (0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
          enabled: shouldFilterDOMProps
        }),
        (0,chunk_BSXPKUBX/* filterDOMProps */.z)(props2)
      )
    }),
    [
      isLoading,
      isDisabled,
      isFocused,
      isPressed,
      shouldFilterDOMProps,
      isFocusVisible,
      isHovered,
      ariaButtonProps,
      focusProps,
      hoverProps,
      otherProps
    ]
  );
  const getIconClone = (icon) => (0,react_.isValidElement)(icon) ? (0,react_.cloneElement)(icon, {
    "aria-hidden": true,
    focusable: false,
    tabIndex: -1
  }) : null;
  const startContent = getIconClone(startContentProp);
  const endContent = getIconClone(endContentProp);
  const spinnerSize = (0,react_.useMemo)(() => {
    const buttonSpinnerSizeMap = {
      sm: "sm",
      md: "sm",
      lg: "md"
    };
    return buttonSpinnerSizeMap[size];
  }, [size]);
  const getRippleProps = (0,react_.useCallback)(
    () => ({ ripples, onClear: onClearRipple }),
    [ripples, onClearRipple]
  );
  return {
    Component,
    children,
    domRef,
    spinner,
    styles,
    startContent,
    endContent,
    isLoading,
    spinnerPlacement,
    spinnerSize,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  };
}



// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(68973);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-NAY2XKLY.mjs


// src/components/spinner.ts
var spinner = (0,chunk_6AEINX52.tv)({
  slots: {
    base: "relative inline-flex flex-col gap-2 items-center justify-center",
    wrapper: "relative flex",
    circle1: [
      "absolute",
      "w-full",
      "h-full",
      "rounded-full",
      "animate-spinner-ease-spin",
      "border-2",
      "border-solid",
      "border-t-transparent",
      "border-l-transparent",
      "border-r-transparent"
    ],
    circle2: [
      "absolute",
      "w-full",
      "h-full",
      "rounded-full",
      "opacity-75",
      "animate-spinner-linear-spin",
      "border-2",
      "border-dotted",
      "border-t-transparent",
      "border-l-transparent",
      "border-r-transparent"
    ],
    label: "text-foreground dark:text-foreground-dark font-regular"
  },
  variants: {
    size: {
      sm: {
        wrapper: "w-5 h-5",
        circle1: "border-2",
        circle2: "border-2",
        label: "text-small"
      },
      md: {
        wrapper: "w-8 h-8",
        circle1: "border-3",
        circle2: "border-3",
        label: "text-medium"
      },
      lg: {
        wrapper: "w-10 h-10",
        circle1: "border-3",
        circle2: "border-3",
        label: "text-large"
      }
    },
    color: {
      current: {
        circle1: "border-b-current",
        circle2: "border-b-current"
      },
      white: {
        circle1: "border-b-white",
        circle2: "border-b-white"
      },
      default: {
        circle1: "border-b-default",
        circle2: "border-b-default"
      },
      primary: {
        circle1: "border-b-primary",
        circle2: "border-b-primary"
      },
      secondary: {
        circle1: "border-b-secondary",
        circle2: "border-b-secondary"
      },
      success: {
        circle1: "border-b-success",
        circle2: "border-b-success"
      },
      warning: {
        circle1: "border-b-warning",
        circle2: "border-b-warning"
      },
      danger: {
        circle1: "border-b-danger",
        circle2: "border-b-danger"
      }
    },
    labelColor: {
      foreground: {
        label: "text-foreground"
      },
      primary: {
        label: "text-primary"
      },
      secondary: {
        label: "text-secondary"
      },
      success: {
        label: "text-success"
      },
      warning: {
        label: "text-warning"
      },
      danger: {
        label: "text-danger"
      }
    }
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    labelColor: "foreground"
  }
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
var chunk_6BQDBGF4 = __webpack_require__(61145);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/spinner/dist/chunk-EQVUDELC.mjs
// src/use-spinner.ts




function useSpinner(originalProps) {
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, spinner.variantKeys);
  const { children, className, classNames, label: labelProp, ...otherProps } = props;
  const slots = (0,react_.useMemo)(() => spinner({ ...variantProps }), [...Object.values(variantProps)]);
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  const label = labelProp || children;
  const ariaLabel = (0,react_.useMemo)(() => {
    if (label && typeof label === "string") {
      return label;
    }
    return !otherProps["aria-label"] ? "Loading" : "";
  }, [children, label, otherProps["aria-label"]]);
  const getSpinnerProps = (0,react_.useCallback)(
    () => ({
      "aria-label": ariaLabel,
      className: slots.base({
        class: baseStyles
      }),
      ...otherProps
    }),
    [ariaLabel, slots, baseStyles, otherProps]
  );
  return { label, slots, classNames, getSpinnerProps };
}



// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/spinner/dist/chunk-YOBXD5IP.mjs


// src/spinner.tsx


var Spinner = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const { slots, classNames, label, getSpinnerProps } = useSpinner({ ...props });
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { ref, ...getSpinnerProps(), children: [
    /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("i", { className: slots.circle1({ class: classNames == null ? void 0 : classNames.circle1 }) }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("i", { className: slots.circle2({ class: classNames == null ? void 0 : classNames.circle2 }) })
    ] }),
    label && /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { className: slots.label(), children: label })
  ] });
});
Spinner.displayName = "NextUI.Spinner";
var spinner_default = Spinner;



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(30569);
// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(31691);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/ripple/dist/chunk-H7QTMGKY.mjs
"use client";

// src/ripple.tsx


var clamp = (value, min, max) => {
  return Math.min(Math.max(value, min), max);
};
var Ripple = (props) => {
  const { ripples = [], motionProps, color = "currentColor", style, onClear } = props;
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(jsx_runtime_.Fragment, { children: ripples.map((ripple) => {
    const duration = clamp(0.01 * ripple.size, 0.2, ripple.size > 100 ? 0.75 : 0.5);
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)(AnimatePresence/* AnimatePresence */.M, { mode: "popLayout", children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      motion/* motion */.E.span,
      {
        animate: { transform: "scale(2)", opacity: 0 },
        className: "nextui-ripple",
        exit: { opacity: 0 },
        initial: { transform: "scale(0)", opacity: 0.35 },
        style: {
          position: "absolute",
          backgroundColor: color,
          borderRadius: "100%",
          transformOrigin: "center",
          pointerEvents: "none",
          zIndex: 10,
          top: ripple.y,
          left: ripple.x,
          width: `${ripple.size}px`,
          height: `${ripple.size}px`,
          ...style
        },
        transition: { duration },
        onAnimationComplete: () => {
          onClear(ripple.key);
        },
        ...motionProps
      }
    ) }, ripple.key);
  }) });
};
Ripple.displayName = "NextUI.Ripple";
var ripple_default = Ripple;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs
"use client";


// src/button.tsx




var Button = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const {
    Component,
    domRef,
    children,
    styles,
    spinnerSize,
    spinner = /* @__PURE__ */ (0,jsx_runtime_.jsx)(spinner_default, { color: "current", size: spinnerSize }),
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly
  } = useButton({ ...props, ref });
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ref: domRef, className: styles, ...getButtonProps(), children: [
    startContent,
    isLoading && spinnerPlacement === "start" && spinner,
    isLoading && isIconOnly ? null : children,
    isLoading && spinnerPlacement === "end" && spinner,
    endContent,
    !disableRipple && /* @__PURE__ */ (0,jsx_runtime_.jsx)(ripple_default, { ...getRippleProps() })
  ] });
});
Button.displayName = "NextUI.Button";
var button_default = Button;




/***/ }),

/***/ 21628:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  S: () => (/* binding */ dropdown_trigger_default)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-WRRPXIUB.mjs
var chunk_WRRPXIUB = __webpack_require__(52533);
// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(68973);
// EXTERNAL MODULE: ./node_modules/@nextui-org/popover/dist/chunk-SQ3I4X62.mjs
var chunk_SQ3I4X62 = __webpack_require__(26730);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-UYSIEMEK.mjs
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));



;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-2GZPFWUB.mjs


// ../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l = Symbol.for("react.element");
    var n = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q = Symbol.for("react.strict_mode");
    var r = Symbol.for("react.profiler");
    var t = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v = Symbol.for("react.forward_ref");
    var w = Symbol.for("react.suspense");
    var x = Symbol.for("react.memo");
    var y = Symbol.for("react.lazy");
    var z = Symbol.iterator;
    function A(a) {
      if (null === a || "object" !== typeof a)
        return null;
      a = z && a[z] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    E.prototype.isReactComponent = {};
    E.prototype.setState = function(a, b) {
      if ("object" !== typeof a && "function" !== typeof a && null != a)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b, "setState");
    };
    E.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E.prototype;
    function G(a, b, e) {
      this.props = a;
      this.context = b;
      this.refs = D;
      this.updater = e || B;
    }
    var H = G.prototype = new F();
    H.constructor = G;
    C(H, E.prototype);
    H.isPureReactComponent = true;
    var I = Array.isArray;
    var J = Object.prototype.hasOwnProperty;
    var K = { current: null };
    var L = { key: true, ref: true, __self: true, __source: true };
    function M(a, b, e) {
      var d, c = {}, k = null, h = null;
      if (null != b)
        for (d in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
          J.call(b, d) && !L.hasOwnProperty(d) && (c[d] = b[d]);
      var g = arguments.length - 2;
      if (1 === g)
        c.children = e;
      else if (1 < g) {
        for (var f = Array(g), m = 0; m < g; m++)
          f[m] = arguments[m + 2];
        c.children = f;
      }
      if (a && a.defaultProps)
        for (d in g = a.defaultProps, g)
          void 0 === c[d] && (c[d] = g[d]);
      return { $$typeof: l, type: a, key: k, ref: h, props: c, _owner: K.current };
    }
    function N(a, b) {
      return { $$typeof: l, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l;
    }
    function escape(a) {
      var b = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b[a2];
      });
    }
    var P = /\/+/g;
    function Q(a, b) {
      return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
    }
    function R(a, b, e, d, c) {
      var k = typeof a;
      if ("undefined" === k || "boolean" === k)
        a = null;
      var h = false;
      if (null === a)
        h = true;
      else
        switch (k) {
          case "string":
          case "number":
            h = true;
            break;
          case "object":
            switch (a.$$typeof) {
              case l:
              case n:
                h = true;
            }
        }
      if (h)
        return h = a, c = c(h), a = "" === d ? "." + Q(h, 0) : d, I(c) ? (e = "", null != a && (e = a.replace(P, "$&/") + "/"), R(c, b, e, "", function(a2) {
          return a2;
        })) : null != c && (O(c) && (c = N(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P, "$&/") + "/") + a)), b.push(c)), 1;
      h = 0;
      d = "" === d ? "." : d + ":";
      if (I(a))
        for (var g = 0; g < a.length; g++) {
          k = a[g];
          var f = d + Q(k, g);
          h += R(k, b, e, f, c);
        }
      else if (f = A(a), "function" === typeof f)
        for (a = f.call(a), g = 0; !(k = a.next()).done; )
          k = k.value, f = d + Q(k, g++), h += R(k, b, e, f, c);
      else if ("object" === k)
        throw b = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b) + "). If you meant to render a collection of children, use an array instead.");
      return h;
    }
    function S(a, b, e) {
      if (null == a)
        return a;
      var d = [], c = 0;
      R(a, d, "", "", function(a2) {
        return b.call(e, a2, c++);
      });
      return d;
    }
    function T(a) {
      if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 1, a._result = b2;
        }, function(b2) {
          if (0 === a._status || -1 === a._status)
            a._status = 2, a._result = b2;
        });
        -1 === a._status && (a._status = 0, a._result = b);
      }
      if (1 === a._status)
        return a._result.default;
      throw a._result;
    }
    var U = { current: null };
    var V = { transition: null };
    var W = { ReactCurrentDispatcher: U, ReactCurrentBatchConfig: V, ReactCurrentOwner: K };
    exports.Children = { map: S, forEach: function(a, b, e) {
      S(a, function() {
        b.apply(this, arguments);
      }, e);
    }, count: function(a) {
      var b = 0;
      S(a, function() {
        b++;
      });
      return b;
    }, toArray: function(a) {
      return S(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O(a))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E;
    exports.Fragment = p;
    exports.Profiler = r;
    exports.PureComponent = G;
    exports.StrictMode = q;
    exports.Suspense = w;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W;
    exports.cloneElement = function(a, b, e) {
      if (null === a || void 0 === a)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c = a.key, k = a.ref, h = a._owner;
      if (null != b) {
        void 0 !== b.ref && (k = b.ref, h = K.current);
        void 0 !== b.key && (c = "" + b.key);
        if (a.type && a.type.defaultProps)
          var g = a.type.defaultProps;
        for (f in b)
          J.call(b, f) && !L.hasOwnProperty(f) && (d[f] = void 0 === b[f] && void 0 !== g ? g[f] : b[f]);
      }
      var f = arguments.length - 2;
      if (1 === f)
        d.children = e;
      else if (1 < f) {
        g = Array(f);
        for (var m = 0; m < f; m++)
          g[m] = arguments[m + 2];
        d.children = g;
      }
      return { $$typeof: l, type: a.type, key: c, ref: k, props: d, _owner: h };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M;
    exports.createFactory = function(a) {
      var b = M.bind(null, a);
      b.type = a;
      return b;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v, render: a };
    };
    exports.isValidElement = O;
    exports.lazy = function(a) {
      return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T };
    };
    exports.memo = function(a, b) {
      return { $$typeof: x, type: a, compare: void 0 === b ? null : b };
    };
    exports.startTransition = function(a) {
      var b = V.transition;
      V.transition = {};
      try {
        a();
      } finally {
        V.transition = b;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a, b) {
      return U.current.useCallback(a, b);
    };
    exports.useContext = function(a) {
      return U.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b) {
      return U.current.useEffect(a, b);
    };
    exports.useId = function() {
      return U.current.useId();
    };
    exports.useImperativeHandle = function(a, b, e) {
      return U.current.useImperativeHandle(a, b, e);
    };
    exports.useInsertionEffect = function(a, b) {
      return U.current.useInsertionEffect(a, b);
    };
    exports.useLayoutEffect = function(a, b) {
      return U.current.useLayoutEffect(a, b);
    };
    exports.useMemo = function(a, b) {
      return U.current.useMemo(a, b);
    };
    exports.useReducer = function(a, b, e) {
      return U.current.useReducer(a, b, e);
    };
    exports.useRef = function(a) {
      return U.current.useRef(a);
    };
    exports.useState = function(a) {
      return U.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b, e) {
      return U.current.useSyncExternalStore(a, b, e);
    };
    exports.useTransition = function() {
      return U.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// ../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (false) {}
  }
});

// ../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var require_react = __commonJS({
  "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {}
  }
});


/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-VMAPMSPF.mjs



// src/children.ts
var import_react = __toESM(require_react());
function getValidChildren(children) {
  return import_react.Children.toArray(children).filter(
    (child) => (0, import_react.isValidElement)(child)
  );
}
var pickChildren = (children, targetChild) => {
  var _a;
  let target = [];
  const withoutTargetChildren = (_a = import_react.Children.map(children, (item) => {
    if (!(0, import_react.isValidElement)(item))
      return item;
    if (item.type === targetChild) {
      target.push(item);
      return null;
    }
    return item;
  })) == null ? void 0 : _a.filter(Boolean);
  const targetChildren = target.length >= 0 ? target : void 0;
  return [withoutTargetChildren, targetChildren];
};



// EXTERNAL MODULE: ./node_modules/@nextui-org/use-aria-button/dist/index.mjs
var dist = __webpack_require__(59106);
// EXTERNAL MODULE: ./node_modules/@nextui-org/button/dist/chunk-NXTXE2B3.mjs + 8 modules
var chunk_NXTXE2B3 = __webpack_require__(50447);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/popover/dist/chunk-K4VREUER.mjs
"use client";


// src/popover-trigger.tsx







var PopoverTrigger = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, _) => {
  const { triggerRef, getTriggerProps } = (0,chunk_SQ3I4X62/* usePopoverContext */.l)();
  const { children, ...otherProps } = props;
  const child = (0,react_.useMemo)(() => {
    if (typeof children === "string")
      return /* @__PURE__ */ (0,jsx_runtime_.jsx)("p", { children });
    return react_.Children.only(children);
  }, [children]);
  const { onPress, ...rest } = (0,react_.useMemo)(() => {
    return getTriggerProps((0,dist_import/* mergeProps */.dG)(child.props, otherProps), child.ref);
  }, [getTriggerProps, child.props, otherProps, child.ref]);
  const [, triggerChildren] = pickChildren(children, chunk_NXTXE2B3/* button_default */.A);
  const { buttonProps } = (0,dist/* useAriaButton */.j)({ onPress }, triggerRef);
  const hasNextUIButton = (0,react_.useMemo)(() => {
    return (triggerChildren == null ? void 0 : triggerChildren[0]) !== void 0;
  }, [triggerChildren]);
  return (0,react_.cloneElement)(child, (0,dist_import/* mergeProps */.dG)(rest, hasNextUIButton ? { onPress } : buttonProps));
});
PopoverTrigger.displayName = "NextUI.PopoverTrigger";
var popover_trigger_default = PopoverTrigger;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-63RZRIL7.mjs
"use client";


// src/dropdown-trigger.tsx



var DropdownTrigger = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, _) => {
  const { getMenuTriggerProps } = (0,chunk_WRRPXIUB/* useDropdownContext */.t)();
  const { children, ...otherProps } = props;
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(popover_trigger_default, { ...getMenuTriggerProps(otherProps), children });
});
DropdownTrigger.displayName = "NextUI.DropdownTrigger";
var dropdown_trigger_default = DropdownTrigger;




/***/ }),

/***/ 6399:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  F: () => (/* binding */ dropdown_default)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-WRRPXIUB.mjs
var chunk_WRRPXIUB = __webpack_require__(52533);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/import.mjs
var dist_import = __webpack_require__(3522);
;// CONCATENATED MODULE: ./node_modules/@react-stately/overlays/dist/import.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = (0, dist_import/* useControlledState */.zk)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    const open = (0, react_.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, react_.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, react_.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen: isOpen,
        setOpen: setOpen,
        open: open,
        close: close,
        toggle: toggle
    };
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/@react-stately/menu/dist/import.mjs



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = (0, $fc909762b330b746$export$61c6a8c84e605fb6)(props);
    let [focusStrategy, setFocusStrategy] = (0, react_.useState)(null);
    let [expandedKeysStack, setExpandedKeysStack] = (0, react_.useState)([]);
    let closeAll = ()=>{
        setExpandedKeysStack([]);
        overlayTriggerState.close();
    };
    let openSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            if (level > oldStack.length) return oldStack;
            return [
                ...oldStack.slice(0, level),
                triggerKey
            ];
        });
    };
    let closeSubmenu = (triggerKey, level)=>{
        setExpandedKeysStack((oldStack)=>{
            let key = oldStack[level];
            if (key === triggerKey) return oldStack.slice(0, level);
            else return oldStack;
        });
    };
    return {
        focusStrategy: focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        },
        close () {
            closeAll();
        },
        UNSTABLE_expandedKeysStack: expandedKeysStack,
        UNSTABLE_openSubmenu: openSubmenu,
        UNSTABLE_closeSubmenu: closeSubmenu
    };
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e5614764aa47eb35$export$d39fdbfa42246ac4(props, state) {
    let { triggerKey: triggerKey } = props;
    let { UNSTABLE_expandedKeysStack: UNSTABLE_expandedKeysStack, UNSTABLE_openSubmenu: UNSTABLE_openSubmenu, UNSTABLE_closeSubmenu: UNSTABLE_closeSubmenu, close: closeAll } = state;
    let [submenuLevel] = (0, $9Xvoh$useState)(UNSTABLE_expandedKeysStack === null || UNSTABLE_expandedKeysStack === void 0 ? void 0 : UNSTABLE_expandedKeysStack.length);
    let isOpen = (0, $9Xvoh$useMemo)(()=>UNSTABLE_expandedKeysStack[submenuLevel] === triggerKey, [
        UNSTABLE_expandedKeysStack,
        triggerKey,
        submenuLevel
    ]);
    let [focusStrategy, setFocusStrategy] = (0, $9Xvoh$useState)(null);
    let open = (0, $9Xvoh$useCallback)((focusStrategy = null)=>{
        setFocusStrategy(focusStrategy);
        UNSTABLE_openSubmenu(triggerKey, submenuLevel);
    }, [
        UNSTABLE_openSubmenu,
        submenuLevel,
        triggerKey
    ]);
    let close = (0, $9Xvoh$useCallback)(()=>{
        setFocusStrategy(null);
        UNSTABLE_closeSubmenu(triggerKey, submenuLevel);
    }, [
        UNSTABLE_closeSubmenu,
        submenuLevel,
        triggerKey
    ]);
    let toggle = (0, $9Xvoh$useCallback)((focusStrategy = null)=>{
        setFocusStrategy(focusStrategy);
        if (isOpen) close();
        else open(focusStrategy);
    }, [
        close,
        open,
        isOpen
    ]);
    return (0, $9Xvoh$useMemo)(()=>({
            focusStrategy: focusStrategy,
            isOpen: isOpen,
            open: open,
            close: close,
            closeAll: closeAll,
            submenuLevel: submenuLevel,
            // TODO: Placeholders that aren't used but give us parity with OverlayTriggerState so we can use this in Popover. Refactor if we update Popover via
            // https://github.com/adobe/react-spectrum/pull/4976#discussion_r1336472863
            setOpen: ()=>{},
            toggle: toggle
        }), [
        isOpen,
        open,
        close,
        closeAll,
        focusStrategy,
        toggle,
        submenuLevel
    ]);
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/import.mjs + 1 modules
var menu_dist_import = __webpack_require__(31323);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs + 16 modules
var chunk_6AEINX52 = __webpack_require__(18383);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs
var chunk_XHQUSKIE = __webpack_require__(26313);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-CVU6I4IJ.mjs



// src/components/dropdown.ts
var dropdown = (0,chunk_6AEINX52.tv)({
  base: ["w-full", "p-1", "min-w-[200px]"]
});
var dropdownItem = (0,chunk_6AEINX52.tv)({
  slots: {
    base: [
      "flex",
      "group",
      "gap-2",
      "items-center",
      "justify-between",
      "relative",
      "px-2",
      "py-1.5",
      "w-full",
      "h-full",
      "box-border",
      "rounded-small",
      "outline-none",
      "cursor-pointer",
      "tap-highlight-transparent",
      "data-[pressed=true]:opacity-70",
      ...chunk_XHQUSKIE/* dataFocusVisibleClasses */.Dh,
      "data-[focus-visible=true]:dark:ring-offset-background-content1"
    ],
    wrapper: "w-full flex flex-col items-start justify-center",
    title: "flex-1 text-small font-normal truncate",
    description: ["w-full", "text-tiny", "text-foreground-500", "group-hover:text-current"],
    selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
    shortcut: [
      "px-1",
      "py-0.5",
      "rounded",
      "font-sans",
      "text-foreground-500",
      "text-tiny",
      "border-small",
      "border-default-300",
      "group-hover:border-current"
    ]
  },
  variants: {
    variant: {
      solid: {
        base: ""
      },
      bordered: {
        base: "border-medium border-transparent bg-transparent"
      },
      light: {
        base: "bg-transparent"
      },
      faded: {
        base: "border-small border-transparent hover:border-default data-[hover=true]:bg-default-100"
      },
      flat: {
        base: ""
      },
      shadow: {
        base: "data-[hover=true]:shadow-lg"
      }
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    disableAnimation: {
      true: {},
      false: {}
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    disableAnimation: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: {
        base: "data-[hover=true]:bg-default data-[hover=true]:text-default-foreground"
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: "data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground"
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: "data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground"
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: "data-[hover=true]:bg-success data-[hover=true]:text-success-foreground"
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: "data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground"
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: "data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground"
      }
    },
    {
      variant: "shadow",
      color: "default",
      class: {
        base: "data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground"
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base: "data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground"
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: "data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground"
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: "data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground"
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: "data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground"
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: "data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground"
      }
    },
    {
      variant: "bordered",
      color: "default",
      class: {
        base: "data-[hover=true]:border-default"
      }
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: "data-[hover=true]:border-primary data-[hover=true]:text-primary"
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: "data-[hover=true]:border-secondary data-[hover=true]:text-secondary"
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: "data-[hover=true]:border-success data-[hover=true]:text-success"
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: "data-[hover=true]:border-warning data-[hover=true]:text-warning"
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: "data-[hover=true]:border-danger data-[hover=true]:text-danger"
      }
    },
    {
      variant: "flat",
      color: "default",
      class: {
        base: "data-[hover=true]:bg-default/40 data-[hover=true]:text-default-foreground"
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: "data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary"
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: "data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary"
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: "data-[hover=true]:bg-success/20 data-[hover=true]:text-success "
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: "data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning"
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: "data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger"
      }
    },
    {
      variant: "faded",
      color: "default",
      class: {
        base: "data-[hover=true]:text-default-foreground"
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: "data-[hover=true]:text-primary"
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: "data-[hover=true]:text-secondary"
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: "data-[hover=true]:text-success"
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: "data-[hover=true]:text-warning"
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: "data-[hover=true]:text-danger"
      }
    },
    {
      variant: "light",
      color: "default",
      class: {
        base: "data-[hover=true]:text-default-500"
      }
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: "data-[hover=true]:text-primary"
      }
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: "data-[hover=true]:text-secondary"
      }
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: "data-[hover=true]:text-success"
      }
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: "data-[hover=true]:text-warning"
      }
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: "data-[hover=true]:text-danger"
      }
    }
  ]
});
var dropdownSection = (0,chunk_6AEINX52.tv)({
  slots: {
    base: "relative mb-2",
    heading: "pl-1 text-tiny text-foreground-500",
    group: "data-[has-title=true]:pt-1",
    divider: "mt-2"
  }
});
var dropdownMenu = (0,chunk_6AEINX52.tv)({
  base: "w-full flex flex-col gap-0.5 p-1"
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
var chunk_6BQDBGF4 = __webpack_require__(61145);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var chunk_MCFSCOSB = __webpack_require__(77241);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-CIZQCQPA.mjs
"use client";

// src/refs.ts

function assignRef(ref, value) {
  if (ref == null)
    return;
  if ((0,chunk_MCFSCOSB/* isFunction */.mf)(ref)) {
    ref(value);
    return;
  }
  try {
    ref.current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}
function mergeRefs(...refs) {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
}



// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(5243);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-2FHFYXEQ.mjs
"use client";

// src/use-dropdown.ts







function useDropdown(props) {
  const {
    as,
    triggerRef: triggerRefProp,
    isOpen,
    defaultOpen,
    onOpenChange,
    type = "menu",
    trigger = "press",
    placement = "bottom",
    isDisabled = false,
    closeOnSelect = true,
    shouldBlockScroll = true,
    classNames: classNamesProp,
    disableAnimation = false,
    onClose,
    className,
    ...otherProps
  } = props;
  const Component = as || "div";
  const triggerRef = (0,react_.useRef)(null);
  const menuTriggerRef = triggerRefProp || triggerRef;
  const menuRef = (0,react_.useRef)(null);
  const popoverRef = (0,react_.useRef)(null);
  const state = $a28c903ee9ad8dc5$export$79fefeb1c2091ac3({
    trigger,
    isOpen,
    defaultOpen,
    onOpenChange: (isOpen2) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen2);
      if (!isOpen2) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const { menuTriggerProps, menuProps } = (0,menu_dist_import/* useMenuTrigger */.u4)(
    { type, trigger, isDisabled },
    state,
    menuTriggerRef
  );
  const classNames = (0,react_.useMemo)(
    () => dropdown({
      className
    }),
    [className]
  );
  const onMenuAction = (menuCloseOnSelect) => {
    if (menuCloseOnSelect !== void 0 && !menuCloseOnSelect) {
      return;
    }
    if (closeOnSelect) {
      state.close();
    }
  };
  const getPopoverProps = (props2 = {}) => ({
    state,
    placement,
    ref: popoverRef,
    disableAnimation,
    shouldBlockScroll,
    scrollRef: menuRef,
    triggerRef: menuTriggerRef,
    ...(0,utils_dist_import/* mergeProps */.dG)(otherProps, props2),
    classNames: {
      ...classNamesProp,
      ...props2.classNames,
      content: (0,chunk_6BQDBGF4/* clsx */.W)(classNames, classNamesProp == null ? void 0 : classNamesProp.content, props2.className)
    }
  });
  const getMenuTriggerProps = (props2 = {}, _ref = null) => {
    const { onKeyDown, onPress, onPressStart, ...otherMenuTriggerProps } = menuTriggerProps;
    return {
      ...(0,utils_dist_import/* mergeProps */.dG)(otherMenuTriggerProps, props2),
      ref: mergeRefs(_ref, triggerRef)
    };
  };
  const getMenuProps = (props2, _ref = null) => {
    return {
      ref: mergeRefs(_ref, menuRef),
      menuProps,
      ...(0,utils_dist_import/* mergeProps */.dG)(props2, { onAction: () => onMenuAction(props2 == null ? void 0 : props2.closeOnSelect) })
    };
  };
  return {
    Component,
    menuRef,
    menuProps,
    classNames,
    closeOnSelect,
    onClose: state.close,
    autoFocus: state.focusStrategy || true,
    disableAnimation,
    getPopoverProps,
    getMenuProps,
    getMenuTriggerProps
  };
}



// EXTERNAL MODULE: ./node_modules/@nextui-org/popover/dist/chunk-SQ3I4X62.mjs
var chunk_SQ3I4X62 = __webpack_require__(26730);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/import.mjs + 1 modules
var overlays_dist_import = __webpack_require__(66690);
// EXTERNAL MODULE: ./node_modules/@nextui-org/aria-utils/dist/chunk-WQVQ7P2I.mjs
var chunk_WQVQ7P2I = __webpack_require__(11863);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/aria-utils/dist/chunk-DE4KHMGD.mjs
"use client";

// src/overlays/ariaHideOutside.ts
var refCountMap = /* @__PURE__ */ new WeakMap();
var observerStack = [];
function ariaHideOutside(targets, root = document.body) {
  let visibleNodes = new Set(targets);
  let hiddenNodes = /* @__PURE__ */ new Set();
  let walk = (root2) => {
    for (let element of root2.querySelectorAll(
      "[data-live-announcer], [data-react-aria-top-layer]"
    )) {
      visibleNodes.add(element);
    }
    let acceptNode = (node) => {
      const parentElement = node.parentElement;
      if (visibleNodes.has(node) || hiddenNodes.has(parentElement) && parentElement.getAttribute("role") !== "row") {
        return NodeFilter.FILTER_REJECT;
      }
      for (let target of visibleNodes) {
        if (node.contains(target)) {
          return NodeFilter.FILTER_SKIP;
        }
      }
      return NodeFilter.FILTER_ACCEPT;
    };
    let walker = document.createTreeWalker(root2, NodeFilter.SHOW_ELEMENT, { acceptNode });
    let acceptRoot = acceptNode(root2);
    if (acceptRoot === NodeFilter.FILTER_ACCEPT) {
      hide(root2);
    }
    if (acceptRoot !== NodeFilter.FILTER_REJECT) {
      let node = walker.nextNode();
      while (node != null) {
        hide(node);
        node = walker.nextNode();
      }
    }
  };
  let hide = (node) => {
    var _a;
    let refCount = (_a = refCountMap.get(node)) != null ? _a : 0;
    if (node.getAttribute("aria-hidden") === "true" && refCount === 0) {
      return;
    }
    if (refCount === 0) {
      node.setAttribute("aria-hidden", "true");
    }
    hiddenNodes.add(node);
    refCountMap.set(node, refCount + 1);
  };
  if (observerStack.length) {
    observerStack[observerStack.length - 1].disconnect();
  }
  walk(root);
  let observer = new MutationObserver((changes) => {
    for (let change of changes) {
      if (change.type !== "childList" || change.addedNodes.length === 0) {
        continue;
      }
      if (![...visibleNodes, ...hiddenNodes].some((node) => node.contains(change.target))) {
        for (let node of change.removedNodes) {
          if (node instanceof Element) {
            visibleNodes.delete(node);
            hiddenNodes.delete(node);
          }
        }
        for (let node of change.addedNodes) {
          if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) {
            visibleNodes.add(node);
          } else if (node instanceof Element) {
            walk(node);
          }
        }
      }
    }
  });
  observer.observe(root, { childList: true, subtree: true });
  let observerWrapper = {
    observe() {
      observer.observe(root, { childList: true, subtree: true });
    },
    disconnect() {
      observer.disconnect();
    }
  };
  observerStack.push(observerWrapper);
  return () => {
    observer.disconnect();
    for (let node of hiddenNodes) {
      let count = refCountMap.get(node);
      if (count == null) {
        continue;
      }
      if (count === 1) {
        node.removeAttribute("aria-hidden");
        refCountMap.delete(node);
      } else {
        refCountMap.set(node, count - 1);
      }
    }
    if (observerWrapper === observerStack[observerStack.length - 1]) {
      observerStack.pop();
      if (observerStack.length) {
        observerStack[observerStack.length - 1].observe();
      }
    } else {
      observerStack.splice(observerStack.indexOf(observerWrapper), 1);
    }
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/popover/dist/chunk-JGMU3RCI.mjs
"use client";

// src/use-aria-popover.ts




function useReactAriaPopover(props, state) {
  const {
    triggerRef,
    popoverRef,
    showArrow,
    offset = 7,
    crossOffset = 0,
    scrollRef,
    shouldFlip,
    boundaryElement,
    shouldCloseOnBlur = true,
    placement: placementProp = "top",
    containerPadding,
    shouldCloseOnInteractOutside,
    isNonModal: isNonModalProp,
    isKeyboardDismissDisabled,
    ...otherProps
  } = props;
  const isNonModal = isNonModalProp || true;
  const { overlayProps, underlayProps } = (0,overlays_dist_import/* useOverlay */.Ir)(
    {
      isOpen: state.isOpen,
      onClose: state.close,
      shouldCloseOnBlur,
      isDismissable: true,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside: shouldCloseOnInteractOutside ? shouldCloseOnInteractOutside : (element) => {
        let trigger = triggerRef == null ? void 0 : triggerRef.current;
        return !trigger || !trigger.contains(element);
      }
    },
    popoverRef
  );
  const {
    overlayProps: positionProps,
    arrowProps,
    placement
  } = (0,overlays_dist_import/* useOverlayPosition */.tN)({
    ...otherProps,
    shouldFlip,
    crossOffset,
    targetRef: triggerRef,
    overlayRef: popoverRef,
    isOpen: state.isOpen,
    scrollRef,
    boundaryElement,
    containerPadding,
    placement: (0,chunk_WQVQ7P2I/* toReactAriaPlacement */.Yx)(placementProp),
    offset: showArrow ? offset + 3 : offset,
    onClose: () => {
    }
  });
  (0,react_.useEffect)(() => {
    if (state.isOpen && !isNonModal && popoverRef.current) {
      return ariaHideOutside([popoverRef.current]);
    }
  }, [isNonModal, state.isOpen, popoverRef]);
  return {
    popoverProps: (0,utils_dist_import/* mergeProps */.dG)(overlayProps, positionProps),
    arrowProps,
    underlayProps,
    placement
  };
}



// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
var chunk_3TAVD5Y3 = __webpack_require__(3595);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(74997);
// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(68973);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-2PIR7DFM.mjs
var chunk_2PIR7DFM = __webpack_require__(28737);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-FHNC7F3W.mjs




// src/components/popover.ts
var popover = (0,chunk_6AEINX52.tv)({
  slots: {
    base: [
      "z-0",
      "relative",
      "bg-transparent",
      "before:content-['']",
      "before:hidden",
      "before:z-[-1]",
      "before:absolute",
      "before:rotate-45",
      "before:w-2.5",
      "before:h-2.5",
      "before:rounded-sm",
      "data-[arrow=true]:before:block",
      "data-[placement=top]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top]:before:left-1/2",
      "data-[placement=top]:before:-translate-x-1/2",
      "data-[placement=top-start]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-start]:before:left-3",
      "data-[placement=top-end]:before:-bottom-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=top-end]:before:right-3",
      "data-[placement=bottom]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom]:before:left-1/2",
      "data-[placement=bottom]:before:-translate-x-1/2",
      "data-[placement=bottom-start]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-start]:before:left-3",
      "data-[placement=bottom-end]:before:-top-[calc(theme(spacing.5)/4_-_1.5px)]",
      "data-[placement=bottom-end]:before:right-3",
      "data-[placement=left]:before:-right-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=left]:before:top-1/2",
      "data-[placement=left]:before:-translate-y-1/2",
      "data-[placement=left-start]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-start]:before:top-1/4",
      "data-[placement=left-end]:before:-right-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=left-end]:before:bottom-1/4",
      "data-[placement=right]:before:-left-[calc(theme(spacing.5)/4_-_2px)]",
      "data-[placement=right]:before:top-1/2",
      "data-[placement=right]:before:-translate-y-1/2",
      "data-[placement=right-start]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-start]:before:top-1/4",
      "data-[placement=right-end]:before:-left-[calc(theme(spacing.5)/4_-_3px)]",
      "data-[placement=right-end]:before:bottom-1/4",
      ...chunk_XHQUSKIE/* dataFocusVisibleClasses */.Dh
    ],
    content: [
      "z-10",
      "px-2.5",
      "py-1",
      "w-full",
      "inline-flex",
      "flex-col",
      "items-center",
      "justify-center",
      "box-border",
      "subpixel-antialiased",
      "outline-none",
      "box-border"
    ],
    trigger: ["z-10"],
    backdrop: ["hidden"],
    arrow: []
  },
  variants: {
    size: {
      sm: { content: "text-tiny" },
      md: { content: "text-small" },
      lg: { content: "text-medium" }
    },
    color: {
      default: {
        base: "before:bg-content1 before:shadow-small",
        content: "bg-content1"
      },
      foreground: {
        base: "before:bg-foreground",
        content: chunk_2PIR7DFM/* colorVariants */.J.solid.foreground
      },
      primary: {
        base: "before:bg-primary",
        content: chunk_2PIR7DFM/* colorVariants */.J.solid.primary
      },
      secondary: {
        base: "before:bg-secondary",
        content: chunk_2PIR7DFM/* colorVariants */.J.solid.secondary
      },
      success: {
        base: "before:bg-success",
        content: chunk_2PIR7DFM/* colorVariants */.J.solid.success
      },
      warning: {
        base: "before:bg-warning",
        content: chunk_2PIR7DFM/* colorVariants */.J.solid.warning
      },
      danger: {
        base: "before:bg-danger",
        content: chunk_2PIR7DFM/* colorVariants */.J.solid.danger
      }
    },
    radius: {
      none: { content: "rounded-none" },
      sm: { content: "rounded-small" },
      md: { content: "rounded-medium" },
      lg: { content: "rounded-large" },
      full: { content: "rounded-full" }
    },
    shadow: {
      sm: {
        content: "shadow-small"
      },
      md: {
        content: "shadow-medium"
      },
      lg: {
        content: "shadow-large"
      }
    },
    backdrop: {
      transparent: {},
      opaque: {
        backdrop: "bg-overlay/50 backdrop-opacity-disabled"
      },
      blur: {
        backdrop: "backdrop-blur-sm backdrop-saturate-150 bg-overlay/30"
      }
    },
    triggerScaleOnOpen: {
      true: {
        trigger: ["aria-expanded:scale-[0.97]", "aria-expanded:opacity-70", "subpixel-antialiased"]
      },
      false: {}
    },
    disableAnimation: {
      true: {
        base: "animate-none"
      }
    }
  },
  defaultVariants: {
    color: "default",
    radius: "lg",
    size: "md",
    shadow: "md",
    backdrop: "transparent",
    disableAnimation: false,
    triggerScaleOnOpen: true
  },
  compoundVariants: [
    {
      backdrop: ["opaque", "blur"],
      class: {
        backdrop: "block w-full h-full fixed inset-0 -z-30"
      }
    }
  ]
});



;// CONCATENATED MODULE: ./node_modules/@nextui-org/popover/dist/chunk-3YBC73XM.mjs
"use client";


// src/use-popover.ts











function usePopover(originalProps) {
  var _a, _b;
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, popover.variantKeys);
  const {
    as,
    children,
    ref,
    state: stateProp,
    triggerRef: triggerRefProp,
    scrollRef,
    defaultOpen,
    onOpenChange,
    isOpen: isOpenProp,
    isNonModal = true,
    shouldFlip = true,
    containerPadding = 12,
    shouldBlockScroll = false,
    shouldCloseOnBlur,
    portalContainer,
    placement: placementProp = "top",
    triggerType = "dialog",
    showArrow = false,
    offset = 7,
    crossOffset = 0,
    boundaryElement,
    isKeyboardDismissDisabled,
    shouldCloseOnInteractOutside,
    motionProps,
    className,
    classNames,
    onClose,
    ...otherProps
  } = props;
  const Component = as || "div";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const domTriggerRef = (0,react_.useRef)(null);
  const wasTriggerPressedRef = (0,react_.useRef)(false);
  const triggerRef = triggerRefProp || domTriggerRef;
  const disableAnimation = (_a = originalProps.disableAnimation) != null ? _a : false;
  const innerState = $fc909762b330b746$export$61c6a8c84e605fb6({
    isOpen: isOpenProp,
    defaultOpen,
    onOpenChange: (isOpen) => {
      onOpenChange == null ? void 0 : onOpenChange(isOpen);
      if (!isOpen) {
        onClose == null ? void 0 : onClose();
      }
    }
  });
  const state = stateProp || innerState;
  const {
    popoverProps,
    underlayProps,
    placement: ariaPlacement
  } = useReactAriaPopover(
    {
      triggerRef,
      isNonModal,
      popoverRef: domRef,
      placement: placementProp,
      offset,
      scrollRef,
      shouldCloseOnBlur,
      boundaryElement,
      crossOffset,
      shouldFlip,
      containerPadding,
      isKeyboardDismissDisabled,
      shouldCloseOnInteractOutside
    },
    state
  );
  const { triggerProps } = (0,overlays_dist_import/* useOverlayTrigger */.IB)({ type: triggerType }, state, triggerRef);
  const { isFocusVisible, isFocused, focusProps } = (0,focus_dist_import/* useFocusRing */.Fx)();
  const slots = (0,react_.useMemo)(
    () => popover({
      ...variantProps
    }),
    [...Object.values(variantProps)]
  );
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  const getPopoverProps = (props2 = {}) => ({
    ref: domRef,
    ...(0,utils_dist_import/* mergeProps */.dG)(popoverProps, otherProps, props2),
    style: (0,utils_dist_import/* mergeProps */.dG)(popoverProps.style, otherProps.style, props2.style)
  });
  const getDialogProps = (props2 = {}) => ({
    "data-slot": "base",
    "data-open": (0,chunk_MCFSCOSB/* dataAttr */.PB)(state.isOpen),
    "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
    "data-arrow": (0,chunk_MCFSCOSB/* dataAttr */.PB)(showArrow),
    "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
    "data-placement": (0,chunk_WQVQ7P2I/* getArrowPlacement */.sK)(ariaPlacement, placementProp),
    ...(0,utils_dist_import/* mergeProps */.dG)(focusProps, props2),
    className: slots.base({ class: (0,chunk_6BQDBGF4/* clsx */.W)(baseStyles) }),
    style: {
      outline: "none"
    }
  });
  const getContentProps = (0,react_.useCallback)(
    (props2 = {}) => ({
      "data-slot": "content",
      "data-open": (0,chunk_MCFSCOSB/* dataAttr */.PB)(state.isOpen),
      "data-arrow": (0,chunk_MCFSCOSB/* dataAttr */.PB)(showArrow),
      "data-placement": (0,chunk_WQVQ7P2I/* getArrowPlacement */.sK)(ariaPlacement, placementProp),
      className: slots.content({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.content, props2.className) })
    }),
    [slots, state.isOpen, showArrow, ariaPlacement, placementProp, classNames]
  );
  const placement = (0,react_.useMemo)(
    () => (0,chunk_WQVQ7P2I/* getShouldUseAxisPlacement */.Yv)(ariaPlacement, placementProp) ? ariaPlacement : placementProp,
    [ariaPlacement, placementProp]
  );
  const onPress = (0,react_.useCallback)(
    (e) => {
      var _a2;
      let pressTimer;
      if (e.pointerType === "touch" && ((originalProps == null ? void 0 : originalProps.backdrop) === "blur" || (originalProps == null ? void 0 : originalProps.backdrop) === "opaque")) {
        pressTimer = setTimeout(() => {
          wasTriggerPressedRef.current = true;
        }, 100);
      } else {
        wasTriggerPressedRef.current = true;
      }
      (_a2 = triggerProps.onPress) == null ? void 0 : _a2.call(triggerProps, e);
      return () => {
        clearTimeout(pressTimer);
      };
    },
    [triggerProps == null ? void 0 : triggerProps.onPress]
  );
  const getTriggerProps = (0,react_.useCallback)(
    (props2 = {}, _ref = null) => {
      return {
        "data-slot": "trigger",
        "aria-haspopup": "dialog",
        ...(0,utils_dist_import/* mergeProps */.dG)(triggerProps, props2),
        onPress,
        className: slots.trigger({ class: (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.trigger, props2.className) }),
        ref: (0,utils_dist_import/* mergeRefs */.lq)(_ref, triggerRef)
      };
    },
    [state, triggerProps, onPress, triggerRef]
  );
  const getBackdropProps = (0,react_.useCallback)(
    (props2 = {}) => ({
      "data-slot": "backdrop",
      className: slots.backdrop({ class: classNames == null ? void 0 : classNames.backdrop }),
      onClick: (e) => {
        if (!wasTriggerPressedRef.current) {
          e.preventDefault();
          return;
        }
        state.close();
        wasTriggerPressedRef.current = false;
      },
      ...underlayProps,
      ...props2
    }),
    [slots, state.isOpen, classNames, underlayProps]
  );
  (0,react_.useEffect)(() => {
    if (state.isOpen && (domRef == null ? void 0 : domRef.current)) {
      return (0,overlays_dist_import/* ariaHideOutside */.RP)([domRef == null ? void 0 : domRef.current]);
    }
  }, [state.isOpen, domRef]);
  return {
    state,
    Component,
    children,
    classNames,
    showArrow,
    triggerRef,
    placement,
    isNonModal,
    popoverRef: domRef,
    portalContainer,
    isOpen: state.isOpen,
    onClose: state.close,
    disableAnimation,
    shouldBlockScroll,
    backdrop: (_b = originalProps.backdrop) != null ? _b : "transparent",
    motionProps,
    getBackdropProps,
    getPopoverProps,
    getTriggerProps,
    getDialogProps,
    getContentProps
  };
}



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs + 5 modules
var AnimatePresence = __webpack_require__(30569);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/popover/dist/chunk-LSZJW3GU.mjs
"use client";



// src/popover.tsx





var Popover = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const { children, ...otherProps } = props;
  const context = usePopover({ ...otherProps, ref });
  const [trigger, content] = react_.Children.toArray(children);
  const overlay = /* @__PURE__ */ (0,jsx_runtime_.jsx)(overlays_dist_import/* Overlay */.aV, { portalContainer: context.portalContainer, children: content });
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(chunk_SQ3I4X62/* PopoverProvider */.H, { value: context, children: [
    trigger,
    context.disableAnimation && context.isOpen ? overlay : /* @__PURE__ */ (0,jsx_runtime_.jsx)(AnimatePresence/* AnimatePresence */.M, { children: context.isOpen ? overlay : null })
  ] });
});
Popover.displayName = "NextUI.Popover";
var popover_default = Popover;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-L6QJ42W6.mjs
"use client";



// src/dropdown.tsx



var Dropdown = (props) => {
  const { children, ...otherProps } = props;
  const context = useDropdown(otherProps);
  const [menuTrigger, menu] = react_.Children.toArray(children);
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(chunk_WRRPXIUB/* DropdownProvider */.K, { value: context, children: /* @__PURE__ */ (0,jsx_runtime_.jsxs)(popover_default, { ...context.getPopoverProps(), children: [
    menuTrigger,
    menu
  ] }) });
};
Dropdown.displayName = "NextUI.Dropdown";
var dropdown_default = Dropdown;




/***/ }),

/***/ 32526:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  a: () => (/* binding */ dropdown_menu_default)
});

// EXTERNAL MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-WRRPXIUB.mjs
var chunk_WRRPXIUB = __webpack_require__(52533);
// EXTERNAL MODULE: ./node_modules/@nextui-org/popover/dist/chunk-SQ3I4X62.mjs
var chunk_SQ3I4X62 = __webpack_require__(26730);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@nextui-org/system-rsc/dist/chunk-SF6SJHAM.mjs
var chunk_SF6SJHAM = __webpack_require__(68973);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/import.mjs + 1 modules
var dist_import = __webpack_require__(66690);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/framer-transitions/dist/chunk-WUWNKKWR.mjs
"use client";

// src/transition-utils.ts
var TRANSITION_EASINGS = {
  ease: [0.36, 0.66, 0.4, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: [0.155, 1.105, 0.295, 1.12],
  springOut: [0.57, -0.15, 0.62, 0.07],
  softSpring: [0.16, 1.11, 0.3, 1.02]
};
var TRANSITION_DEFAULTS = {
  enter: {
    duration: 0.2,
    ease: TRANSITION_EASINGS.easeOut
  },
  exit: {
    duration: 0.1,
    ease: TRANSITION_EASINGS.easeIn
  }
};
var TRANSITION_VARIANTS = {
  scaleSpring: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      transform: "scale(0.6)",
      opacity: 0,
      transition: {
        type: "easeOut",
        duration: 0.2
      }
    }
  },
  scaleSpringOpacity: {
    initial: {
      opacity: 0,
      transform: "scale(0.8)"
    },
    enter: {
      opacity: 1,
      transform: "scale(1)",
      transition: {
        type: "spring",
        bounce: 0,
        duration: 0.3
      }
    },
    exit: {
      opacity: 0,
      transform: "scale(0.7)",
      transition: {
        type: "easeOut",
        bounce: 0,
        duration: 0.18
      }
    }
  },
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  scaleFadeIn: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.25,
        ease: TRANSITION_EASINGS.easeIn
      }
    },
    exit: {
      transform: "scale(0.95)",
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: TRANSITION_EASINGS.easeOut
      }
    }
  },
  scaleInOut: {
    enter: {
      transform: "scale(1)",
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      transform: "scale(1.03)",
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  fade: {
    enter: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: TRANSITION_EASINGS.ease
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: TRANSITION_EASINGS.ease
      }
    }
  },
  collapse: {
    enter: {
      opacity: 1,
      height: "auto",
      transition: {
        height: {
          type: "spring",
          bounce: 0,
          duration: 0.3
        },
        opacity: {
          easings: "ease",
          duration: 0.4
        }
      }
    },
    exit: {
      opacity: 0,
      height: 0,
      transition: {
        easings: "ease",
        duration: 0.3
      }
    }
  }
};



// EXTERNAL MODULE: ./node_modules/framer-motion/dist/es/render/dom/motion.mjs + 192 modules
var motion = __webpack_require__(31691);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(74997);
;// CONCATENATED MODULE: ./node_modules/@react-aria/dialog/dist/import.mjs





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $40df3f8667284809$export$d55e7ee900f34e93(props, ref) {
    let { role: role = "dialog" } = props;
    let titleId = (0, utils_dist_import/* useSlotId */.mp)();
    titleId = props["aria-label"] ? undefined : titleId;
    let isRefocusing = (0, react_.useRef)(false);
    // Focus the dialog itself on mount, unless a child element is already focused.
    (0, react_.useEffect)(()=>{
        if (ref.current && !ref.current.contains(document.activeElement)) {
            (0, focus_dist_import/* focusSafely */.ex)(ref.current);
            // Safari on iOS does not move the VoiceOver cursor to the dialog
            // or announce that it has opened until it has rendered. A workaround
            // is to wait for half a second, then blur and re-focus the dialog.
            let timeout = setTimeout(()=>{
                if (document.activeElement === ref.current) {
                    isRefocusing.current = true;
                    if (ref.current) {
                        ref.current.blur();
                        (0, focus_dist_import/* focusSafely */.ex)(ref.current);
                    }
                    isRefocusing.current = false;
                }
            }, 500);
            return ()=>{
                clearTimeout(timeout);
            };
        }
    }, [
        ref
    ]);
    (0, dist_import/* useOverlayFocusContain */.Bq)();
    // We do not use aria-modal due to a Safari bug which forces the first focusable element to be focused
    // on mount when inside an iframe, no matter which element we programmatically focus.
    // See https://bugs.webkit.org/show_bug.cgi?id=211934.
    // useModal sets aria-hidden on all elements outside the dialog, so the dialog will behave as a modal
    // even without aria-modal on the dialog itself.
    return {
        dialogProps: {
            ...(0, utils_dist_import/* filterDOMProps */.zL)(props, {
                labelable: true
            }),
            role: role,
            tabIndex: -1,
            "aria-labelledby": props["aria-labelledby"] || titleId,
            // Prevent blur events from reaching useOverlay, which may cause
            // popovers to close. Since focus is contained within the dialog,
            // we don't want this to occur due to the above useEffect.
            onBlur: (e)=>{
                if (isRefocusing.current) e.stopPropagation();
            }
        },
        titleProps: {
            id: titleId
        }
    };
}





//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/react-remove-scroll/dist/es5/index.js
var es5 = __webpack_require__(32864);
// EXTERNAL MODULE: ./node_modules/@nextui-org/aria-utils/dist/chunk-WQVQ7P2I.mjs
var chunk_WQVQ7P2I = __webpack_require__(11863);
// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/popover/dist/chunk-ARECNDSB.mjs
"use client";


// src/popover-content.tsx










var PopoverContent = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, _) => {
  const { as, children, className, ...otherProps } = props;
  const {
    Component: OverlayComponent,
    isOpen,
    placement,
    motionProps,
    backdrop,
    disableAnimation,
    shouldBlockScroll,
    getPopoverProps,
    getDialogProps,
    getBackdropProps,
    getContentProps,
    isNonModal,
    onClose
  } = (0,chunk_SQ3I4X62/* usePopoverContext */.l)();
  const Component = as || OverlayComponent || "div";
  const dialogRef = (0,react_.useRef)(null);
  const { dialogProps, titleProps } = $40df3f8667284809$export$d55e7ee900f34e93({}, dialogRef);
  delete dialogProps.role;
  const content = /* @__PURE__ */ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, { children: [
    !isNonModal && /* @__PURE__ */ (0,jsx_runtime_.jsx)(dist_import/* DismissButton */.U4, { onDismiss: onClose }),
    /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ...getDialogProps((0,utils_dist_import/* mergeProps */.dG)(dialogProps, otherProps)), ref: dialogRef, children: /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...getContentProps({ className }), children: typeof children === "function" ? children(titleProps) : children }) }),
    /* @__PURE__ */ (0,jsx_runtime_.jsx)(dist_import/* DismissButton */.U4, { onDismiss: onClose })
  ] });
  const backdropContent = (0,react_.useMemo)(() => {
    if (backdrop === "transparent") {
      return null;
    }
    if (disableAnimation) {
      return /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...getBackdropProps() });
    }
    return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      motion/* motion */.E.div,
      {
        animate: "enter",
        exit: "exit",
        initial: "exit",
        variants: TRANSITION_VARIANTS.fade,
        ...getBackdropProps()
      }
    );
  }, [backdrop, disableAnimation, getBackdropProps]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { ...getPopoverProps(), children: [
    backdropContent,
    /* @__PURE__ */ (0,jsx_runtime_.jsx)(es5/* RemoveScroll */.f, { forwardProps: true, enabled: shouldBlockScroll && isOpen, removeScrollBar: false, children: disableAnimation ? content : /* @__PURE__ */ (0,jsx_runtime_.jsx)(
      motion/* motion */.E.div,
      {
        animate: "enter",
        exit: "exit",
        initial: "initial",
        style: {
          ...(0,chunk_WQVQ7P2I/* getTransformOrigins */.VS)(placement === "center" ? "top" : placement)
        },
        variants: TRANSITION_VARIANTS.scaleSpringOpacity,
        ...motionProps,
        children: content
      }
    ) })
  ] });
});
PopoverContent.displayName = "NextUI.PopoverContent";
var popover_content_default = PopoverContent;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/menu/dist/chunk-7C7K3AST.mjs
"use client";

// src/menu-selected-icon.tsx

function MenuSelectedIcon(props) {
  const { isSelected, disableAnimation, ...otherProps } = props;
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(
    "svg",
    {
      "aria-hidden": "true",
      "data-selected": isSelected,
      role: "presentation",
      viewBox: "0 0 17 18",
      ...otherProps,
      children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(
        "polyline",
        {
          fill: "none",
          points: "1 9 7 14 15 4",
          stroke: "currentColor",
          strokeDasharray: 22,
          strokeDashoffset: isSelected ? 44 : 66,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: 1.5,
          style: !disableAnimation ? {
            transition: "stroke-dashoffset 200ms ease"
          } : {}
        }
      )
    }
  );
}



// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs + 16 modules
var chunk_6AEINX52 = __webpack_require__(18383);
// EXTERNAL MODULE: ./node_modules/@nextui-org/theme/dist/chunk-XHQUSKIE.mjs
var chunk_XHQUSKIE = __webpack_require__(26313);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-DXTDUHS5.mjs



// src/components/menu.ts
var menu = (0,chunk_6AEINX52.tv)({
  slots: {
    base: "w-full relative flex flex-col gap-1 p-1",
    list: "w-full flex flex-col gap-0.5 outline-none",
    emptyContent: [
      "h-10",
      "px-2",
      "py-1.5",
      "w-full",
      "h-full",
      "text-foreground-400",
      "text-start"
    ]
  }
});
var menuItem = (0,chunk_6AEINX52.tv)({
  slots: {
    base: [
      "flex",
      "group",
      "gap-2",
      "items-center",
      "justify-between",
      "relative",
      "px-2",
      "py-1.5",
      "w-full",
      "h-full",
      "box-border",
      "rounded-small",
      "subpixel-antialiased",
      "outline-none",
      "cursor-pointer",
      "tap-highlight-transparent",
      ...chunk_XHQUSKIE/* dataFocusVisibleClasses */.Dh,
      "data-[focus-visible=true]:dark:ring-offset-background-content1"
    ],
    wrapper: "w-full flex flex-col items-start justify-center",
    title: "flex-1 text-small font-normal truncate",
    description: ["w-full", "text-tiny", "text-foreground-500", "group-hover:text-current"],
    selectedIcon: ["text-inherit", "w-3", "h-3", "flex-shrink-0"],
    shortcut: [
      "px-1",
      "py-0.5",
      "rounded",
      "font-sans",
      "text-foreground-500",
      "text-tiny",
      "border-small",
      "border-default-300",
      "group-hover:border-current"
    ]
  },
  variants: {
    variant: {
      solid: {
        base: ""
      },
      bordered: {
        base: "border-medium border-transparent bg-transparent"
      },
      light: {
        base: "bg-transparent"
      },
      faded: {
        base: [
          "border-small border-transparent hover:border-default data-[hover=true]:bg-default-100",
          "data-[selectable=true]:focus:border-default data-[selectable=true]:focus:bg-default-100"
        ]
      },
      flat: {
        base: ""
      },
      shadow: {
        base: "data-[hover=true]:shadow-lg"
      }
    },
    color: {
      default: {},
      primary: {},
      secondary: {},
      success: {},
      warning: {},
      danger: {}
    },
    showDivider: {
      true: {
        base: [
          "mb-1.5",
          "after:content-['']",
          "after:absolute",
          "after:-bottom-1",
          "after:left-0",
          "after:right-0",
          "after:h-divider",
          "after:bg-divider"
        ]
      },
      false: {}
    },
    isDisabled: {
      true: {
        base: "opacity-disabled pointer-events-none"
      }
    },
    disableAnimation: {
      true: {},
      false: {
        base: "data-[hover=true]:transition-colors"
      }
    }
  },
  defaultVariants: {
    variant: "solid",
    color: "default",
    disableAnimation: false,
    showDivider: false
  },
  compoundVariants: [
    {
      variant: "solid",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:bg-default",
          "data-[hover=true]:text-default-foreground",
          "data-[selectable=true]:focus:bg-default",
          "data-[selectable=true]:focus:text-default-foreground"
        ]
      }
    },
    {
      variant: "solid",
      color: "primary",
      class: {
        base: [
          "data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
          "data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground"
        ]
      }
    },
    {
      variant: "solid",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
          "data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground"
        ]
      }
    },
    {
      variant: "solid",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
          "data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground"
        ]
      }
    },
    {
      variant: "solid",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
          "data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground"
        ]
      }
    },
    {
      variant: "solid",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
          "data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground"
        ]
      }
    },
    {
      variant: "shadow",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:shadow-default/50 data-[hover=true]:bg-default data-[hover=true]:text-default-foreground",
          "data-[selectable=true]:focus:shadow-default/50 data-[selectable=true]:focus:bg-default data-[selectable=true]:focus:text-default-foreground"
        ]
      }
    },
    {
      variant: "shadow",
      color: "primary",
      class: {
        base: [
          "data-[hover=true]:shadow-primary/30 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground",
          "data-[selectable=true]:focus:shadow-primary/30 data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground"
        ]
      }
    },
    {
      variant: "shadow",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:shadow-secondary/30 data-[hover=true]:bg-secondary data-[hover=true]:text-secondary-foreground",
          "data-[selectable=true]:focus:shadow-secondary/30 data-[selectable=true]:focus:bg-secondary data-[selectable=true]:focus:text-secondary-foreground"
        ]
      }
    },
    {
      variant: "shadow",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:shadow-success/30 data-[hover=true]:bg-success data-[hover=true]:text-success-foreground",
          "data-[selectable=true]:focus:shadow-success/30 data-[selectable=true]:focus:bg-success data-[selectable=true]:focus:text-success-foreground"
        ]
      }
    },
    {
      variant: "shadow",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:shadow-warning/30 data-[hover=true]:bg-warning data-[hover=true]:text-warning-foreground",
          "data-[selectable=true]:focus:shadow-warning/30 data-[selectable=true]:focus:bg-warning data-[selectable=true]:focus:text-warning-foreground"
        ]
      }
    },
    {
      variant: "shadow",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:shadow-danger/30 data-[hover=true]:bg-danger data-[hover=true]:text-danger-foreground",
          "data-[selectable=true]:focus:shadow-danger/30 data-[selectable=true]:focus:bg-danger data-[selectable=true]:focus:text-danger-foreground"
        ]
      }
    },
    {
      variant: "bordered",
      color: "default",
      class: {
        base: ["data-[hover=true]:border-default", "data-[selectable=true]:focus:border-default"]
      }
    },
    {
      variant: "bordered",
      color: "primary",
      class: {
        base: [
          "data-[hover=true]:border-primary data-[hover=true]:text-primary",
          "data-[selectable=true]:focus:border-primary data-[selectable=true]:focus:text-primary"
        ]
      }
    },
    {
      variant: "bordered",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:border-secondary data-[hover=true]:text-secondary",
          "data-[selectable=true]:focus:border-secondary data-[selectable=true]:focus:text-secondary"
        ]
      }
    },
    {
      variant: "bordered",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:border-success data-[hover=true]:text-success",
          "data-[selectable=true]:focus:border-success data-[selectable=true]:focus:text-success"
        ]
      }
    },
    {
      variant: "bordered",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:border-warning data-[hover=true]:text-warning",
          "data-[selectable=true]:focus:border-warning data-[selectable=true]:focus:text-warning"
        ]
      }
    },
    {
      variant: "bordered",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:border-danger data-[hover=true]:text-danger",
          "data-[selectable=true]:focus:border-danger data-[selectable=true]:focus:text-danger"
        ]
      }
    },
    {
      variant: "flat",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:bg-default/40",
          "data-[hover=true]:text-default-foreground",
          "data-[selectable=true]:focus:bg-default/40",
          "data-[selectable=true]:focus:text-default-foreground"
        ]
      }
    },
    {
      variant: "flat",
      color: "primary",
      class: {
        base: [
          "data-[hover=true]:bg-primary/20 data-[hover=true]:text-primary",
          "data-[selectable=true]:focus:bg-primary/20 data-[selectable=true]:focus:text-primary"
        ]
      }
    },
    {
      variant: "flat",
      color: "secondary",
      class: {
        base: [
          "data-[hover=true]:bg-secondary/20 data-[hover=true]:text-secondary",
          "data-[selectable=true]:focus:bg-secondary/20 data-[selectable=true]:focus:text-secondary"
        ]
      }
    },
    {
      variant: "flat",
      color: "success",
      class: {
        base: [
          "data-[hover=true]:bg-success/20 data-[hover=true]:text-success",
          "data-[selectable=true]:focus:bg-success/20 data-[selectable=true]:focus:text-success"
        ]
      }
    },
    {
      variant: "flat",
      color: "warning",
      class: {
        base: [
          "data-[hover=true]:bg-warning/20 data-[hover=true]:text-warning",
          "data-[selectable=true]:focus:bg-warning/20 data-[selectable=true]:focus:text-warning"
        ]
      }
    },
    {
      variant: "flat",
      color: "danger",
      class: {
        base: [
          "data-[hover=true]:bg-danger/20 data-[hover=true]:text-danger",
          "data-[selectable=true]:focus:bg-danger/20 data-[selectable=true]:focus:text-danger"
        ]
      }
    },
    {
      variant: "faded",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:text-default-foreground",
          "data-[selectable=true]:focus:text-default-foreground"
        ]
      }
    },
    {
      variant: "faded",
      color: "primary",
      class: {
        base: ["data-[hover=true]:text-primary", "data-[selectable=true]:focus:text-primary"]
      }
    },
    {
      variant: "faded",
      color: "secondary",
      class: {
        base: ["data-[hover=true]:text-secondary", "data-[selectable=true]:focus:text-secondary"]
      }
    },
    {
      variant: "faded",
      color: "success",
      class: {
        base: ["data-[hover=true]:text-success", "data-[selectable=true]:focus:text-success"]
      }
    },
    {
      variant: "faded",
      color: "warning",
      class: {
        base: ["data-[hover=true]:text-warning", "data-[selectable=true]:focus:text-warning"]
      }
    },
    {
      variant: "faded",
      color: "danger",
      class: {
        base: ["data-[hover=true]:text-danger", "data-[selectable=true]:focus:text-danger"]
      }
    },
    {
      variant: "light",
      color: "default",
      class: {
        base: [
          "data-[hover=true]:text-default-500",
          "data-[selectable=true]:focus:text-default-500"
        ]
      }
    },
    {
      variant: "light",
      color: "primary",
      class: {
        base: ["data-[hover=true]:text-primary", "data-[selectable=true]:focus:text-primary"]
      }
    },
    {
      variant: "light",
      color: "secondary",
      class: {
        base: ["data-[hover=true]:text-secondary", "data-[selectable=true]:focus:text-secondary"]
      }
    },
    {
      variant: "light",
      color: "success",
      class: {
        base: ["data-[hover=true]:text-success", "data-[selectable=true]:focus:text-success"]
      }
    },
    {
      variant: "light",
      color: "warning",
      class: {
        base: ["data-[hover=true]:text-warning", "data-[selectable=true]:focus:text-warning"]
      }
    },
    {
      variant: "light",
      color: "danger",
      class: {
        base: ["data-[hover=true]:text-danger", "data-[selectable=true]:focus:text-danger"]
      }
    }
  ]
});
var menuSection = (0,chunk_6AEINX52.tv)({
  slots: {
    base: "relative mb-2",
    heading: "pl-1 text-tiny text-foreground-500",
    group: "data-[has-title=true]:pt-1",
    divider: "mt-2"
  }
});



// EXTERNAL MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-BSXPKUBX.mjs + 1 modules
var chunk_BSXPKUBX = __webpack_require__(64480);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-6BQDBGF4.mjs
var chunk_6BQDBGF4 = __webpack_require__(61145);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-EB2I5ZVA.mjs
var chunk_EB2I5ZVA = __webpack_require__(91665);
// EXTERNAL MODULE: ./node_modules/@nextui-org/shared-utils/dist/chunk-MCFSCOSB.mjs
var chunk_MCFSCOSB = __webpack_require__(77241);
// EXTERNAL MODULE: ./node_modules/@react-aria/menu/dist/import.mjs + 1 modules
var menu_dist_import = __webpack_require__(31323);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@nextui-org/use-aria-press/dist/index.mjs + 5 modules
var dist = __webpack_require__(79816);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/import.mjs
var ssr_dist_import = __webpack_require__(90466);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-is-mobile/dist/index.mjs
// src/index.ts

var MOBILE_SCREEN_WIDTH = 700;
function useIsMobile() {
  let isSSR = (0,ssr_dist_import/* useIsSSR */.Av)();
  if (isSSR || typeof window === "undefined") {
    return false;
  }
  return window.screen.width <= MOBILE_SCREEN_WIDTH;
}


;// CONCATENATED MODULE: ./node_modules/@nextui-org/menu/dist/chunk-MPFLNJCG.mjs
"use client";

// src/use-menu-item.ts











function useMenuItem(originalProps) {
  const [props, variantProps] = (0,chunk_SF6SJHAM/* mapPropsVariants */.oe)(originalProps, menuItem.variantKeys);
  const {
    as,
    item,
    state,
    shortcut,
    description,
    startContent,
    endContent,
    isVirtualized,
    selectedIcon,
    className,
    classNames,
    onAction,
    autoFocus,
    onPress,
    onClick,
    hideSelectedIcon = false,
    isReadOnly = false,
    closeOnSelect,
    onClose,
    ...otherProps
  } = props;
  const disableAnimation = originalProps.disableAnimation;
  const domRef = (0,react_.useRef)(null);
  const Component = as || ((otherProps == null ? void 0 : otherProps.href) ? "a" : "li");
  const shouldFilterDOMProps = typeof Component === "string";
  const { rendered, key } = item;
  const isDisabled = state.disabledKeys.has(key) || originalProps.isDisabled;
  const isSelectable = state.selectionManager.selectionMode !== "none";
  const isMobile = useIsMobile();
  const { pressProps, isPressed } = (0,dist/* usePress */.r)({
    ref: domRef,
    isDisabled,
    onPress
  });
  const { isHovered, hoverProps } = (0,interactions_dist_import/* useHover */.XI)({
    isDisabled
  });
  const { isFocusVisible, focusProps } = (0,focus_dist_import/* useFocusRing */.Fx)({
    autoFocus
  });
  const {
    isFocused,
    isSelected,
    menuItemProps,
    labelProps,
    descriptionProps,
    keyboardShortcutProps
  } = (0,menu_dist_import/* useMenuItem */.iX)(
    {
      key,
      onClose,
      isDisabled,
      "aria-label": props["aria-label"],
      closeOnSelect,
      isVirtualized,
      onAction
    },
    state,
    domRef
  );
  let itemProps = menuItemProps;
  const slots = (0,react_.useMemo)(
    () => menuItem({
      ...variantProps,
      isDisabled,
      disableAnimation
    }),
    [...Object.values(variantProps), isDisabled, disableAnimation]
  );
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  if (isReadOnly) {
    itemProps = (0,chunk_EB2I5ZVA/* removeEvents */.Os)(itemProps);
  }
  const getItemProps = (props2 = {}) => ({
    ref: domRef,
    ...(0,utils_dist_import/* mergeProps */.dG)(
      itemProps,
      isReadOnly ? {} : (0,utils_dist_import/* mergeProps */.dG)(focusProps, pressProps),
      hoverProps,
      (0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      props2
    ),
    "data-focus": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocused),
    "data-selectable": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isSelectable),
    "data-hover": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isMobile ? isHovered || isPressed : isHovered),
    "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
    "data-selected": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isSelected),
    "data-pressed": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isPressed),
    "data-focus-visible": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isFocusVisible),
    className: slots.base({ class: (0,chunk_6BQDBGF4/* clsx */.W)(baseStyles, props2.className) }),
    onClick: (0,utils_dist_import/* chain */.tS)(pressProps.onClick, onClick)
  });
  const getLabelProps = (props2 = {}) => ({
    ...(0,utils_dist_import/* mergeProps */.dG)(labelProps, props2),
    className: slots.title({ class: classNames == null ? void 0 : classNames.title })
  });
  const getDescriptionProps = (props2 = {}) => ({
    ...(0,utils_dist_import/* mergeProps */.dG)(descriptionProps, props2),
    className: slots.description({ class: classNames == null ? void 0 : classNames.description })
  });
  const getKeyboardShortcutProps = (props2 = {}) => ({
    ...(0,utils_dist_import/* mergeProps */.dG)(keyboardShortcutProps, props2),
    className: slots.shortcut({ class: classNames == null ? void 0 : classNames.shortcut })
  });
  const getSelectedIconProps = (0,react_.useCallback)(
    (props2 = {}) => {
      return {
        "aria-hidden": (0,chunk_MCFSCOSB/* dataAttr */.PB)(true),
        "data-disabled": (0,chunk_MCFSCOSB/* dataAttr */.PB)(isDisabled),
        className: slots.selectedIcon({ class: classNames == null ? void 0 : classNames.selectedIcon }),
        ...props2
      };
    },
    [isDisabled, slots, classNames]
  );
  return {
    Component,
    domRef,
    slots,
    classNames,
    isSelectable,
    isSelected,
    isDisabled,
    rendered,
    shortcut,
    description,
    startContent,
    endContent,
    selectedIcon,
    disableAnimation,
    getItemProps,
    getLabelProps,
    hideSelectedIcon,
    getDescriptionProps,
    getKeyboardShortcutProps,
    getSelectedIconProps
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/menu/dist/chunk-VYK6R63U.mjs
"use client";



// src/menu-item.tsx



var MenuItem = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, _) => {
  const {
    Component,
    slots,
    classNames,
    rendered,
    shortcut,
    description,
    isSelectable,
    isSelected,
    isDisabled,
    selectedIcon,
    startContent,
    endContent,
    disableAnimation,
    hideSelectedIcon,
    getItemProps,
    getLabelProps,
    getDescriptionProps,
    getKeyboardShortcutProps,
    getSelectedIconProps
  } = useMenuItem(props);
  const selectedContent = (0,react_.useMemo)(() => {
    const defaultIcon = /* @__PURE__ */ (0,jsx_runtime_.jsx)(MenuSelectedIcon, { disableAnimation, isSelected });
    if (typeof selectedIcon === "function") {
      return selectedIcon({ icon: defaultIcon, isSelected, isDisabled });
    }
    if (selectedIcon)
      return selectedIcon;
    return defaultIcon;
  }, [selectedIcon, isSelected, isDisabled, disableAnimation]);
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ...getItemProps(), children: [
    startContent,
    description ? /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { className: slots.wrapper({ class: classNames == null ? void 0 : classNames.wrapper }), children: [
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getLabelProps(), children: rendered }),
      /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getDescriptionProps(), children: description })
    ] }) : /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getLabelProps(), children: rendered }),
    shortcut && /* @__PURE__ */ (0,jsx_runtime_.jsx)("kbd", { ...getKeyboardShortcutProps(), children: shortcut }),
    isSelectable && !hideSelectedIcon && /* @__PURE__ */ (0,jsx_runtime_.jsx)("span", { ...getSelectedIconProps(), children: selectedContent }),
    endContent
  ] });
});
MenuItem.displayName = "NextUI.MenuItem";
var menu_item_default = MenuItem;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/divider/dist/chunk-LVTFMK47.mjs
// src/use-separator.ts

function useSeparator(props) {
  let domProps = (0,chunk_BSXPKUBX/* filterDOMProps */.z)(props, {
    enabled: typeof props.elementType === "string"
  });
  let ariaOrientation;
  if (props.orientation === "vertical") {
    ariaOrientation = "vertical";
  }
  if (props.elementType !== "hr") {
    return {
      separatorProps: {
        ...domProps,
        role: "separator",
        "aria-orientation": ariaOrientation
      }
    };
  }
  return { separatorProps: domProps };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-YSXRNNDV.mjs


// src/components/divider.ts
var divider = (0,chunk_6AEINX52.tv)({
  base: "shrink-0 bg-divider border-none",
  variants: {
    orientation: {
      horizontal: "w-full h-divider",
      vertical: "h-full w-divider"
    }
  },
  defaultVariants: {
    orientation: "horizontal"
  }
});



;// CONCATENATED MODULE: ./node_modules/@nextui-org/divider/dist/chunk-HGQPAK7A.mjs


// src/use-divider.ts


function useDivider(props) {
  const { as, className, orientation, ...otherProps } = props;
  let Component = as || "hr";
  if (Component === "hr" && orientation === "vertical") {
    Component = "div";
  }
  const { separatorProps } = useSeparator({
    elementType: typeof Component === "string" ? Component : "hr",
    orientation
  });
  const styles = (0,react_.useMemo)(
    () => divider({
      orientation,
      className
    }),
    [orientation, className]
  );
  const getDividerProps = (0,react_.useCallback)(
    (props2 = {}) => ({
      className: styles,
      role: "separator",
      "data-orientation": orientation,
      ...separatorProps,
      ...otherProps,
      ...props2
    }),
    [styles, orientation, separatorProps, otherProps]
  );
  return { Component, getDividerProps };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/divider/dist/chunk-44JHHBS2.mjs


// src/divider.tsx


var Divider = (0,chunk_SF6SJHAM/* forwardRef */.Gp)((props, ref) => {
  const { Component, getDividerProps } = useDivider({ ...props });
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(Component, { ref, ...getDividerProps() });
});
Divider.displayName = "NextUI.Divider";
var divider_default = Divider;



;// CONCATENATED MODULE: ./node_modules/@nextui-org/menu/dist/chunk-4N6PLPNY.mjs
"use client";


// src/menu-section.tsx








var MenuSection = (0,chunk_SF6SJHAM/* forwardRef */.Gp)(
  ({
    item,
    state,
    as,
    variant,
    color,
    disableAnimation,
    onAction,
    closeOnSelect,
    className,
    classNames,
    showDivider = false,
    hideSelectedIcon,
    dividerProps = {},
    itemClasses,
    title,
    ...otherProps
  }, _) => {
    const Component = as || "li";
    const slots = (0,react_.useMemo)(() => menuSection(), []);
    const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
    const dividerStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.divider, dividerProps == null ? void 0 : dividerProps.className);
    const { itemProps, headingProps, groupProps } = (0,menu_dist_import/* useMenuSection */.x7)({
      heading: item.rendered,
      "aria-label": item["aria-label"]
    });
    return /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
      Component,
      {
        "data-slot": "base",
        ...(0,utils_dist_import/* mergeProps */.dG)(itemProps, otherProps),
        className: slots.base({ class: baseStyles }),
        children: [
          item.rendered && /* @__PURE__ */ (0,jsx_runtime_.jsx)(
            "span",
            {
              ...headingProps,
              className: slots.heading({ class: classNames == null ? void 0 : classNames.heading }),
              "data-slot": "heading",
              children: item.rendered
            }
          ),
          /* @__PURE__ */ (0,jsx_runtime_.jsxs)(
            "ul",
            {
              ...groupProps,
              className: slots.group({ class: classNames == null ? void 0 : classNames.group }),
              "data-has-title": !!item.rendered,
              "data-slot": "group",
              children: [
                [...item.childNodes].map((node) => {
                  const { key: nodeKey, props: nodeProps } = node;
                  let menuItem = /* @__PURE__ */ (0,jsx_runtime_.jsx)(
                    menu_item_default,
                    {
                      classNames: itemClasses,
                      closeOnSelect,
                      color,
                      disableAnimation,
                      hideSelectedIcon,
                      item: node,
                      state,
                      variant,
                      onAction,
                      ...nodeProps
                    },
                    nodeKey
                  );
                  if (node.wrapper) {
                    menuItem = node.wrapper(menuItem);
                  }
                  return menuItem;
                }),
                showDivider && /* @__PURE__ */ (0,jsx_runtime_.jsx)(
                  divider_default,
                  {
                    as: "li",
                    className: slots.divider({
                      class: dividerStyles
                    }),
                    ...dividerProps
                  }
                )
              ]
            }
          )
        ]
      }
    );
  }
);
MenuSection.displayName = "NextUI.MenuSection";
var menu_section_default = MenuSection;



// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/import.mjs
var _react_stately_utils_dist_import = __webpack_require__(3522);
// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/import.mjs
var collections_dist_import = __webpack_require__(22049);
;// CONCATENATED MODULE: ./node_modules/@react-stately/selection/dist/import.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
            this.anchorKey = anchorKey || keys.anchorKey;
            this.currentKey = currentKey || keys.currentKey;
        } else {
            this.anchorKey = anchorKey;
            this.currentKey = currentKey;
        }
    }
}




function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = "none", disallowEmptySelection: disallowEmptySelection, allowDuplicateSelectionEvents: allowDuplicateSelectionEvents, selectionBehavior: selectionBehaviorProp = "toggle", disabledBehavior: disabledBehavior = "all" } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = (0, react_.useRef)(false);
    let [, setFocused] = (0, react_.useState)(false);
    let focusedKeyRef = (0, react_.useRef)(null);
    let childFocusStrategyRef = (0, react_.useRef)(null);
    let [, setFocusedKey] = (0, react_.useState)(null);
    let selectedKeysProp = (0, react_.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = (0, react_.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new (0, $e40ea825a81a3709$export$52baac22726c72bf)()), [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = (0, _react_stately_utils_dist_import/* useControlledState */.zk)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = (0, react_.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = (0, react_.useState)(selectionBehaviorProp);
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
    // If the selectionBehavior prop changes, update the state as well.
    let lastSelectionBehavior = (0, react_.useRef)(selectionBehaviorProp);
    (0, react_.useEffect)(()=>{
        if (selectionBehaviorProp !== lastSelectionBehavior.current) {
            setSelectionBehavior(selectionBehaviorProp);
            lastSelectionBehavior.current = selectionBehaviorProp;
        }
    }, [
        selectionBehaviorProp
    ]);
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = "first") {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp,
        disabledBehavior: disabledBehavior
    };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === "all" ? "all" : new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selection);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === "none") return false;
        key = this.getKey(key);
        return this.state.selectedKeys === "all" ? this.canSelectItem(key) : this.state.selectedKeys.has(key);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === "all") return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k));
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item && (0, collections_dist_import/* compareNodeOrder */.eg)(this.collection, item, first) < 0) first = item;
        }
        return first === null || first === void 0 ? void 0 : first.key;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item && (0, collections_dist_import/* compareNodeOrder */.eg)(this.collection, item, last) > 0) last = item;
        }
        return last === null || last === void 0 ? void 0 : last.key;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === "none") return;
        if (this.selectionMode === "single") {
            this.replaceSelection(toKey);
            return;
        }
        toKey = this.getKey(toKey);
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === "all") selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
            toKey
        ], toKey, toKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            let anchorKey = selectedKeys.anchorKey || toKey;
            selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selectedKeys, anchorKey, toKey);
            for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey))selection.delete(key);
            for (let key of this.getKeyRange(toKey, anchorKey))if (this.canSelectItem(key)) selection.add(key);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if ((0, collections_dist_import/* compareNodeOrder */.eg)(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        let keys = [];
        let key = from;
        while(key){
            let item = this.collection.getItem(key);
            if (item && item.type === "item" || item.type === "cell" && this.allowsCellSelection) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ¯\_(ツ)_/¯
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === "cell" && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item.type !== "item" && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== "item") return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === "none") return;
        if (this.selectionMode === "single" && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        key = this.getKey(key);
        if (key == null) return;
        let keys = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(key)) keys.delete(key);
        else if (this.canSelectItem(key)) {
            keys.add(key);
            keys.anchorKey = key;
            keys.currentKey = key;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === "none") return;
        key = this.getKey(key);
        if (key == null) return;
        let selection = this.canSelectItem(key) ? new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
            key
        ], key, key) : new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
        this.state.setSelectedKeys(selection);
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === "none") return;
        let selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
        for (let key of keys){
            key = this.getKey(key);
            if (key != null) {
                selection.add(key);
                if (this.selectionMode === "single") break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        let keys = [];
        let addKeys = (key)=>{
            while(key){
                if (this.canSelectItem(key)) {
                    let item = this.collection.getItem(key);
                    if (item.type === "item") keys.push(key);
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if (item.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) addKeys((0, collections_dist_import/* getFirstItem */.l8)((0, collections_dist_import/* getChildNodes */._P)(item, this.collection)).key);
                }
                key = this.collection.getKeyAfter(key);
            }
        };
        addKeys(this.collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new (0, $e40ea825a81a3709$export$52baac22726c72bf)());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === "none") return;
        if (this.selectionMode === "single") {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual")) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key of selectedKeys){
            if (!selection.has(key)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
        let item = this.collection.getItem(key);
        if (!item || item.type === "cell" && !this.allowsCellSelection) return false;
        return true;
    }
    isDisabled(key) {
        return this.state.disabledKeys.has(key) && this.state.disabledBehavior === "all";
    }
    isLink(key) {
        var _this_collection_getItem_props, _this_collection_getItem;
        return !!((_this_collection_getItem = this.collection.getItem(key)) === null || _this_collection_getItem === void 0 ? void 0 : (_this_collection_getItem_props = _this_collection_getItem.props) === null || _this_collection_getItem_props === void 0 ? void 0 : _this_collection_getItem_props.href);
    }
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        var _options_allowsCellSelection;
        this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
        this._isSelectAll = null;
    }
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/@react-stately/tree/dist/import.mjs





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $05ca4cd7c4a5a999$export$863faf230ee2118a {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key);
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    constructor(nodes, { expandedKeys: expandedKeys } = {}){
        this.keyMap = new Map();
        this.iterable = nodes;
        expandedKeys = expandedKeys || new Set();
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && (node.type === "section" || expandedKeys.has(node.key))) for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === "item") node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last === null || last === void 0 ? void 0 : last.key;
    }
}





function $875d6693e12af071$export$728d6ba534403756(props) {
    let [expandedKeys, setExpandedKeys] = (0, _react_stately_utils_dist_import/* useControlledState */.zk)(props.expandedKeys ? new Set(props.expandedKeys) : undefined, props.defaultExpandedKeys ? new Set(props.defaultExpandedKeys) : new Set(), props.onExpandedChange);
    let selectionState = (0, $7af3f5b51489e0b5$export$253fe78d46329472)(props);
    let disabledKeys = (0, react_.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let tree = (0, collections_dist_import/* useCollection */.Kx)(props, (0, react_.useCallback)((nodes)=>new (0, $05ca4cd7c4a5a999$export$863faf230ee2118a)(nodes, {
            expandedKeys: expandedKeys
        }), [
        expandedKeys
    ]), null);
    // Reset focused key if that item is deleted from the collection.
    (0, react_.useEffect)(()=>{
        if (selectionState.focusedKey != null && !tree.getItem(selectionState.focusedKey)) selectionState.setFocusedKey(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        tree,
        selectionState.focusedKey
    ]);
    let onToggle = (key)=>{
        setExpandedKeys($875d6693e12af071$var$toggleKey(expandedKeys, key));
    };
    return {
        collection: tree,
        expandedKeys: expandedKeys,
        disabledKeys: disabledKeys,
        toggleKey: onToggle,
        setExpandedKeys: setExpandedKeys,
        selectionManager: new (0, $d496c0a20b6e58ec$export$6c8a5aaad13c9852)(tree, selectionState)
    };
}
function $875d6693e12af071$var$toggleKey(set, key) {
    let res = new Set(set);
    if (res.has(key)) res.delete(key);
    else res.add(key);
    return res;
}






//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@nextui-org/react-utils/dist/chunk-3TAVD5Y3.mjs
var chunk_3TAVD5Y3 = __webpack_require__(3595);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/menu/dist/chunk-R4ZQ5Y3Q.mjs
"use client";

// src/use-menu.ts






function useMenu(props) {
  const {
    as,
    ref,
    variant,
    color,
    children,
    disableAnimation,
    onAction,
    closeOnSelect,
    itemClasses,
    className,
    state: propState,
    topContent,
    bottomContent,
    hideEmptyContent = false,
    hideSelectedIcon = false,
    emptyContent = "No items.",
    menuProps: userMenuProps,
    onClose,
    classNames,
    ...otherProps
  } = props;
  const Component = as || "ul";
  const domRef = (0,chunk_3TAVD5Y3/* useDOMRef */.gy)(ref);
  const shouldFilterDOMProps = typeof Component === "string";
  const innerState = $875d6693e12af071$export$728d6ba534403756({ ...otherProps, children });
  const state = propState || innerState;
  const { menuProps } = (0,menu_dist_import/* useMenu */.H9)(otherProps, state, domRef);
  const slots = (0,react_.useMemo)(() => menu({ className }), [className]);
  const baseStyles = (0,chunk_6BQDBGF4/* clsx */.W)(classNames == null ? void 0 : classNames.base, className);
  const getBaseProps = (props2 = {}) => {
    return {
      ref: domRef,
      "data-slot": "base",
      className: slots.base({ class: baseStyles }),
      ...(0,chunk_BSXPKUBX/* filterDOMProps */.z)(otherProps, {
        enabled: shouldFilterDOMProps
      }),
      ...props2
    };
  };
  const getListProps = (props2 = {}) => {
    return {
      "data-slot": "list",
      className: slots.list({ class: classNames == null ? void 0 : classNames.list }),
      ...userMenuProps,
      ...menuProps,
      ...props2
    };
  };
  const getEmptyContentProps = (props2 = {}) => {
    return {
      children: emptyContent,
      className: slots.emptyContent({ class: classNames == null ? void 0 : classNames.emptyContent }),
      ...props2
    };
  };
  return {
    Component,
    state,
    variant,
    color,
    disableAnimation,
    onAction,
    onClose,
    topContent,
    bottomContent,
    closeOnSelect,
    className,
    itemClasses,
    getBaseProps,
    getListProps,
    hideEmptyContent,
    hideSelectedIcon,
    getEmptyContentProps
  };
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/menu/dist/chunk-B24OILC2.mjs
"use client";




// src/menu.tsx


function Menu(props, ref) {
  const {
    Component,
    state,
    closeOnSelect,
    color,
    disableAnimation,
    hideSelectedIcon,
    hideEmptyContent,
    variant,
    onClose,
    onAction,
    topContent,
    bottomContent,
    itemClasses,
    getBaseProps,
    getListProps,
    getEmptyContentProps
  } = useMenu({ ...props, ref });
  const content = /* @__PURE__ */ (0,jsx_runtime_.jsxs)(Component, { ...getListProps(), children: [
    !state.collection.size && !hideEmptyContent && /* @__PURE__ */ (0,jsx_runtime_.jsx)("li", { children: /* @__PURE__ */ (0,jsx_runtime_.jsx)("div", { ...getEmptyContentProps() }) }),
    [...state.collection].map((item) => {
      const itemProps = {
        closeOnSelect,
        color,
        disableAnimation,
        item,
        state,
        variant,
        onClose,
        onAction,
        hideSelectedIcon,
        ...item.props
      };
      if (item.type === "section") {
        return /* @__PURE__ */ (0,jsx_runtime_.jsx)(menu_section_default, { ...itemProps, itemClasses }, item.key);
      }
      let menuItem = /* @__PURE__ */ (0,jsx_runtime_.jsx)(menu_item_default, { ...itemProps, classNames: itemClasses }, item.key);
      if (item.wrapper) {
        menuItem = item.wrapper(menuItem);
      }
      return menuItem;
    })
  ] });
  return /* @__PURE__ */ (0,jsx_runtime_.jsxs)("div", { ...getBaseProps(), children: [
    topContent,
    content,
    bottomContent
  ] });
}
var menu_default = (0,chunk_SF6SJHAM/* forwardRef */.Gp)(Menu);
Menu.displayName = "NextUI.Menu";



;// CONCATENATED MODULE: ./node_modules/@nextui-org/dropdown/dist/chunk-SXHEBZUY.mjs
"use client";


// src/dropdown-menu.tsx





function DropdownMenu(props, ref) {
  const { getMenuProps } = (0,chunk_WRRPXIUB/* useDropdownContext */.t)();
  return /* @__PURE__ */ (0,jsx_runtime_.jsx)(popover_content_default, { children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(focus_dist_import/* FocusScope */.MT, { contain: true, restoreFocus: true, children: /* @__PURE__ */ (0,jsx_runtime_.jsx)(menu_default, { ...getMenuProps(props, ref) }) }) });
}
var dropdown_menu_default = (0,chunk_SF6SJHAM/* forwardRef */.Gp)(DropdownMenu);
DropdownMenu.displayName = "NextUI.DropdownMenu";




/***/ }),

/***/ 52533:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K: () => (/* binding */ DropdownProvider),
/* harmony export */   t: () => (/* binding */ useDropdownContext)
/* harmony export */ });
/* harmony import */ var _nextui_org_react_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19830);
"use client";

// src/dropdown-context.ts

var [DropdownProvider, useDropdownContext] = (0,_nextui_org_react_utils__WEBPACK_IMPORTED_MODULE_0__/* .createContext */ .k)({
  name: "DropdownContext",
  errorMessage: "useDropdownContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Dropdown />`"
});




/***/ }),

/***/ 66243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ menu_item_base_default)
/* harmony export */ });
/* harmony import */ var _nextui_org_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22049);
"use client";

// src/base/menu-item-base.tsx

var MenuItemBase = _nextui_org_aria_utils__WEBPACK_IMPORTED_MODULE_0__/* .Item */ .ck;
var menu_item_base_default = MenuItemBase;




/***/ }),

/***/ 26730:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   H: () => (/* binding */ PopoverProvider),
/* harmony export */   l: () => (/* binding */ usePopoverContext)
/* harmony export */ });
/* harmony import */ var _nextui_org_react_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19830);
"use client";

// src/popover-context.ts

var [PopoverProvider, usePopoverContext] = (0,_nextui_org_react_utils__WEBPACK_IMPORTED_MODULE_0__/* .createContext */ .k)({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
});




/***/ }),

/***/ 64480:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  z: () => (/* binding */ filterDOMProps)
});

;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-MDCHOOWF.mjs
// src/dom-props.ts
var DOMPropNames = /* @__PURE__ */ new Set([
  "id",
  "type",
  "style",
  "title",
  "role",
  "tabIndex",
  "htmlFor",
  "width",
  "height",
  "abbr",
  "accept",
  "acceptCharset",
  "accessKey",
  "action",
  "allowFullScreen",
  "allowTransparency",
  "alt",
  "async",
  "autoComplete",
  "autoFocus",
  "autoPlay",
  "cellPadding",
  "cellSpacing",
  "challenge",
  "charset",
  "checked",
  "cite",
  "class",
  "className",
  "cols",
  "colSpan",
  "command",
  "content",
  "contentEditable",
  "contextMenu",
  "controls",
  "coords",
  "crossOrigin",
  "data",
  "dateTime",
  "default",
  "defer",
  "dir",
  "disabled",
  "download",
  "draggable",
  "dropzone",
  "encType",
  "for",
  "form",
  "formAction",
  "formEncType",
  "formMethod",
  "formNoValidate",
  "formTarget",
  "frameBorder",
  "headers",
  "hidden",
  "high",
  "href",
  "hrefLang",
  "httpEquiv",
  "icon",
  "inputMode",
  "isMap",
  "itemId",
  "itemProp",
  "itemRef",
  "itemScope",
  "itemType",
  "kind",
  "label",
  "lang",
  "list",
  "loop",
  "manifest",
  "max",
  "maxLength",
  "media",
  "mediaGroup",
  "method",
  "min",
  "minLength",
  "multiple",
  "muted",
  "name",
  "noValidate",
  "open",
  "optimum",
  "pattern",
  "ping",
  "placeholder",
  "poster",
  "preload",
  "radioGroup",
  "referrerPolicy",
  "readOnly",
  "rel",
  "required",
  "rows",
  "rowSpan",
  "sandbox",
  "scope",
  "scoped",
  "scrolling",
  "seamless",
  "selected",
  "shape",
  "size",
  "sizes",
  "slot",
  "sortable",
  "span",
  "spellCheck",
  "src",
  "srcDoc",
  "srcSet",
  "start",
  "step",
  "target",
  "translate",
  "typeMustMatch",
  "useMap",
  "value",
  "wmode",
  "wrap"
]);
var DOMEventNames = /* @__PURE__ */ new Set([
  "onCopy",
  "onCut",
  "onPaste",
  "onLoad",
  "onError",
  "onWheel",
  "onScroll",
  "onCompositionEnd",
  "onCompositionStart",
  "onCompositionUpdate",
  "onKeyDown",
  "onKeyPress",
  "onKeyUp",
  "onFocus",
  "onBlur",
  "onChange",
  "onInput",
  "onSubmit",
  "onClick",
  "onContextMenu",
  "onDoubleClick",
  "onDrag",
  "onDragEnd",
  "onDragEnter",
  "onDragExit",
  "onDragLeave",
  "onDragOver",
  "onDragStart",
  "onDrop",
  "onMouseDown",
  "onMouseEnter",
  "onMouseLeave",
  "onMouseMove",
  "onMouseOut",
  "onMouseOver",
  "onMouseUp",
  "onPointerDown",
  "onPointerEnter",
  "onPointerLeave",
  "onPointerUp",
  "onSelect",
  "onTouchCancel",
  "onTouchEnd",
  "onTouchMove",
  "onTouchStart",
  "onAnimationStart",
  "onAnimationEnd",
  "onAnimationIteration",
  "onTransitionEnd"
]);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/react-rsc-utils/dist/chunk-BSXPKUBX.mjs


// src/filter-dom-props.ts
var propRe = /^(data-.*)$/;
var ariaRe = /^(aria-.*)$/;
var funcRe = /^(on[A-Z].*)$/;
function filterDOMProps(props, opts = {}) {
  let { labelable = true, enabled = true, propNames, omitPropNames, omitEventNames } = opts;
  let filteredProps = {};
  if (!enabled) {
    return props;
  }
  for (const prop in props) {
    if (omitPropNames == null ? void 0 : omitPropNames.has(prop)) {
      continue;
    }
    if ((omitEventNames == null ? void 0 : omitEventNames.has(prop)) && funcRe.test(prop)) {
      continue;
    }
    if (funcRe.test(prop) && !DOMEventNames.has(prop)) {
      continue;
    }
    if (Object.prototype.hasOwnProperty.call(props, prop) && (DOMPropNames.has(prop) || labelable && ariaRe.test(prop) || (propNames == null ? void 0 : propNames.has(prop)) || propRe.test(prop)) || funcRe.test(prop)) {
      filteredProps[prop] = props[prop];
    }
  }
  return filteredProps;
}




/***/ }),

/***/ 3595:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gy: () => (/* binding */ useDOMRef)
/* harmony export */ });
/* unused harmony exports canUseDOM, isBrowser, getUserAgentBrowser, getUserAgentOS, detectDeviceType, detectOS, detectBrowser, detectTouch, createDOMRef, createFocusableRef, useFocusableRef, useSyncRef */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
"use client";

// src/dom.ts

function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
function getUserAgentBrowser(navigator) {
  const { userAgent: ua, vendor } = navigator;
  const android = /(android)/i.test(ua);
  switch (true) {
    case /CriOS/.test(ua):
      return "Chrome for iOS";
    case /Edg\//.test(ua):
      return "Edge";
    case (android && /Silk\//.test(ua)):
      return "Silk";
    case (/Chrome/.test(ua) && /Google Inc/.test(vendor)):
      return "Chrome";
    case /Firefox\/\d+\.\d+$/.test(ua):
      return "Firefox";
    case android:
      return "AOSP";
    case /MSIE|Trident/.test(ua):
      return "IE";
    case (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(ua)):
      return "Safari";
    case /AppleWebKit/.test(ua):
      return "WebKit";
    default:
      return null;
  }
}
function getUserAgentOS(navigator) {
  const { userAgent: ua, platform } = navigator;
  switch (true) {
    case /Android/.test(ua):
      return "Android";
    case /iPhone|iPad|iPod/.test(platform):
      return "iOS";
    case /Win/.test(platform):
      return "Windows";
    case /Mac/.test(platform):
      return "Mac";
    case /CrOS/.test(ua):
      return "Chrome OS";
    case /Firefox/.test(ua):
      return "Firefox OS";
    default:
      return null;
  }
}
function detectDeviceType(navigator) {
  const { userAgent: ua } = navigator;
  if (/(tablet)|(iPad)|(Nexus 9)/i.test(ua))
    return "tablet";
  if (/(mobi)/i.test(ua))
    return "phone";
  return "desktop";
}
function detectOS(os) {
  if (!isBrowser)
    return false;
  return getUserAgentOS(window.navigator) === os;
}
function detectBrowser(browser) {
  if (!isBrowser)
    return false;
  return getUserAgentBrowser(window.navigator) === browser;
}
function detectTouch() {
  if (!isBrowser)
    return false;
  return window.ontouchstart === null && window.ontouchmove === null && window.ontouchend === null;
}
function createDOMRef(ref) {
  return {
    UNSAFE_getDOMNode() {
      return ref.current;
    }
  };
}
function createFocusableRef(domRef, focusableRef = domRef) {
  return {
    ...createDOMRef(domRef),
    focus() {
      if (focusableRef.current) {
        focusableRef.current.focus();
      }
    }
  };
}
function useDOMRef(ref) {
  const domRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, () => domRef.current);
  return domRef;
}
function useFocusableRef(ref, focusableRef) {
  const domRef = useRef(null);
  useImperativeHandle(ref, () => createFocusableRef(domRef, focusableRef));
  return domRef;
}
function useSyncRef(context, ref) {
  useLayoutEffect(() => {
    if (context && context.ref && ref && ref.current) {
      context.ref.current = ref.current;
      return () => {
        var _a;
        if ((_a = context.ref) == null ? void 0 : _a.current) {
          context.ref.current = null;
        }
      };
    }
  }, [context, ref]);
}




/***/ }),

/***/ 19830:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ createContext2)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
"use client";

// src/context.ts

function createContext2(options = {}) {
  const {
    strict = true,
    errorMessage = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name
  } = options;
  const Context = react__WEBPACK_IMPORTED_MODULE_0__.createContext(void 0);
  Context.displayName = name;
  function useContext2() {
    var _a;
    const context = react__WEBPACK_IMPORTED_MODULE_0__.useContext(Context);
    if (!context && strict) {
      const error = new Error(errorMessage);
      error.name = "ContextError";
      (_a = Error.captureStackTrace) == null ? void 0 : _a.call(Error, error, useContext2);
      throw error;
    }
    return context;
  }
  return [Context.Provider, useContext2, Context];
}




/***/ }),

/***/ 61145:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ clsx)
/* harmony export */ });
// src/clsx.ts
function toVal(mix) {
  var k, y, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if (y = toVal(mix[k])) {
            str && (str += " ");
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += " ");
          str += k;
        }
      }
    }
  }
  return str;
}
function clsx(...args) {
  var i = 0, tmp, x, str = "";
  while (i < args.length) {
    if (tmp = args[i++]) {
      if (x = toVal(tmp)) {
        str && (str += " ");
        str += x;
      }
    }
  }
  return str;
}




/***/ }),

/***/ 91665:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Os: () => (/* binding */ removeEvents),
/* harmony export */   QI: () => (/* binding */ getUniqueID)
/* harmony export */ });
/* unused harmony exports capitalize, callAllHandlers, callAll, extractProperty */
// src/functions.ts
var capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
function callAllHandlers(...fns) {
  return function func(event) {
    fns.some((fn) => {
      fn == null ? void 0 : fn(event);
      return event == null ? void 0 : event.defaultPrevented;
    });
  };
}
function callAll(...fns) {
  return function mergedFn(arg) {
    fns.forEach((fn) => {
      fn == null ? void 0 : fn(arg);
    });
  };
}
function extractProperty(key, defaultValue, ...objs) {
  let result = defaultValue;
  for (const obj of objs) {
    if (obj && key in obj && !!obj[key]) {
      result = obj[key];
    }
  }
  return result;
}
function getUniqueID(prefix) {
  return `${prefix}-${Math.floor(Math.random() * 1e6)}`;
}
function removeEvents(input) {
  for (const key in input) {
    if (key.startsWith("on")) {
      delete input[key];
    }
  }
  return input;
}




/***/ }),

/***/ 77241:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PB: () => (/* binding */ dataAttr),
/* harmony export */   mf: () => (/* binding */ isFunction)
/* harmony export */ });
/* unused harmony exports __DEV__, __TEST__, isArray, isEmptyArray, isObject, isEmptyObject, isEmpty, isNumeric */
// src/assertion.ts
var __DEV__ = (/* unused pure expression or super */ null && ("production" !== "production"));
var __TEST__ = (/* unused pure expression or super */ null && ("production" === "test"));
function isArray(value) {
  return Array.isArray(value);
}
function isEmptyArray(value) {
  return isArray(value) && value.length === 0;
}
function isObject(value) {
  const type = typeof value;
  return value != null && (type === "object" || type === "function") && !isArray(value);
}
function isEmptyObject(value) {
  return isObject(value) && Object.keys(value).length === 0;
}
function isEmpty(value) {
  if (isArray(value))
    return isEmptyArray(value);
  if (isObject(value))
    return isEmptyObject(value);
  if (value == null || value === "")
    return true;
  return false;
}
function isFunction(value) {
  return typeof value === "function";
}
var dataAttr = (condition) => condition ? "true" : void 0;
var isNumeric = (value) => value != null && parseInt(value.toString(), 10) > 0;




/***/ }),

/***/ 68973:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Gp: () => (/* binding */ forwardRef),
/* harmony export */   cn: () => (/* binding */ cn),
/* harmony export */   oe: () => (/* binding */ mapPropsVariants)
/* harmony export */ });
/* unused harmony exports toIterator, mapPropsVariantsWithCommon */
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(398);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
// src/utils.ts


function forwardRef(component) {
  return (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(component);
}
var toIterator = (obj) => {
  return {
    ...obj,
    [Symbol.iterator]: function() {
      const keys = Object.keys(this);
      let index = 0;
      return {
        next: () => {
          if (index >= keys.length) {
            return { done: true };
          }
          const key = keys[index];
          const value = this[key];
          index++;
          return { value: { key, value }, done: false };
        }
      };
    }
  };
};
var mapPropsVariants = (props, variantKeys, removeVariantProps = true) => {
  if (!variantKeys) {
    return [props, {}];
  }
  const picked = variantKeys.reduce((acc, key) => {
    if (key in props) {
      return { ...acc, [key]: props[key] };
    } else {
      return acc;
    }
  }, {});
  if (removeVariantProps) {
    const omitted = Object.keys(props).filter((key) => !variantKeys.includes(key)).reduce((acc, key) => ({ ...acc, [key]: props[key] }), {});
    return [omitted, picked];
  } else {
    return [props, picked];
  }
};
var mapPropsVariantsWithCommon = (originalProps, variantKeys, commonKeys) => {
  const props = Object.keys(originalProps).filter((key) => !variantKeys.includes(key) || (commonKeys == null ? void 0 : commonKeys.includes(key))).reduce((acc, key) => ({ ...acc, [key]: originalProps[key] }), {});
  const variants = variantKeys.reduce(
    (acc, key) => ({ ...acc, [key]: originalProps[key] }),
    {}
  );
  return [props, variants];
};
var cn = clsx__WEBPACK_IMPORTED_MODULE_0__;




/***/ }),

/***/ 28737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   J: () => (/* binding */ colorVariants)
/* harmony export */ });
// src/utils/variants.ts
var solid = {
  default: "bg-default text-default-foreground",
  primary: "bg-primary text-primary-foreground",
  secondary: "bg-secondary text-secondary-foreground",
  success: "bg-success text-success-foreground",
  warning: "bg-warning text-warning-foreground",
  danger: "bg-danger text-danger-foreground",
  foreground: "bg-foreground text-background"
};
var shadow = {
  default: "shadow-lg shadow-default/50 bg-default text-default-foreground",
  primary: "shadow-lg shadow-primary/40 bg-primary text-primary-foreground",
  secondary: "shadow-lg shadow-secondary/40 bg-secondary text-secondary-foreground",
  success: "shadow-lg shadow-success/40 bg-success text-success-foreground",
  warning: "shadow-lg shadow-warning/40 bg-warning text-warning-foreground",
  danger: "shadow-lg shadow-danger/40 bg-danger text-danger-foreground",
  foreground: "shadow-lg shadow-foreground/40 bg-foreground text-background"
};
var bordered = {
  default: "bg-transparent border-default text-foreground",
  primary: "bg-transparent border-primary text-primary",
  secondary: "bg-transparent border-secondary text-secondary",
  success: "bg-transparent border-success text-success",
  warning: "bg-transparent border-warning text-warning",
  danger: "bg-transparent border-danger text-danger",
  foreground: "bg-transparent border-foreground text-foreground"
};
var flat = {
  default: "bg-default/40 text-default-foreground",
  primary: "bg-primary/20 text-primary",
  secondary: "bg-secondary/20 text-secondary",
  success: "bg-success/20 text-success-600 dark:text-success",
  warning: "bg-warning/20 text-warning-600 dark:text-warning",
  danger: "bg-danger/20 text-danger dark:text-danger-500",
  foreground: "bg-foreground/10 text-foreground"
};
var faded = {
  default: "border-default bg-default-100 text-default-foreground",
  primary: "border-default bg-default-100 text-primary",
  secondary: "border-default bg-default-100 text-secondary",
  success: "border-default bg-default-100 text-success",
  warning: "border-default bg-default-100 text-warning",
  danger: "border-default bg-default-100 text-danger",
  foreground: "border-default bg-default-100 text-foreground"
};
var light = {
  default: "bg-transparent text-default-foreground",
  primary: "bg-transparent text-primary",
  secondary: "bg-transparent text-secondary",
  success: "bg-transparent text-success",
  warning: "bg-transparent text-warning",
  danger: "bg-transparent text-danger",
  foreground: "bg-transparent text-foreground"
};
var ghost = {
  default: "border-default text-default-foreground hover:!bg-default",
  primary: "border-primary text-primary hover:!text-primary-foreground hover:!bg-primary",
  secondary: "border-secondary text-secondary hover:text-secondary-foreground hover:!bg-secondary",
  success: "border-success text-success hover:!text-success-foreground hover:!bg-success",
  warning: "border-warning text-warning hover:!text-warning-foreground hover:!bg-warning",
  danger: "border-danger text-danger hover:!text-danger-foreground hover:!bg-danger",
  foreground: "border-foreground text-foreground hover:!bg-foreground"
};
var colorVariants = {
  solid,
  shadow,
  bordered,
  flat,
  faded,
  light,
  ghost
};




/***/ }),

/***/ 18383:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  tv: () => (/* binding */ tv)
});

;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-WA5F6AED.mjs
// src/types.ts
var spacingScaleKeys = [
  "0",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "3xl",
  "4xl",
  "5xl",
  "6xl",
  "7xl",
  "8xl",
  "9xl",
  "1",
  "2",
  "3",
  "3.5",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "20",
  "24",
  "28",
  "32",
  "36",
  "40",
  "44",
  "48",
  "52",
  "56",
  "60",
  "64",
  "72",
  "80",
  "96"
];
var mappedSpacingScaleKeys = spacingScaleKeys.map((key) => `unit-${key}`);



;// CONCATENATED MODULE: ./node_modules/tailwind-variants/dist/chunk-JXBJZR5A.js
var chunk_JXBJZR5A_l=e=>typeof e=="boolean"?`${e}`:e===0?"0":e,chunk_JXBJZR5A_u=e=>!e||typeof e!="object"||Object.keys(e).length===0,chunk_JXBJZR5A_x=(e,o)=>JSON.stringify(e)===JSON.stringify(o),A=e=>typeof e=="boolean";function i(e,o){e.forEach(function(r){Array.isArray(r)?i(r,o):o.push(r);});}function y(e){let o=[];return i(e,o),o}var chunk_JXBJZR5A_a=(...e)=>y(e).filter(Boolean),p=(e,o)=>{let r={},c=Object.keys(e),f=Object.keys(o);for(let t of c)if(f.includes(t)){let s=e[t],n=o[t];typeof s=="object"&&typeof n=="object"?r[t]=p(s,n):Array.isArray(s)||Array.isArray(n)?r[t]=chunk_JXBJZR5A_a(n,s):r[t]=n+" "+s;}else r[t]=e[t];for(let t of f)c.includes(t)||(r[t]=o[t]);return r},chunk_JXBJZR5A_g=e=>!e||typeof e!="string"?e:e.replace(/\s+/g," ").trim();



;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/class-utils.mjs
var CLASS_PART_SEPARATOR = '-';
function createClassUtils(config) {
  var classMap = createClassMap(config);
  var conflictingClassGroups = config.conflictingClassGroups,
    _config$conflictingCl = config.conflictingClassGroupModifiers,
    conflictingClassGroupModifiers = _config$conflictingCl === void 0 ? {} : _config$conflictingCl;
  function getClassGroupId(className) {
    var classParts = className.split(CLASS_PART_SEPARATOR);
    // Classes like `-inset-1` produce an empty string as first classPart. We assume that classes for negative values are used correctly and remove it from classParts.
    if (classParts[0] === '' && classParts.length !== 1) {
      classParts.shift();
    }
    return getGroupRecursive(classParts, classMap) || getGroupIdForArbitraryProperty(className);
  }
  function getConflictingClassGroupIds(classGroupId, hasPostfixModifier) {
    var conflicts = conflictingClassGroups[classGroupId] || [];
    if (hasPostfixModifier && conflictingClassGroupModifiers[classGroupId]) {
      return [].concat(conflicts, conflictingClassGroupModifiers[classGroupId]);
    }
    return conflicts;
  }
  return {
    getClassGroupId: getClassGroupId,
    getConflictingClassGroupIds: getConflictingClassGroupIds
  };
}
function getGroupRecursive(classParts, classPartObject) {
  if (classParts.length === 0) {
    return classPartObject.classGroupId;
  }
  var currentClassPart = classParts[0];
  var nextClassPartObject = classPartObject.nextPart.get(currentClassPart);
  var classGroupFromNextClassPart = nextClassPartObject ? getGroupRecursive(classParts.slice(1), nextClassPartObject) : undefined;
  if (classGroupFromNextClassPart) {
    return classGroupFromNextClassPart;
  }
  if (classPartObject.validators.length === 0) {
    return undefined;
  }
  var classRest = classParts.join(CLASS_PART_SEPARATOR);
  return classPartObject.validators.find(function (_ref) {
    var validator = _ref.validator;
    return validator(classRest);
  })?.classGroupId;
}
var arbitraryPropertyRegex = /^\[(.+)\]$/;
function getGroupIdForArbitraryProperty(className) {
  if (arbitraryPropertyRegex.test(className)) {
    var arbitraryPropertyClassName = arbitraryPropertyRegex.exec(className)[1];
    var property = arbitraryPropertyClassName?.substring(0, arbitraryPropertyClassName.indexOf(':'));
    if (property) {
      // I use two dots here because one dot is used as prefix for class groups in plugins
      return 'arbitrary..' + property;
    }
  }
}
/**
 * Exported for testing only
 */
function createClassMap(config) {
  var theme = config.theme,
    prefix = config.prefix;
  var classMap = {
    nextPart: new Map(),
    validators: []
  };
  var prefixedClassGroupEntries = getPrefixedClassGroupEntries(Object.entries(config.classGroups), prefix);
  prefixedClassGroupEntries.forEach(function (_ref2) {
    var classGroupId = _ref2[0],
      classGroup = _ref2[1];
    processClassesRecursively(classGroup, classMap, classGroupId, theme);
  });
  return classMap;
}
function processClassesRecursively(classGroup, classPartObject, classGroupId, theme) {
  classGroup.forEach(function (classDefinition) {
    if (typeof classDefinition === 'string') {
      var classPartObjectToEdit = classDefinition === '' ? classPartObject : getPart(classPartObject, classDefinition);
      classPartObjectToEdit.classGroupId = classGroupId;
      return;
    }
    if (typeof classDefinition === 'function') {
      if (isThemeGetter(classDefinition)) {
        processClassesRecursively(classDefinition(theme), classPartObject, classGroupId, theme);
        return;
      }
      classPartObject.validators.push({
        validator: classDefinition,
        classGroupId: classGroupId
      });
      return;
    }
    Object.entries(classDefinition).forEach(function (_ref3) {
      var key = _ref3[0],
        classGroup = _ref3[1];
      processClassesRecursively(classGroup, getPart(classPartObject, key), classGroupId, theme);
    });
  });
}
function getPart(classPartObject, path) {
  var currentClassPartObject = classPartObject;
  path.split(CLASS_PART_SEPARATOR).forEach(function (pathPart) {
    if (!currentClassPartObject.nextPart.has(pathPart)) {
      currentClassPartObject.nextPart.set(pathPart, {
        nextPart: new Map(),
        validators: []
      });
    }
    currentClassPartObject = currentClassPartObject.nextPart.get(pathPart);
  });
  return currentClassPartObject;
}
function isThemeGetter(func) {
  return func.isThemeGetter;
}
function getPrefixedClassGroupEntries(classGroupEntries, prefix) {
  if (!prefix) {
    return classGroupEntries;
  }
  return classGroupEntries.map(function (_ref4) {
    var classGroupId = _ref4[0],
      classGroup = _ref4[1];
    var prefixedClassGroup = classGroup.map(function (classDefinition) {
      if (typeof classDefinition === 'string') {
        return prefix + classDefinition;
      }
      if (typeof classDefinition === 'object') {
        return Object.fromEntries(Object.entries(classDefinition).map(function (_ref5) {
          var key = _ref5[0],
            value = _ref5[1];
          return [prefix + key, value];
        }));
      }
      return classDefinition;
    });
    return [classGroupId, prefixedClassGroup];
  });
}


//# sourceMappingURL=class-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/lru-cache.mjs
// LRU cache inspired from hashlru (https://github.com/dominictarr/hashlru/blob/v1.0.4/index.js) but object replaced with Map to improve performance
function createLruCache(maxCacheSize) {
  if (maxCacheSize < 1) {
    return {
      get: function get() {
        return undefined;
      },
      set: function set() {}
    };
  }
  var cacheSize = 0;
  var cache = new Map();
  var previousCache = new Map();
  function update(key, value) {
    cache.set(key, value);
    cacheSize++;
    if (cacheSize > maxCacheSize) {
      cacheSize = 0;
      previousCache = cache;
      cache = new Map();
    }
  }
  return {
    get: function get(key) {
      var value = cache.get(key);
      if (value !== undefined) {
        return value;
      }
      if ((value = previousCache.get(key)) !== undefined) {
        update(key, value);
        return value;
      }
    },
    set: function set(key, value) {
      if (cache.has(key)) {
        cache.set(key, value);
      } else {
        update(key, value);
      }
    }
  };
}


//# sourceMappingURL=lru-cache.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/modifier-utils.mjs
var IMPORTANT_MODIFIER = '!';
function createSplitModifiers(config) {
  var separator = config.separator || ':';
  var isSeparatorSingleCharacter = separator.length === 1;
  var firstSeparatorCharacter = separator[0];
  var separatorLength = separator.length;
  // splitModifiers inspired by https://github.com/tailwindlabs/tailwindcss/blob/v3.2.2/src/util/splitAtTopLevelOnly.js
  return function splitModifiers(className) {
    var modifiers = [];
    var bracketDepth = 0;
    var modifierStart = 0;
    var postfixModifierPosition;
    for (var index = 0; index < className.length; index++) {
      var currentCharacter = className[index];
      if (bracketDepth === 0) {
        if (currentCharacter === firstSeparatorCharacter && (isSeparatorSingleCharacter || className.slice(index, index + separatorLength) === separator)) {
          modifiers.push(className.slice(modifierStart, index));
          modifierStart = index + separatorLength;
          continue;
        }
        if (currentCharacter === '/') {
          postfixModifierPosition = index;
          continue;
        }
      }
      if (currentCharacter === '[') {
        bracketDepth++;
      } else if (currentCharacter === ']') {
        bracketDepth--;
      }
    }
    var baseClassNameWithImportantModifier = modifiers.length === 0 ? className : className.substring(modifierStart);
    var hasImportantModifier = baseClassNameWithImportantModifier.startsWith(IMPORTANT_MODIFIER);
    var baseClassName = hasImportantModifier ? baseClassNameWithImportantModifier.substring(1) : baseClassNameWithImportantModifier;
    var maybePostfixModifierPosition = postfixModifierPosition && postfixModifierPosition > modifierStart ? postfixModifierPosition - modifierStart : undefined;
    return {
      modifiers: modifiers,
      hasImportantModifier: hasImportantModifier,
      baseClassName: baseClassName,
      maybePostfixModifierPosition: maybePostfixModifierPosition
    };
  };
}
/**
 * Sorts modifiers according to following schema:
 * - Predefined modifiers are sorted alphabetically
 * - When an arbitrary variant appears, it must be preserved which modifiers are before and after it
 */
function sortModifiers(modifiers) {
  if (modifiers.length <= 1) {
    return modifiers;
  }
  var sortedModifiers = [];
  var unsortedModifiers = [];
  modifiers.forEach(function (modifier) {
    var isArbitraryVariant = modifier[0] === '[';
    if (isArbitraryVariant) {
      sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort().concat([modifier]));
      unsortedModifiers = [];
    } else {
      unsortedModifiers.push(modifier);
    }
  });
  sortedModifiers.push.apply(sortedModifiers, unsortedModifiers.sort());
  return sortedModifiers;
}


//# sourceMappingURL=modifier-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/config-utils.mjs




function createConfigUtils(config) {
  return {
    cache: createLruCache(config.cacheSize),
    splitModifiers: createSplitModifiers(config),
    ...createClassUtils(config)
  };
}


//# sourceMappingURL=config-utils.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-classlist.mjs


var SPLIT_CLASSES_REGEX = /\s+/;
function mergeClassList(classList, configUtils) {
  var splitModifiers = configUtils.splitModifiers,
    getClassGroupId = configUtils.getClassGroupId,
    getConflictingClassGroupIds = configUtils.getConflictingClassGroupIds;
  /**
   * Set of classGroupIds in following format:
   * `{importantModifier}{variantModifiers}{classGroupId}`
   * @example 'float'
   * @example 'hover:focus:bg-color'
   * @example 'md:!pr'
   */
  var classGroupsInConflict = new Set();
  return classList.trim().split(SPLIT_CLASSES_REGEX).map(function (originalClassName) {
    var _splitModifiers = splitModifiers(originalClassName),
      modifiers = _splitModifiers.modifiers,
      hasImportantModifier = _splitModifiers.hasImportantModifier,
      baseClassName = _splitModifiers.baseClassName,
      maybePostfixModifierPosition = _splitModifiers.maybePostfixModifierPosition;
    var classGroupId = getClassGroupId(maybePostfixModifierPosition ? baseClassName.substring(0, maybePostfixModifierPosition) : baseClassName);
    var hasPostfixModifier = Boolean(maybePostfixModifierPosition);
    if (!classGroupId) {
      if (!maybePostfixModifierPosition) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      classGroupId = getClassGroupId(baseClassName);
      if (!classGroupId) {
        return {
          isTailwindClass: false,
          originalClassName: originalClassName
        };
      }
      hasPostfixModifier = false;
    }
    var variantModifier = sortModifiers(modifiers).join(':');
    var modifierId = hasImportantModifier ? variantModifier + IMPORTANT_MODIFIER : variantModifier;
    return {
      isTailwindClass: true,
      modifierId: modifierId,
      classGroupId: classGroupId,
      originalClassName: originalClassName,
      hasPostfixModifier: hasPostfixModifier
    };
  }).reverse()
  // Last class in conflict wins, so we need to filter conflicting classes in reverse order.
  .filter(function (parsed) {
    if (!parsed.isTailwindClass) {
      return true;
    }
    var modifierId = parsed.modifierId,
      classGroupId = parsed.classGroupId,
      hasPostfixModifier = parsed.hasPostfixModifier;
    var classId = modifierId + classGroupId;
    if (classGroupsInConflict.has(classId)) {
      return false;
    }
    classGroupsInConflict.add(classId);
    getConflictingClassGroupIds(classGroupId, hasPostfixModifier).forEach(function (group) {
      return classGroupsInConflict.add(modifierId + group);
    });
    return true;
  }).reverse().map(function (parsed) {
    return parsed.originalClassName;
  }).join(' ');
}


//# sourceMappingURL=merge-classlist.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-join.mjs
/**
 * The code in this file is copied from https://github.com/lukeed/clsx and modified to suit the needs of tailwind-merge better.
 *
 * Specifically:
 * - Runtime code from https://github.com/lukeed/clsx/blob/v1.2.1/src/index.js
 * - TypeScript types from https://github.com/lukeed/clsx/blob/v1.2.1/clsx.d.ts
 *
 * Original code has MIT license: Copyright (c) Luke Edwards <luke.edwards05@gmail.com> (lukeed.com)
 */
function twJoin() {
  var index = 0;
  var argument;
  var resolvedValue;
  var string = '';
  while (index < arguments.length) {
    if (argument = arguments[index++]) {
      if (resolvedValue = toValue(argument)) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}
function toValue(mix) {
  if (typeof mix === 'string') {
    return mix;
  }
  var resolvedValue;
  var string = '';
  for (var k = 0; k < mix.length; k++) {
    if (mix[k]) {
      if (resolvedValue = toValue(mix[k])) {
        string && (string += ' ');
        string += resolvedValue;
      }
    }
  }
  return string;
}


//# sourceMappingURL=tw-join.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/create-tailwind-merge.mjs




function createTailwindMerge() {
  for (var _len = arguments.length, createConfig = new Array(_len), _key = 0; _key < _len; _key++) {
    createConfig[_key] = arguments[_key];
  }
  var configUtils;
  var cacheGet;
  var cacheSet;
  var functionToCall = initTailwindMerge;
  function initTailwindMerge(classList) {
    var firstCreateConfig = createConfig[0],
      restCreateConfig = createConfig.slice(1);
    var config = restCreateConfig.reduce(function (previousConfig, createConfigCurrent) {
      return createConfigCurrent(previousConfig);
    }, firstCreateConfig());
    configUtils = createConfigUtils(config);
    cacheGet = configUtils.cache.get;
    cacheSet = configUtils.cache.set;
    functionToCall = tailwindMerge;
    return tailwindMerge(classList);
  }
  function tailwindMerge(classList) {
    var cachedResult = cacheGet(classList);
    if (cachedResult) {
      return cachedResult;
    }
    var result = mergeClassList(classList, configUtils);
    cacheSet(classList, result);
    return result;
  }
  return function callTailwindMerge() {
    return functionToCall(twJoin.apply(null, arguments));
  };
}


//# sourceMappingURL=create-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/from-theme.mjs
function fromTheme(key) {
  var themeGetter = function themeGetter(theme) {
    return theme[key] || [];
  };
  themeGetter.isThemeGetter = true;
  return themeGetter;
}


//# sourceMappingURL=from-theme.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/validators.mjs
var arbitraryValueRegex = /^\[(?:([a-z-]+):)?(.+)\]$/i;
var fractionRegex = /^\d+\/\d+$/;
var stringLengths = /*#__PURE__*/new Set(['px', 'full', 'screen']);
var tshirtUnitRegex = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/;
var lengthUnitRegex = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/;
// Shadow always begins with x and y offset separated by underscore
var shadowRegex = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;
function isLength(value) {
  return isNumber(value) || stringLengths.has(value) || fractionRegex.test(value) || isArbitraryLength(value);
}
function isArbitraryLength(value) {
  return getIsArbitraryValue(value, 'length', isLengthOnly);
}
function isArbitrarySize(value) {
  return getIsArbitraryValue(value, 'size', isNever);
}
function isArbitraryPosition(value) {
  return getIsArbitraryValue(value, 'position', isNever);
}
function isArbitraryUrl(value) {
  return getIsArbitraryValue(value, 'url', isUrl);
}
function isArbitraryNumber(value) {
  return getIsArbitraryValue(value, 'number', isNumber);
}
/**
 * @deprecated Will be removed in next major version. Use `isArbitraryNumber` instead.
 */
var isArbitraryWeight = (/* unused pure expression or super */ null && (isArbitraryNumber));
function isNumber(value) {
  return !Number.isNaN(Number(value));
}
function isPercent(value) {
  return value.endsWith('%') && isNumber(value.slice(0, -1));
}
function isInteger(value) {
  return isIntegerOnly(value) || getIsArbitraryValue(value, 'number', isIntegerOnly);
}
function isArbitraryValue(value) {
  return arbitraryValueRegex.test(value);
}
function isAny() {
  return true;
}
function isTshirtSize(value) {
  return tshirtUnitRegex.test(value);
}
function isArbitraryShadow(value) {
  return getIsArbitraryValue(value, '', isShadow);
}
function getIsArbitraryValue(value, label, testValue) {
  var result = arbitraryValueRegex.exec(value);
  if (result) {
    if (result[1]) {
      return result[1] === label;
    }
    return testValue(result[2]);
  }
  return false;
}
function isLengthOnly(value) {
  return lengthUnitRegex.test(value);
}
function isNever() {
  return false;
}
function isUrl(value) {
  return value.startsWith('url(');
}
function isIntegerOnly(value) {
  return Number.isInteger(Number(value));
}
function isShadow(value) {
  return shadowRegex.test(value);
}


//# sourceMappingURL=validators.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/default-config.mjs



function getDefaultConfig() {
  var colors = fromTheme('colors');
  var spacing = fromTheme('spacing');
  var blur = fromTheme('blur');
  var brightness = fromTheme('brightness');
  var borderColor = fromTheme('borderColor');
  var borderRadius = fromTheme('borderRadius');
  var borderSpacing = fromTheme('borderSpacing');
  var borderWidth = fromTheme('borderWidth');
  var contrast = fromTheme('contrast');
  var grayscale = fromTheme('grayscale');
  var hueRotate = fromTheme('hueRotate');
  var invert = fromTheme('invert');
  var gap = fromTheme('gap');
  var gradientColorStops = fromTheme('gradientColorStops');
  var gradientColorStopPositions = fromTheme('gradientColorStopPositions');
  var inset = fromTheme('inset');
  var margin = fromTheme('margin');
  var opacity = fromTheme('opacity');
  var padding = fromTheme('padding');
  var saturate = fromTheme('saturate');
  var scale = fromTheme('scale');
  var sepia = fromTheme('sepia');
  var skew = fromTheme('skew');
  var space = fromTheme('space');
  var translate = fromTheme('translate');
  var getOverscroll = function getOverscroll() {
    return ['auto', 'contain', 'none'];
  };
  var getOverflow = function getOverflow() {
    return ['auto', 'hidden', 'clip', 'visible', 'scroll'];
  };
  var getSpacingWithAutoAndArbitrary = function getSpacingWithAutoAndArbitrary() {
    return ['auto', isArbitraryValue, spacing];
  };
  var getSpacingWithArbitrary = function getSpacingWithArbitrary() {
    return [isArbitraryValue, spacing];
  };
  var getLengthWithEmpty = function getLengthWithEmpty() {
    return ['', isLength];
  };
  var getNumberWithAutoAndArbitrary = function getNumberWithAutoAndArbitrary() {
    return ['auto', isNumber, isArbitraryValue];
  };
  var getPositions = function getPositions() {
    return ['bottom', 'center', 'left', 'left-bottom', 'left-top', 'right', 'right-bottom', 'right-top', 'top'];
  };
  var getLineStyles = function getLineStyles() {
    return ['solid', 'dashed', 'dotted', 'double', 'none'];
  };
  var getBlendModes = function getBlendModes() {
    return ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'color-burn', 'hard-light', 'soft-light', 'difference', 'exclusion', 'hue', 'saturation', 'color', 'luminosity', 'plus-lighter'];
  };
  var getAlign = function getAlign() {
    return ['start', 'end', 'center', 'between', 'around', 'evenly', 'stretch'];
  };
  var getZeroAndEmpty = function getZeroAndEmpty() {
    return ['', '0', isArbitraryValue];
  };
  var getBreaks = function getBreaks() {
    return ['auto', 'avoid', 'all', 'avoid-page', 'page', 'left', 'right', 'column'];
  };
  var getNumber = function getNumber() {
    return [isNumber, isArbitraryNumber];
  };
  var getNumberAndArbitrary = function getNumberAndArbitrary() {
    return [isNumber, isArbitraryValue];
  };
  return {
    cacheSize: 500,
    theme: {
      colors: [isAny],
      spacing: [isLength],
      blur: ['none', '', isTshirtSize, isArbitraryValue],
      brightness: getNumber(),
      borderColor: [colors],
      borderRadius: ['none', '', 'full', isTshirtSize, isArbitraryValue],
      borderSpacing: getSpacingWithArbitrary(),
      borderWidth: getLengthWithEmpty(),
      contrast: getNumber(),
      grayscale: getZeroAndEmpty(),
      hueRotate: getNumberAndArbitrary(),
      invert: getZeroAndEmpty(),
      gap: getSpacingWithArbitrary(),
      gradientColorStops: [colors],
      gradientColorStopPositions: [isPercent, isArbitraryLength],
      inset: getSpacingWithAutoAndArbitrary(),
      margin: getSpacingWithAutoAndArbitrary(),
      opacity: getNumber(),
      padding: getSpacingWithArbitrary(),
      saturate: getNumber(),
      scale: getNumber(),
      sepia: getZeroAndEmpty(),
      skew: getNumberAndArbitrary(),
      space: getSpacingWithArbitrary(),
      translate: getSpacingWithArbitrary()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ['auto', 'square', 'video', isArbitraryValue]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ['container'],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [isTshirtSize]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      'break-after': [{
        'break-after': getBreaks()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      'break-before': [{
        'break-before': getBreaks()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      'break-inside': [{
        'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column']
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      'box-decoration': [{
        'box-decoration': ['slice', 'clone']
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ['border', 'content']
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ['block', 'inline-block', 'inline', 'flex', 'inline-flex', 'table', 'inline-table', 'table-caption', 'table-cell', 'table-column', 'table-column-group', 'table-footer-group', 'table-header-group', 'table-row-group', 'table-row', 'flow-root', 'grid', 'inline-grid', 'contents', 'list-item', 'hidden'],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      "float": [{
        "float": ['right', 'left', 'none']
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ['left', 'right', 'both', 'none']
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ['isolate', 'isolation-auto'],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      'object-fit': [{
        object: ['contain', 'cover', 'fill', 'none', 'scale-down']
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      'object-position': [{
        object: [].concat(getPositions(), [isArbitraryValue])
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: getOverflow()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-x': [{
        'overflow-x': getOverflow()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      'overflow-y': [{
        'overflow-y': getOverflow()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: getOverscroll()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-x': [{
        'overscroll-x': getOverscroll()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      'overscroll-y': [{
        'overscroll-y': getOverscroll()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [inset]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-x': [{
        'inset-x': [inset]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      'inset-y': [{
        'inset-y': [inset]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [inset]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [inset]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [inset]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [inset]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [inset]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [inset]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ['visible', 'invisible', 'collapse'],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ['auto', isInteger]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: getSpacingWithAutoAndArbitrary()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      'flex-direction': [{
        flex: ['row', 'row-reverse', 'col', 'col-reverse']
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      'flex-wrap': [{
        flex: ['wrap', 'wrap-reverse', 'nowrap']
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ['1', 'auto', 'initial', 'none', isArbitraryValue]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: getZeroAndEmpty()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: getZeroAndEmpty()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ['first', 'last', 'none', isInteger]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      'grid-cols': [{
        'grid-cols': [isAny]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start-end': [{
        col: ['auto', {
          span: ['full', isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-start': [{
        'col-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      'col-end': [{
        'col-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      'grid-rows': [{
        'grid-rows': [isAny]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start-end': [{
        row: ['auto', {
          span: [isInteger]
        }, isArbitraryValue]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-start': [{
        'row-start': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      'row-end': [{
        'row-end': getNumberWithAutoAndArbitrary()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      'grid-flow': [{
        'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense']
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      'auto-cols': [{
        'auto-cols': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      'auto-rows': [{
        'auto-rows': ['auto', 'min', 'max', 'fr', isArbitraryValue]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [gap]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-x': [{
        'gap-x': [gap]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      'gap-y': [{
        'gap-y': [gap]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      'justify-content': [{
        justify: ['normal'].concat(getAlign())
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      'justify-items': [{
        'justify-items': ['start', 'end', 'center', 'stretch']
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      'justify-self': [{
        'justify-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      'align-content': [{
        content: ['normal'].concat(getAlign(), ['baseline'])
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      'align-items': [{
        items: ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      'align-self': [{
        self: ['auto', 'start', 'end', 'center', 'stretch', 'baseline']
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      'place-content': [{
        'place-content': [].concat(getAlign(), ['baseline'])
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      'place-items': [{
        'place-items': ['start', 'end', 'center', 'baseline', 'stretch']
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      'place-self': [{
        'place-self': ['auto', 'start', 'end', 'center', 'stretch']
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [padding]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [padding]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [padding]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [padding]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [padding]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [padding]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [padding]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [padding]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [padding]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [margin]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [margin]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [margin]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [margin]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [margin]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [margin]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [margin]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [margin]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [margin]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      'space-x': [{
        'space-x': [space]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-x-reverse': ['space-x-reverse'],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      'space-y': [{
        'space-y': [space]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      'space-y-reverse': ['space-y-reverse'],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ['auto', 'min', 'max', 'fit', isArbitraryValue, spacing]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      'min-w': [{
        'min-w': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      'max-w': [{
        'max-w': ['0', 'none', 'full', 'min', 'max', 'fit', 'prose', {
          screen: [isTshirtSize]
        }, isTshirtSize, isArbitraryValue]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [isArbitraryValue, spacing, 'auto', 'min', 'max', 'fit']
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      'min-h': [{
        'min-h': ['min', 'max', 'fit', isArbitraryValue, isLength]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      'max-h': [{
        'max-h': [isArbitraryValue, spacing, 'min', 'max', 'fit']
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      'font-size': [{
        text: ['base', isTshirtSize, isArbitraryLength]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      'font-smoothing': ['antialiased', 'subpixel-antialiased'],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      'font-style': ['italic', 'not-italic'],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      'font-weight': [{
        font: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black', isArbitraryNumber]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      'font-family': [{
        font: [isAny]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-normal': ['normal-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-ordinal': ['ordinal'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-slashed-zero': ['slashed-zero'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-figure': ['lining-nums', 'oldstyle-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-spacing': ['proportional-nums', 'tabular-nums'],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      'fvn-fraction': ['diagonal-fractions', 'stacked-fractons'],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest', isArbitraryValue]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      'line-clamp': [{
        'line-clamp': ['none', isNumber, isArbitraryNumber]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose', isArbitraryValue, isLength]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      'list-image': [{
        'list-image': ['none', isArbitraryValue]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      'list-style-type': [{
        list: ['none', 'disc', 'decimal', isArbitraryValue]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      'list-style-position': [{
        list: ['inside', 'outside']
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      'placeholder-color': [{
        placeholder: [colors]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      'placeholder-opacity': [{
        'placeholder-opacity': [opacity]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      'text-alignment': [{
        text: ['left', 'center', 'right', 'justify', 'start', 'end']
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      'text-color': [{
        text: [colors]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      'text-opacity': [{
        'text-opacity': [opacity]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      'text-decoration': ['underline', 'overline', 'line-through', 'no-underline'],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      'text-decoration-style': [{
        decoration: [].concat(getLineStyles(), ['wavy'])
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      'text-decoration-thickness': [{
        decoration: ['auto', 'from-font', isLength]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      'underline-offset': [{
        'underline-offset': ['auto', isArbitraryValue, isLength]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      'text-decoration-color': [{
        decoration: [colors]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      'text-transform': ['uppercase', 'lowercase', 'capitalize', 'normal-case'],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: getSpacingWithArbitrary()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      'vertical-align': [{
        align: ['baseline', 'top', 'middle', 'bottom', 'text-top', 'text-bottom', 'sub', 'super', isArbitraryValue]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ['normal', 'nowrap', 'pre', 'pre-line', 'pre-wrap', 'break-spaces']
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      "break": [{
        "break": ['normal', 'words', 'all', 'keep']
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ['none', 'manual', 'auto']
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ['none', isArbitraryValue]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      'bg-attachment': [{
        bg: ['fixed', 'local', 'scroll']
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      'bg-clip': [{
        'bg-clip': ['border', 'padding', 'content', 'text']
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      'bg-opacity': [{
        'bg-opacity': [opacity]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      'bg-origin': [{
        'bg-origin': ['border', 'padding', 'content']
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      'bg-position': [{
        bg: [].concat(getPositions(), [isArbitraryPosition])
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      'bg-repeat': [{
        bg: ['no-repeat', {
          repeat: ['', 'x', 'y', 'round', 'space']
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      'bg-size': [{
        bg: ['auto', 'cover', 'contain', isArbitrarySize]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      'bg-image': [{
        bg: ['none', {
          'gradient-to': ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl']
        }, isArbitraryUrl]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      'bg-color': [{
        bg: [colors]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from-pos': [{
        from: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via-pos': [{
        via: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to-pos': [{
        to: [gradientColorStopPositions]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-from': [{
        from: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-via': [{
        via: [gradientColorStops]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      'gradient-to': [{
        to: [gradientColorStops]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [borderRadius]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-s': [{
        'rounded-s': [borderRadius]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-e': [{
        'rounded-e': [borderRadius]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-t': [{
        'rounded-t': [borderRadius]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-r': [{
        'rounded-r': [borderRadius]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-b': [{
        'rounded-b': [borderRadius]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-l': [{
        'rounded-l': [borderRadius]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ss': [{
        'rounded-ss': [borderRadius]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-se': [{
        'rounded-se': [borderRadius]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-ee': [{
        'rounded-ee': [borderRadius]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-es': [{
        'rounded-es': [borderRadius]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tl': [{
        'rounded-tl': [borderRadius]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-tr': [{
        'rounded-tr': [borderRadius]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-br': [{
        'rounded-br': [borderRadius]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      'rounded-bl': [{
        'rounded-bl': [borderRadius]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w': [{
        border: [borderWidth]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-x': [{
        'border-x': [borderWidth]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-y': [{
        'border-y': [borderWidth]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-s': [{
        'border-s': [borderWidth]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-e': [{
        'border-e': [borderWidth]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-t': [{
        'border-t': [borderWidth]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-r': [{
        'border-r': [borderWidth]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-b': [{
        'border-b': [borderWidth]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      'border-w-l': [{
        'border-l': [borderWidth]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      'border-opacity': [{
        'border-opacity': [opacity]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      'border-style': [{
        border: [].concat(getLineStyles(), ['hidden'])
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x': [{
        'divide-x': [borderWidth]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-x-reverse': ['divide-x-reverse'],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y': [{
        'divide-y': [borderWidth]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      'divide-y-reverse': ['divide-y-reverse'],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      'divide-opacity': [{
        'divide-opacity': [opacity]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      'divide-style': [{
        divide: getLineStyles()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color': [{
        border: [borderColor]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-x': [{
        'border-x': [borderColor]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-y': [{
        'border-y': [borderColor]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-t': [{
        'border-t': [borderColor]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-r': [{
        'border-r': [borderColor]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-b': [{
        'border-b': [borderColor]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      'border-color-l': [{
        'border-l': [borderColor]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      'divide-color': [{
        divide: [borderColor]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      'outline-style': [{
        outline: [''].concat(getLineStyles())
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      'outline-offset': [{
        'outline-offset': [isArbitraryValue, isLength]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      'outline-w': [{
        outline: [isLength]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      'outline-color': [{
        outline: [colors]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w': [{
        ring: getLengthWithEmpty()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      'ring-w-inset': ['ring-inset'],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      'ring-color': [{
        ring: [colors]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      'ring-opacity': [{
        'ring-opacity': [opacity]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      'ring-offset-w': [{
        'ring-offset': [isLength]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      'ring-offset-color': [{
        'ring-offset': [colors]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ['', 'inner', 'none', isTshirtSize, isArbitraryShadow]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      'shadow-color': [{
        shadow: [isAny]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [opacity]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      'mix-blend': [{
        'mix-blend': getBlendModes()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      'bg-blend': [{
        'bg-blend': getBlendModes()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ['', 'none']
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [blur]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [brightness]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [contrast]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      'drop-shadow': [{
        'drop-shadow': ['', 'none', isTshirtSize, isArbitraryValue]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [grayscale]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      'hue-rotate': [{
        'hue-rotate': [hueRotate]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [invert]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [saturate]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [sepia]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      'backdrop-filter': [{
        'backdrop-filter': ['', 'none']
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      'backdrop-blur': [{
        'backdrop-blur': [blur]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      'backdrop-brightness': [{
        'backdrop-brightness': [brightness]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      'backdrop-contrast': [{
        'backdrop-contrast': [contrast]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      'backdrop-grayscale': [{
        'backdrop-grayscale': [grayscale]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      'backdrop-hue-rotate': [{
        'backdrop-hue-rotate': [hueRotate]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      'backdrop-invert': [{
        'backdrop-invert': [invert]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      'backdrop-opacity': [{
        'backdrop-opacity': [opacity]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      'backdrop-saturate': [{
        'backdrop-saturate': [saturate]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      'backdrop-sepia': [{
        'backdrop-sepia': [sepia]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      'border-collapse': [{
        border: ['collapse', 'separate']
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing': [{
        'border-spacing': [borderSpacing]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-x': [{
        'border-spacing-x': [borderSpacing]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      'border-spacing-y': [{
        'border-spacing-y': [borderSpacing]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      'table-layout': [{
        table: ['auto', 'fixed']
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ['top', 'bottom']
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ['none', 'all', '', 'colors', 'opacity', 'shadow', 'transform', isArbitraryValue]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: getNumberAndArbitrary()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ['linear', 'in', 'out', 'in-out', isArbitraryValue]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: getNumberAndArbitrary()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ['none', 'spin', 'ping', 'pulse', 'bounce', isArbitraryValue]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ['', 'gpu', 'none']
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [scale]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-x': [{
        'scale-x': [scale]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      'scale-y': [{
        'scale-y': [scale]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [isInteger, isArbitraryValue]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-x': [{
        'translate-x': [translate]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      'translate-y': [{
        'translate-y': [translate]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-x': [{
        'skew-x': [skew]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      'skew-y': [{
        'skew-y': [skew]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      'transform-origin': [{
        origin: ['center', 'top', 'top-right', 'right', 'bottom-right', 'bottom', 'bottom-left', 'left', 'top-left', isArbitraryValue]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ['auto', colors]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: ['appearance-none'],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ['auto', 'default', 'pointer', 'wait', 'text', 'move', 'help', 'not-allowed', 'none', 'context-menu', 'progress', 'cell', 'crosshair', 'vertical-text', 'alias', 'copy', 'no-drop', 'grab', 'grabbing', 'all-scroll', 'col-resize', 'row-resize', 'n-resize', 'e-resize', 's-resize', 'w-resize', 'ne-resize', 'nw-resize', 'se-resize', 'sw-resize', 'ew-resize', 'ns-resize', 'nesw-resize', 'nwse-resize', 'zoom-in', 'zoom-out', isArbitraryValue]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      'caret-color': [{
        caret: [colors]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      'pointer-events': [{
        'pointer-events': ['none', 'auto']
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ['none', 'y', 'x', '']
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      'scroll-behavior': [{
        scroll: ['auto', 'smooth']
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-m': [{
        'scroll-m': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mx': [{
        'scroll-mx': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-my': [{
        'scroll-my': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ms': [{
        'scroll-ms': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-me': [{
        'scroll-me': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mt': [{
        'scroll-mt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mr': [{
        'scroll-mr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-mb': [{
        'scroll-mb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      'scroll-ml': [{
        'scroll-ml': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-p': [{
        'scroll-p': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-px': [{
        'scroll-px': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-py': [{
        'scroll-py': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-ps': [{
        'scroll-ps': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pe': [{
        'scroll-pe': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pt': [{
        'scroll-pt': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pr': [{
        'scroll-pr': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pb': [{
        'scroll-pb': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      'scroll-pl': [{
        'scroll-pl': getSpacingWithArbitrary()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      'snap-align': [{
        snap: ['start', 'end', 'center', 'align-none']
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      'snap-stop': [{
        snap: ['normal', 'always']
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-type': [{
        snap: ['none', 'x', 'y', 'both']
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      'snap-strictness': [{
        snap: ['mandatory', 'proximity']
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ['auto', 'none', 'pinch-zoom', 'manipulation', {
          pan: ['x', 'left', 'right', 'y', 'up', 'down']
        }]
      }],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ['none', 'text', 'all', 'auto']
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      'will-change': [{
        'will-change': ['auto', 'scroll', 'contents', 'transform', isArbitraryValue]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [colors, 'none']
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      'stroke-w': [{
        stroke: [isLength, isArbitraryNumber]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [colors, 'none']
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ['sr-only', 'not-sr-only']
    },
    conflictingClassGroups: {
      overflow: ['overflow-x', 'overflow-y'],
      overscroll: ['overscroll-x', 'overscroll-y'],
      inset: ['inset-x', 'inset-y', 'start', 'end', 'top', 'right', 'bottom', 'left'],
      'inset-x': ['right', 'left'],
      'inset-y': ['top', 'bottom'],
      flex: ['basis', 'grow', 'shrink'],
      gap: ['gap-x', 'gap-y'],
      p: ['px', 'py', 'ps', 'pe', 'pt', 'pr', 'pb', 'pl'],
      px: ['pr', 'pl'],
      py: ['pt', 'pb'],
      m: ['mx', 'my', 'ms', 'me', 'mt', 'mr', 'mb', 'ml'],
      mx: ['mr', 'ml'],
      my: ['mt', 'mb'],
      'font-size': ['leading'],
      'fvn-normal': ['fvn-ordinal', 'fvn-slashed-zero', 'fvn-figure', 'fvn-spacing', 'fvn-fraction'],
      'fvn-ordinal': ['fvn-normal'],
      'fvn-slashed-zero': ['fvn-normal'],
      'fvn-figure': ['fvn-normal'],
      'fvn-spacing': ['fvn-normal'],
      'fvn-fraction': ['fvn-normal'],
      rounded: ['rounded-s', 'rounded-e', 'rounded-t', 'rounded-r', 'rounded-b', 'rounded-l', 'rounded-ss', 'rounded-se', 'rounded-ee', 'rounded-es', 'rounded-tl', 'rounded-tr', 'rounded-br', 'rounded-bl'],
      'rounded-s': ['rounded-ss', 'rounded-es'],
      'rounded-e': ['rounded-se', 'rounded-ee'],
      'rounded-t': ['rounded-tl', 'rounded-tr'],
      'rounded-r': ['rounded-tr', 'rounded-br'],
      'rounded-b': ['rounded-br', 'rounded-bl'],
      'rounded-l': ['rounded-tl', 'rounded-bl'],
      'border-spacing': ['border-spacing-x', 'border-spacing-y'],
      'border-w': ['border-w-s', 'border-w-e', 'border-w-t', 'border-w-r', 'border-w-b', 'border-w-l'],
      'border-w-x': ['border-w-r', 'border-w-l'],
      'border-w-y': ['border-w-t', 'border-w-b'],
      'border-color': ['border-color-t', 'border-color-r', 'border-color-b', 'border-color-l'],
      'border-color-x': ['border-color-r', 'border-color-l'],
      'border-color-y': ['border-color-t', 'border-color-b'],
      'scroll-m': ['scroll-mx', 'scroll-my', 'scroll-ms', 'scroll-me', 'scroll-mt', 'scroll-mr', 'scroll-mb', 'scroll-ml'],
      'scroll-mx': ['scroll-mr', 'scroll-ml'],
      'scroll-my': ['scroll-mt', 'scroll-mb'],
      'scroll-p': ['scroll-px', 'scroll-py', 'scroll-ps', 'scroll-pe', 'scroll-pt', 'scroll-pr', 'scroll-pb', 'scroll-pl'],
      'scroll-px': ['scroll-pr', 'scroll-pl'],
      'scroll-py': ['scroll-pt', 'scroll-pb']
    },
    conflictingClassGroupModifiers: {
      'font-size': ['leading']
    }
  };
}


//# sourceMappingURL=default-config.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/tw-merge.mjs



var twMerge = /*#__PURE__*/createTailwindMerge(getDefaultConfig);


//# sourceMappingURL=tw-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/merge-configs.mjs
/**
 * @param baseConfig Config where other config will be merged into. This object will be mutated.
 * @param configExtension Partial config to merge into the `baseConfig`.
 */
function mergeConfigs(baseConfig, configExtension) {
  for (var key in configExtension) {
    mergePropertyRecursively(baseConfig, key, configExtension[key]);
  }
  return baseConfig;
}
var merge_configs_hasOwnProperty = Object.prototype.hasOwnProperty;
var overrideTypes = /*#__PURE__*/new Set(['string', 'number', 'boolean']);
function mergePropertyRecursively(baseObject, mergeKey, mergeValue) {
  if (!merge_configs_hasOwnProperty.call(baseObject, mergeKey) || overrideTypes.has(typeof mergeValue) || mergeValue === null) {
    baseObject[mergeKey] = mergeValue;
    return;
  }
  if (Array.isArray(mergeValue) && Array.isArray(baseObject[mergeKey])) {
    baseObject[mergeKey] = baseObject[mergeKey].concat(mergeValue);
    return;
  }
  if (typeof mergeValue === 'object' && typeof baseObject[mergeKey] === 'object') {
    if (baseObject[mergeKey] === null) {
      baseObject[mergeKey] = mergeValue;
      return;
    }
    for (var nextKey in mergeValue) {
      mergePropertyRecursively(baseObject[mergeKey], nextKey, mergeValue[nextKey]);
    }
  }
}


//# sourceMappingURL=merge-configs.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-merge/dist/lib/extend-tailwind-merge.mjs




function extendTailwindMerge(configExtension) {
  for (var _len = arguments.length, createConfig = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    createConfig[_key - 1] = arguments[_key];
  }
  return typeof configExtension === 'function' ? createTailwindMerge.apply(void 0, [getDefaultConfig, configExtension].concat(createConfig)) : createTailwindMerge.apply(void 0, [function () {
    return mergeConfigs(getDefaultConfig(), configExtension);
  }].concat(createConfig));
}


//# sourceMappingURL=extend-tailwind-merge.mjs.map

;// CONCATENATED MODULE: ./node_modules/tailwind-variants/dist/index.js



var se={twMerge:!0,twMergeConfig:{},responsiveVariants:!1},_=s=>s||void 0,N=(...s)=>_(y(s).filter(Boolean).join(" ")),q=null,M={},F=!1,w=(...s)=>b$1=>b$1.twMerge?((!q||F)&&(F=!1,q=chunk_JXBJZR5A_u(M)?twMerge:extendTailwindMerge(M)),_(q(N(s)))):N(s),Z=(s,b)=>{for(let e in b)s.hasOwnProperty(e)?s[e]=N(s[e],b[e]):s[e]=b[e];return s},ie=(s,b$1)=>{let{extend:e=null,slots:j={},variants:U={},compoundVariants:C=[],compoundSlots:V=[],defaultVariants:W={}}=s,m={...se,...b$1},S=e!=null&&e.base?N(e.base,s==null?void 0:s.base):s==null?void 0:s.base,g$1=e!=null&&e.variants&&!chunk_JXBJZR5A_u(e.variants)?p(U,e.variants):U,A=e!=null&&e.defaultVariants&&!chunk_JXBJZR5A_u(e.defaultVariants)?{...e.defaultVariants,...W}:W;!chunk_JXBJZR5A_u(m.twMergeConfig)&&!chunk_JXBJZR5A_x(m.twMergeConfig,M)&&(F=!0,M=m.twMergeConfig);let O=chunk_JXBJZR5A_u(e==null?void 0:e.slots),$=chunk_JXBJZR5A_u(j)?{}:{base:N(s==null?void 0:s.base,O&&(e==null?void 0:e.base)),...j},h$1=O?$:Z({...e==null?void 0:e.slots},chunk_JXBJZR5A_u($)?{base:s==null?void 0:s.base}:$),v=l=>{if(chunk_JXBJZR5A_u(g$1)&&chunk_JXBJZR5A_u(j)&&O)return w(S,l==null?void 0:l.class,l==null?void 0:l.className)(m);if(C&&!Array.isArray(C))throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);if(V&&!Array.isArray(V))throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof V}`);let K=(t,n,a=[],i)=>{let r=a;if(typeof n=="string")r=r.concat(chunk_JXBJZR5A_g(n).split(" ").map(c=>`${t}:${c}`));else if(Array.isArray(n))r=r.concat(n.reduce((c,f)=>c.concat(`${t}:${f}`),[]));else if(typeof n=="object"&&typeof i=="string"){for(let c in n)if(n.hasOwnProperty(c)&&c===i){let f=n[c];if(f&&typeof f=="string"){let o=chunk_JXBJZR5A_g(f);r[i]?r[i]=r[i].concat(o.split(" ").map(u=>`${t}:${u}`)):r[i]=o.split(" ").map(u=>`${t}:${u}`);}else Array.isArray(f)&&f.length>0&&(r[i]=f.reduce((o,u)=>o.concat(`${t}:${u}`),[]));}}return r},z=(t,n=g$1,a$1=null,i=null)=>{var J;let r=n[t];if(!r||chunk_JXBJZR5A_u(r))return null;let c=(J=i==null?void 0:i[t])!=null?J:l==null?void 0:l[t];if(c===null)return null;let f=chunk_JXBJZR5A_l(c),o=Array.isArray(m.responsiveVariants)&&m.responsiveVariants.length>0||m.responsiveVariants===!0,u=A==null?void 0:A[t],d=[];if(typeof f=="object"&&o)for(let[k,L]of Object.entries(f)){let ae=r[L];if(k==="initial"){u=L;continue}Array.isArray(m.responsiveVariants)&&!m.responsiveVariants.includes(k)||(d=K(k,ae,d,a$1));}let T=r[f]||r[chunk_JXBJZR5A_l(u)];return typeof d=="object"&&typeof a$1=="string"&&d[a$1]?Z(d,T):d.length>0?(d.push(T),d):T},P=()=>g$1?Object.keys(g$1).map(t=>z(t,g$1)):null,p=(t,n)=>{if(!g$1||typeof g$1!="object")return null;let a=new Array;for(let i in g$1){let r=z(i,g$1,t,n),c=t==="base"&&typeof r=="string"?r:r&&r[t];c&&(a[a.length]=c);}return a},D={};for(let t in l)l[t]!==void 0&&(D[t]=l[t]);let G=(t,n)=>{var i;let a=typeof(l==null?void 0:l[t])=="object"?{[t]:(i=l[t])==null?void 0:i.initial}:{};return {...A,...D,...a,...n}},H=(t=[],n)=>{let a=[];for(let{class:i,className:r,...c}of t){let f=!0;for(let[o,u]of Object.entries(c)){let d=G(o,n);if(Array.isArray(u)){if(!u.includes(d[o])){f=!1;break}}else if(d[o]!==u){f=!1;break}}f&&(i&&a.push(i),r&&a.push(r));}return a},I=t=>{let n=H(C,t),a=H(e==null?void 0:e.compoundVariants,t);return chunk_JXBJZR5A_a(a,n)},ee=t=>{let n=I(t);if(!Array.isArray(n))return n;let a={};for(let i of n)if(typeof i=="string"&&(a.base=w(a.base,i)(m)),typeof i=="object")for(let[r,c]of Object.entries(i))a[r]=w(a[r],c)(m);return a},te=t=>{if(V.length<1)return null;let n={};for(let{slots:a=[],class:i,className:r,...c}of V){if(!chunk_JXBJZR5A_u(c)){let f=!0;for(let o of Object.keys(c)){let u=G(o,t)[o];if(u===void 0||(Array.isArray(c[o])?!c[o].includes(u):c[o]!==u)){f=!1;break}}if(!f)continue}for(let f of a)n[f]=n[f]||[],n[f].push([i,r]);}return n};if(!chunk_JXBJZR5A_u(j)||!O){let t={};if(typeof h$1=="object"&&!chunk_JXBJZR5A_u(h$1))for(let n of Object.keys(h$1))t[n]=a=>{var i,r;return w(h$1[n],p(n,a),((i=ee(a))!=null?i:[])[n],((r=te(a))!=null?r:[])[n],a==null?void 0:a.class,a==null?void 0:a.className)(m)};return t}return w(S,P(),I(),l==null?void 0:l.class,l==null?void 0:l.className)(m)},x=()=>{if(!(!g$1||typeof g$1!="object"))return Object.keys(g$1)};return v.variantKeys=x(),v.extend=e,v.base=S,v.slots=h$1,v.variants=g$1,v.defaultVariants=A,v.compoundSlots=V,v.compoundVariants=C,v},le=s=>(b,e)=>ie(b,e?g(s,e):s);



;// CONCATENATED MODULE: ./node_modules/@nextui-org/theme/dist/chunk-6AEINX52.mjs


// src/utils/tv.ts

var COMMON_UNITS = ["small", "medium", "large"];
var tv = (options, config) => {
  var _a, _b, _c;
  return ie(options, {
    ...config,
    twMerge: (_a = config == null ? void 0 : config.twMerge) != null ? _a : true,
    twMergeConfig: {
      ...config == null ? void 0 : config.twMergeConfig,
      theme: {
        ...(_b = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _b.theme,
        opacity: ["disabled"],
        spacing: ["divider", "unit", ...mappedSpacingScaleKeys],
        borderWidth: COMMON_UNITS,
        borderRadius: COMMON_UNITS
      },
      classGroups: {
        ...(_c = config == null ? void 0 : config.twMergeConfig) == null ? void 0 : _c.classGroups,
        shadow: [{ shadow: COMMON_UNITS }],
        "font-size": [{ text: ["tiny", ...COMMON_UNITS] }],
        "bg-image": ["bg-stripe-gradient"],
        "min-w": [
          {
            "min-w": ["unit", ...mappedSpacingScaleKeys]
          }
        ],
        "min-h": [
          {
            "min-h": ["unit", ...mappedSpacingScaleKeys]
          }
        ]
      }
    }
  });
};




/***/ }),

/***/ 26313:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Dh: () => (/* binding */ dataFocusVisibleClasses),
/* harmony export */   Zs: () => (/* binding */ collapseAdjacentVariantBorders)
/* harmony export */ });
/* unused harmony exports baseStyles, focusVisibleClasses, groupDataFocusVisibleClasses, ringClasses, translateCenterClasses, absoluteFullClasses */
// src/utils/classes.ts
var baseStyles = (prefix) => ({
  color: `hsl(var(--${prefix}-foreground))`,
  backgroundColor: `hsl(var(--${prefix}-background))`
});
var focusVisibleClasses = (/* unused pure expression or super */ null && ([
  "focus-visible:z-10",
  "focus-visible:outline-2",
  "focus-visible:outline-focus",
  "focus-visible:outline-offset-2"
]));
var dataFocusVisibleClasses = [
  "outline-none",
  "data-[focus-visible=true]:z-10",
  "data-[focus-visible=true]:outline-2",
  "data-[focus-visible=true]:outline-focus",
  "data-[focus-visible=true]:outline-offset-2"
];
var groupDataFocusVisibleClasses = (/* unused pure expression or super */ null && ([
  "outline-none",
  "group-data-[focus-visible=true]:z-10",
  "group-data-[focus-visible=true]:ring-2",
  "group-data-[focus-visible=true]:ring-focus",
  "group-data-[focus-visible=true]:ring-offset-2",
  "group-data-[focus-visible=true]:ring-offset-background"
]));
var ringClasses = (/* unused pure expression or super */ null && ([
  "outline-none",
  "ring-2",
  "ring-focus",
  "ring-offset-2",
  "ring-offset-background"
]));
var translateCenterClasses = (/* unused pure expression or super */ null && ([
  "absolute",
  "top-1/2",
  "left-1/2",
  "-translate-x-1/2",
  "-translate-y-1/2"
]));
var absoluteFullClasses = (/* unused pure expression or super */ null && (["absolute", "inset-0"]));
var collapseAdjacentVariantBorders = {
  default: ["[&+.border-medium.border-default]:ms-[calc(theme(borderWidth.medium)*-1)]"],
  primary: ["[&+.border-medium.border-primary]:ms-[calc(theme(borderWidth.medium)*-1)]"],
  secondary: ["[&+.border-medium.border-secondary]:ms-[calc(theme(borderWidth.medium)*-1)]"],
  success: ["[&+.border-medium.border-success]:ms-[calc(theme(borderWidth.medium)*-1)]"],
  warning: ["[&+.border-medium.border-warning]:ms-[calc(theme(borderWidth.medium)*-1)]"],
  danger: ["[&+.border-medium.border-danger]:ms-[calc(theme(borderWidth.medium)*-1)]"]
};




/***/ }),

/***/ 59106:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   j: () => (/* binding */ useAriaButton)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5243);
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74997);
/* harmony import */ var _nextui_org_use_aria_press__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79816);
// src/index.ts



function useAriaButton(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    preventFocusOnPress,
    allowFocusWhenDisabled,
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button",
    allowTextSelectionOnPress
  } = props;
  let additionalProps;
  if (elementType === "button") {
    additionalProps = {
      type,
      disabled: isDisabled
    };
  } else {
    additionalProps = {
      role: "button",
      tabIndex: isDisabled ? void 0 : 0,
      href: elementType === "a" && isDisabled ? void 0 : href,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  }
  let { pressProps, isPressed } = (0,_nextui_org_use_aria_press__WEBPACK_IMPORTED_MODULE_0__/* .usePress */ .r)({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    allowTextSelectionOnPress,
    ref
  });
  let { focusableProps } = (0,_react_aria_focus__WEBPACK_IMPORTED_MODULE_1__/* .useFocusable */ .kc)(props, ref);
  if (allowFocusWhenDisabled) {
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  }
  let buttonProps = (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .dG)(
    focusableProps,
    pressProps,
    (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .filterDOMProps */ .zL)(props, { labelable: true })
  );
  return {
    isPressed,
    buttonProps: (0,_react_aria_utils__WEBPACK_IMPORTED_MODULE_2__/* .mergeProps */ .dG)(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e) => {
        deprecatedOnClick == null ? void 0 : deprecatedOnClick(e);
      }
    })
  };
}



/***/ }),

/***/ 79816:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ usePress)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-aria-press/dist/chunk-4XDBEIOV.mjs
// src/context.ts

var PressResponderContext = react_.createContext(null);
PressResponderContext.displayName = "PressResponderContext";



;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-aria-press/dist/chunk-7D66DBGQ.mjs
var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};



;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-aria-press/dist/chunk-7OGZUKMH.mjs


// src/events.ts
var _shouldStopPropagation;
var PressEvent = class {
  constructor(type, pointerType, originalEvent) {
    __publicField(this, "type");
    __publicField(this, "pointerType");
    __publicField(this, "target");
    __publicField(this, "shiftKey");
    __publicField(this, "ctrlKey");
    __publicField(this, "metaKey");
    __publicField(this, "altKey");
    __privateAdd(this, _shouldStopPropagation, true);
    this.type = type;
    this.pointerType = pointerType;
    this.target = originalEvent.currentTarget;
    this.shiftKey = originalEvent.shiftKey;
    this.metaKey = originalEvent.metaKey;
    this.ctrlKey = originalEvent.ctrlKey;
    this.altKey = originalEvent.altKey;
  }
  continuePropagation() {
    __privateSet(this, _shouldStopPropagation, false);
  }
  get shouldStopPropagation() {
    return __privateGet(this, _shouldStopPropagation);
  }
};
_shouldStopPropagation = new WeakMap();



;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-aria-press/dist/chunk-FFBWCXWK.mjs
// src/dom-helpers.ts
var getOwnerDocument = (el) => {
  var _a;
  return (_a = el == null ? void 0 : el.ownerDocument) != null ? _a : document;
};
var getOwnerWindow = (el) => {
  var _a, _b;
  return (_b = (_a = el == null ? void 0 : el.ownerDocument) == null ? void 0 : _a.defaultView) != null ? _b : window;
};



// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var dist_import = __webpack_require__(5243);
;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-aria-press/dist/chunk-CWMPADA3.mjs


// src/text-selection.ts

var state = "default";
var savedUserSelect = "";
var modifiedElementMap = /* @__PURE__ */ new WeakMap();
function disableTextSelection(target) {
  if ((0,dist_import/* isIOS */.gn)()) {
    if (state === "default") {
      const documentObject = getOwnerDocument(target);
      savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
      documentObject.documentElement.style.webkitUserSelect = "none";
    }
    state = "disabled";
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function restoreTextSelection(target) {
  if ((0,dist_import/* isIOS */.gn)()) {
    if (state !== "disabled") {
      return;
    }
    state = "restoring";
    setTimeout(() => {
      (0,dist_import/* runAfterTransition */.QB)(() => {
        if (state === "restoring") {
          const documentObject = getOwnerDocument(target);
          if (documentObject.documentElement.style.webkitUserSelect === "none") {
            documentObject.documentElement.style.webkitUserSelect = savedUserSelect || "";
          }
          savedUserSelect = "";
          state = "default";
        }
      });
    }, 300);
  } else if (target instanceof HTMLElement || target instanceof SVGElement) {
    if (target && modifiedElementMap.has(target)) {
      let targetOldUserSelect = modifiedElementMap.get(target);
      if (target.style.userSelect === "none" && targetOldUserSelect) {
        target.style.userSelect = targetOldUserSelect;
      }
      if (target.getAttribute("style") === "") {
        target.removeAttribute("style");
      }
      modifiedElementMap.delete(target);
    }
  }
}



;// CONCATENATED MODULE: ./node_modules/@nextui-org/use-aria-press/dist/index.mjs






// src/index.ts


function usePressResponderContext(props) {
  let context = (0,react_.useContext)(PressResponderContext);
  if (context) {
    let { register, ...contextProps } = context;
    props = (0,dist_import/* mergeProps */.dG)(contextProps, props);
    register();
  }
  (0,dist_import/* useSyncRef */.lE)(context, props.ref);
  return props;
}
var LINK_CLICKED = Symbol("linkClicked");
function usePress(props) {
  let {
    onPress,
    onPressChange,
    onPressStart,
    onPressEnd,
    onPressUp,
    isDisabled,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    ref: _,
    ...domProps
  } = usePressResponderContext(props);
  let [isPressed, setPressed] = (0,react_.useState)(false);
  let ref = (0,react_.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    isTriggeringEvent: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = (0,dist_import/* useGlobalListeners */.xi)();
  let triggerPressStart = (0,dist_import/* useEffectEvent */.iW)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled || state.didFirePressStart) {
      return;
    }
    let shouldStopPropagation = true;
    state.isTriggeringEvent = true;
    if (onPressStart) {
      let event = new PressEvent("pressstart", pointerType, originalEvent);
      onPressStart(event);
      shouldStopPropagation = event.shouldStopPropagation;
    }
    if (onPressChange) {
      onPressChange(true);
    }
    state.isTriggeringEvent = false;
    state.didFirePressStart = true;
    setPressed(true);
    return shouldStopPropagation;
  });
  let triggerPressEnd = (0,dist_import/* useEffectEvent */.iW)(
    (originalEvent, pointerType, wasPressed = true) => {
      let state = ref.current;
      if (!state.didFirePressStart) {
        return;
      }
      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;
      state.isTriggeringEvent = true;
      let shouldStopPropagation = true;
      if (onPressEnd) {
        let event = new PressEvent("pressend", pointerType, originalEvent);
        onPressEnd(event);
        shouldStopPropagation = event.shouldStopPropagation;
      }
      if (onPressChange) {
        onPressChange(false);
      }
      setPressed(false);
      if (onPress && wasPressed && !isDisabled) {
        let event = new PressEvent("press", pointerType, originalEvent);
        onPress(event);
        shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
      }
      state.isTriggeringEvent = false;
      return shouldStopPropagation;
    }
  );
  let triggerPressUp = (0,dist_import/* useEffectEvent */.iW)((originalEvent, pointerType) => {
    let state = ref.current;
    if (isDisabled) {
      return;
    }
    if (onPressUp) {
      state.isTriggeringEvent = true;
      let event = new PressEvent("pressup", pointerType, originalEvent);
      onPressUp(event);
      state.isTriggeringEvent = false;
      return event.shouldStopPropagation;
    }
    return true;
  });
  let cancel = (0,dist_import/* useEffectEvent */.iW)((e) => {
    let state = ref.current;
    if (state.isPressed) {
      if (state.isOverTarget && state.target) {
        triggerPressEnd(createEvent(state.target, e), state.pointerType, false);
      }
      state.isPressed = false;
      state.isOverTarget = false;
      state.activePointerId = null;
      state.pointerType = null;
      removeAllGlobalListeners();
      if (!allowTextSelectionOnPress && state.target) {
        restoreTextSelection(state.target);
      }
    }
  });
  let cancelOnPointerExit = (0,dist_import/* useEffectEvent */.iW)((e) => {
    if (shouldCancelOnPointerExit) {
      cancel(e);
    }
  });
  let pressProps = (0,react_.useMemo)(() => {
    let state = ref.current;
    let pressProps2 = {
      onKeyDown(e) {
        var _a;
        if (isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
          if (shouldPreventDefaultKeyboard(e.target, e.key)) {
            e.preventDefault();
          }
          let shouldStopPropagation = true;
          if (!state.isPressed && !e.repeat) {
            state.target = e.currentTarget;
            state.isPressed = true;
            shouldStopPropagation = triggerPressStart(e, "keyboard");
            addGlobalListener(getOwnerDocument(e.currentTarget), "keyup", onKeyUp, false);
          }
          if (shouldStopPropagation) {
            e.stopPropagation();
          }
          if (e.metaKey && (0,dist_import/* isMac */.V5)()) {
            (_a = state.metaKeyEvents) == null ? void 0 : _a.set(e.key, e.nativeEvent);
          }
        } else if (e.key === "Meta") {
          state.metaKeyEvents = /* @__PURE__ */ new Map();
        }
      },
      onKeyUp(e) {
        if (state.target && isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && !e.repeat && e.currentTarget.contains(e.target)) {
          triggerPressUp(createEvent(state.target, e), "keyboard");
        }
      },
      onClick(e) {
        if (e && !e.currentTarget.contains(e.target)) {
          return;
        }
        if (e && e.button === 0 && !state.isTriggeringEvent && !dist_import/* openLink */.nG.isOpening) {
          let shouldStopPropagation = true;
          if (isDisabled) {
            e.preventDefault();
          }
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0,dist_import/* isVirtualClick */.Zj)(e.nativeEvent))) {
            if (!isDisabled && !preventFocusOnPress) {
              (0,dist_import/* focusWithoutScrolling */.Ao)(e.currentTarget);
            }
            let stopPressStart = triggerPressStart(e, "virtual");
            let stopPressUp = triggerPressUp(e, "virtual");
            let stopPressEnd = triggerPressEnd(e, "virtual");
            shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
          if (shouldStopPropagation) {
            e.stopPropagation();
          }
        }
      }
    };
    let onKeyUp = (e) => {
      var _a, _b;
      if (state.isPressed && state.target && isValidKeyboardEvent(e, state.target)) {
        if (shouldPreventDefaultKeyboard(e.target, e.key)) {
          e.preventDefault();
        }
        let target = e.target;
        let shouldStopPropagation = triggerPressEnd(
          createEvent(state.target, e),
          "keyboard",
          state.target.contains(target)
        );
        removeAllGlobalListeners();
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
        if (e.key !== "Enter" && isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[LINK_CLICKED]) {
          e[LINK_CLICKED] = true;
          (0,dist_import/* openLink */.nG)(state.target, e, false);
        }
        state.isPressed = false;
        (_a = state.metaKeyEvents) == null ? void 0 : _a.delete(e.key);
      } else if (e.key === "Meta" && ((_b = state.metaKeyEvents) == null ? void 0 : _b.size)) {
        let events = state.metaKeyEvents;
        state.metaKeyEvents = null;
        for (let event of events.values()) {
          state.target && state.target.dispatchEvent(new KeyboardEvent("keyup", event));
        }
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps2.onPointerDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
          return;
        }
        if ((0,dist_import/* isVirtualPointerEvent */.cr)(e.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if (shouldPreventDefault(e.currentTarget)) {
          e.preventDefault();
        }
        state.pointerType = e.pointerType;
        let shouldStopPropagation = true;
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e.pointerId;
          state.target = e.currentTarget;
          if (!isDisabled && !preventFocusOnPress) {
            (0,dist_import/* focusWithoutScrolling */.Ao)(e.currentTarget);
          }
          if (!allowTextSelectionOnPress) {
            disableTextSelection(state.target);
          }
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
          addGlobalListener(getOwnerDocument(e.currentTarget), "pointermove", onPointerMove, false);
          addGlobalListener(getOwnerDocument(e.currentTarget), "pointerup", onPointerUp, false);
          addGlobalListener(
            getOwnerDocument(e.currentTarget),
            "pointercancel",
            onPointerCancel,
            false
          );
        }
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
      };
      pressProps2.onMouseDown = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        if (e.button === 0) {
          if (shouldPreventDefault(e.currentTarget)) {
            e.preventDefault();
          }
          e.stopPropagation();
        }
      };
      pressProps2.onPointerUp = (e) => {
        if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") {
          return;
        }
        if (e.button === 0 && isOverTarget(e, e.currentTarget)) {
          triggerPressUp(e, state.pointerType || e.pointerType);
        }
      };
      let onPointerMove = (e) => {
        if (e.pointerId !== state.activePointerId || !state.target) {
          return;
        }
        if (isOverTarget(e, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(createEvent(state.target, e), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(createEvent(state.target, e), state.pointerType, false);
          cancelOnPointerExit(e);
        }
      };
      let onPointerUp = (e) => {
        if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
          if (isOverTarget(e, state.target)) {
            triggerPressEnd(createEvent(state.target, e), state.pointerType);
          } else if (state.isOverTarget) {
            triggerPressEnd(createEvent(state.target, e), state.pointerType);
          }
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress) {
            restoreTextSelection(state.target);
          }
        }
      };
      let onPointerCancel = (e) => {
        cancel(e);
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        cancel(e);
      };
    } else {
      pressProps2.onMouseDown = (e) => {
        if (e.button !== 0 || !e.currentTarget.contains(e.target)) {
          return;
        }
        if (shouldPreventDefault(e.currentTarget)) {
          e.preventDefault();
        }
        if (state.ignoreEmulatedMouseEvents) {
          e.stopPropagation();
          return;
        }
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e.currentTarget;
        state.pointerType = (0,dist_import/* isVirtualClick */.Zj)(e.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled && !preventFocusOnPress) {
          (0,dist_import/* focusWithoutScrolling */.Ao)(e.currentTarget);
        }
        let shouldStopPropagation = triggerPressStart(e, state.pointerType);
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
        addGlobalListener(getOwnerDocument(e.currentTarget), "mouseup", onMouseUp, false);
      };
      pressProps2.onMouseEnter = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          shouldStopPropagation = triggerPressStart(e, state.pointerType);
        }
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
      };
      pressProps2.onMouseLeave = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        let shouldStopPropagation = true;
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
          cancelOnPointerExit(e);
        }
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
      };
      pressProps2.onMouseUp = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        if (!state.ignoreEmulatedMouseEvents && e.button === 0) {
          triggerPressUp(e, state.pointerType || "mouse");
        }
      };
      let onMouseUp = (e) => {
        if (e.button !== 0) {
          return;
        }
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if (!state.target) {
          return;
        }
        if (isOverTarget(e, state.target)) {
          triggerPressEnd(createEvent(state.target, e), state.pointerType);
        } else if (state.isOverTarget) {
          triggerPressEnd(createEvent(state.target, e), state.pointerType, false);
        }
        state.isOverTarget = false;
      };
      pressProps2.onTouchStart = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        let touch = getTouchFromEvent(e.nativeEvent);
        if (!touch) {
          return;
        }
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled && !preventFocusOnPress) {
          (0,dist_import/* focusWithoutScrolling */.Ao)(e.currentTarget);
        }
        if (!allowTextSelectionOnPress) {
          disableTextSelection(state.target);
        }
        let shouldStopPropagation = triggerPressStart(e, state.pointerType);
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
        addGlobalListener(getOwnerWindow(e.currentTarget), "scroll", onScroll, true);
      };
      pressProps2.onTouchMove = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && isOverTarget(touch, e.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            shouldStopPropagation = triggerPressStart(e, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
          cancelOnPointerExit(e);
        }
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
      };
      pressProps2.onTouchEnd = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        if (!state.isPressed) {
          e.stopPropagation();
          return;
        }
        let touch = getTouchById(e.nativeEvent, state.activePointerId);
        let shouldStopPropagation = true;
        if (touch && isOverTarget(touch, e.currentTarget)) {
          triggerPressUp(e, state.pointerType);
          shouldStopPropagation = triggerPressEnd(e, state.pointerType);
        } else if (state.isOverTarget) {
          shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
        }
        if (shouldStopPropagation) {
          e.stopPropagation();
        }
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress && state.target) {
          restoreTextSelection(state.target);
        }
        removeAllGlobalListeners();
      };
      pressProps2.onTouchCancel = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        e.stopPropagation();
        if (state.isPressed) {
          cancel(e);
        }
      };
      let onScroll = (e) => {
        if (state.isPressed && e.target.contains(state.target)) {
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
        }
      };
      pressProps2.onDragStart = (e) => {
        if (!e.currentTarget.contains(e.target)) {
          return;
        }
        cancel(e);
      };
    }
    return pressProps2;
  }, [
    addGlobalListener,
    isDisabled,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress,
    cancel,
    cancelOnPointerExit,
    triggerPressEnd,
    triggerPressStart,
    triggerPressUp
  ]);
  (0,react_.useEffect)(() => {
    return () => {
      if (!allowTextSelectionOnPress && ref.current.target) {
        restoreTextSelection(ref.current.target);
      }
    };
  }, [allowTextSelectionOnPress]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: (0,dist_import/* mergeProps */.dG)(domProps, pressProps)
  };
}
function isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function isValidKeyboardEvent(event, currentTarget) {
  const { key, code } = event;
  const element = currentTarget;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof getOwnerWindow(element).HTMLInputElement && !isValidInputKey(element, key) || element instanceof getOwnerWindow(element).HTMLTextAreaElement || element.isContentEditable) && !((role === "link" || !role && isHTMLAnchorLink(element)) && key !== "Enter");
}
function getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0) {
    return targetTouches[0];
  }
  return null;
}
function getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i = 0; i < changedTouches.length; i++) {
    const touch = changedTouches[i];
    if (touch.identifier === pointerId) {
      return touch;
    }
  }
  return null;
}
function createEvent(target, e) {
  return {
    currentTarget: target,
    shiftKey: e.shiftKey,
    ctrlKey: e.ctrlKey,
    metaKey: e.metaKey,
    altKey: e.altKey
  };
}
function getPointClientRect(point) {
  let offsetX = !!point.width ? point.width / 2 : point.radiusX || 0;
  let offsetY = !!point.height ? point.height / 2 : point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function areRectanglesOverlapping(a, b) {
  if (a.left > b.right || b.left > a.right) {
    return false;
  }
  if (a.top > b.bottom || b.top > a.bottom) {
    return false;
  }
  return true;
}
function isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = getPointClientRect(point);
  return areRectanglesOverlapping(rect, pointRect);
}
function shouldPreventDefault(target) {
  return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function shouldPreventDefaultKeyboard(target, key) {
  if (target instanceof HTMLInputElement) {
    return !isValidInputKey(target, key);
  }
  if (target instanceof HTMLButtonElement) {
    return target.type !== "submit" && target.type !== "reset";
  }
  if (isHTMLAnchorLink(target)) {
    return false;
  }
  return true;
}
var nonTextInputTypes = /* @__PURE__ */ new Set([
  "checkbox",
  "radio",
  "range",
  "color",
  "file",
  "image",
  "button",
  "submit",
  "reset"
]);
function isValidInputKey(target, key) {
  return target.type === "checkbox" || target.type === "radio" ? key === " " : nonTextInputTypes.has(target.type);
}



/***/ }),

/***/ 74997:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Fx: () => (/* binding */ $f7dceffc5ad7768b$export$4e328f61c538687f),
/* harmony export */   MT: () => (/* binding */ $9bf71ea28793e738$export$20e40289641fbbb6),
/* harmony export */   QL: () => (/* binding */ $9bf71ea28793e738$export$2d6ec8fc375ceafa),
/* harmony export */   cW: () => (/* binding */ $9bf71ea28793e738$export$1258395f99bf9cbf),
/* harmony export */   ex: () => (/* binding */ $6a99195332edec8b$export$80f3e147d781571c),
/* harmony export */   kc: () => (/* binding */ $e6afbd83fe6ebbd2$export$4c014de7c8940b4c)
/* harmony export */ });
/* unused harmony exports useFocusManager, createFocusManager, FocusRing, FocusableProvider, useHasTabbableChild */
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5243);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5459);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(element);
    if ((0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .getInteractionModality */ .Jz)() === "virtual") {
        let lastFocusedElement = ownerDocument.activeElement;
        (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .runAfterTransition */ .QB)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (ownerDocument.activeElement === lastFocusedElement && element.isConnected) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(element);
        });
    } else (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(element);
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $645f2e67b85a24c9$var$isStyleVisible(element) {
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(element);
    if (!(element instanceof windowObject.HTMLElement) && !(element instanceof windowObject.SVGElement)) return false;
    let { display: display, visibility: visibility } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
        const { getComputedStyle: getComputedStyle } = element.ownerDocument.defaultView;
        let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle(element);
        isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}



const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children, contain: contain, restoreFocus: restoreFocus, autoFocus: autoFocus } = props;
    let startRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let endRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let scopeRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    let { parentNode: parentNode } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9bf71ea28793e738$var$FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        }), [
        scopeRef
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
        if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
            let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
    }, [
        node,
        parentNode
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        let node = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (node) node.contain = !!contain;
    }, [
        contain
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        var _startRef_current;
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = (_startRef_current = startRef.current) === null || _startRef_current === void 0 ? void 0 : _startRef_current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children
    ]);
    $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    // This needs to be an effect so that activeScope is updated after the FocusScope tree is complete.
    // It cannot be a useLayoutEffect because the parent of this node hasn't been attached in the tree yet.
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        const activeElement = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scopeRef.current ? scopeRef.current[0] : undefined).activeElement;
        let scope = null;
        if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
            // We need to traverse the focusScope tree and find the bottom most scope that
            // contains the active element and set that as the activeScope.
            for (let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())if (node.scopeRef && $9bf71ea28793e738$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
            if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
        }
    }, [
        scopeRef
    ]);
    // This layout effect cleanup is so that the tree node is removed synchronously with react before the RAF
    // in useRestoreFocus cleanup runs.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        return ()=>{
            var _focusScopeTree_getTreeNode_parent, _focusScopeTree_getTreeNode;
            var _focusScopeTree_getTreeNode_parent_scopeRef;
            // Scope may have been re-parented.
            let parentScope = (_focusScopeTree_getTreeNode_parent_scopeRef = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : (_focusScopeTree_getTreeNode_parent = _focusScopeTree_getTreeNode.parent) === null || _focusScopeTree_getTreeNode_parent === void 0 ? void 0 : _focusScopeTree_getTreeNode_parent.scopeRef) !== null && _focusScopeTree_getTreeNode_parent_scopeRef !== void 0 ? _focusScopeTree_getTreeNode_parent_scopeRef : null;
            if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
            $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
        };
    }, [
        scopeRef
    ]);
    let focusManager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
    let value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            focusManager: focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var _useContext;
    return (_useContext = (0, $6nfFC$useContext)($9bf71ea28793e738$var$FocusContext)) === null || _useContext === void 0 ? void 0 : _useContext.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            let node = from || (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scope[0]).activeElement;
            let sentinel = scope[0].previousElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from: from, tabbable: tabbable, wrap: wrap, accept: accept } = opts;
            let node = from || (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scope[0]).activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable, accept: accept } = opts;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]"
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let raf = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = undefined;
            }
            return;
        }
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scope ? scope[0] : undefined);
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = ownerDocument.activeElement;
            let scope = scopeRef.current;
            if (!scope || !$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
                tabbable: true
            }, scope);
            if (!focusedElement) return;
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(e.target, scopeRef.current)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope && $9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if (ownerDocument.activeElement && $9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(ownerDocument.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    if (ownerDocument.body.contains(e.target)) {
                        var _focusedNode_current;
                        focusedNode.current = e.target;
                        (_focusedNode_current = focusedNode.current) === null || _focusedNode_current === void 0 ? void 0 : _focusedNode_current.focus();
                    } else if ($9bf71ea28793e738$var$activeScope.current) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
                }
            });
        };
        ownerDocument.addEventListener("keydown", onKeyDown, false);
        ownerDocument.addEventListener("focusin", onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusout", onBlur, false));
        return ()=>{
            ownerDocument.removeEventListener("keydown", onKeyDown, false);
            ownerDocument.removeEventListener("focusin", onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusout", onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    // eslint-disable-next-line arrow-body-style
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    if (!element) return false;
    if (!scope) return false;
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))){
        if (s && $9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    var _focusScopeTree_getTreeNode;
    let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, $6a99195332edec8b$export$80f3e147d781571c)(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err) {
    // ignore
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
        tabbable: tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        scopeRoot = $9bf71ea28793e738$var$getScopeRoot(scope);
        walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(scopeRoot, {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    $9bf71ea28793e738$var$focusElement(nextNode);
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__).useRef(autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scopeRef.current ? scopeRef.current[0] : undefined);
            if (!$9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, $9bf71ea28793e738$var$activeScope.current) && scopeRef.current) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scope ? scope[0] : undefined);
        let onFocus = (e)=>{
            let target = e.target;
            if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
            else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
        };
        ownerDocument.addEventListener("focusin", onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener("focusin", onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    // eslint-disable-next-line no-restricted-globals
    const nodeToRestoreRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof document !== "undefined" ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scopeRef.current ? scopeRef.current[0] : undefined).activeElement : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        let scope = scopeRef.current;
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scope ? scope[0] : undefined);
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
        };
        ownerDocument.addEventListener("focusin", onFocus, false);
        scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            ownerDocument.removeEventListener("focusin", onFocus, false);
            scope === null || scope === void 0 ? void 0 : scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = ownerDocument.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(ownerDocument.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nodeToRestore || !ownerDocument.body.contains(nodeToRestore) || nodeToRestore === ownerDocument.body) {
                nodeToRestore = undefined;
                treeNode.nodeToRestore = undefined;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) ownerDocument.addEventListener("keydown", onKeyDown, true);
        return ()=>{
            if (!contain) ownerDocument.removeEventListener("keydown", onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        const ownerDocument = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(scopeRef.current ? scopeRef.current[0] : undefined);
        if (!restoreFocus) return;
        let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        if (!treeNode) return;
        var _nodeToRestoreRef_current;
        treeNode.nodeToRestore = (_nodeToRestoreRef_current = nodeToRestoreRef.current) !== null && _nodeToRestoreRef_current !== void 0 ? _nodeToRestoreRef_current : undefined;
        return ()=>{
            let treeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
            if (!treeNode) return;
            let nodeToRestore = treeNode.nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            if (restoreFocus && nodeToRestore && // eslint-disable-next-line react-hooks/exhaustive-deps
            ($9bf71ea28793e738$var$isElementInScope(ownerDocument.activeElement, scopeRef.current) || ownerDocument.activeElement === ownerDocument.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (ownerDocument.activeElement === ownerDocument.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && treeNode.nodeToRestore.isConnected) {
                                $9bf71ea28793e738$var$focusElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && treeNode.scopeRef.current && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
                                $9bf71ea28793e738$var$focusFirstInScope(treeNode.scopeRef.current, true);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(root).createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && (0, $645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || (0, $6nfFC$getOwnerDocument)(root).activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { from: from, tabbable: tabbable = defaultOptions.tabbable, wrap: wrap = defaultOptions.wrap, accept: accept = defaultOptions.accept } = opts;
            let node = from || (0, $6nfFC$getOwnerDocument)(root).activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next !== null && next !== void 0 ? next : null;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                let lastNode = $9bf71ea28793e738$var$last(walker);
                if (!lastNode) // couldn't wrap
                return null;
                previousNode = lastNode;
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode !== null && previousNode !== void 0 ? previousNode : null;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return null;
            let { tabbable: tabbable = defaultOptions.tabbable, accept: accept = defaultOptions.accept } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next !== null && next !== void 0 ? next : null;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next = undefined;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        if (!parentNode) return;
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        if (!node) return;
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        if (parentNode) {
            parentNode.removeChild(node);
            if (children.size > 0) children.forEach((child)=>parentNode && parentNode.addChild(child));
        }
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        var _node_parent;
        let newTree = new $9bf71ea28793e738$var$Tree();
        var _node_parent_scopeRef;
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, (_node_parent_scopeRef = (_node_parent = node.parent) === null || _node_parent === void 0 ? void 0 : _node_parent.scopeRef) !== null && _node_parent_scopeRef !== void 0 ? _node_parent_scopeRef : null, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false, isTextInput: isTextInput, within: within } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .isFocusVisible */ .E)()
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocusVisibleListener */ .mG)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocus */ .KK)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocusWithin */ .L_)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children, focusClass: focusClass, focusRingClass: focusRingClass } = props;
    let { isFocused: isFocused, isFocusVisible: isFocusVisible, focusProps: focusProps } = (0, $f7dceffc5ad7768b$export$4e328f61c538687f)(props);
    let child = (0, $6nfFC$react).Children.only(children);
    return /*#__PURE__*/ (0, $6nfFC$react).cloneElement(child, (0, $6nfFC$mergeProps)(child.props, {
        ...focusProps,
        className: (0, $6nfFC$clsx)({
            [focusClass || ""]: isFocused,
            [focusRingClass || ""]: isFocusVisible
        })
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSyncRef */ .lE)(context, ref);
    // eslint-disable-next-line
    let { ref: _, ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children, ...otherProps } = props;
    let objRef = (0, $6nfFC$useObjectRef)(ref);
    let context = {
        ...otherProps,
        ref: objRef
    };
    return /*#__PURE__*/ (0, $6nfFC$react).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children);
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $6nfFC$react).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider)));
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useFocus */ .KK)(props);
    let { keyboardProps: keyboardProps } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__/* .useKeyboard */ .v5)(props);
    let interactions = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, $6a99195332edec8b$export$80f3e147d781571c)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
    let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, $6nfFC$useState)(false);
    (0, $6nfFC$useLayoutEffect)(()=>{
        if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    "tabIndex",
                    "disabled"
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 83651:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Xe: () => (/* binding */ $325a3faab7a68acd$export$a16aca283550c30d),
  bU: () => (/* binding */ $18f2051aff69b9bf$export$43bb16f9c6d9e3f7),
  qb: () => (/* binding */ $fca6afa0e843324b$export$f12b703ca79dfbb1)
});

// UNUSED EXPORTS: I18nProvider, useDateFormatter, useFilter, useListFormatter, useLocalizedStringDictionary, useNumberFormatter

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/import.mjs
var dist_import = __webpack_require__(90466);
;// CONCATENATED MODULE: ./node_modules/@internationalized/string/dist/import.mjs
/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $5b160d28a433310d$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
const $5b160d28a433310d$var$stringsSymbol = Symbol.for("react-aria.i18n.strings");
let $5b160d28a433310d$var$cachedGlobalStrings = undefined;
class $5b160d28a433310d$export$c17fa47878dc55b6 {
    /** Returns a localized string for the given key and locale. */ getStringForLocale(key, locale) {
        let strings = this.getStringsForLocale(locale);
        let string = strings[key];
        if (!string) throw new Error(`Could not find intl message ${key} in ${locale} locale`);
        return string;
    }
    /** Returns all localized strings for the given locale. */ getStringsForLocale(locale) {
        let strings = this.strings[locale];
        if (!strings) {
            strings = $5b160d28a433310d$var$getStringsForLocale(locale, this.strings, this.defaultLocale);
            this.strings[locale] = strings;
        }
        return strings;
    }
    static getGlobalDictionaryForPackage(packageName) {
        if (typeof window === "undefined") return null;
        let locale = window[$5b160d28a433310d$var$localeSymbol];
        if ($5b160d28a433310d$var$cachedGlobalStrings === undefined) {
            let globalStrings = window[$5b160d28a433310d$var$stringsSymbol];
            if (!globalStrings) return null;
            $5b160d28a433310d$var$cachedGlobalStrings = {};
            for(let pkg in globalStrings)$5b160d28a433310d$var$cachedGlobalStrings[pkg] = new $5b160d28a433310d$export$c17fa47878dc55b6({
                [locale]: globalStrings[pkg]
            }, locale);
        }
        let dictionary = $5b160d28a433310d$var$cachedGlobalStrings === null || $5b160d28a433310d$var$cachedGlobalStrings === void 0 ? void 0 : $5b160d28a433310d$var$cachedGlobalStrings[packageName];
        if (!dictionary) throw new Error(`Strings for package "${packageName}" were not included by LocalizedStringProvider. Please add it to the list passed to createLocalizedStringDictionary.`);
        return dictionary;
    }
    constructor(messages, defaultLocale = "en-US"){
        // Clone messages so we don't modify the original object.
        this.strings = {
            ...messages
        };
        this.defaultLocale = defaultLocale;
    }
}
function $5b160d28a433310d$var$getStringsForLocale(locale, strings, defaultLocale = "en-US") {
    // If there is an exact match, use it.
    if (strings[locale]) return strings[locale];
    // Attempt to find the closest match by language.
    // For example, if the locale is fr-CA (French Canadian), but there is only
    // an fr-FR (France) set of strings, use that.
    // This could be replaced with Intl.LocaleMatcher once it is supported.
    // https://github.com/tc39/proposal-intl-localematcher
    let language = $5b160d28a433310d$var$getLanguage(locale);
    if (strings[language]) return strings[language];
    for(let key in strings){
        if (key.startsWith(language + "-")) return strings[key];
    }
    // Nothing close, use english.
    return strings[defaultLocale];
}
function $5b160d28a433310d$var$getLanguage(locale) {
    // @ts-ignore
    if (Intl.Locale) // @ts-ignore
    return new Intl.Locale(locale).language;
    return locale.split("-")[0];
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $6db58dc88e78b024$var$pluralRulesCache = new Map();
const $6db58dc88e78b024$var$numberFormatCache = new Map();
class $6db58dc88e78b024$export$2f817fcdc4b89ae0 {
    /** Formats a localized string for the given key with the provided variables. */ format(key, variables) {
        let message = this.strings.getStringForLocale(key, this.locale);
        return typeof message === "function" ? message(variables, this) : message;
    }
    plural(count, options, type = "cardinal") {
        let opt = options["=" + count];
        if (opt) return typeof opt === "function" ? opt() : opt;
        let key = this.locale + ":" + type;
        let pluralRules = $6db58dc88e78b024$var$pluralRulesCache.get(key);
        if (!pluralRules) {
            pluralRules = new Intl.PluralRules(this.locale, {
                type: type
            });
            $6db58dc88e78b024$var$pluralRulesCache.set(key, pluralRules);
        }
        let selected = pluralRules.select(count);
        opt = options[selected] || options.other;
        return typeof opt === "function" ? opt() : opt;
    }
    number(value) {
        let numberFormat = $6db58dc88e78b024$var$numberFormatCache.get(this.locale);
        if (!numberFormat) {
            numberFormat = new Intl.NumberFormat(this.locale);
            $6db58dc88e78b024$var$numberFormatCache.set(this.locale, numberFormat);
        }
        return numberFormat.format(value);
    }
    select(options, value) {
        let opt = options[value] || options.other;
        return typeof opt === "function" ? opt() : opt;
    }
    constructor(locale, strings){
        this.locale = locale;
        this.strings = strings;
    }
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/@react-aria/i18n/dist/real-module.mjs







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr"
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(localeString) {
    // If the Intl.Locale API is available, use it to get the locale's text direction.
    // @ts-ignore
    if (Intl.Locale) {
        let locale = new Intl.Locale(localeString).maximize();
        // Use the text info object to get the direction if possible.
        // @ts-ignore - this was implemented as a property by some browsers before it was standardized as a function.
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/Locale/getTextInfo
        let textInfo = typeof locale.getTextInfo === "function" ? locale.getTextInfo() : locale.textInfo;
        if (textInfo) return textInfo.direction === "rtl";
        // Fallback: guess using the script.
        // This is more accurate than guessing by language, since languages can be written in multiple scripts.
        if (locale.script) return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(locale.script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = localeString.split("-")[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


// Locale passed from server by PackageLocalizationProvider.
const $1e5a04cdaf7d1af8$var$localeSymbol = Symbol.for("react-aria.i18n.locale");
function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    let locale = typeof window !== "undefined" && window[$1e5a04cdaf7d1af8$var$localeSymbol] || typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        // @ts-ignore
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch (_err) {
        locale = "en-US";
    }
    return {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = (0, dist_import/* useIsSSR */.Av)();
    let [defaultLocale, setDefaultLocale] = (0, react_.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (0, react_.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: "en-US",
        direction: "ltr"
    };
    return defaultLocale;
}



const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ (0, react_).createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale, children: children } = props;
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let value = locale ? {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
    } : defaultLocale;
    return /*#__PURE__*/ (0, $iFADg$react).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children);
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (0, react_.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}


var $2aa2084a6c2b6b4f$exports = {};
"use strict";


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, $5b160d28a433310d$export$c17fa47878dc55b6)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName) {
    return packageName && (0, $5b160d28a433310d$export$c17fa47878dc55b6).getGlobalDictionaryForPackage(packageName) || $fca6afa0e843324b$var$getCachedDictionary(strings);
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings, packageName) {
    let { locale: locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let dictionary = $fca6afa0e843324b$export$87b761675e8eaa10(strings, packageName);
    return (0, react_.useMemo)(()=>new (0, $6db58dc88e78b024$export$2f817fcdc4b89ae0)(locale, dictionary), [
        locale,
        dictionary
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $33bf17300c498528$export$a2f47a3d2973640(options = {}) {
    let { locale: locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, $iFADg$useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, $iFADg$useDeepMemo)(options !== null && options !== void 0 ? options : {}, $896ba0a80a8f4d36$var$isEqual);
    let { locale: locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, $iFADg$useMemo)(()=>new (0, $iFADg$DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, $iFADg$useMemo)(()=>new (0, $iFADg$NumberFormatter)(locale, options), [
        locale,
        options
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : "");
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = (0, $325a3faab7a68acd$export$a16aca283550c30d)({
        usage: "search",
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, $iFADg$useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, $iFADg$useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, $iFADg$useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, $iFADg$useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}





//# sourceMappingURL=real-module.js.map


/***/ }),

/***/ 5459:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   E: () => (/* binding */ $507fabe10e71c6fb$export$b9b3dfddab17db27),
/* harmony export */   Fc: () => (/* binding */ $e0b6e0b68ec7f50f$export$872b660ac5a1ff98),
/* harmony export */   Jz: () => (/* binding */ $507fabe10e71c6fb$export$630ff653c5ada6a9),
/* harmony export */   KK: () => (/* binding */ $a1ea59d68270f0dd$export$f8168d8dd8fd66e6),
/* harmony export */   L_: () => (/* binding */ $9ab94262bd0047c7$export$420e68273165f4ec),
/* harmony export */   TA: () => (/* binding */ $8a26561d2877236e$export$c24ed0104d07eab9),
/* harmony export */   XI: () => (/* binding */ $6179b936705e76d3$export$ae780daf29e6d456),
/* harmony export */   mG: () => (/* binding */ $507fabe10e71c6fb$export$ec71b4b83ac08ec3),
/* harmony export */   mk: () => (/* binding */ $f1ab8c75478c6f73$export$cf75428e0b9ed1ea),
/* harmony export */   r7: () => (/* binding */ $f6c31cce2adf654f$export$45712eceda6fad21),
/* harmony export */   v5: () => (/* binding */ $46d819fcbaf35654$export$8f71654801c2f7cd)
/* harmony export */ });
/* unused harmony exports Pressable, PressResponder, setInteractionModality, addWindowFocusTracking, useInteractionModality, useFocusVisible, useMove, useScrollWheel */
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5243);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50750);
/* harmony import */ var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38734);
/* harmony import */ var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9052);







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = "default";
let $14c0b72509d70225$var$savedUserSelect = "";
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isIOS */ .gn)()) {
        if ($14c0b72509d70225$var$state === "default") {
            // eslint-disable-next-line no-restricted-globals
            const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(target);
            $14c0b72509d70225$var$savedUserSelect = documentObject.documentElement.style.webkitUserSelect;
            documentObject.documentElement.style.webkitUserSelect = "none";
        }
        $14c0b72509d70225$var$state = "disabled";
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = "none";
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isIOS */ .gn)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== "disabled") return;
        $14c0b72509d70225$var$state = "restoring";
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .runAfterTransition */ .QB)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === "restoring") {
                    // eslint-disable-next-line no-restricted-globals
                    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(target);
                    if (documentObject.documentElement.style.webkitUserSelect === "none") documentObject.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
                    $14c0b72509d70225$var$savedUserSelect = "";
                    $14c0b72509d70225$var$state = "default";
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
            if (target.getAttribute("style") === "") target.removeAttribute("style");
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext({
    register: ()=>{}
});
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";



function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    if (context) {
        let { register: register, ...contextProps } = context;
        props = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)(contextProps, props);
        register();
    }
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useSyncRef */ .lE)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (0, _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (0, _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_3__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent){
        (0, _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_4__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (0, _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
    }
}
const $f6c31cce2adf654f$var$LINK_CLICKED = Symbol("linkClicked");
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress, onPressChange: onPressChange, onPressStart: onPressStart, onPressEnd: onPressEnd, onPressUp: onPressUp, isDisabled: isDisabled, isPressed: isPressedProp, preventFocusOnPress: preventFocusOnPress, shouldCancelOnPointerExit: shouldCancelOnPointerExit, allowTextSelectionOnPress: allowTextSelectionOnPress, // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _, ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        isTriggeringEvent: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener, removeAllGlobalListeners: removeAllGlobalListeners } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalListeners */ .xi)();
    let triggerPressStart = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return false;
        let shouldStopPropagation = true;
        state.isTriggeringEvent = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.isTriggeringEvent = false;
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return false;
        state.ignoreClickAfterPress = true;
        state.didFirePressStart = false;
        state.isTriggeringEvent = true;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        state.isTriggeringEvent = false;
        return shouldStopPropagation;
    });
    let triggerPressUp = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled) return false;
        if (onPressUp) {
            state.isTriggeringEvent = true;
            let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
            onPressUp(event);
            state.isTriggeringEvent = false;
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        let state = ref.current;
        if (state.isPressed && state.target) {
            if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
    });
    let cancelOnPointerExit = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                    var _state_metaKeyEvents;
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        shouldStopPropagation = triggerPressStart(e, "keyboard");
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred. Make it capturing so that it will trigger
                        // before stopPropagation from useKeyboard on a child element may happen and thus we can still call triggerPress for the parent element.
                        let originalTarget = e.currentTarget;
                        let pressUp = (e)=>{
                            if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e, originalTarget) && !e.repeat && originalTarget.contains(e.target) && state.target) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard");
                        };
                        addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(e.currentTarget), "keyup", (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .chain */ .tS)(pressUp, onKeyUp), true);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                    // Keep track of the keydown events that occur while the Meta (e.g. Command) key is held.
                    // macOS has a bug where keyup events are not fired while the Meta key is down.
                    // When the Meta key itself is released we will get an event for that, and we'll act as if
                    // all of these other keys were released as well.
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1393524
                    // https://bugs.webkit.org/show_bug.cgi?id=55291
                    // https://bugzilla.mozilla.org/show_bug.cgi?id=1299553
                    if (e.metaKey && (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .V5)()) (_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.set(e.key, e.nativeEvent);
                } else if (e.key === "Meta") state.metaKeyEvents = new Map();
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0 && !state.isTriggeringEvent && !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .openLink */ .nG).isOpening) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && !state.isPressed && (state.pointerType === "virtual" || (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualClick */ .Zj)(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                        let stopPressStart = triggerPressStart(e, "virtual");
                        let stopPressUp = triggerPressUp(e, "virtual");
                        let stopPressEnd = triggerPressEnd(e, "virtual");
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            var _state_metaKeyEvents;
            if (state.isPressed && state.target && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                var _state_metaKeyEvents1;
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                let target = e.target;
                triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
                removeAllGlobalListeners();
                // If a link was triggered with a key other than Enter, open the URL ourselves.
                // This means the link has a role override, and the default browser behavior
                // only applies when using the Enter key.
                if (e.key !== "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) && state.target.contains(target) && !e[$f6c31cce2adf654f$var$LINK_CLICKED]) {
                    // Store a hidden property on the event so we only trigger link click once,
                    // even if there are multiple usePress instances attached to the element.
                    e[$f6c31cce2adf654f$var$LINK_CLICKED] = true;
                    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .openLink */ .nG)(state.target, e, false);
                }
                state.isPressed = false;
                (_state_metaKeyEvents1 = state.metaKeyEvents) === null || _state_metaKeyEvents1 === void 0 ? void 0 : _state_metaKeyEvents1.delete(e.key);
            } else if (e.key === "Meta" && ((_state_metaKeyEvents = state.metaKeyEvents) === null || _state_metaKeyEvents === void 0 ? void 0 : _state_metaKeyEvents.size)) {
                var _state_target;
                // If we recorded keydown events that occurred while the Meta key was pressed,
                // and those haven't received keyup events already, fire keyup events ourselves.
                // See comment above for more info about the macOS bug causing this.
                let events = state.metaKeyEvents;
                state.metaKeyEvents = undefined;
                for (let event of events.values())(_state_target = state.target) === null || _state_target === void 0 ? void 0 : _state_target.dispatchEvent(new KeyboardEvent("keyup", event));
            }
        };
        if (typeof PointerEvent !== "undefined") {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualPointerEvent */ .cr)(e.nativeEvent)) {
                    state.pointerType = "virtual";
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(e.currentTarget), "pointermove", onPointerMove, false);
                    addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(e.currentTarget), "pointerup", onPointerUp, false);
                    addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(e.currentTarget), "pointercancel", onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.target && state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0 && state.target) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualClick */ .Zj)(e.nativeEvent) ? "virtual" : "mouse";
                if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(e.currentTarget), "mouseup", onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType || "mouse");
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if (state.target && $f6c31cce2adf654f$var$isOverTarget(e, state.target) && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.target && state.isOverTarget && state.pointerType != null) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = "touch";
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .focusWithoutScrolling */ .Ao)(e.currentTarget);
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(e.currentTarget), "scroll", onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget && state.pointerType != null) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget && state.pointerType != null) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget) && state.pointerType != null) {
                    triggerPressUp(e, state.pointerType);
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget && state.pointerType != null) shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (state.target && !allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            var _ref_current_target;
            if (!allowTextSelectionOnPress) // eslint-disable-next-line react-hooks/exhaustive-deps
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)((_ref_current_target = ref.current.target) !== null && _ref_current_target !== void 0 ? _ref_current_target : undefined);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key, code: code } = event;
    const element = currentTarget;
    const role = element.getAttribute("role");
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(element).HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(element).HTMLTextAreaElement || element.isContentEditable) && // Links should only trigger with Enter key
    !((role === "link" || !role && $f6c31cce2adf654f$var$isHTMLAnchorLink(element)) && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = 0;
    let offsetY = 0;
    if (point.width !== undefined) offsetX = point.width / 2;
    else if (point.radiusX !== undefined) offsetX = point.radiusX;
    if (point.height !== undefined) offsetY = point.height / 2;
    else if (point.radiusY !== undefined) offsetY = point.radiusY;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is a draggable element.
    return !(target instanceof HTMLElement) || !target.hasAttribute("draggable");
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
    if ($f6c31cce2adf654f$var$isHTMLAnchorLink(target)) return false;
    return true;
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}



const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $bx7SL$react).forwardRef(({ children: children, ...props }, ref)=>{
    ref = (0, $bx7SL$useObjectRef)(ref);
    let { pressProps: pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        ...props,
        ref: ref
    });
    let child = (0, $bx7SL$react).Children.only(children);
    return /*#__PURE__*/ (0, $bx7SL$react).cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...(0, $bx7SL$mergeProps)(child.props, pressProps)
    });
})));


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $bx7SL$react).forwardRef(({ children: children, ...props }, ref)=>{
    let isRegistered = (0, $bx7SL$useRef)(false);
    let prevContext = (0, $bx7SL$useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    ref = (0, $bx7SL$useObjectRef)(ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref));
    let context = (0, $bx7SL$mergeProps)(prevContext || {}, {
        ...props,
        ref: ref,
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, $bx7SL$useSyncRef)(prevContext, ref);
    (0, $bx7SL$useEffect)(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, $bx7SL$react).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
})));
function $f1ab8c75478c6f73$export$cf75428e0b9ed1ea({ children: children }) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            register: ()=>{}
        }), []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useLayoutEffect */ .bt)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener("focusout", onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    var _stateRef_current_observer;
                    (_stateRef_current_observer = stateRef.current.observer) === null || _stateRef_current_observer === void 0 ? void 0 : _stateRef_current_observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    "disabled"
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}


function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled, onFocus: onFocusProp, onBlur: onBlurProp, onFocusChange: onFocusChange } = props;
    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (e.target === e.currentTarget && document.activeElement === e.target) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$export$d90243b58daecda7 = new Map(); // We use a map here to support setting event listeners across multiple document objects.
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isMac */ .V5)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = "keyboard";
        $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    if (e.type === "mousedown" || e.type === "pointerdown") {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .isVirtualClick */ .Zj)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = "virtual";
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = "virtual";
        $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents(element) {
    if (typeof window === "undefined" || $507fabe10e71c6fb$export$d90243b58daecda7.get((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(element))) return;
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(element);
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(element);
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = windowObject.HTMLElement.prototype.focus;
    windowObject.HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    documentObject.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    windowObject.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
        documentObject.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    // Add unmount handler
    windowObject.addEventListener("beforeunload", ()=>{
        $507fabe10e71c6fb$var$tearDownWindowFocusTracking(element);
    }, {
        once: true
    });
    $507fabe10e71c6fb$export$d90243b58daecda7.set(windowObject, {
        focus: focus
    });
}
const $507fabe10e71c6fb$var$tearDownWindowFocusTracking = (element, loadListener)=>{
    const windowObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(element);
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(element);
    if (loadListener) documentObject.removeEventListener("DOMContentLoaded", loadListener);
    if (!$507fabe10e71c6fb$export$d90243b58daecda7.has(windowObject)) return;
    windowObject.HTMLElement.prototype.focus = $507fabe10e71c6fb$export$d90243b58daecda7.get(windowObject).focus;
    documentObject.removeEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    documentObject.removeEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    windowObject.removeEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    windowObject.removeEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
        documentObject.removeEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        documentObject.removeEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        documentObject.removeEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$export$d90243b58daecda7.delete(windowObject);
};
function $507fabe10e71c6fb$export$2f1888112f558a7d(element) {
    const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(element);
    let loadListener;
    if (documentObject.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
    else {
        loadListener = ()=>{
            $507fabe10e71c6fb$var$setupGlobalFocusEvents(element);
        };
        documentObject.addEventListener("DOMContentLoaded", loadListener);
    }
    return ()=>$507fabe10e71c6fb$var$tearDownWindowFocusTracking(element, loadListener);
}
// Server-side rendering does not have the document object defined
// eslint-disable-next-line no-restricted-globals
if (typeof document !== "undefined") $507fabe10e71c6fb$export$2f1888112f558a7d();
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, $bx7SL$useState)($507fabe10e71c6fb$var$currentModality);
    (0, $bx7SL$useEffect)(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, $bx7SL$useIsSSR)() ? null : modality;
}
const $507fabe10e71c6fb$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    var _e_target;
    const IHTMLInputElement = typeof window !== "undefined" ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(e === null || e === void 0 ? void 0 : e.target).HTMLInputElement : HTMLInputElement;
    const IHTMLTextAreaElement = typeof window !== "undefined" ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(e === null || e === void 0 ? void 0 : e.target).HTMLTextAreaElement : HTMLTextAreaElement;
    const IHTMLElement = typeof window !== "undefined" ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(e === null || e === void 0 ? void 0 : e.target).HTMLElement : HTMLElement;
    const IKeyboardEvent = typeof window !== "undefined" ? (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerWindow */ .kR)(e === null || e === void 0 ? void 0 : e.target).KeyboardEvent : KeyboardEvent;
    isTextInput = isTextInput || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLInputElement && !$507fabe10e71c6fb$var$nonTextInputTypes.has(e === null || e === void 0 ? void 0 : (_e_target = e.target) === null || _e_target === void 0 ? void 0 : _e_target.type) || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLTextAreaElement || (e === null || e === void 0 ? void 0 : e.target) instanceof IHTMLElement && (e === null || e === void 0 ? void 0 : e.target.isContentEditable);
    return !(isTextInput && modality === "keyboard" && e instanceof IKeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput, autoFocus: autoFocus } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, $bx7SL$useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(!!(opts === null || opts === void 0 ? void 0 : opts.isTextInput), modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled, onBlurWithin: onBlurWithin, onFocusWithin: onFocusWithin, onFocusWithinChange: onFocusWithinChange } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocusWithin: false
    });
    let onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (!state.current.isFocusWithin && document.activeElement === e.target) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            // These should not have been null, that would conflict in mergeProps
            onFocus: undefined,
            onBlur: undefined
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, isDisabled: isDisabled } = props;
    let [isHovered, setHovered] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: "",
        target: null
    }).current;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps, triggerHoverEnd: triggerHoverEnd } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: "hoverstart",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = "";
            state.target = null;
            if (pointerType === "touch" || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: "hoverend",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== "undefined") {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, "mouse");
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref, onInteractOutside: onInteractOutside, isDisabled: isDisabled, onInteractOutsideStart: onInteractOutsideStart } = props;
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useEffectEvent */ .iW)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        const element = ref.current;
        const documentObject = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .getOwnerDocument */ .r3)(element);
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== "undefined") {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            documentObject.addEventListener("pointerdown", onPointerDown, true);
            documentObject.addEventListener("pointerup", onPointerUp, true);
            return ()=>{
                documentObject.removeEventListener("pointerdown", onPointerDown, true);
                documentObject.removeEventListener("pointerup", onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            documentObject.addEventListener("mousedown", onPointerDown, true);
            documentObject.addEventListener("mouseup", onMouseUp, true);
            documentObject.addEventListener("touchstart", onPointerDown, true);
            documentObject.addEventListener("touchend", onTouchEnd, true);
            return ()=>{
                documentObject.removeEventListener("mousedown", onPointerDown, true);
                documentObject.removeEventListener("mouseup", onMouseUp, true);
                documentObject.removeEventListener("touchstart", onPointerDown, true);
                documentObject.removeEventListener("touchend", onTouchEnd, true);
            };
        }
    }, [
        ref,
        isDisabled,
        onPointerDown,
        triggerInteractOutside
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    if (event.target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (event.target.closest("[data-react-aria-top-layer]")) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return undefined;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
            onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart, onMove: onMove, onMoveEnd: onMoveEnd } = props;
    let state = (0, $bx7SL$useRef)({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, $bx7SL$useGlobalListeners)();
    let move = (0, $bx7SL$useEffectEvent)((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                type: "movestart",
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove === null || onMove === void 0 ? void 0 : onMove({
            type: "move",
            pointerType: pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let end = (0, $bx7SL$useEffectEvent)((originalEvent, pointerType)=>{
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)();
        if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
            type: "moveend",
            pointerType: pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let moveProps = (0, $bx7SL$useMemo)(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, $14c0b72509d70225$export$16a4697467175487)();
            state.current.didMove = false;
        };
        if (typeof PointerEvent === "undefined") {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    move(e, "mouse", e.pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), e.pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end(e, "mouse");
                    removeGlobalListener(window, "mousemove", onMouseMove, false);
                    removeGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, "mousemove", onMouseMove, false);
                    addGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier })=>identifier === state.current.id);
                if (touch >= 0) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    let { pageX: pageX, pageY: pageY } = e.changedTouches[touch];
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    move(e, "touch", pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier })=>identifier === state.current.id);
                if (touch >= 0) {
                    end(e, "touch");
                    state.current.id = null;
                    removeGlobalListener(window, "touchmove", onTouchMove);
                    removeGlobalListener(window, "touchend", onTouchEnd);
                    removeGlobalListener(window, "touchcancel", onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX, pageY: pageY, identifier: identifier } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, "touchmove", onTouchMove, false);
                addGlobalListener(window, "touchend", onTouchEnd, false);
                addGlobalListener(window, "touchcancel", onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    var _state_current_lastPosition, _state_current_lastPosition1;
                    let pointerType = e.pointerType || "mouse";
                    var _state_current_lastPosition_pageX, _state_current_lastPosition_pageY;
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - ((_state_current_lastPosition_pageX = (_state_current_lastPosition = state.current.lastPosition) === null || _state_current_lastPosition === void 0 ? void 0 : _state_current_lastPosition.pageX) !== null && _state_current_lastPosition_pageX !== void 0 ? _state_current_lastPosition_pageX : 0), e.pageY - ((_state_current_lastPosition_pageY = (_state_current_lastPosition1 = state.current.lastPosition) === null || _state_current_lastPosition1 === void 0 ? void 0 : _state_current_lastPosition1.pageY) !== null && _state_current_lastPosition_pageY !== void 0 ? _state_current_lastPosition_pageY : 0));
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || "mouse";
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, "pointermove", onPointerMove, false);
                    removeGlobalListener(window, "pointerup", onPointerUp, false);
                    removeGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, "pointermove", onPointerMove, false);
                    addGlobalListener(window, "pointerup", onPointerUp, false);
                    addGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, "keyboard", deltaX, deltaY);
            end(e, "keyboard");
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case "Left":
                case "ArrowLeft":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case "Right":
                case "ArrowRight":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case "Up":
                case "ArrowUp":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case "Down":
                case "ArrowDown":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        addGlobalListener,
        removeGlobalListener,
        move,
        end
    ]);
    return {
        moveProps: moveProps
    };
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll, isDisabled: isDisabled } = props;
    let onScrollHandler = (0, $bx7SL$useCallback)((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    (0, $bx7SL$useEvent)(ref, "wheel", isDisabled ? undefined : onScrollHandler);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled, onLongPressStart: onLongPressStart, onLongPressEnd: onLongPressEnd, onLongPress: onLongPress, threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription: accessibilityDescription } = props;
    const timeRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let { addGlobalListener: addGlobalListener, removeGlobalListener: removeGlobalListener } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useGlobalListeners */ .xi)();
    let { pressProps: pressProps } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        isDisabled: isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: "longpressstart"
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent("pointercancel", {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e,
                        type: "longpress"
                    });
                    timeRef.current = undefined;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === "touch") {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e.target, "contextmenu", onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, "pointerup", ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e.target, "contextmenu", onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
                ...e,
                type: "longpressend"
            });
        }
    });
    let descriptionProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .useDescription */ .PK)(onLongPress && !isDisabled ? accessibilityDescription : undefined);
    return {
        longPressProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__/* .mergeProps */ .dG)(pressProps, descriptionProps)
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 31323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  H9: () => (/* binding */ $d5336fe17ce95402$export$38eaa17faae8f579),
  iX: () => (/* binding */ $a2e5df62f93c7633$export$9d32628fc2aea7da),
  x7: () => (/* binding */ $3e5eb2498db5b506$export$73f7a44322579622),
  u4: () => (/* binding */ $168583247155ddda$export$dc9c12ed27dd1b49)
});

// UNUSED EXPORTS: UNSTABLE_useSubmenuTrigger

// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/real-module.mjs + 1 modules
var real_module = __webpack_require__(83651);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: ./node_modules/@react-aria/overlays/dist/import.mjs + 1 modules
var overlays_dist_import = __webpack_require__(66690);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(74997);
;// CONCATENATED MODULE: ./node_modules/@react-aria/selection/dist/import.mjs







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return (0, dist_import/* isAppleDevice */.ad)() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e) {
    if ((0, dist_import/* isMac */.V5)()) return e.metaKey;
    return e.ctrlKey;
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/**
 * Controls how long to wait before clearing the typeahead buffer.
 */ const $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1000; // 1 second
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate, selectionManager: selectionManager, onTypeSelect: onTypeSelect } = options;
    let state = (0, react_.useRef)({
        search: "",
        timeout: null
    }).current;
    let onKeyDown = (e)=>{
        let character = $fb3050f43d946246$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === " " && state.search.trim().length > 0) {
            e.preventDefault();
            if (!("continuePropagation" in e)) e.stopPropagation();
        }
        state.search += character;
        // Use the delegate to find a key to focus.
        // Prioritize items after the currently focused item, falling back to searching the whole list.
        let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
        // If no key found, search from the top.
        if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
        if (key != null) {
            selectionManager.setFocusedKey(key);
            if (onTypeSelect) onTypeSelect(key);
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = "";
        }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
        }
    };
}
function $fb3050f43d946246$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return "";
}


function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager, keyboardDelegate: delegate, ref: ref, autoFocus: autoFocus = false, shouldFocusWrap: shouldFocusWrap = false, disallowEmptySelection: disallowEmptySelection = false, disallowSelectAll: disallowSelectAll = false, selectOnFocus: selectOnFocus = manager.selectionBehavior === "replace", disallowTypeAhead: disallowTypeAhead = false, shouldUseVirtualFocus: shouldUseVirtualFocus, allowsTabNavigation: allowsTabNavigation = false, isVirtualized: isVirtualized, scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref, linkBehavior: linkBehavior = "action" } = options;
    let { direction: direction } = (0, real_module/* useLocale */.bU)();
    let router = (0, dist_import/* useRouter */.tv)();
    let onKeyDown = (e)=>{
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === "Tab") e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!ref.current.contains(e.target)) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                if (manager.isLink(key) && linkBehavior === "selection" && selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e)) {
                    // Set focused key and re-render synchronously to bring item into view if needed.
                    (0, server_rendering_stub_.flushSync)(()=>{
                        manager.setFocusedKey(key, childFocus);
                    });
                    let item = scrollRef.current.querySelector(`[data-key="${CSS.escape(key.toString())}"]`);
                    router.open(item, e);
                    return;
                }
                manager.setFocusedKey(key, childFocus);
                if (manager.isLink(key) && linkBehavior === "override") return;
                if (e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(key);
                else if (selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case "ArrowDown":
                if (delegate.getKeyBelow) {
                    var _delegate_getFirstKey, _delegate_getFirstKey1;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "ArrowUp":
                if (delegate.getKeyAbove) {
                    var _delegate_getLastKey, _delegate_getLastKey1;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "ArrowLeft":
                if (delegate.getKeyLeftOf) {
                    var _delegate_getFirstKey2, _delegate_getLastKey2;
                    e.preventDefault();
                    let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
                }
                break;
            case "ArrowRight":
                if (delegate.getKeyRightOf) {
                    var _delegate_getLastKey3, _delegate_getFirstKey3;
                    e.preventDefault();
                    let nextKey = delegate.getKeyRightOf(manager.focusedKey);
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
                }
                break;
            case "Home":
                if (delegate.getFirstKey) {
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e));
                    manager.setFocusedKey(firstKey);
                    if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(firstKey);
                    else if (selectOnFocus) manager.replaceSelection(firstKey);
                }
                break;
            case "End":
                if (delegate.getLastKey) {
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e));
                    manager.setFocusedKey(lastKey);
                    if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(lastKey);
                    else if (selectOnFocus) manager.replaceSelection(lastKey);
                }
                break;
            case "PageDown":
                if (delegate.getKeyPageBelow) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "PageUp":
                if (delegate.getKeyPageAbove) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "a":
                if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case "Escape":
                e.preventDefault();
                if (!disallowEmptySelection) manager.clearSelection();
                break;
            case "Tab":
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = (0, focus_dist_import/* getFocusableTreeWalker */.QL)(ref.current, {
                            tabbable: true
                        });
                        let next;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last);
                        if (next && !next.contains(document.activeElement)) (0, dist_import/* focusWithoutScrolling */.Ao)(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    let scrollPos = (0, react_.useRef)({
        top: 0,
        left: 0
    });
    (0, dist_import/* useEvent */.zX)(scrollRef, "scroll", isVirtualized ? null : ()=>{
        scrollPos.current = {
            top: scrollRef.current.scrollTop,
            left: scrollRef.current.scrollLeft
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            let navigateToFirstKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            var _manager_lastSelectedKey, _manager_firstSelectedKey;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : delegate.getLastKey());
            else navigateToFirstKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : delegate.getFirstKey());
        } else if (!isVirtualized) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
        }
        if (!isVirtualized && manager.focusedKey != null) {
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = scrollRef.current.querySelector(`[data-key="${CSS.escape(manager.focusedKey.toString())}"]`);
            if (element) {
                // This prevents a flash of focus on the first/last element in the collection, or the collection itself.
                if (!element.contains(document.activeElement)) (0, dist_import/* focusWithoutScrolling */.Ao)(element);
                let modality = (0, interactions_dist_import/* getInteractionModality */.Jz)();
                if (modality === "keyboard") (0, dist_import/* scrollIntoViewport */.Gt)(element, {
                    containingElement: ref.current
                });
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    const autoFocusRef = (0, react_.useRef)(autoFocus);
    (0, react_.useEffect)(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === "first") focusedKey = delegate.getFirstKey();
            if (autoFocus === "last") focusedKey = delegate.getLastKey();
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) {
                for (let key of selectedKeys)if (manager.canSelectItem(key)) {
                    focusedKey = key;
                    break;
                }
            }
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus) (0, focus_dist_import/* focusSafely */.ex)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // If not virtualized, scroll the focused element into view when the focusedKey changes.
    // When virtualized, Virtualizer handles this internally.
    let lastFocusedKey = (0, react_.useRef)(manager.focusedKey);
    (0, react_.useEffect)(()=>{
        let modality = (0, interactions_dist_import/* getInteractionModality */.Jz)();
        if (manager.isFocused && manager.focusedKey != null && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
            let element = scrollRef.current.querySelector(`[data-key="${CSS.escape(manager.focusedKey.toString())}"]`);
            if (element && (modality === "keyboard" || autoFocusRef.current)) {
                if (!isVirtualized) (0, dist_import/* scrollIntoView */.zT)(scrollRef.current, element);
                // Avoid scroll in iOS VO, since it may cause overlay to close (i.e. RAC submenu)
                if (modality !== "virtual") (0, dist_import/* scrollIntoViewport */.Gt)(element, {
                    containingElement: ref.current
                });
            }
        }
        // If the focused key becomes null (e.g. the last item is deleted), focus the whole collection.
        if (manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null) (0, focus_dist_import/* focusSafely */.ex)(ref.current);
        lastFocusedKey.current = manager.focusedKey;
        autoFocusRef.current = false;
    }, [
        isVirtualized,
        scrollRef,
        manager.focusedKey,
        manager.isFocused,
        ref
    ]);
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (scrollRef.current === e.target) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps } = (0, $fb3050f43d946246$export$e32c88dfddc6e1d8)({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = (0, dist_import/* mergeProps */.dG)(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    // If using virtual focus, don't set a tabIndex at all so that VoiceOver on iOS 14 doesn't try
    // to move real DOM focus to the element anyway.
    let tabIndex;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    return {
        collectionProps: {
            ...handlers,
            tabIndex: tabIndex
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
    let { selectionManager: manager, key: key, ref: ref, shouldSelectOnPressUp: shouldSelectOnPressUp, shouldUseVirtualFocus: shouldUseVirtualFocus, focus: focus, isDisabled: isDisabled, onAction: onAction, allowsDifferentPressOrigin: allowsDifferentPressOrigin, linkBehavior: linkBehavior = "action" } = options;
    let router = (0, dist_import/* useRouter */.tv)();
    let onSelect = (e)=>{
        if (e.pointerType === "keyboard" && (0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === "none") return;
            if (manager.isLink(key)) {
                if (linkBehavior === "selection") {
                    router.open(ref.current, e);
                    // Always set selected keys back to what they were so that select and combobox close.
                    manager.setSelectedKeys(manager.selectedKeys);
                    return;
                } else if (linkBehavior === "override" || linkBehavior === "none") return;
            }
            if (manager.selectionMode === "single") {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === "toggle" || e && ((0, $feb5ffebff200149$export$16792effe837dba3)(e) || e.pointerType === "touch" || e.pointerType === "virtual")) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    (0, react_.useEffect)(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused && !shouldUseVirtualFocus) {
            if (focus) focus();
            else if (document.activeElement !== ref.current) (0, focus_dist_import/* focusSafely */.ex)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    isDisabled = isDisabled || manager.isDisabled(key);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {};
    if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    else if (isDisabled) itemProps.onMouseDown = (e)=>{
        // Prevent focus going to the body when clicking on a disabled item.
        e.preventDefault();
    };
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    let isLinkOverride = manager.isLink(key) && linkBehavior === "override";
    let hasLinkAction = manager.isLink(key) && linkBehavior !== "selection" && linkBehavior !== "none";
    let allowsSelection = !isDisabled && manager.canSelectItem(key) && !isLinkOverride;
    let allowsActions = (onAction || hasLinkAction) && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : !allowsSelection || manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = (0, react_.useRef)(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = (0, react_.useRef)(false);
    let hadPrimaryActionOnPressStart = (0, react_.useRef)(false);
    let performAction = (e)=>{
        if (onAction) onAction();
        if (hasLinkAction) router.open(ref.current, e);
    };
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {};
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === "keyboard" && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
        };
        // If allowsDifferentPressOrigin, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
                if (e.pointerType === "keyboard" && !$880e95eb8b93ba9a$var$isActionKey()) return;
                performAction(e);
            } else if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
        };
        else {
            itemPressProps.onPressUp = hasPrimaryAction ? null : (e)=>{
                if (e.pointerType !== "keyboard" && allowsSelection) onSelect(e);
            };
            itemPressProps.onPress = hasPrimaryAction ? performAction : null;
        }
    } else {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (allowsSelection && (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!allowsActions || $880e95eb8b93ba9a$var$isSelectionKey()))) onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
                if (hasAction) performAction(e);
                else if (allowsSelection) onSelect(e);
            }
        };
    }
    itemProps["data-key"] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    let { pressProps: pressProps, isPressed: isPressed } = (0, interactions_dist_import/* usePress */.r7)(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === "mouse") {
            e.stopPropagation();
            e.preventDefault();
            performAction(e);
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps: longPressProps } = (0, interactions_dist_import/* useLongPress */.TA)({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === "touch") {
                onSelect(e);
                manager.setSelectionBehavior("toggle");
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    // Use a capturing listener to ensure this runs before useDrag, regardless of
    // the order the props get merged.
    let onDragStartCapture = (e)=>{
        if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    // Prevent default on link clicks so that we control exactly
    // when they open (to match selection behavior).
    let onClick = manager.isLink(key) ? (e)=>{
        if (!(0, dist_import/* openLink */.nG).isOpening) e.preventDefault();
    } : undefined;
    return {
        itemProps: (0, dist_import/* mergeProps */.dG)(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
            onDoubleClick: onDoubleClick,
            onDragStartCapture: onDragStartCapture,
            onClick: onClick
        }),
        isPressed: isPressed,
        isSelected: manager.isSelected(key),
        isFocused: manager.isFocused && manager.focusedKey === key,
        isDisabled: isDisabled,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}
function $880e95eb8b93ba9a$var$isActionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === "Enter";
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === " " || (event === null || event === void 0 ? void 0 : event.code) === "Space";
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
class $2a25aae57d74318e$export$a05409b8bb224a5a {
    getNextKey(key) {
        key = this.collection.getKeyAfter(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
        return null;
    }
    getPreviousKey(key) {
        key = this.collection.getKeyBefore(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
        return null;
    }
    findKey(key, nextKey, shouldSkip) {
        let item = this.getItem(key);
        if (!item) return null;
        // Find the item above or below in the same column.
        let prevRect = item.getBoundingClientRect();
        do {
            key = nextKey(key);
            item = this.getItem(key);
        }while (item && shouldSkip(prevRect, item.getBoundingClientRect()));
        return key;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.top === itemRect.top || prevRect.left !== itemRect.left;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.left === itemRect.left || prevRect.top !== itemRect.top;
    }
    getKeyBelow(key) {
        if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key)=>this.getNextKey(key), this.isSameRow);
        else return this.getNextKey(key);
    }
    getKeyAbove(key) {
        if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key)=>this.getPreviousKey(key), this.isSameRow);
        else return this.getPreviousKey(key);
    }
    getNextColumn(key, right) {
        return right ? this.getPreviousKey(key) : this.getNextKey(key);
    }
    getKeyRightOf(key) {
        if (this.layout === "grid") {
            if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "rtl");
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === "rtl"), this.isSameColumn);
        } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "rtl");
        return null;
    }
    getKeyLeftOf(key) {
        if (this.layout === "grid") {
            if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "ltr");
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === "ltr"), this.isSameColumn);
        } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "ltr");
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if ((item === null || item === void 0 ? void 0 : item.type) === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
        return null;
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
        return null;
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${CSS.escape(key.toString())}"]`);
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        if (!(0, dist_import/* isScrollable */.a9)(menu)) return this.getFirstKey();
        let containerRect = menu.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        if (this.orientation === "horizontal") {
            let containerX = containerRect.x - menu.scrollLeft;
            let pageX = Math.max(0, itemRect.x - containerX + itemRect.width - containerRect.width);
            while(item && itemRect.x - containerX > pageX){
                key = this.getKeyAbove(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        } else {
            let containerY = containerRect.y - menu.scrollTop;
            let pageY = Math.max(0, itemRect.y - containerY + itemRect.height - containerRect.height);
            while(item && itemRect.y - containerY > pageY){
                key = this.getKeyAbove(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        }
        return key !== null && key !== void 0 ? key : this.getFirstKey();
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        if (!(0, dist_import/* isScrollable */.a9)(menu)) return this.getLastKey();
        let containerRect = menu.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        if (this.orientation === "horizontal") {
            let containerX = containerRect.x - menu.scrollLeft;
            let pageX = Math.min(menu.scrollWidth, itemRect.x - containerX - itemRect.width + containerRect.width);
            while(item && itemRect.x - containerX < pageX){
                key = this.getKeyBelow(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        } else {
            let containerY = containerRect.y - menu.scrollTop;
            let pageY = Math.min(menu.scrollHeight, itemRect.y - containerY - itemRect.height + containerRect.height);
            while(item && itemRect.y - containerY < pageY){
                key = this.getKeyBelow(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        }
        return key !== null && key !== void 0 ? key : this.getLastKey();
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getKeyBelow(key);
        }
        return null;
    }
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.collator = opts.collator;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.orientation = opts.orientation;
            this.direction = opts.direction;
            this.layout = opts.layout || "stack";
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = "stack";
            this.orientation = "vertical";
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === "stack" && this.orientation === "vertical") {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
}




function $982254629710d113$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager, collection: collection, disabledKeys: disabledKeys, ref: ref, keyboardDelegate: keyboardDelegate } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, real_module/* useCollator */.Xe)({
        usage: "search",
        sensitivity: "base"
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, react_.useMemo)(()=>keyboardDelegate || new (0, $2a25aae57d74318e$export$a05409b8bb224a5a)(collection, disabledBehavior === "selection" ? new Set() : disabledKeys, ref, collator), [
        keyboardDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior
    ]);
    let { collectionProps: collectionProps } = (0, $ae20dd8cbca75726$export$d6daf82dcd84e87c)({
        ...props,
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate
    });
    return {
        listProps: collectionProps
    };
}







//# sourceMappingURL=module.js.map

// EXTERNAL MODULE: ./node_modules/@react-stately/collections/dist/import.mjs
var collections_dist_import = __webpack_require__(22049);
;// CONCATENATED MODULE: ./node_modules/@react-aria/menu/dist/import.mjs









function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $2cbb7ca666678a14$exports = {};
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
    "longPressMessage": `\u{627}\u{636}\u{63A}\u{637} \u{645}\u{637}\u{648}\u{644}\u{627}\u{64B} \u{623}\u{648} \u{627}\u{636}\u{63A}\u{637} \u{639}\u{644}\u{649} Alt + \u{627}\u{644}\u{633}\u{647}\u{645} \u{644}\u{623}\u{633}\u{641}\u{644} \u{644}\u{641}\u{62A}\u{62D} \u{627}\u{644}\u{642}\u{627}\u{626}\u{645}\u{629}`
};


var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
    "longPressMessage": `\u{41D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} \u{43F}\u{440}\u{43E}\u{434}\u{44A}\u{43B}\u{436}\u{438}\u{442}\u{435}\u{43B}\u{43D}\u{43E} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{435}\u{442}\u{435} Alt+ \u{441}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{43D}\u{430}\u{434}\u{43E}\u{43B}\u{443}, \u{437}\u{430} \u{434}\u{430} \u{43E}\u{442}\u{432}\u{43E}\u{440}\u{438}\u{442}\u{435} \u{43C}\u{435}\u{43D}\u{44E}\u{442}\u{43E}`
};


var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
    "longPressMessage": `Dlouh\xfdm stiskem nebo stisknut\xedm kl\xe1ves Alt + \u{161}ipka dol\u{16F} otev\u{159}ete nab\xeddku`
};


var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
    "longPressMessage": `Langt tryk eller tryk p\xe5 Alt + pil ned for at \xe5bne menuen`
};


var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
    "longPressMessage": `Dr\xfccken Sie lange oder dr\xfccken Sie Alt + Nach-unten, um das Men\xfc zu \xf6ffnen`
};


var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
    "longPressMessage": `\u{3A0}\u{3B9}\u{3AD}\u{3C3}\u{3C4}\u{3B5} \u{3C0}\u{3B1}\u{3C1}\u{3B1}\u{3C4}\u{3B5}\u{3C4}\u{3B1}\u{3BC}\u{3AD}\u{3BD}\u{3B1} \u{3AE} \u{3C0}\u{3B1}\u{3C4}\u{3AE}\u{3C3}\u{3C4}\u{3B5} Alt + \u{3BA}\u{3AC}\u{3C4}\u{3C9} \u{3B2}\u{3AD}\u{3BB}\u{3BF}\u{3C2} \u{3B3}\u{3B9}\u{3B1} \u{3BD}\u{3B1} \u{3B1}\u{3BD}\u{3BF}\u{3AF}\u{3BE}\u{3B5}\u{3C4}\u{3B5} \u{3C4}\u{3BF} \u{3BC}\u{3B5}\u{3BD}\u{3BF}\u{3CD}`
};


var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};


var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el men\xfa`
};


var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
    "longPressMessage": `Men\xfc\xfc avamiseks vajutage pikalt v\xf5i vajutage klahve Alt + allanool`
};


var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai n\xe4pp\xe4inyhdistelm\xe4ll\xe4 Alt + Alanuoli`
};


var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
    "longPressMessage": `Appuyez de mani\xe8re prolong\xe9e ou appuyez sur Alt\xa0+\xa0Fl\xe8che vers le bas pour ouvrir le menu.`
};


var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
    "longPressMessage": `\u{5DC}\u{5D7}\u{5E5} \u{5DC}\u{5D7}\u{5D9}\u{5E6}\u{5D4} \u{5D0}\u{5E8}\u{5D5}\u{5DB}\u{5D4} \u{5D0}\u{5D5} \u{5D4}\u{5E7}\u{5E9} Alt + ArrowDown \u{5DB}\u{5D3}\u{5D9} \u{5DC}\u{5E4}\u{5EA}\u{5D5}\u{5D7} \u{5D0}\u{5EA} \u{5D4}\u{5EA}\u{5E4}\u{5E8}\u{5D9}\u{5D8}`
};


var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};


var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele ny\xedl gombot a men\xfc megnyit\xe1s\xe1hoz`
};


var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
    "longPressMessage": `Premere a lungo o premere Alt + Freccia gi\xf9 per aprire il menu`
};


var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
    "longPressMessage": `\u{9577}\u{62BC}\u{3057}\u{307E}\u{305F}\u{306F} Alt+\u{4E0B}\u{77E2}\u{5370}\u{30AD}\u{30FC}\u{3067}\u{30E1}\u{30CB}\u{30E5}\u{30FC}\u{3092}\u{958B}\u{304F}`
};


var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
    "longPressMessage": `\u{AE38}\u{AC8C} \u{B204}\u{B974}\u{AC70}\u{B098} Alt + \u{C544}\u{B798}\u{CABD} \u{D654}\u{C0B4}\u{D45C}\u{B97C} \u{B20C}\u{B7EC} \u{BA54}\u{B274} \u{C5F4}\u{AE30}`
};


var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
    "longPressMessage": `Nor\u{117}dami atidaryti meniu, nuspaud\u{119} palaikykite arba paspauskite \u{201E}Alt + ArrowDown\u{201C}.`
};


var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
    "longPressMessage": `Lai atv\u{113}rtu izv\u{113}lni, turiet nospiestu vai nospiediet tausti\u{146}u kombin\u{101}ciju Alt + lejupv\u{113}rst\u{101} bulti\u{146}a`
};


var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for \xe5 \xe5pne menyen`
};


var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};


var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
    "longPressMessage": `Naci\u{15B}nij i przytrzymaj lub naci\u{15B}nij klawisze Alt + Strza\u{142}ka w d\xf3\u{142}, aby otworzy\u{107} menu`
};


var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};


var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};


var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
    "longPressMessage": `Ap\u{103}sa\u{21B}i lung sau ap\u{103}sa\u{21B}i pe Alt + s\u{103}geat\u{103} \xeen jos pentru a deschide meniul`
};


var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
    "longPressMessage": `\u{41D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} \u{438} \u{443}\u{434}\u{435}\u{440}\u{436}\u{438}\u{432}\u{430}\u{439}\u{442}\u{435} \u{438}\u{43B}\u{438} \u{43D}\u{430}\u{436}\u{43C}\u{438}\u{442}\u{435} Alt + \u{421}\u{442}\u{440}\u{435}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{447}\u{442}\u{43E}\u{431}\u{44B} \u{43E}\u{442}\u{43A}\u{440}\u{44B}\u{442}\u{44C} \u{43C}\u{435}\u{43D}\u{44E}`
};


var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
    "longPressMessage": `Ponuku otvor\xedte dlh\xfdm stla\u{10D}en\xedm alebo stla\u{10D}en\xedm kl\xe1vesu Alt + kl\xe1vesu so \u{161}\xedpkou nadol`
};


var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
    "longPressMessage": `Za odprtje menija pritisnite in dr\u{17E}ite gumb ali pritisnite Alt+pu\u{161}\u{10D}ica navzdol`
};


var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};


var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
    "longPressMessage": `H\xe5ll nedtryckt eller tryck p\xe5 Alt + pil ned\xe5t f\xf6r att \xf6ppna menyn`
};


var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
    "longPressMessage": `Men\xfcy\xfc a\xe7mak i\xe7in uzun bas\u{131}n veya Alt + A\u{15F}a\u{11F}\u{131} Ok tu\u{15F}una bas\u{131}n`
};


var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
    "longPressMessage": `\u{414}\u{43E}\u{432}\u{433}\u{43E} \u{430}\u{431}\u{43E} \u{437}\u{432}\u{438}\u{447}\u{430}\u{439}\u{43D}\u{43E} \u{43D}\u{430}\u{442}\u{438}\u{441}\u{43D}\u{456}\u{442}\u{44C} \u{43A}\u{43E}\u{43C}\u{431}\u{456}\u{43D}\u{430}\u{446}\u{456}\u{44E} \u{43A}\u{43B}\u{430}\u{432}\u{456}\u{448} Alt \u{456} \u{441}\u{442}\u{440}\u{456}\u{43B}\u{43A}\u{430} \u{432}\u{43D}\u{438}\u{437}, \u{449}\u{43E}\u{431} \u{432}\u{456}\u{434}\u{43A}\u{440}\u{438}\u{442}\u{438} \u{43C}\u{435}\u{43D}\u{44E}`
};


var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
    "longPressMessage": `\u{957F}\u{6309}\u{6216}\u{6309} Alt + \u{5411}\u{4E0B}\u{65B9}\u{5411}\u{952E}\u{4EE5}\u{6253}\u{5F00}\u{83DC}\u{5355}`
};


var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
    "longPressMessage": `\u{9577}\u{6309}\u{6216}\u{6309} Alt+\u{5411}\u{4E0B}\u{9375}\u{4EE5}\u{958B}\u{555F}\u{529F}\u{80FD}\u{8868}`
};


$2cbb7ca666678a14$exports = {
    "ar-AE": $c0398ad35c3639b7$exports,
    "bg-BG": $7af657c4165927c3$exports,
    "cs-CZ": $d95d4da6d531ab81$exports,
    "da-DK": $24ebda9c775dca17$exports,
    "de-DE": $743e0dfca6cab1e9$exports,
    "el-GR": $a2f41026e05f1c84$exports,
    "en-US": $43b800e97c901737$exports,
    "es-ES": $442f5f6ac211e29f$exports,
    "et-EE": $dff280acfeb2d8ac$exports,
    "fi-FI": $51608325613944d7$exports,
    "fr-FR": $c4a1b1eabeaa87be$exports,
    "he-IL": $8c74815cdee18d1b$exports,
    "hr-HR": $fd0e9ef6a7fe0ec9$exports,
    "hu-HU": $a89a74a39eba465a$exports,
    "it-IT": $edc7c66594a0ae8a$exports,
    "ja-JP": $f1ab51510712db52$exports,
    "ko-KR": $f9b672d9b82fa3d6$exports,
    "lt-LT": $a385f3910feda499$exports,
    "lv-LV": $4f1bde932c441789$exports,
    "nb-NO": $914a51a8a594d5be$exports,
    "nl-NL": $89aaf803103bb500$exports,
    "pl-PL": $c685891476dbaaca$exports,
    "pt-BR": $885879b9b10c2959$exports,
    "pt-PT": $6b39616688a51692$exports,
    "ro-RO": $f26362aed63f47e2$exports,
    "ru-RU": $06cbade644558bf0$exports,
    "sk-SK": $0a391ff68f9d59b1$exports,
    "sl-SI": $8193cf0e649c7928$exports,
    "sr-SP": $f398debcce5a5c55$exports,
    "sv-SE": $9e9fef000aa4c013$exports,
    "tr-TR": $c016c8183bbe3d68$exports,
    "uk-UA": $ca4f6c8462244e62$exports,
    "zh-CN": $2d9960c02ccac927$exports,
    "zh-TW": $f1b682a4c8c5631c$exports
};






function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = "menu", isDisabled: isDisabled, trigger: trigger = "press" } = props;
    let menuTriggerId = (0, dist_import/* useId */.Me)();
    let { triggerProps: triggerProps, overlayProps: overlayProps } = (0, overlays_dist_import/* useOverlayTrigger */.IB)({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === "longPress" && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case "Enter":
            case " ":
                if (trigger === "longPress") return;
            // fallthrough
            case "ArrowDown":
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!("continuePropagation" in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle("first");
                break;
            case "ArrowUp":
                if (!("continuePropagation" in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle("last");
                break;
            default:
                // Allow other keys.
                if ("continuePropagation" in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, real_module/* useLocalizedStringFormatter */.qb)((0, (/*@__PURE__*/$parcel$interopDefault($2cbb7ca666678a14$exports))), "@react-aria/menu");
    let { longPressProps: longPressProps } = (0, interactions_dist_import/* useLongPress */.TA)({
        isDisabled: isDisabled || trigger !== "longPress",
        accessibilityDescription: stringFormatter.format("longPressMessage"),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open("first");
        }
    });
    let pressProps = {
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled) // If opened with a screen reader, auto focus the first item.
            // Otherwise, the menu itself will be focused.
            state.toggle(e.pointerType === "virtual" ? "first" : null);
        },
        onPress (e) {
            if (e.pointerType === "touch" && !isDisabled) state.toggle();
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === "press" ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            "aria-labelledby": menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $d5336fe17ce95402$export$6f49b4016bfc8d56 = new WeakMap();
function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true, onKeyDown: onKeyDown, onKeyUp: onKeyUp, ...otherProps } = props;
    if (!props["aria-label"] && !props["aria-labelledby"]) console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let domProps = (0, dist_import/* filterDOMProps */.zL)(props, {
        labelable: true
    });
    let { listProps: listProps } = (0, $982254629710d113$export$b95089534ab7c1fd)({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap,
        linkBehavior: "override"
    });
    $d5336fe17ce95402$export$6f49b4016bfc8d56.set(state, {
        onClose: props.onClose,
        onAction: props.onAction
    });
    return {
        menuProps: (0, dist_import/* mergeProps */.dG)(domProps, {
            onKeyDown: onKeyDown,
            onKeyUp: onKeyUp
        }, {
            role: "menu",
            ...listProps,
            onKeyDown: (e)=>{
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== "Escape") listProps.onKeyDown(e);
            }
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    var _item_props;
    let { key: key, closeOnSelect: closeOnSelect, isVirtualized: isVirtualized, "aria-haspopup": hasPopup, onPressStart: pressStartProp, onPressUp: pressUpProp, onPress: onPress, onPressChange: onPressChange, onPressEnd: onPressEnd, onHoverStart: hoverStartProp, onHoverChange: onHoverChange, onHoverEnd: onHoverEnd, onKeyDown: onKeyDown, onKeyUp: onKeyUp, onFocus: onFocus, onFocusChange: onFocusChange, onBlur: onBlur } = props;
    let isTrigger = !!hasPopup;
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    let data = (0, $d5336fe17ce95402$export$6f49b4016bfc8d56).get(state);
    let onClose = props.onClose || data.onClose;
    let onAction = isTrigger ? ()=>{} : props.onAction || data.onAction;
    let router = (0, dist_import/* useRouter */.tv)();
    let performAction = (e)=>{
        if (onAction) onAction(key);
        if (e.target instanceof HTMLAnchorElement) router.open(e.target, e);
    };
    let role = "menuitem";
    if (!isTrigger) {
        if (state.selectionManager.selectionMode === "single") role = "menuitemradio";
        else if (state.selectionManager.selectionMode === "multiple") role = "menuitemcheckbox";
    }
    let labelId = (0, dist_import/* useSlotId */.mp)();
    let descriptionId = (0, dist_import/* useSlotId */.mp)();
    let keyboardId = (0, dist_import/* useSlotId */.mp)();
    let ariaProps = {
        "aria-disabled": isDisabled || undefined,
        role: role,
        "aria-label": props["aria-label"],
        "aria-labelledby": labelId,
        "aria-describedby": [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(" ") || undefined,
        "aria-controls": props["aria-controls"],
        "aria-haspopup": hasPopup,
        "aria-expanded": props["aria-expanded"]
    };
    if (state.selectionManager.selectionMode !== "none" && !isTrigger) ariaProps["aria-checked"] = isSelected;
    let item = state.collection.getItem(key);
    if (isVirtualized) {
        ariaProps["aria-posinset"] = item === null || item === void 0 ? void 0 : item.index;
        ariaProps["aria-setsize"] = (0, collections_dist_import/* getItemCount */.is)(state.collection);
    }
    let onPressStart = (e)=>{
        if (e.pointerType === "keyboard") performAction(e);
        pressStartProp === null || pressStartProp === void 0 ? void 0 : pressStartProp(e);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== "keyboard") {
            performAction(e);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== "multiple" || state.selectionManager.isLink(key))) onClose();
        }
        pressUpProp === null || pressUpProp === void 0 ? void 0 : pressUpProp(e);
    };
    let { itemProps: itemProps, isFocused: isFocused } = (0, $880e95eb8b93ba9a$export$ecf600387e221c37)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true,
        // Disable all handling of links in useSelectable item
        // because we handle it ourselves. The behavior of menus
        // is slightly different from other collections because
        // actions are performed on key down rather than key up.
        linkBehavior: "none"
    });
    let { pressProps: pressProps, isPressed: isPressed } = (0, interactions_dist_import/* usePress */.r7)({
        onPressStart: onPressStart,
        onPress: onPress,
        onPressUp: onPressUp,
        onPressChange: onPressChange,
        onPressEnd: onPressEnd,
        isDisabled: isDisabled
    });
    let { hoverProps: hoverProps } = (0, interactions_dist_import/* useHover */.XI)({
        isDisabled: isDisabled,
        onHoverStart (e) {
            if (!(0, interactions_dist_import/* isFocusVisible */.E)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
            hoverStartProp === null || hoverStartProp === void 0 ? void 0 : hoverStartProp(e);
        },
        onHoverChange: onHoverChange,
        onHoverEnd: onHoverEnd
    });
    let { keyboardProps: keyboardProps } = (0, interactions_dist_import/* useKeyboard */.v5)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case " ":
                    if (!isDisabled && state.selectionManager.selectionMode === "none" && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case "Enter":
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                default:
                    if (!isTrigger) e.continuePropagation();
                    onKeyDown === null || onKeyDown === void 0 ? void 0 : onKeyDown(e);
                    break;
            }
        },
        onKeyUp: onKeyUp
    });
    let { focusProps: focusProps } = (0, interactions_dist_import/* useFocus */.KK)({
        onBlur: onBlur,
        onFocus: onFocus,
        onFocusChange: onFocusChange
    });
    let domProps = (0, dist_import/* filterDOMProps */.zL)(item.props, {
        isLink: !!(item === null || item === void 0 ? void 0 : (_item_props = item.props) === null || _item_props === void 0 ? void 0 : _item_props.href)
    });
    delete domProps.id;
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, dist_import/* mergeProps */.dG)(domProps, isTrigger ? {
                onFocus: itemProps.onFocus
            } : itemProps, pressProps, hoverProps, keyboardProps, focusProps),
            tabIndex: itemProps.tabIndex != null ? -1 : undefined
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading, "aria-label": ariaLabel } = props;
    let headingId = (0, dist_import/* useId */.Me)();
    return {
        itemProps: {
            role: "presentation"
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: "presentation"
        } : {},
        groupProps: {
            role: "group",
            "aria-label": ariaLabel,
            "aria-labelledby": heading ? headingId : undefined
        }
    };
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $d275435c250248f8$var$ALLOWED_INVALID_MOVEMENTS = 2;
const $d275435c250248f8$var$THROTTLE_TIME = 50;
const $d275435c250248f8$var$TIMEOUT_TIME = 1000;
const $d275435c250248f8$var$ANGLE_PADDING = Math.PI / 12; // 15°
function $d275435c250248f8$export$85ec83e04c95f50a(options) {
    let { menuRef: menuRef, submenuRef: submenuRef, isOpen: isOpen, isDisabled: isDisabled } = options;
    let prevPointerPos = (0, $1Hnir$useRef)();
    let submenuRect = (0, $1Hnir$useRef)();
    let lastProcessedTime = (0, $1Hnir$useRef)(0);
    let timeout = (0, $1Hnir$useRef)();
    let autoCloseTimeout = (0, $1Hnir$useRef)();
    let submenuSide = (0, $1Hnir$useRef)();
    let movementsTowardsSubmenuCount = (0, $1Hnir$useRef)(2);
    let [preventPointerEvents, setPreventPointerEvents] = (0, $1Hnir$useState)(false);
    let updateSubmenuRect = ()=>{
        if (submenuRef.current) {
            submenuRect.current = submenuRef.current.getBoundingClientRect();
            submenuSide.current = undefined;
        }
    };
    (0, $1Hnir$useResizeObserver)({
        ref: submenuRef,
        onResize: updateSubmenuRect
    });
    let reset = ()=>{
        setPreventPointerEvents(false);
        movementsTowardsSubmenuCount.current = $d275435c250248f8$var$ALLOWED_INVALID_MOVEMENTS;
    };
    let modality = (0, $1Hnir$useInteractionModality)();
    (0, $1Hnir$useEffect)(()=>{
        if (preventPointerEvents && menuRef.current) menuRef.current.style.pointerEvents = "none";
        else menuRef.current.style.pointerEvents = "";
    }, [
        menuRef,
        preventPointerEvents
    ]);
    (0, $1Hnir$useEffect)(()=>{
        let submenu = submenuRef.current;
        let menu = menuRef.current;
        if (isDisabled || !submenu || !isOpen || modality !== "pointer") {
            reset();
            return;
        }
        submenuRect.current = submenu.getBoundingClientRect();
        let onPointerMove = (e)=>{
            if (e.pointerType === "touch" || e.pointerType === "pen") return;
            let currentTime = Date.now();
            // Throttle
            if (currentTime - lastProcessedTime.current < $d275435c250248f8$var$THROTTLE_TIME) return;
            clearTimeout(timeout.current);
            clearTimeout(autoCloseTimeout.current);
            let { clientX: mouseX, clientY: mouseY } = e;
            if (!prevPointerPos.current) {
                prevPointerPos.current = {
                    x: mouseX,
                    y: mouseY
                };
                return;
            }
            if (!submenuRect.current) return;
            if (!submenuSide.current) submenuSide.current = mouseX > submenuRect.current.right ? "left" : "right";
            // Pointer is outside of parent menu
            if (mouseX < menu.getBoundingClientRect().left || mouseX > menu.getBoundingClientRect().right || mouseY < menu.getBoundingClientRect().top || mouseY > menu.getBoundingClientRect().bottom) {
                reset();
                return;
            }
            /* Check if pointer is moving towards submenu.
        Uses the 2-argument arctangent (https://en.wikipedia.org/wiki/Atan2) to calculate:
          - angle between previous pointer and top of submenu
          - angle between previous pointer and bottom of submenu
          - angle between previous pointer and current pointer (delta)
        If the pointer delta angle value is between the top and bottom angle values, we know the pointer is moving towards the submenu.
      */ let prevMouseX = prevPointerPos.current.x;
            let prevMouseY = prevPointerPos.current.y;
            let toSubmenuX = submenuSide.current === "right" ? submenuRect.current.left - prevMouseX : prevMouseX - submenuRect.current.right;
            let angleTop = Math.atan2(prevMouseY - submenuRect.current.top, toSubmenuX) + $d275435c250248f8$var$ANGLE_PADDING;
            let angleBottom = Math.atan2(prevMouseY - submenuRect.current.bottom, toSubmenuX) - $d275435c250248f8$var$ANGLE_PADDING;
            let anglePointer = Math.atan2(prevMouseY - mouseY, submenuSide.current === "left" ? -(mouseX - prevMouseX) : mouseX - prevMouseX);
            let isMovingTowardsSubmenu = anglePointer < angleTop && anglePointer > angleBottom;
            movementsTowardsSubmenuCount.current = isMovingTowardsSubmenu ? Math.min(movementsTowardsSubmenuCount.current + 1, $d275435c250248f8$var$ALLOWED_INVALID_MOVEMENTS) : Math.max(movementsTowardsSubmenuCount.current - 1, 0);
            if (movementsTowardsSubmenuCount.current >= $d275435c250248f8$var$ALLOWED_INVALID_MOVEMENTS) setPreventPointerEvents(true);
            else setPreventPointerEvents(false);
            lastProcessedTime.current = currentTime;
            prevPointerPos.current = {
                x: mouseX,
                y: mouseY
            };
            // If the pointer is moving towards the submenu, start a timeout to close if no other movements are made after 500ms.
            if (isMovingTowardsSubmenu) timeout.current = setTimeout(()=>{
                reset();
                autoCloseTimeout.current = setTimeout(()=>{
                    // Fire a pointerover event to trigger the menu to close.
                    // Wait until pointer-events:none is no longer applied
                    let target = document.elementFromPoint(mouseX, mouseY);
                    if (target && menu.contains(target)) target.dispatchEvent(new PointerEvent("pointerover", {
                        bubbles: true,
                        cancelable: true
                    }));
                }, 100);
            }, $d275435c250248f8$var$TIMEOUT_TIME);
        };
        window.addEventListener("pointermove", onPointerMove);
        return ()=>{
            window.removeEventListener("pointermove", onPointerMove);
            clearTimeout(timeout.current);
            clearTimeout(autoCloseTimeout.current);
            movementsTowardsSubmenuCount.current = $d275435c250248f8$var$ALLOWED_INVALID_MOVEMENTS;
        };
    }, [
        isDisabled,
        isOpen,
        menuRef,
        modality,
        setPreventPointerEvents,
        submenuRef
    ]);
}


function $0065b146e7192841$export$3819f8ee9f4ce664(props, state, ref) {
    let { parentMenuRef: parentMenuRef, submenuRef: submenuRef, type: type = "menu", isDisabled: isDisabled, node: node, delay: delay = 200 } = props;
    let submenuTriggerId = (0, $1Hnir$useId)();
    let overlayId = (0, $1Hnir$useId)();
    let { direction: direction } = (0, $1Hnir$useLocale)();
    let openTimeout = (0, $1Hnir$useRef)();
    let cancelOpenTimeout = (0, $1Hnir$useCallback)(()=>{
        if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = undefined;
        }
    }, [
        openTimeout
    ]);
    let onSubmenuOpen = (0, $1Hnir$useEffectEvent)((focusStrategy)=>{
        cancelOpenTimeout();
        state.open(focusStrategy);
    });
    let onSubmenuClose = (0, $1Hnir$useEffectEvent)(()=>{
        cancelOpenTimeout();
        state.close();
    });
    (0, $1Hnir$useLayoutEffect)(()=>{
        return ()=>{
            cancelOpenTimeout();
        };
    }, [
        cancelOpenTimeout
    ]);
    let submenuKeyDown = (e)=>{
        switch(e.key){
            case "ArrowLeft":
                if (direction === "ltr" && e.currentTarget.contains(e.target)) {
                    e.stopPropagation();
                    onSubmenuClose();
                    ref.current.focus();
                }
                break;
            case "ArrowRight":
                if (direction === "rtl" && e.currentTarget.contains(e.target)) {
                    e.stopPropagation();
                    onSubmenuClose();
                    ref.current.focus();
                }
                break;
            case "Escape":
                e.stopPropagation();
                state.closeAll();
                break;
        }
    };
    let submenuProps = {
        id: overlayId,
        "aria-label": node.textValue,
        submenuLevel: state.submenuLevel,
        ...type === "menu" && {
            onClose: state.closeAll,
            autoFocus: state.focusStrategy,
            onKeyDown: submenuKeyDown
        }
    };
    let submenuTriggerKeyDown = (e)=>{
        switch(e.key){
            case "ArrowRight":
                if (!isDisabled) {
                    if (direction === "ltr") {
                        if (!state.isOpen) onSubmenuOpen("first");
                        if (type === "menu" && !!(submenuRef === null || submenuRef === void 0 ? void 0 : submenuRef.current) && document.activeElement === (ref === null || ref === void 0 ? void 0 : ref.current)) submenuRef.current.focus();
                    } else if (state.isOpen) onSubmenuClose();
                    else e.continuePropagation();
                }
                break;
            case "ArrowLeft":
                if (!isDisabled) {
                    if (direction === "rtl") {
                        if (!state.isOpen) onSubmenuOpen("first");
                        if (type === "menu" && !!(submenuRef === null || submenuRef === void 0 ? void 0 : submenuRef.current) && document.activeElement === (ref === null || ref === void 0 ? void 0 : ref.current)) submenuRef.current.focus();
                    } else if (state.isOpen) onSubmenuClose();
                    else e.continuePropagation();
                }
                break;
            case "Escape":
                state.closeAll();
                break;
            default:
                e.continuePropagation();
                break;
        }
    };
    let onPressStart = (e)=>{
        if (!isDisabled && (e.pointerType === "virtual" || e.pointerType === "keyboard")) // If opened with a screen reader or keyboard, auto focus the first submenu item.
        onSubmenuOpen("first");
    };
    let onPress = (e)=>{
        if (!isDisabled && (e.pointerType === "touch" || e.pointerType === "mouse")) // For touch or on a desktop device with a small screen open on press up to possible problems with
        // press up happening on the newly opened tray items
        onSubmenuOpen();
    };
    let onHoverChange = (isHovered)=>{
        if (!isDisabled) {
            if (isHovered && !state.isOpen) {
                if (!openTimeout.current) openTimeout.current = setTimeout(()=>{
                    onSubmenuOpen();
                }, delay);
            } else if (!isHovered) cancelOpenTimeout();
        }
    };
    let onBlur = (e)=>{
        if (state.isOpen && parentMenuRef.current.contains(e.relatedTarget)) onSubmenuClose();
    };
    let shouldCloseOnInteractOutside = (target)=>{
        if (target !== ref.current) return true;
        return false;
    };
    (0, $d275435c250248f8$export$85ec83e04c95f50a)({
        menuRef: parentMenuRef,
        submenuRef: submenuRef,
        isOpen: state.isOpen,
        isDisabled: isDisabled
    });
    return {
        submenuTriggerProps: {
            id: submenuTriggerId,
            "aria-controls": state.isOpen ? overlayId : undefined,
            "aria-haspopup": !isDisabled ? type : undefined,
            "aria-expanded": state.isOpen ? "true" : "false",
            onPressStart: onPressStart,
            onPress: onPress,
            onHoverChange: onHoverChange,
            onKeyDown: submenuTriggerKeyDown,
            onBlur: onBlur,
            isOpen: state.isOpen
        },
        submenuProps: submenuProps,
        popoverProps: {
            isNonModal: true,
            disableFocusManagement: true,
            shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 66690:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  U4: () => (/* binding */ $86ea4cb521eb2e37$export$2317d149ed6f78c4),
  aV: () => (/* binding */ $337b884510726a0d$export$c6fdb837b070b4ff),
  RP: () => (/* binding */ $5e3802645cc19319$export$1c3ebcada18427bf),
  Ir: () => (/* binding */ $a11501f3d1d39e6c$export$ea8f71083e90600f),
  Bq: () => (/* binding */ $337b884510726a0d$export$14c98a7594375490),
  tN: () => (/* binding */ $2a41e45df1593e64$export$d39e1813b3bdd0e1),
  IB: () => (/* binding */ $628037886ba31236$export$f9d5c8beee7d008d)
});

// UNUSED EXPORTS: ModalProvider, OverlayContainer, OverlayProvider, useModal, useModalOverlay, useModalProvider, usePopover, usePreventScroll

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@react-aria/utils/dist/import.mjs
var dist_import = __webpack_require__(5243);
// EXTERNAL MODULE: ./node_modules/@react-stately/utils/dist/import.mjs
var utils_dist_import = __webpack_require__(3522);
// EXTERNAL MODULE: ./node_modules/@react-aria/i18n/dist/real-module.mjs + 1 modules
var real_module = __webpack_require__(83651);
// EXTERNAL MODULE: ./node_modules/@react-aria/focus/dist/import.mjs
var focus_dist_import = __webpack_require__(74997);
// EXTERNAL MODULE: ./node_modules/@react-aria/interactions/dist/import.mjs
var interactions_dist_import = __webpack_require__(5459);
// EXTERNAL MODULE: external "next/dist/compiled/react-dom/server-rendering-stub"
var server_rendering_stub_ = __webpack_require__(98704);
// EXTERNAL MODULE: ./node_modules/@react-aria/ssr/dist/import.mjs
var ssr_dist_import = __webpack_require__(90466);
;// CONCATENATED MODULE: ./node_modules/@react-aria/visually-hidden/dist/import.mjs




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap"
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
    let { style: style, isFocusable: isFocusable } = props;
    let [isFocused, setFocused] = (0, react_.useState)(false);
    let { focusWithinProps: focusWithinProps } = (0, interactions_dist_import/* useFocusWithin */.L_)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, react_.useMemo)(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children, elementType: Element = "div", isFocusable: isFocusable, style: style, ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return /*#__PURE__*/ (0, react_).createElement(Element, (0, dist_import/* mergeProps */.dG)(otherProps, visuallyHiddenProps), children);
}





//# sourceMappingURL=module.js.map

;// CONCATENATED MODULE: ./node_modules/@react-aria/overlays/dist/import.mjs










function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $edcf132a9284368a$var$AXIS = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
};
const $edcf132a9284368a$var$CROSS_AXIS = {
    top: "left",
    left: "top"
};
const $edcf132a9284368a$var$AXIS_SIZE = {
    top: "height",
    left: "width"
};
const $edcf132a9284368a$var$TOTAL_SIZE = {
    width: "totalWidth",
    height: "totalHeight"
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
// @ts-ignore
let $edcf132a9284368a$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    let isPinchZoomedIn = ($edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.scale) > 1;
    if (containerNode.tagName === "BODY") {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        var _visualViewport_width;
        width = (_visualViewport_width = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
        var _visualViewport_height;
        height = (_visualViewport_height = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
        // The goal of the below is to get a top/left value that represents the top/left of the visual viewport with
        // respect to the layout viewport origin. This combined with the scrollTop/scrollLeft will allow us to calculate
        // coordinates/values with respect to the visual viewport or with respect to the layout viewport.
        if ($edcf132a9284368a$var$visualViewport) {
            top = $edcf132a9284368a$var$visualViewport.offsetTop;
            left = $edcf132a9284368a$var$visualViewport.offsetLeft;
        }
    } else {
        ({ width: width, height: height, top: top, left: left } = $edcf132a9284368a$var$getOffset(containerNode));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    if ((0, dist_import/* isWebKit */.Pf)() && (containerNode.tagName === "BODY" || containerNode.tagName === "HTML") && isPinchZoomedIn) {
        // Safari will report a non-zero scrollTop/Left for the non-scrolling body/HTML element when pinch zoomed in unlike other browsers.
        // Set to zero for parity calculations so we get consistent positioning of overlays across all browsers.
        // Also switch to visualViewport.pageTop/pageLeft so that we still accomodate for scroll positioning for body/HTML elements that are actually scrollable
        // before pinch zoom happens
        scroll.top = 0;
        scroll.left = 0;
        top = $edcf132a9284368a$var$visualViewport.pageTop;
        left = $edcf132a9284368a$var$visualViewport.pageLeft;
    }
    return {
        width: width,
        height: height,
        totalWidth: totalWidth,
        totalHeight: totalHeight,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $edcf132a9284368a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
// Determines the amount of space required when moving the overlay to ensure it remains in the boundary
function $edcf132a9284368a$var$getDelta(axis, offset, size, // The dimensions of the boundary element that the popover is
// positioned within (most of the time this is the <body>).
boundaryDimensions, // The dimensions of the containing block element that the popover is
// positioned relative to (e.g. parent with position: relative).
// Usually this is the same as the boundary element, but if the popover
// is portaled somewhere other than the body and has an ancestor with
// position: relative/absolute, it will be different.
containerDimensions, padding, containerOffsetWithBoundary) {
    let containerScroll = containerDimensions.scroll[axis];
    // The height/width of the boundary. Matches the axis along which we are adjusting the overlay position
    let boundarySize = boundaryDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
    // Calculate the edges of the boundary (accomodating for the boundary padding) and the edges of the overlay.
    // Note that these values are with respect to the visual viewport (aka 0,0 is the top left of the viewport)
    let boundaryStartEdge = boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] + padding;
    let boundaryEndEdge = boundarySize + boundaryDimensions.scroll[$edcf132a9284368a$var$AXIS[axis]] - padding;
    let startEdgeOffset = offset - containerScroll + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
    let endEdgeOffset = offset - containerScroll + size + containerOffsetWithBoundary[axis] - boundaryDimensions[$edcf132a9284368a$var$AXIS[axis]];
    // If any of the overlay edges falls outside of the boundary, shift the overlay the required amount to align one of the overlay's
    // edges with the closest boundary edge.
    if (startEdgeOffset < boundaryStartEdge) return boundaryStartEdge - startEdgeOffset;
    else if (endEdgeOffset > boundaryEndEdge) return Math.max(boundaryEndEdge - endEdgeOffset, boundaryStartEdge - startEdgeOffset);
    else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $edcf132a9284368a$var$parsePlacement(input) {
    if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(" ");
    let axis = $edcf132a9284368a$var$AXIS[placement] || "right";
    let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
    if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = "center";
    let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
    let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
    $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
    let { placement: placement, crossPlacement: crossPlacement, axis: axis, crossAxis: crossAxis, size: size, crossSize: crossSize } = placementInfo;
    let position = {};
    // button position
    position[crossAxis] = childOffset[crossAxis];
    if (crossPlacement === "center") //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
     /* else {
    the overlay top should match the button top
  } */ 
    position[crossAxis] += crossOffset;
    // overlay top overlapping arrow with button bottom
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom overlapping arrow with button top
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = (0, utils_dist_import/* clamp */.uZ)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
        position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlayHeight, heightGrowthDirection) {
    const containerHeight = isContainerPositioned ? containerOffsetWithBoundary.height : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE.height];
    // For cases where position is set via "bottom" instead of "top", we need to calculate the true overlay top with respect to the boundary. Reverse calculate this with the same method
    // used in computePosition.
    let overlayTop = position.top != null ? containerOffsetWithBoundary.top + position.top : containerOffsetWithBoundary.top + (containerHeight - position.bottom - overlayHeight);
    let maxHeight = heightGrowthDirection !== "top" ? // We want the distance between the top of the overlay to the bottom of the boundary
    Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top // this is the bottom of the boundary
     - overlayTop // this is the top of the overlay
     - (margins.top + margins.bottom + padding // save additional space for margin and padding
    )) : Math.max(0, overlayTop + overlayHeight // this is the bottom of the overlay
     - (boundaryDimensions.top + boundaryDimensions.scroll.top // this is the top of the boundary
    ) - (margins.top + margins.bottom + padding // save additional space for margin and padding
    ));
    return Math.min(boundaryDimensions.height - padding * 2, maxHeight);
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement, axis: axis, size: size } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
    let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
    let { size: size, crossAxis: crossAxis, crossSize: crossSize, placement: placement, crossPlacement: crossPlacement } = placementInfo;
    let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    let normalizedOffset = offset;
    let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
        let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    // Determine the direction the height of the overlay can grow so that we can choose how to calculate the max height
    let heightGrowthDirection = "bottom";
    if (placementInfo.axis === "top") {
        if (placementInfo.placement === "top") heightGrowthDirection = "top";
        else if (placementInfo.placement === "bottom") heightGrowthDirection = "bottom";
    } else if (placementInfo.crossAxis === "top") {
        if (placementInfo.crossPlacement === "top") heightGrowthDirection = "bottom";
        else if (placementInfo.crossPlacement === "bottom") heightGrowthDirection = "top";
    }
    let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, isContainerPositioned, margins, padding, overlaySize.height, heightGrowthDirection);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, containerDimensions, padding, containerOffsetWithBoundary);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    let preferredArrowPosition = childOffset[crossAxis] + .5 * childOffset[crossSize] - overlaySize[crossAxis];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    const arrowMaxPosition = overlaySize[crossSize] - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] - overlaySize[crossAxis] + arrowSize / 2;
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - overlaySize[crossAxis] - arrowSize / 2;
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = (0, utils_dist_import/* clamp */.uZ)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = (0, utils_dist_import/* clamp */.uZ)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement, targetNode: targetNode, overlayNode: overlayNode, scrollNode: scrollNode, padding: padding, shouldFlip: shouldFlip, boundaryElement: boundaryElement, offset: offset, crossOffset: crossOffset, maxHeight: maxHeight, arrowSize: arrowSize = 0, arrowBoundaryOffset: arrowBoundaryOffset = 0 } = opts;
    let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
    let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode) : $edcf132a9284368a$var$getPosition(targetNode, container);
    if (!isViewportContainer) {
        let { marginTop: marginTop, marginLeft: marginLeft } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode);
    let margins = $edcf132a9284368a$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
    let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
    let containerDimensions = $edcf132a9284368a$var$getContainerDimensions(container);
    // If the container is the HTML element wrapping the body element, the retrieved scrollTop/scrollLeft will be equal to the
    // body element's scroll. Set the container's scroll values to 0 since the overlay's edge position value in getDelta don't then need to be further offset
    // by the container scroll since they are essentially the same containing element and thus in the same coordinate system
    let containerOffsetWithBoundary = boundaryElement.tagName === "BODY" ? $edcf132a9284368a$var$getOffset(container) : $edcf132a9284368a$var$getPosition(container, boundaryElement);
    if (container.tagName === "HTML" && boundaryElement.tagName === "BODY") {
        containerDimensions.scroll.top = 0;
        containerDimensions.scroll.left = 0;
    }
    return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $edcf132a9284368a$var$getOffset(node) {
    let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
    let { scrollTop: scrollTop, scrollLeft: scrollLeft, clientTop: clientTop, clientLeft: clientLeft } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width: width,
        height: height
    };
}
function $edcf132a9284368a$var$getPosition(node, parent) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === "fixed") {
        let { top: top, left: left, width: width, height: height } = node.getBoundingClientRect();
        offset = {
            top: top,
            left: left,
            width: width,
            height: height
        };
    } else {
        offset = $edcf132a9284368a$var$getOffset(node);
        let parentOffset = $edcf132a9284368a$var$getOffset(parent);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function $edcf132a9284368a$var$getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function $edcf132a9284368a$var$isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || // @ts-ignore
    "backdropFilter" in style && style.backdropFilter !== "none" || // @ts-ignore
    "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $dd149f63282afbbf$export$f6211563215e3b37 = new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef, isOpen: isOpen, onClose: onClose } = opts;
    (0, react_.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener("scroll", onScroll, true);
        return ()=>{
            window.removeEventListener("scroll", onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}




// @ts-ignore
let $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
    let { direction: direction } = (0, real_module/* useLocale */.bU)();
    let { arrowSize: arrowSize = 0, targetRef: targetRef, overlayRef: overlayRef, scrollRef: scrollRef = overlayRef, placement: placement = "bottom", containerPadding: containerPadding = 12, shouldFlip: shouldFlip = true, boundaryElement: boundaryElement = typeof document !== "undefined" ? document.body : null, offset: offset = 0, crossOffset: crossOffset = 0, shouldUpdatePosition: shouldUpdatePosition = true, isOpen: isOpen = true, onClose: onClose, maxHeight: maxHeight, arrowBoundaryOffset: arrowBoundaryOffset = 0 } = props;
    let [position, setPosition] = (0, react_.useState)({
        position: {},
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    // Note, the position freezing breaks if body sizes itself dynamicly with the visual viewport but that might
    // just be a non-realistic use case
    // Upon opening a overlay, record the current visual viewport scale so we can freeze the overlay styles
    let lastScale = (0, react_.useRef)($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale);
    (0, react_.useEffect)(()=>{
        if (isOpen) lastScale.current = $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale;
    }, [
        isOpen
    ]);
    let updatePosition = (0, react_.useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        if (($2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.scale) !== lastScale.current) return;
        // Always reset the overlay's previous max height if not defined by the user so that we can compensate for
        // RAC collections populating after a second render and properly set a correct max height + positioning when it populates.
        if (!maxHeight && overlayRef.current) overlayRef.current.style.maxHeight = "none";
        let position = (0, $edcf132a9284368a$export$b3ceb0cbf1056d98)({
            placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight,
            arrowSize: arrowSize,
            arrowBoundaryOffset: arrowBoundaryOffset
        });
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        Object.keys(position.position).forEach((key)=>overlayRef.current.style[key] = position.position[key] + "px");
        overlayRef.current.style.maxHeight = position.maxHeight != null ? position.maxHeight + "px" : undefined;
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, dist_import/* useLayoutEffect */.bt)(updatePosition, deps);
    // Update position on window resize
    $2a41e45df1593e64$var$useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    (0, dist_import/* useResizeObserver */.yU)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (0, react_.useRef)(false);
    (0, dist_import/* useLayoutEffect */.bt)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        // Only reposition the overlay if a scroll event happens immediately as a result of resize (aka the virtual keyboard has appears)
        // We don't want to reposition the overlay if the user has pinch zoomed in and is scrolling the viewport around.
        let onScroll = ()=>{
            if (isResizing.current) onResize();
        };
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("resize", onResize);
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("scroll", onScroll);
        return ()=>{
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("resize", onResize);
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("scroll", onScroll);
        };
    }, [
        updatePosition
    ]);
    let close = (0, react_.useCallback)(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    (0, $dd149f63282afbbf$export$18fc8428861184da)({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose && close
    });
    return {
        overlayProps: {
            style: {
                position: "absolute",
                zIndex: 100000,
                ...position.position,
                maxHeight: position.maxHeight
            }
        },
        placement: position.placement,
        arrowProps: {
            "aria-hidden": "true",
            role: "presentation",
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $2a41e45df1593e64$var$useResize(onResize) {
    (0, dist_import/* useLayoutEffect */.bt)(()=>{
        window.addEventListener("resize", onResize, false);
        return ()=>{
            window.removeEventListener("resize", onResize, false);
        };
    }, [
        onResize
    ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
    if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
    return position.replace("start", "left").replace("end", "right");
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose, shouldCloseOnBlur: shouldCloseOnBlur, isOpen: isOpen, isDismissable: isDismissable = false, isKeyboardDismissDisabled: isKeyboardDismissDisabled = false, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, react_.useEffect)(()=>{
        if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === "Escape" && !isKeyboardDismissDisabled) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    (0, interactions_dist_import/* useInteractOutside */.Fc)({
        ref: ref,
        onInteractOutside: isDismissable && isOpen ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps } = (0, interactions_dist_import/* useFocusWithin */.L_)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // Do not close if relatedTarget is null, which means focus is lost to the body.
            // That can happen when switching tabs, or due to a VoiceOver/Chrome bug with Control+Option+Arrow navigation.
            // Clicking on the body to close the overlay should already be handled by useInteractOutside.
            // https://github.com/adobe/react-spectrum/issues/4130
            // https://github.com/adobe/react-spectrum/issues/4922
            //
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (!e.relatedTarget || (0, focus_dist_import/* isElementInChildOfActiveScope */.cW)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type } = props;
    let { isOpen: isOpen } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, react_.useEffect)(()=>{
        if (ref && ref.current) (0, $dd149f63282afbbf$export$f6211563215e3b37).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === "menu") ariaHasPopup = true;
    else if (type === "listbox") ariaHasPopup = "listbox";
    let overlayId = (0, dist_import/* useId */.Me)();
    return {
        triggerProps: {
            "aria-haspopup": ariaHasPopup,
            "aria-expanded": isOpen,
            "aria-controls": isOpen ? overlayId : null,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// @ts-ignore
const $49c51c25361d4cd2$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled } = options;
    (0, $k7QOs$useLayoutEffect)(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if ((0, $k7QOs$isIOS)()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
            else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
        }
        return ()=>{
            $49c51c25361d4cd2$var$preventScrollCount--;
            if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return (0, $k7QOs$chain)($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Set `overscroll-behavior: contain` on nested scrollable regions so they do not scroll the page when at
//    the top or bottom. Work around a bug where this does not work when the element does not actually overflow
//    by preventing default in a `touchmove` event.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let restoreScrollableStyles;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = (0, $k7QOs$getScrollParent)(e.target, true);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead.
        if (scrollable instanceof HTMLElement && window.getComputedStyle(scrollable).overscrollBehavior === "auto") restoreScrollableStyles = $49c51c25361d4cd2$var$setStyle(scrollable, "overscrollBehavior", "contain");
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // overscroll-behavior should prevent scroll chaining, but currently does not
        // if the element doesn't actually overflow. https://bugs.webkit.org/show_bug.cgi?id=243452
        // This checks that both the width and height do not overflow, otherwise we might
        // block horizontal scrolling too. In that case, adding `touch-action: pan-x` to
        // the element will prevent vertical page scrolling. We can't add that automatically
        // because it must be set before the touchstart event.
        if (scrollable.scrollHeight === scrollable.clientHeight && scrollable.scrollWidth === scrollable.clientWidth) e.preventDefault();
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target) && target !== document.activeElement) {
            e.preventDefault();
            setupStyles();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = "translateY(-2000px)";
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = "";
            });
        }
        if (restoreScrollableStyles) restoreScrollableStyles();
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            setupStyles();
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = "translateY(-2000px)";
            requestAnimationFrame(()=>{
                target.style.transform = "";
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener("resize", ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let restoreStyles = null;
    let setupStyles = ()=>{
        if (restoreStyles) return;
        let onWindowScroll = ()=>{
            // Last resort. If the window scrolled, scroll it back to the top.
            // It should always be at the top because the body will have a negative margin (see below).
            window.scrollTo(0, 0);
        };
        // Record the original scroll position so we can restore it.
        // Then apply a negative margin to the body to offset it by the scroll position. This will
        // enable us to scroll the window to the top, which is required for the rest of this to work.
        let scrollX = window.pageXOffset;
        let scrollY = window.pageYOffset;
        restoreStyles = (0, $k7QOs$chain)($49c51c25361d4cd2$var$addEvent(window, "scroll", onWindowScroll), $49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"), $49c51c25361d4cd2$var$setStyle(document.body, "marginTop", `-${scrollY}px`), ()=>{
            window.scrollTo(scrollX, scrollY);
        });
        // Scroll to the top. The negative margin on the body will make this appear the same.
        window.scrollTo(0, 0);
    };
    let removeEvents = (0, $k7QOs$chain)($49c51c25361d4cd2$var$addEvent(document, "touchstart", onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "touchmove", onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "touchend", onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "focus", onFocus, true));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreScrollableStyles === null || restoreScrollableStyles === void 0 ? void 0 : restoreScrollableStyles();
        restoreStyles === null || restoreStyles === void 0 ? void 0 : restoreStyles();
        removeEvents();
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, $k7QOs$getScrollParent)(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        target = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f57aed4a881a3485$var$Context = /*#__PURE__*/ (/* unused pure expression or super */ null && ((0, $k7QOs$react).createContext(null)));
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children } = props;
    let parent = (0, $k7QOs$useContext)($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = (0, $k7QOs$useState)(0);
    let context = (0, $k7QOs$useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, $k7QOs$react).createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children);
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = (0, $k7QOs$useContext)($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            "aria-hidden": context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, $k7QOs$react).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, $k7QOs$react).createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, $k7QOs$react).createElement($f57aed4a881a3485$var$OverlayContainerDOM, props));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let isSSR = (0, $k7QOs$useIsSSR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, ...rest } = props;
    (0, $k7QOs$react).useEffect(()=>{
        if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, $k7QOs$react).createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, $k7QOs$reactdom).createPortal(contents, portalContainer);
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, $k7QOs$useContext)($f57aed4a881a3485$var$Context);
    if (!context) throw new Error("Modal is not contained within a provider");
    (0, $k7QOs$useEffect)(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            "data-ismodal": !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $a2f21f5f14f60553$exports = {};
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
    "dismiss": `\u{62A}\u{62C}\u{627}\u{647}\u{644}`
};


var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
    "dismiss": `\u{41E}\u{442}\u{445}\u{432}\u{44A}\u{440}\u{43B}\u{44F}\u{43D}\u{435}`
};


var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
    "dismiss": `Odstranit`
};


var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
    "dismiss": `Luk`
};


var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
    "dismiss": `Schlie\xdfen`
};


var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
    "dismiss": `\u{391}\u{3C0}\u{3CC}\u{3C1}\u{3C1}\u{3B9}\u{3C8}\u{3B7}`
};


var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
    "dismiss": `Dismiss`
};


var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
    "dismiss": `Descartar`
};


var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
    "dismiss": `L\xf5peta`
};


var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
    "dismiss": `Hylk\xe4\xe4`
};


var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
    "dismiss": `Rejeter`
};


var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
    "dismiss": `\u{5D4}\u{5EA}\u{5E2}\u{5DC}\u{5DD}`
};


var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
    "dismiss": `Odbaci`
};


var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
    "dismiss": `Elutas\xedt\xe1s`
};


var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
    "dismiss": `Ignora`
};


var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
    "dismiss": `\u{9589}\u{3058}\u{308B}`
};


var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
    "dismiss": `\u{BB34}\u{C2DC}`
};


var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
    "dismiss": `Atmesti`
};


var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
    "dismiss": `Ner\u{101}d\u{12B}t`
};


var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
    "dismiss": `Lukk`
};


var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
    "dismiss": `Negeren`
};


var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
    "dismiss": `Zignoruj`
};


var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
    "dismiss": `Descartar`
};


var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
    "dismiss": `Dispensar`
};


var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
    "dismiss": `Revocare`
};


var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
    "dismiss": `\u{41F}\u{440}\u{43E}\u{43F}\u{443}\u{441}\u{442}\u{438}\u{442}\u{44C}`
};


var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
    "dismiss": `Zru\u{161}i\u{165}`
};


var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
    "dismiss": `Opusti`
};


var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
    "dismiss": `Odbaci`
};


var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
    "dismiss": `Avvisa`
};


var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
    "dismiss": `Kapat`
};


var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
    "dismiss": `\u{421}\u{43A}\u{430}\u{441}\u{443}\u{432}\u{430}\u{442}\u{438}`
};


var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
    "dismiss": `\u{53D6}\u{6D88}`
};


var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
    "dismiss": `\u{95DC}\u{9589}`
};


$a2f21f5f14f60553$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};






function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss, ...otherProps } = props;
    let stringFormatter = (0, real_module/* useLocalizedStringFormatter */.qb)((0, (/*@__PURE__*/$parcel$interopDefault($a2f21f5f14f60553$exports))), "@react-aria/overlays");
    let labels = (0, dist_import/* useLabels */.bE)(otherProps, stringFormatter.format("dismiss"));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, react_).createElement((0, $5c3e21d68f1c4674$export$439d29a4e110a164), null, /*#__PURE__*/ (0, react_).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick,
        style: {
            width: 1,
            height: 1
        }
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
let $5e3802645cc19319$var$observerStack = [];
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if (node.contains(target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        var _refCountMap_get;
        let refCount = (_refCountMap_get = $5e3802645cc19319$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute("aria-hidden") === "true" && refCount === 0) return;
        if (refCount === 0) node.setAttribute("aria-hidden", "true");
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== "childList" || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) {
                for (let node of change.removedNodes)if (node instanceof Element) {
                    visibleNodes.delete(node);
                    hiddenNodes.delete(node);
                }
                for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let observerWrapper = {
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $5e3802645cc19319$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute("aria-hidden");
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1]) {
            $5e3802645cc19319$var$observerStack.pop();
            if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].observe();
        } else $5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper), 1);
    };
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f2f8a6077418541e$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef, popoverRef: popoverRef, isNonModal: isNonModal, isKeyboardDismissDisabled: isKeyboardDismissDisabled, shouldCloseOnInteractOutside: shouldCloseOnInteractOutside, ...otherProps } = props;
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, $a11501f3d1d39e6c$export$ea8f71083e90600f)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled,
        shouldCloseOnInteractOutside: shouldCloseOnInteractOutside
    }, popoverRef);
    let { overlayProps: positionProps, arrowProps: arrowProps, placement: placement } = (0, $2a41e45df1593e64$export$d39e1813b3bdd0e1)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: isNonModal ? state.close : null
    });
    (0, $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: isNonModal || !state.isOpen
    });
    (0, $k7QOs$useLayoutEffect)(()=>{
        if (state.isOpen && !isNonModal && popoverRef.current) return (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
            popoverRef.current
        ]);
    }, [
        isNonModal,
        state.isOpen,
        popoverRef
    ]);
    return {
        popoverProps: (0, $k7QOs$mergeProps)(overlayProps, positionProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement
    };
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ (0, react_).createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, ssr_dist_import/* useIsSSR */.Av)();
    let { portalContainer: portalContainer = isSSR ? null : document.body, isExiting: isExiting } = props;
    let [contain, setContain] = (0, react_.useState)(false);
    let contextValue = (0, react_.useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    if (!portalContainer) return null;
    let contents = props.children;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, react_).createElement((0, focus_dist_import/* FocusScope */.MT), {
        restoreFocus: true,
        contain: contain && !isExiting
    }, contents);
    contents = /*#__PURE__*/ (0, react_).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, react_).createElement((0, interactions_dist_import/* ClearPressResponder */.mk), null, contents));
    return /*#__PURE__*/ (0, server_rendering_stub_).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (0, react_.useContext)($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, dist_import/* useLayoutEffect */.bt)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}



function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps, underlayProps: underlayProps } = (0, $a11501f3d1d39e6c$export$ea8f71083e90600f)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: !state.isOpen
    });
    (0, $337b884510726a0d$export$14c98a7594375490)();
    (0, $k7QOs$useEffect)(()=>{
        if (state.isOpen) return (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, $k7QOs$mergeProps)(overlayProps),
        underlayProps: underlayProps
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ 90466:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Av: () => (/* binding */ $b5e257d569688ac6$export$535bd6ca7f90a273),
/* harmony export */   gP: () => (/* binding */ $b5e257d569688ac6$export$619500959fc48b26)
/* harmony export */ });
/* unused harmony export SSRProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext($b5e257d569688ac6$var$defaultContext);
const $b5e257d569688ac6$var$IsSSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__).createContext(false);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, $73SJx$useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, $73SJx$useState)(true);
    let value = (0, $73SJx$useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
            current: 0
        }), [
        cur,
        counter
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== "undefined") // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, $73SJx$useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$IsSSRContext.Provider, {
        value: isSSR
    }, props.children));
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, $73SJx$react)["useId"] === "function") {
        if ( true && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
            console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
            $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
        }
        return /*#__PURE__*/ (0, $73SJx$react).createElement((0, $73SJx$react).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, $73SJx$react).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react__WEBPACK_IMPORTED_MODULE_0__).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "production" === "test" ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    // @ts-ignore
    let id = (0, react__WEBPACK_IMPORTED_MODULE_0__).useId();
    let [didSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "production" === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__)["useSyncExternalStore"] === "function") return (0, react__WEBPACK_IMPORTED_MODULE_0__)["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$IsSSRContext);
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 5243:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ao: () => (/* binding */ $7215afc6de606d6b$export$de79e2c695e052f3),
/* harmony export */   Gt: () => (/* binding */ $2f04cbc44ee30ce0$export$c826860796309d1b),
/* harmony export */   Me: () => (/* binding */ $bdb11010cef70236$export$f680877a34711e37),
/* harmony export */   PK: () => (/* binding */ $ef06256079686ba0$export$f8aeda7b10753fa1),
/* harmony export */   Pf: () => (/* binding */ $c87311424ea30a05$export$78551043582a6a98),
/* harmony export */   QB: () => (/* binding */ $bbed8b41f857bcc0$export$24490316f764c430),
/* harmony export */   V5: () => (/* binding */ $c87311424ea30a05$export$9ac100e40613ea10),
/* harmony export */   Zj: () => (/* binding */ $6a7db85432448f7f$export$60278871457622de),
/* harmony export */   a9: () => (/* binding */ $62d8ded9296f3872$export$2bb74740c4e19def),
/* harmony export */   ad: () => (/* binding */ $c87311424ea30a05$export$e1865c3bedcd822b),
/* harmony export */   b0: () => (/* binding */ $ea8dcbcb9ea1b556$export$efa8c9099e530235),
/* harmony export */   bE: () => (/* binding */ $313b98861ee5dd6c$export$d6875122194c7b44),
/* harmony export */   bt: () => (/* binding */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c),
/* harmony export */   cr: () => (/* binding */ $6a7db85432448f7f$export$29bf1b5f2c56cf63),
/* harmony export */   dG: () => (/* binding */ $3ef42575df84b30b$export$9d1611c77c2fe928),
/* harmony export */   gn: () => (/* binding */ $c87311424ea30a05$export$fedb369cb70207f1),
/* harmony export */   iW: () => (/* binding */ $8ae05eaa5c114e9c$export$7f54fc3180508a52),
/* harmony export */   kR: () => (/* binding */ $431fbd86ca7dc216$export$f21a1ffae260145a),
/* harmony export */   lE: () => (/* binding */ $e7801be82b4b2a53$export$4debdb1a3f0fa79e),
/* harmony export */   lq: () => (/* binding */ $5dc95899b306f630$export$c9058316764c140e),
/* harmony export */   mp: () => (/* binding */ $bdb11010cef70236$export$b4cc09c592e8fdb8),
/* harmony export */   nG: () => (/* binding */ $ea8dcbcb9ea1b556$export$95185d699e05d4d7),
/* harmony export */   r3: () => (/* binding */ $431fbd86ca7dc216$export$b204af158042fbac),
/* harmony export */   tS: () => (/* binding */ $ff5963eb1fccf552$export$e08e3b67e392101e),
/* harmony export */   tv: () => (/* binding */ $ea8dcbcb9ea1b556$export$9a302a45f65d0572),
/* harmony export */   xi: () => (/* binding */ $03deb23ff14920c4$export$4eaf04e54aa8eed6),
/* harmony export */   yU: () => (/* binding */ $9daab02d461809db$export$683480f191c0e3ea),
/* harmony export */   zL: () => (/* binding */ $65484d02dcb7eb3e$export$457c3d6518dd4c6f),
/* harmony export */   zT: () => (/* binding */ $2f04cbc44ee30ce0$export$53a0910f038337bd),
/* harmony export */   zX: () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c)
/* harmony export */ });
/* unused harmony exports mergeIds, getOffset, getSyntheticLinkProps, RouterProvider, useDrag1D, useObjectRef, useUpdateEffect, getScrollParent, useViewportSize, isIPhone, isIPad, isChrome, isAndroid, isFirefox, useValueEffect, useDeepMemo, useFormReset */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90466);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10566);





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, react__WEBPACK_IMPORTED_MODULE_0__).useLayoutEffect : ()=>{};



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    // @ts-ignore
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{
        const f = ref.current;
        return f === null || f === void 0 ? void 0 : f(...args);
    }, []);
}


function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    let effect = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // Store the function in a ref so we can always access the current version
    // which has the proper `value` in scope.
    let nextRef = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (!effect.current) return;
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        if (value === newValue.value) nextRef();
        else setValue(newValue.value);
    });
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextRef();
    });
    let queue = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)((fn)=>{
        effect.current = fn(value);
        nextRef();
    });
    return [
        value,
        queue
    ];
}


// copied from SSRProvider.tsx to reduce exports, if needed again, consider sharing
let $bdb11010cef70236$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
    let nextId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let res = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__/* .useSSRSafeId */ .gP)(value);
    let updateValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((val)=>{
        nextId.current = val;
    }, []);
    if ($bdb11010cef70236$var$canUseDOM) $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === "function") callback(...args);
    };
}


const $431fbd86ca7dc216$export$b204af158042fbac = (el)=>{
    var _el_ownerDocument;
    return (_el_ownerDocument = el === null || el === void 0 ? void 0 : el.ownerDocument) !== null && _el_ownerDocument !== void 0 ? _el_ownerDocument : document;
};
const $431fbd86ca7dc216$export$f21a1ffae260145a = (el)=>{
    if (el && "window" in el && el.window === el) return el;
    const doc = $431fbd86ca7dc216$export$b204af158042fbac(el);
    return doc.defaultView || window;
};


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
            key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
            else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(a, b);
            else if (key === "id" && a && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === "function") ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details"
]);
// See LinkDOMProps in dom.d.ts.
const $65484d02dcb7eb3e$var$linkPropNames = new Set([
    "href",
    "target",
    "rel",
    "download",
    "ping",
    "referrerPolicy"
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable, isLink: isLink, propNames: propNames } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || isLink && $65484d02dcb7eb3e$var$linkPropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            let focusElem = document.createElement("div");
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    let parent = element.parentNode;
    let scrollableElements = [];
    let rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element, scrollTop: scrollTop, scrollLeft: scrollLeft } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === "horizontal" ? rect.right : rect.bottom;
    return orientation === "horizontal" ? rect.left : rect.top;
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
function $c87311424ea30a05$export$b7d78993b74f766d() {
    return $c87311424ea30a05$var$testUserAgent(/Firefox/i);
}




const $ea8dcbcb9ea1b556$var$RouterContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__.createContext)({
    isNative: true,
    open: $ea8dcbcb9ea1b556$var$openSyntheticLink
});
function $ea8dcbcb9ea1b556$export$323e4fc2fa4753fb(props) {
    let { children: children, navigate: navigate } = props;
    let ctx = (0, $12uGp$useMemo)(()=>({
            isNative: false,
            open: (target, modifiers)=>{
                $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>{
                    if ($ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers)) navigate(link.pathname + link.search + link.hash);
                    else $ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers);
                });
            }
        }), [
        navigate
    ]);
    return /*#__PURE__*/ (0, $12uGp$react).createElement($ea8dcbcb9ea1b556$var$RouterContext.Provider, {
        value: ctx
    }, children);
}
function $ea8dcbcb9ea1b556$export$9a302a45f65d0572() {
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($ea8dcbcb9ea1b556$var$RouterContext);
}
function $ea8dcbcb9ea1b556$export$efa8c9099e530235(link, modifiers) {
    // Use getAttribute here instead of link.target. Firefox will default link.target to "_parent" when inside an iframe.
    let target = link.getAttribute("target");
    return (!target || target === "_self") && link.origin === location.origin && !link.hasAttribute("download") && !modifiers.metaKey && // open in new tab (mac)
    !modifiers.ctrlKey && // open in new tab (windows)
    !modifiers.altKey && // download
    !modifiers.shiftKey;
}
function $ea8dcbcb9ea1b556$export$95185d699e05d4d7(target, modifiers, setOpening = true) {
    var _window_event_type, _window_event;
    let { metaKey: metaKey, ctrlKey: ctrlKey, altKey: altKey, shiftKey: shiftKey } = modifiers;
    // Firefox does not recognize keyboard events as a user action by default, and the popup blocker
    // will prevent links with target="_blank" from opening. However, it does allow the event if the
    // Command/Control key is held, which opens the link in a background tab. This seems like the best we can do.
    // See https://bugzilla.mozilla.org/show_bug.cgi?id=257870 and https://bugzilla.mozilla.org/show_bug.cgi?id=746640.
    if ((0, $c87311424ea30a05$export$b7d78993b74f766d)() && ((_window_event = window.event) === null || _window_event === void 0 ? void 0 : (_window_event_type = _window_event.type) === null || _window_event_type === void 0 ? void 0 : _window_event_type.startsWith("key")) && target.target === "_blank") {
        if ((0, $c87311424ea30a05$export$9ac100e40613ea10)()) metaKey = true;
        else ctrlKey = true;
    }
    // WebKit does not support firing click events with modifier keys, but does support keyboard events.
    // https://github.com/WebKit/WebKit/blob/c03d0ac6e6db178f90923a0a63080b5ca210d25f/Source/WebCore/html/HTMLAnchorElement.cpp#L184
    let event = (0, $c87311424ea30a05$export$78551043582a6a98)() && (0, $c87311424ea30a05$export$9ac100e40613ea10)() && !(0, $c87311424ea30a05$export$7bef049ce92e4224)() && true ? new KeyboardEvent("keydown", {
        keyIdentifier: "Enter",
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey
    }) : new MouseEvent("click", {
        metaKey: metaKey,
        ctrlKey: ctrlKey,
        altKey: altKey,
        shiftKey: shiftKey,
        bubbles: true,
        cancelable: true
    });
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = setOpening;
    (0, $7215afc6de606d6b$export$de79e2c695e052f3)(target);
    target.dispatchEvent(event);
    $ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
}
// https://github.com/parcel-bundler/parcel/issues/8724
$ea8dcbcb9ea1b556$export$95185d699e05d4d7.isOpening = false;
function $ea8dcbcb9ea1b556$var$getSyntheticLink(target, open) {
    if (target instanceof HTMLAnchorElement) open(target);
    else if (target.hasAttribute("data-href")) {
        let link = document.createElement("a");
        link.href = target.getAttribute("data-href");
        if (target.hasAttribute("data-target")) link.target = target.getAttribute("data-target");
        if (target.hasAttribute("data-rel")) link.rel = target.getAttribute("data-rel");
        if (target.hasAttribute("data-download")) link.download = target.getAttribute("data-download");
        if (target.hasAttribute("data-ping")) link.ping = target.getAttribute("data-ping");
        if (target.hasAttribute("data-referrer-policy")) link.referrerPolicy = target.getAttribute("data-referrer-policy");
        target.appendChild(link);
        open(link);
        target.removeChild(link);
    }
}
function $ea8dcbcb9ea1b556$var$openSyntheticLink(target, modifiers) {
    $ea8dcbcb9ea1b556$var$getSyntheticLink(target, (link)=>$ea8dcbcb9ea1b556$export$95185d699e05d4d7(link, modifiers));
}
function $ea8dcbcb9ea1b556$export$51437d503373d223(props) {
    return {
        "data-href": props.href,
        "data-target": props.target,
        "data-rel": props.rel,
        "data-download": props.download,
        "data-ping": props.ping,
        "data-referrer-policy": props.referrerPolicy
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === "undefined") return;
    function isTransitionEvent(event) {
        return "propertyName" in event;
    }
    let onTransitionStart = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener("transitioncancel", onTransitionEnd, {
                once: true
            });
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        if (!isTransitionEvent(e) || !e.target) return;
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener("transitioncancel", onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 

// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = (/* unused pure expression or super */ null && ([]));
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
    let { containerRef: containerRef, reverse: reverse, orientation: orientation, onHover: onHover, onDrag: onDrag, onPositionChange: onPositionChange, onIncrement: onIncrement, onDecrement: onDecrement, onIncrementToMax: onIncrementToMax, onDecrementToMin: onDecrementToMin, onCollapseToggle: onCollapseToggle } = props;
    let getPosition = (e)=>orientation === "horizontal" ? e.clientX : e.clientY;
    let getNextOffset = (e)=>{
        let containerOffset = (0, $ab71dadb03a6fb2e$export$622cea445a1c5b7d)(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = (0, $12uGp$useRef)(false);
    let prevPosition = (0, $12uGp$useRef)(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = (0, $12uGp$useRef)({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener("mouseup", onMouseUp, false);
        window.removeEventListener("mousemove", onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt))) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener("mousemove", onMouseDragged, false);
        window.addEventListener("mouseup", onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case "Left":
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Up":
            case "ArrowUp":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Right":
            case "ArrowRight":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Down":
            case "ArrowDown":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Home":
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case "End":
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case "Enter":
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    let addGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id, "aria-label": label, "aria-labelledby": labelledBy } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(" ");
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        "aria-label": label,
        "aria-labelledby": labelledBy
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, $12uGp$useRef)(null);
    return (0, $12uGp$useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === "function") forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0, $12uGp$useRef)(true);
    const lastDeps = (0, $12uGp$useRef)(null);
    (0, $12uGp$useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, $12uGp$useEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}




function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref, onResize: onResize } = options;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener("resize", onResize, false);
            return ()=>{
                window.removeEventListener("resize", onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                if (context.ref) context.ref.current = null;
            };
        }
    });
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $62d8ded9296f3872$export$cfa2225e87938781(node, checkForOverflow) {
    let scrollableNode = node;
    if ($62d8ded9296f3872$export$2bb74740c4e19def(scrollableNode, checkForOverflow)) scrollableNode = scrollableNode.parentElement;
    while(scrollableNode && !$62d8ded9296f3872$export$2bb74740c4e19def(scrollableNode, checkForOverflow))scrollableNode = scrollableNode.parentElement;
    return scrollableNode || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$export$2bb74740c4e19def(node, checkForOverflow) {
    let style = window.getComputedStyle(node);
    let isScrollable = /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
    if (isScrollable && checkForOverflow) isScrollable = node.scrollHeight !== node.clientHeight || node.scrollWidth !== node.clientWidth;
    return isScrollable;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let isSSR = (0, $12uGp$useIsSSR)();
    let [size, setSize] = (0, $12uGp$useState)(()=>isSSR ? {
            width: 0,
            height: 0
        } : $5df64b3807dc15ee$var$getViewportSize());
    (0, $12uGp$useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener("resize", onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener("resize", onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener("resize", onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener("resize", onResize);
        };
    }, []);
    return size;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: $5df64b3807dc15ee$var$visualViewport && ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: $5df64b3807dc15ee$var$visualViewport && ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)();
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement("div");
            node.id = id;
            node.style.display = "none";
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (desc && --desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        "aria-describedby": description ? id : undefined
    };
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isDisabled || !ref.current) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left
    let { borderTopWidth: borderTopWidth, borderLeftWidth: borderLeftWidth } = getComputedStyle(scrollView);
    let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === "left" ? "offsetLeft" : "offsetTop";
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft, top: originalTop } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: "nearest"
            });
            let { left: newLeft, top: newTop } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement_scrollIntoView, _opts_containingElement, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: "center",
                    inline: "center"
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: "nearest"
                });
            }
        } else {
            let scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            while(targetElement && scrollParent && targetElement !== root && scrollParent !== root){
                $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
                targetElement = scrollParent;
                scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            }
        }
    }
}



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return !(0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, $12uGp$useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, $12uGp$useRef)(initialValue);
    let handleReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, $12uGp$useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener("reset", handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener("reset", handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 22049:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Kx: () => (/* binding */ $7613b1592d41b092$export$6cd28814d92fa9c9),
/* harmony export */   _P: () => (/* binding */ $c5a24bc478652b5f$export$1005530eda016c13),
/* harmony export */   ck: () => (/* binding */ $c1d7fb2ec91bae71$export$6d08773d2e66f8f2),
/* harmony export */   eg: () => (/* binding */ $c5a24bc478652b5f$export$8c434b3a7a4dad6),
/* harmony export */   is: () => (/* binding */ $453cc9f0df89c0a5$export$77d5aafae4e095b2),
/* harmony export */   l8: () => (/* binding */ $c5a24bc478652b5f$export$fbdeaa6a76694f71)
/* harmony export */ });
/* unused harmony exports Section, getLastItem, getNthItem, CollectionBuilder */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $c1d7fb2ec91bae71$var$Item(props) {
    return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems, title: title, children: children } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"] || "";
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning)) console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.");
    yield {
        type: "item",
        props: props,
        rendered: rendered,
        textValue: textValue,
        "aria-label": props["aria-label"],
        hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: "item",
                value: child
            };
            else if (title) {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                    items.push({
                        type: "item",
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $9fc4852771d079eb$var$Section(props) {
    return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children, title: title, items: items } = props;
    yield {
        type: "section",
        props: props,
        hasChildNodes: true,
        rendered: title,
        "aria-label": props["aria-label"],
        *childNodes () {
            if (typeof children === "function") {
                if (!items) throw new Error("props.children was a function but props.items is missing");
                for (let item of items)yield {
                    type: "item",
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                    items.push({
                        type: "item",
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $9fc4852771d079eb$export$6e2c8f0811a474ce = (/* unused pure expression or super */ null && ($9fc4852771d079eb$var$Section));


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
class $eb2240fc39a57fa5$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $eb2240fc39a57fa5$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children, items: items } = props;
        if (typeof children === "function") {
            if (!items) throw new Error("props.children was a function but props.items is missing");
            for (let item of props.items)yield* this.getFullNode({
                value: item
            }, {
                renderer: children
            });
        } else {
            let items = [];
            (0, react__WEBPACK_IMPORTED_MODULE_0__).Children.forEach(children, (child)=>{
                items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _v_key;
            let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
            if (key == null) throw new Error("No key found for item");
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, react__WEBPACK_IMPORTED_MODULE_0__).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
                let name = typeof element.type === "function" ? element.type.name : element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key;
                if (!nodeKey) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value || partialNode.value;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue,
            "aria-label": partialNode["aria-label"],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes,
            childNodes: $eb2240fc39a57fa5$var$iterable(function*() {
                if (!partialNode.hasChildNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    child.index = index;
                    let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $eb2240fc39a57fa5$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, $eb2240fc39a57fa5$export$bf788dd355e3a401)(), []);
    let { children: children, items: items, collection: collection } = props;
    let result = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
    return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$c5a24bc478652b5f$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$c5a24bc478652b5f$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
    let parents = [];
    while((node === null || node === void 0 ? void 0 : node.parentKey) != null){
        node = collection.getItem(node.parentKey);
        parents.unshift(node);
    }
    return parents;
}


const $453cc9f0df89c0a5$var$cache = new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
    let count = $453cc9f0df89c0a5$var$cache.get(collection);
    if (count != null) return count;
    count = 0;
    let countItems = (items)=>{
        for (let item of items)if (item.type === "section") countItems((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, collection));
        else count++;
    };
    countItems(collection);
    $453cc9f0df89c0a5$var$cache.set(collection, count);
    return count;
}







//# sourceMappingURL=module.js.map


/***/ }),

/***/ 3522:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   uZ: () => (/* binding */ $9446cca9a3875146$export$7d15b64cf5a3a4c4),
/* harmony export */   zk: () => (/* binding */ $458b0a5536c1a7cf$export$40bfa8c7b0832715)
/* harmony export */ });
/* unused harmony exports snapValueToStep, toFixedNumber */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);
    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === "function") {
            console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    min = Number(min);
    max = Number(max);
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf(".");
    let precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ 16158:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __addDisposableResource: () => (/* binding */ __addDisposableResource),
/* harmony export */   __assign: () => (/* binding */ __assign),
/* harmony export */   __asyncDelegator: () => (/* binding */ __asyncDelegator),
/* harmony export */   __asyncGenerator: () => (/* binding */ __asyncGenerator),
/* harmony export */   __asyncValues: () => (/* binding */ __asyncValues),
/* harmony export */   __await: () => (/* binding */ __await),
/* harmony export */   __awaiter: () => (/* binding */ __awaiter),
/* harmony export */   __classPrivateFieldGet: () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   __classPrivateFieldIn: () => (/* binding */ __classPrivateFieldIn),
/* harmony export */   __classPrivateFieldSet: () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   __createBinding: () => (/* binding */ __createBinding),
/* harmony export */   __decorate: () => (/* binding */ __decorate),
/* harmony export */   __disposeResources: () => (/* binding */ __disposeResources),
/* harmony export */   __esDecorate: () => (/* binding */ __esDecorate),
/* harmony export */   __exportStar: () => (/* binding */ __exportStar),
/* harmony export */   __extends: () => (/* binding */ __extends),
/* harmony export */   __generator: () => (/* binding */ __generator),
/* harmony export */   __importDefault: () => (/* binding */ __importDefault),
/* harmony export */   __importStar: () => (/* binding */ __importStar),
/* harmony export */   __makeTemplateObject: () => (/* binding */ __makeTemplateObject),
/* harmony export */   __metadata: () => (/* binding */ __metadata),
/* harmony export */   __param: () => (/* binding */ __param),
/* harmony export */   __propKey: () => (/* binding */ __propKey),
/* harmony export */   __read: () => (/* binding */ __read),
/* harmony export */   __rest: () => (/* binding */ __rest),
/* harmony export */   __runInitializers: () => (/* binding */ __runInitializers),
/* harmony export */   __setFunctionName: () => (/* binding */ __setFunctionName),
/* harmony export */   __spread: () => (/* binding */ __spread),
/* harmony export */   __spreadArray: () => (/* binding */ __spreadArray),
/* harmony export */   __spreadArrays: () => (/* binding */ __spreadArrays),
/* harmony export */   __values: () => (/* binding */ __values),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
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
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose;
    if (async) {
        if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
        dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
        if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
        dispose = value[Symbol.dispose];
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  function next() {
    while (env.stack.length) {
      var rec = env.stack.pop();
      try {
        var result = rec.dispose && rec.dispose.call(rec.value);
        if (rec.async) return Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
      }
      catch (e) {
          fail(e);
      }
    }
    if (env.hasError) throw env.error;
  }
  return next();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
});


/***/ })

};
;