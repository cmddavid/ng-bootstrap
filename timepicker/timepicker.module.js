'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTimepickerModule = exports.NgbTimepickerConfig = exports.NgbTimepicker = undefined;

var _timepicker = require('./timepicker');

Object.defineProperty(exports, 'NgbTimepicker', {
    enumerable: true,
    get: function get() {
        return _timepicker.NgbTimepicker;
    }
});

var _timepickerConfig = require('./timepicker-config');

Object.defineProperty(exports, 'NgbTimepickerConfig', {
    enumerable: true,
    get: function get() {
        return _timepickerConfig.NgbTimepickerConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbTimepickerModule = function () {
    function NgbTimepickerModule() {}
    NgbTimepickerModule.forRoot = function () {
        return { ngModule: NgbTimepickerModule, providers: [_timepickerConfig.NgbTimepickerConfig] };
    };
    NgbTimepickerModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_timepicker.NgbTimepicker], exports: [_timepicker.NgbTimepicker], imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbTimepickerModule.ctorParameters = function () {
        return [];
    };
    return NgbTimepickerModule;
}();
exports.NgbTimepickerModule = NgbTimepickerModule;
//# sourceMappingURL=timepicker.module.js.map