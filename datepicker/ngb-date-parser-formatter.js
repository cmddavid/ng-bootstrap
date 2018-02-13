'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDateISOParserFormatter = exports.NgbDateParserFormatter = undefined;

var _util = require('../util/util');

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
var /**
    * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
    * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
    * to use an alternative format.
    */
NgbDateParserFormatter = function () {
    function NgbDateParserFormatter() {}
    return NgbDateParserFormatter;
}();
/**
 * Abstract type serving as a DI token for the service parsing and formatting dates for the NgbInputDatepicker
 * directive. A default implementation using the ISO 8601 format is provided, but you can provide another implementation
 * to use an alternative format.
 */
exports.NgbDateParserFormatter = NgbDateParserFormatter;

var NgbDateISOParserFormatter = function (_super) {
    __extends(NgbDateISOParserFormatter, _super);
    function NgbDateISOParserFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDateISOParserFormatter.prototype.parse = function (value) {
        if (value) {
            var dateParts = value.trim().split('-');
            if (dateParts.length === 1 && (0, _util.isNumber)(dateParts[0])) {
                return { year: (0, _util.toInteger)(dateParts[0]), month: null, day: null };
            } else if (dateParts.length === 2 && (0, _util.isNumber)(dateParts[0]) && (0, _util.isNumber)(dateParts[1])) {
                return { year: (0, _util.toInteger)(dateParts[0]), month: (0, _util.toInteger)(dateParts[1]), day: null };
            } else if (dateParts.length === 3 && (0, _util.isNumber)(dateParts[0]) && (0, _util.isNumber)(dateParts[1]) && (0, _util.isNumber)(dateParts[2])) {
                return { year: (0, _util.toInteger)(dateParts[0]), month: (0, _util.toInteger)(dateParts[1]), day: (0, _util.toInteger)(dateParts[2]) };
            }
        }
        return null;
    };
    NgbDateISOParserFormatter.prototype.format = function (date) {
        return date ? date.year + "-" + ((0, _util.isNumber)(date.month) ? (0, _util.padNumber)(date.month) : '') + "-" + ((0, _util.isNumber)(date.day) ? (0, _util.padNumber)(date.day) : '') : '';
    };
    return NgbDateISOParserFormatter;
}(NgbDateParserFormatter);
exports.NgbDateISOParserFormatter = NgbDateISOParserFormatter;
//# sourceMappingURL=ngb-date-parser-formatter.js.map