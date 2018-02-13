'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDatepickerNavigationSelect = undefined;

var _core = require('@angular/core');

var _ngbDate = require('./ngb-date');

var _util = require('../util/util');

var _datepickerI18n = require('./datepicker-i18n');

var _ngbCalendar = require('./ngb-calendar');

var NgbDatepickerNavigationSelect = function () {
    function NgbDatepickerNavigationSelect(i18n, calendar) {
        this.i18n = i18n;
        this.calendar = calendar;
        this.years = [];
        this.select = new _core.EventEmitter();
        this.months = calendar.getMonths();
    }
    NgbDatepickerNavigationSelect.prototype.ngOnChanges = function (changes) {
        if (changes['maxDate'] || changes['minDate'] || changes['date']) {
            this._generateYears();
            this._generateMonths();
        }
    };
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) {
        this.select.emit(new _ngbDate.NgbDate(this.date.year, (0, _util.toInteger)(month), 1));
    };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) {
        this.select.emit(new _ngbDate.NgbDate((0, _util.toInteger)(year), this.date.month, 1));
    };
    NgbDatepickerNavigationSelect.prototype._generateMonths = function () {
        var _this = this;
        this.months = this.calendar.getMonths();
        if (this.date && this.date.year === this.minDate.year) {
            var index = this.months.findIndex(function (month) {
                return month === _this.minDate.month;
            });
            this.months = this.months.slice(index);
        }
        if (this.date && this.date.year === this.maxDate.year) {
            var index = this.months.findIndex(function (month) {
                return month === _this.maxDate.month;
            });
            this.months = this.months.slice(0, index + 1);
        }
    };
    NgbDatepickerNavigationSelect.prototype._generateYears = function () {
        var _this = this;
        this.years = Array.from({ length: this.maxDate.year - this.minDate.year + 1 }, function (e, i) {
            return _this.minDate.year + i;
        });
    };
    NgbDatepickerNavigationSelect.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-datepicker-navigation-select',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            styles: ["\n    :host>select {\n      /* to align with btn-sm */\n      padding: 0.25rem 0.5rem;\n      font-size: 0.875rem;\n      line-height: 1.25;\n      /* to cancel the custom height set by custom-select */\n      height: inherit;\n      width: 50%;\n      display: inline-block;\n    }\n  "],
            template: "\n    <select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.month\"\n      (change)=\"changeMonth($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let m of months\" [value]=\"m\">{{ i18n.getMonthShortName(m) }}</option>\n    </select><select\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      [value]=\"date?.year\"\n      (change)=\"changeYear($event.target.value)\"\n      tabindex=\"-1\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ y }}</option>\n    </select>\n  "
        }] }];
    /** @nocollapse */
    NgbDatepickerNavigationSelect.ctorParameters = function () {
        return [{ type: _datepickerI18n.NgbDatepickerI18n }, { type: _ngbCalendar.NgbCalendar }];
    };
    NgbDatepickerNavigationSelect.propDecorators = {
        "date": [{ type: _core.Input }],
        "disabled": [{ type: _core.Input }],
        "maxDate": [{ type: _core.Input }],
        "minDate": [{ type: _core.Input }],
        "select": [{ type: _core.Output }]
    };
    return NgbDatepickerNavigationSelect;
}();
exports.NgbDatepickerNavigationSelect = NgbDatepickerNavigationSelect;
//# sourceMappingURL=datepicker-navigation-select.js.map