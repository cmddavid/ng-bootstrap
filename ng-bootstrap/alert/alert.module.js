'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbAlertModule = exports.NgbAlertConfig = exports.NgbAlert = undefined;

var _alert = require('./alert');

Object.defineProperty(exports, 'NgbAlert', {
    enumerable: true,
    get: function get() {
        return _alert.NgbAlert;
    }
});

var _alertConfig = require('./alert-config');

Object.defineProperty(exports, 'NgbAlertConfig', {
    enumerable: true,
    get: function get() {
        return _alertConfig.NgbAlertConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbAlertModule = function () {
    function NgbAlertModule() {}
    NgbAlertModule.forRoot = function () {
        return { ngModule: NgbAlertModule, providers: [_alertConfig.NgbAlertConfig] };
    };
    NgbAlertModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_alert.NgbAlert], exports: [_alert.NgbAlert], imports: [_common.CommonModule], entryComponents: [_alert.NgbAlert] }] }];
    /** @nocollapse */
    NgbAlertModule.ctorParameters = function () {
        return [];
    };
    return NgbAlertModule;
}();
exports.NgbAlertModule = NgbAlertModule;
//# sourceMappingURL=alert.module.js.map