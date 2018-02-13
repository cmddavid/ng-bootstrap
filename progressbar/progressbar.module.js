'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbProgressbarModule = exports.NgbProgressbarConfig = exports.NgbProgressbar = undefined;

var _progressbar = require('./progressbar');

Object.defineProperty(exports, 'NgbProgressbar', {
    enumerable: true,
    get: function get() {
        return _progressbar.NgbProgressbar;
    }
});

var _progressbarConfig = require('./progressbar-config');

Object.defineProperty(exports, 'NgbProgressbarConfig', {
    enumerable: true,
    get: function get() {
        return _progressbarConfig.NgbProgressbarConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbProgressbarModule = function () {
    function NgbProgressbarModule() {}
    NgbProgressbarModule.forRoot = function () {
        return { ngModule: NgbProgressbarModule, providers: [_progressbarConfig.NgbProgressbarConfig] };
    };
    NgbProgressbarModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_progressbar.NgbProgressbar], exports: [_progressbar.NgbProgressbar], imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbProgressbarModule.ctorParameters = function () {
        return [];
    };
    return NgbProgressbarModule;
}();
exports.NgbProgressbarModule = NgbProgressbarModule;
//# sourceMappingURL=progressbar.module.js.map