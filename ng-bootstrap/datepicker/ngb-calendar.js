'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbCalendarGregorian = exports.NgbCalendar = undefined;

var _ngbDate = require('./ngb-date');

var _core = require('@angular/core');

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

function fromJSDate(jsDate) {
    return new _ngbDate.NgbDate(jsDate.getFullYear(), jsDate.getMonth() + 1, jsDate.getDate());
}
function toJSDate(date) {
    var jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // this is done avoid 30 -> 1930 conversion
    if (!isNaN(jsDate.getTime())) {
        jsDate.setFullYear(date.year);
    }
    return jsDate;
}
var NgbCalendar = function () {
    function NgbCalendar() {}
    NgbCalendar.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbCalendar.ctorParameters = function () {
        return [];
    };
    return NgbCalendar;
}();
exports.NgbCalendar = NgbCalendar;

var NgbCalendarGregorian = function (_super) {
    __extends(NgbCalendarGregorian, _super);
    function NgbCalendarGregorian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NgbCalendarGregorian.prototype.getDaysPerWeek = function () {
        return 7;
    };
    NgbCalendarGregorian.prototype.getMonths = function () {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    };
    NgbCalendarGregorian.prototype.getWeeksPerMonth = function () {
        return 6;
    };
    NgbCalendarGregorian.prototype.getNext = function (date, period, number) {
        if (period === void 0) {
            period = 'd';
        }
        if (number === void 0) {
            number = 1;
        }
        var jsDate = toJSDate(date);
        switch (period) {
            case 'y':
                return new _ngbDate.NgbDate(date.year + number, 1, 1);
            case 'm':
                jsDate = new Date(date.year, date.month + number - 1, 1, 12);
                break;
            case 'd':
                jsDate.setDate(jsDate.getDate() + number);
                break;
            default:
                return date;
        }
        return fromJSDate(jsDate);
    };
    NgbCalendarGregorian.prototype.getPrev = function (date, period, number) {
        if (period === void 0) {
            period = 'd';
        }
        if (number === void 0) {
            number = 1;
        }
        return this.getNext(date, period, -number);
    };
    NgbCalendarGregorian.prototype.getWeekday = function (date) {
        var jsDate = toJSDate(date);
        var day = jsDate.getDay();
        // in JS Date Sun=0, in ISO 8601 Sun=7
        return day === 0 ? 7 : day;
    };
    NgbCalendarGregorian.prototype.getWeekNumber = function (week, firstDayOfWeek) {
        // in JS Date Sun=0, in ISO 8601 Sun=7
        if (firstDayOfWeek === 7) {
            firstDayOfWeek = 0;
        }
        var thursdayIndex = (4 + 7 - firstDayOfWeek) % 7;
        var date = week[thursdayIndex];
        var jsDate = toJSDate(date);
        jsDate.setDate(jsDate.getDate() + 4 - (jsDate.getDay() || 7)); // Thursday
        var time = jsDate.getTime();
        jsDate.setMonth(0); // Compare with Jan 1
        jsDate.setDate(1);
        return Math.floor(Math.round((time - jsDate.getTime()) / 86400000) / 7) + 1;
    };
    NgbCalendarGregorian.prototype.getToday = function () {
        return fromJSDate(new Date());
    };
    NgbCalendarGregorian.prototype.isValid = function (date) {
        if (!date || !(0, _util.isInteger)(date.year) || !(0, _util.isInteger)(date.month) || !(0, _util.isInteger)(date.day)) {
            return false;
        }
        var jsDate = toJSDate(date);
        return !isNaN(jsDate.getTime()) && jsDate.getFullYear() === date.year && jsDate.getMonth() + 1 === date.month && jsDate.getDate() === date.day;
    };
    NgbCalendarGregorian.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbCalendarGregorian.ctorParameters = function () {
        return [];
    };
    return NgbCalendarGregorian;
}(NgbCalendar);
exports.NgbCalendarGregorian = NgbCalendarGregorian;
//# sourceMappingURL=ngb-calendar.js.map