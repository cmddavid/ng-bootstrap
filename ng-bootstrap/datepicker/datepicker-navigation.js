'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDatepickerNavigation = undefined;

var _core = require('@angular/core');

var _datepickerViewModel = require('./datepicker-view-model');

var _ngbDate = require('./ngb-date');

var _datepickerI18n = require('./datepicker-i18n');

var _ngbCalendar = require('./ngb-calendar');

// The -ms- and -webkit- element for the CSS can be removed if we are generating the CSS using SASS.
var NgbDatepickerNavigation = function () {
    function NgbDatepickerNavigation(i18n, _calendar) {
        this.i18n = i18n;
        this._calendar = _calendar;
        this.navigation = _datepickerViewModel.NavigationEvent;
        this.months = [];
        this.navigate = new _core.EventEmitter();
        this.select = new _core.EventEmitter();
    }
    NgbDatepickerNavigation.prototype.doNavigate = function (event) {
        this.navigate.emit(event);
    };
    NgbDatepickerNavigation.prototype.nextDisabled = function () {
        return this.disabled || this.maxDate && this._calendar.getNext(this.date, 'm').after(this.maxDate);
    };
    NgbDatepickerNavigation.prototype.prevDisabled = function () {
        var prevDate = this._calendar.getPrev(this.date, 'm');
        return this.disabled || this.minDate && (prevDate.year === this.minDate.year && prevDate.month < this.minDate.month || prevDate.year < this.minDate.year && this.minDate.month === 1);
    };
    NgbDatepickerNavigation.prototype.selectDate = function (date) {
        this.select.emit(date);
    };
    NgbDatepickerNavigation.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-datepicker-navigation',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            styles: ["\n    :host {\n      height: 2rem;\n      line-height: 1.85rem;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n    }\n    .ngb-dp-navigation-chevron::before {\n      border-style: solid;\n      border-width: 0.2em 0.2em 0 0;\n      content: '';\n      display: inline-block;\n      width: 0.75em;\n      height: 0.75em;\n      transform: rotate(-135deg);\n      -webkit-transform: rotate(-135deg);\n      -ms-transform: rotate(-135deg);\n    }\n    .right .ngb-dp-navigation-chevron:before {\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n    .ngb-dp-arrow {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      -webkit-box-flex: 1 1 auto;\n      -ms-flex: 1 1 auto;\n      flex-basis: auto;\n      flex-grow: 1;\n      padding-right: 0px;\n      padding-left: 0px;\n      margin: 0px;\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-arrow.right {\n      -webkit-box-pack: end;\n      -ms-flex-pack: end;\n      justify-content: flex-end;\n    }\n    .ngb-dp-arrow-btn {\n      padding: 0rem 1rem;\n    }\n    .ngb-dp-month-name {\n      font-size: larger;\n      height: 2rem;\n      line-height: 2rem;\n      text-align: center;\n    }\n    .ngb-dp-navigation-select {\n      -webkit-box-flex: 1 1 9rem;\n      -ms-flex:  1 1 9rem;\n      flex-grow: 1;\n      flex-basis: 9rem;\n    }\n  "],
            template: "\n  <div class=\"ngb-dp-arrow\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!doNavigate(navigation.PREV)\" [disabled]=\"prevDisabled()\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n  </div>\n    <ngb-datepicker-navigation-select *ngIf=\"showSelect\" class=\"d-block ngb-dp-navigation-select\"\n      [date]=\"date\"\n      [minDate]=\"minDate\"\n      [maxDate]=\"maxDate\"\n      [disabled] = \"disabled\"\n      (select)=\"selectDate($event)\">\n    </ngb-datepicker-navigation-select>\n\n    <ng-template *ngIf=\"!showSelect\" ngFor let-month [ngForOf]=\"months\" let-i=\"index\">\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i > 0\"></div>\n      <div class=\"ngb-dp-month-name d-block\">\n        {{ i18n.getMonthFullName(month.number) }} {{ month.year }}\n      </div>\n      <div class=\"ngb-dp-arrow\" *ngIf=\"i !== months.length - 1\"></div>\n    </ng-template>\n    <div class=\"ngb-dp-arrow right\">\n    <button type=\"button\" class=\"btn btn-link ngb-dp-arrow-btn\"\n            (click)=\"!!doNavigate(navigation.NEXT)\" [disabled]=\"nextDisabled()\" tabindex=\"-1\">\n      <span class=\"ngb-dp-navigation-chevron\"></span>\n    </button>\n    </div>\n    "
        }] }];
    /** @nocollapse */
    NgbDatepickerNavigation.ctorParameters = function () {
        return [{ type: _datepickerI18n.NgbDatepickerI18n }, { type: _ngbCalendar.NgbCalendar }];
    };
    NgbDatepickerNavigation.propDecorators = {
        "date": [{ type: _core.Input }],
        "disabled": [{ type: _core.Input }],
        "maxDate": [{ type: _core.Input }],
        "minDate": [{ type: _core.Input }],
        "months": [{ type: _core.Input }],
        "showSelect": [{ type: _core.Input }],
        "showWeekNumbers": [{ type: _core.Input }],
        "navigate": [{ type: _core.Output }],
        "select": [{ type: _core.Output }]
    };
    return NgbDatepickerNavigation;
}();
exports.NgbDatepickerNavigation = NgbDatepickerNavigation;
//# sourceMappingURL=datepicker-navigation.js.map