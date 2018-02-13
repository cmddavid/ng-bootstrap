"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toInteger = toInteger;
exports.toString = toString;
exports.getValueInRange = getValueInRange;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isInteger = isInteger;
exports.isDefined = isDefined;
exports.padNumber = padNumber;
exports.regExpEscape = regExpEscape;
function toInteger(value) {
    return parseInt("" + value, 10);
}
function toString(value) {
    return value !== undefined && value !== null ? "" + value : '';
}
function getValueInRange(value, max, min) {
    if (min === void 0) {
        min = 0;
    }
    return Math.max(Math.min(value, max), min);
}
function isString(value) {
    return typeof value === 'string';
}
function isNumber(value) {
    return !isNaN(toInteger(value));
}
function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value;
}
function isDefined(value) {
    return value !== undefined && value !== null;
}
function padNumber(value) {
    if (isNumber(value)) {
        return ("0" + value).slice(-2);
    } else {
        return '';
    }
}
function regExpEscape(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}
//# sourceMappingURL=util.js.map