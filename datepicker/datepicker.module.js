'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDatepickerModule = exports.NgbDateParserFormatter = exports.NgbDateAdapter = exports.NgbDatepickerI18n = exports.NgbDatepickerConfig = exports.NgbDatepickerNavigationSelect = exports.NgbDatepickerNavigation = exports.NgbDatepickerDayView = exports.NgbDatepickerMonthView = exports.NgbCalendarIslamicUmalqura = exports.NgbCalendarIslamicCivil = exports.NgbCalendar = exports.NgbInputDatepicker = exports.NgbDatepicker = undefined;

var _datepicker = require('./datepicker');

Object.defineProperty(exports, 'NgbDatepicker', {
    enumerable: true,
    get: function get() {
        return _datepicker.NgbDatepicker;
    }
});

var _datepickerInput = require('./datepicker-input');

Object.defineProperty(exports, 'NgbInputDatepicker', {
    enumerable: true,
    get: function get() {
        return _datepickerInput.NgbInputDatepicker;
    }
});

var _ngbCalendar = require('./ngb-calendar');

Object.defineProperty(exports, 'NgbCalendar', {
    enumerable: true,
    get: function get() {
        return _ngbCalendar.NgbCalendar;
    }
});

var _ngbCalendarIslamicCivil = require('./hijri/ngb-calendar-islamic-civil');

Object.defineProperty(exports, 'NgbCalendarIslamicCivil', {
    enumerable: true,
    get: function get() {
        return _ngbCalendarIslamicCivil.NgbCalendarIslamicCivil;
    }
});

var _ngbCalendarIslamicUmalqura = require('./hijri/ngb-calendar-islamic-umalqura');

Object.defineProperty(exports, 'NgbCalendarIslamicUmalqura', {
    enumerable: true,
    get: function get() {
        return _ngbCalendarIslamicUmalqura.NgbCalendarIslamicUmalqura;
    }
});

var _datepickerMonthView = require('./datepicker-month-view');

Object.defineProperty(exports, 'NgbDatepickerMonthView', {
    enumerable: true,
    get: function get() {
        return _datepickerMonthView.NgbDatepickerMonthView;
    }
});

var _datepickerDayView = require('./datepicker-day-view');

Object.defineProperty(exports, 'NgbDatepickerDayView', {
    enumerable: true,
    get: function get() {
        return _datepickerDayView.NgbDatepickerDayView;
    }
});

var _datepickerNavigation = require('./datepicker-navigation');

Object.defineProperty(exports, 'NgbDatepickerNavigation', {
    enumerable: true,
    get: function get() {
        return _datepickerNavigation.NgbDatepickerNavigation;
    }
});

var _datepickerNavigationSelect = require('./datepicker-navigation-select');

Object.defineProperty(exports, 'NgbDatepickerNavigationSelect', {
    enumerable: true,
    get: function get() {
        return _datepickerNavigationSelect.NgbDatepickerNavigationSelect;
    }
});

var _datepickerConfig = require('./datepicker-config');

Object.defineProperty(exports, 'NgbDatepickerConfig', {
    enumerable: true,
    get: function get() {
        return _datepickerConfig.NgbDatepickerConfig;
    }
});

var _datepickerI18n = require('./datepicker-i18n');

Object.defineProperty(exports, 'NgbDatepickerI18n', {
    enumerable: true,
    get: function get() {
        return _datepickerI18n.NgbDatepickerI18n;
    }
});

var _ngbDateAdapter = require('./ngb-date-adapter');

Object.defineProperty(exports, 'NgbDateAdapter', {
    enumerable: true,
    get: function get() {
        return _ngbDateAdapter.NgbDateAdapter;
    }
});

var _ngbDateParserFormatter = require('./ngb-date-parser-formatter');

Object.defineProperty(exports, 'NgbDateParserFormatter', {
    enumerable: true,
    get: function get() {
        return _ngbDateParserFormatter.NgbDateParserFormatter;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var _forms = require('@angular/forms');

var NgbDatepickerModule = function () {
    function NgbDatepickerModule() {}
    NgbDatepickerModule.forRoot = function () {
        return {
            ngModule: NgbDatepickerModule,
            providers: [{ provide: _ngbCalendar.NgbCalendar, useClass: _ngbCalendar.NgbCalendarGregorian }, { provide: _datepickerI18n.NgbDatepickerI18n, useClass: _datepickerI18n.NgbDatepickerI18nDefault }, { provide: _ngbDateParserFormatter.NgbDateParserFormatter, useClass: _ngbDateParserFormatter.NgbDateISOParserFormatter }, { provide: _ngbDateAdapter.NgbDateAdapter, useClass: _ngbDateAdapter.NgbDateStructAdapter }, _datepickerConfig.NgbDatepickerConfig]
        };
    };
    NgbDatepickerModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: [_datepicker.NgbDatepicker, _datepickerMonthView.NgbDatepickerMonthView, _datepickerNavigation.NgbDatepickerNavigation, _datepickerNavigationSelect.NgbDatepickerNavigationSelect, _datepickerDayView.NgbDatepickerDayView, _datepickerInput.NgbInputDatepicker],
            exports: [_datepicker.NgbDatepicker, _datepickerInput.NgbInputDatepicker],
            imports: [_common.CommonModule, _forms.FormsModule],
            entryComponents: [_datepicker.NgbDatepicker]
        }] }];
    /** @nocollapse */
    NgbDatepickerModule.ctorParameters = function () {
        return [];
    };
    return NgbDatepickerModule;
}();
exports.NgbDatepickerModule = NgbDatepickerModule;
//# sourceMappingURL=datepicker.module.js.map