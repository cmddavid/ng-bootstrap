'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDatepickerMonthView = undefined;

var _core = require('@angular/core');

var _ngbDate = require('./ngb-date');

var _datepickerI18n = require('./datepicker-i18n');

var NgbDatepickerMonthView = function () {
    function NgbDatepickerMonthView(i18n) {
        this.i18n = i18n;
        this.select = new _core.EventEmitter();
    }
    NgbDatepickerMonthView.prototype.doSelect = function (day) {
        if (!day.context.disabled && !this.isHidden(day)) {
            this.select.emit(_ngbDate.NgbDate.from(day.date));
        }
    };
    NgbDatepickerMonthView.prototype.isCollapsed = function (week) {
        return this.outsideDays === 'collapsed' && week.days[0].date.month !== this.month.number && week.days[week.days.length - 1].date.month !== this.month.number;
    };
    NgbDatepickerMonthView.prototype.isHidden = function (day) {
        return (this.outsideDays === 'hidden' || this.outsideDays === 'collapsed') && this.month.number !== day.date.month;
    };
    NgbDatepickerMonthView.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-datepicker-month-view',
            host: { 'class': 'd-block' },
            styles: ["\n    .ngb-dp-weekday, .ngb-dp-week-number {\n      line-height: 2rem;\n    }\n    .ngb-dp-weekday {\n      color: #5bc0de;\n    }\n    .ngb-dp-week {\n        border-radius: 0.25rem;\n        display: -webkit-box;\n        display: -ms-flexbox;\n        display: flex;\n    }\n    .ngb-dp-weekdays {\n      border-bottom: 1px solid rgba(0, 0, 0, 0.125);\n      border-radius: 0rem;\n    }\n    .ngb-dp-day, .ngb-dp-weekday, .ngb-dp-week-number {\n      width: 2rem;\n      height: 2rem;\n    }\n    .ngb-dp-day {\n      cursor: pointer;\n    }\n    .ngb-dp-day.disabled, .ngb-dp-day.hidden {\n      cursor: default;\n    }\n  "],
            template: "\n    <div *ngIf=\"showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays bg-light\">\n      <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of month.weekdays\" class=\"ngb-dp-weekday small text-center font-italic\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"month.weeks\">\n      <div *ngIf=\"!isCollapsed(week)\" class=\"ngb-dp-week\">\n        <div *ngIf=\"showWeekNumbers\" class=\"ngb-dp-week-number small text-center font-italic text-muted\">{{ week.number }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day)\" class=\"ngb-dp-day\" [class.disabled]=\"day.context.disabled\"\n         [class.hidden]=\"isHidden(day)\">\n          <ng-template [ngIf]=\"!isHidden(day)\">\n            <ng-template [ngTemplateOutlet]=\"dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  "
        }] }];
    /** @nocollapse */
    NgbDatepickerMonthView.ctorParameters = function () {
        return [{ type: _datepickerI18n.NgbDatepickerI18n }];
    };
    NgbDatepickerMonthView.propDecorators = {
        "dayTemplate": [{ type: _core.Input }],
        "month": [{ type: _core.Input }],
        "outsideDays": [{ type: _core.Input }],
        "showWeekdays": [{ type: _core.Input }],
        "showWeekNumbers": [{ type: _core.Input }],
        "select": [{ type: _core.Output }]
    };
    return NgbDatepickerMonthView;
}();
exports.NgbDatepickerMonthView = NgbDatepickerMonthView;
//# sourceMappingURL=datepicker-month-view.js.map