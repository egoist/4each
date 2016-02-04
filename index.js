'use strict'

var looseArray = require('loose-array')

/**
 * iterate over things
 *
 * @param {Object|Array} obj - accept Array, Object, Array-like Object, Node list
 * @param {Function} cb
 */
module.exports = function (obj, cb) {
	if (looseArray(obj)) {
		return Array.prototype.forEach.call(obj, cb)
	}
	for (var key in obj) {
		cb(obj[key], key)
	}
}
