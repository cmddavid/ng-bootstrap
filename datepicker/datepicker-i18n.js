'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDatepickerI18nDefault = exports.NgbDatepickerI18n = undefined;

var _core = require('@angular/core');

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

var WEEKDAYS_SHORT = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
var MONTHS_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var MONTHS_FULL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
/**
 * Type of the service supplying month and weekday names to to NgbDatepicker component.
 * See the i18n demo for how to extend this class and define a custom provider for i18n.
 */
var NgbDatepickerI18n = function () {
    function NgbDatepickerI18n() {}
    NgbDatepickerI18n.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbDatepickerI18n.ctorParameters = function () {
        return [];
    };
    return NgbDatepickerI18n;
}();
exports.NgbDatepickerI18n = NgbDatepickerI18n;

var NgbDatepickerI18nDefault = function (_super) {
    __extends(NgbDatepickerI18nDefault, _super);
    function NgbDatepickerI18nDefault() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbDatepickerI18nDefault.prototype.getWeekdayShortName = function (weekday) {
        return WEEKDAYS_SHORT[weekday - 1];
    };
    NgbDatepickerI18nDefault.prototype.getMonthShortName = function (month) {
        return MONTHS_SHORT[month - 1];
    };
    NgbDatepickerI18nDefault.prototype.getMonthFullName = function (month) {
        return MONTHS_FULL[month - 1];
    };
    NgbDatepickerI18nDefault.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbDatepickerI18nDefault.ctorParameters = function () {
        return [];
    };
    return NgbDatepickerI18nDefault;
}(NgbDatepickerI18n);
exports.NgbDatepickerI18nDefault = NgbDatepickerI18nDefault;
//# sourceMappingURL=datepicker-i18n.js.map