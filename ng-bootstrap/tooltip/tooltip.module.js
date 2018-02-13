'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTooltipModule = exports.NgbTooltip = exports.NgbTooltipConfig = undefined;

var _tooltipConfig = require('./tooltip-config');

Object.defineProperty(exports, 'NgbTooltipConfig', {
    enumerable: true,
    get: function get() {
        return _tooltipConfig.NgbTooltipConfig;
    }
});

var _tooltip = require('./tooltip');

Object.defineProperty(exports, 'NgbTooltip', {
    enumerable: true,
    get: function get() {
        return _tooltip.NgbTooltip;
    }
});

var _core = require('@angular/core');

var NgbTooltipModule = function () {
    function NgbTooltipModule() {}
    NgbTooltipModule.forRoot = function () {
        return { ngModule: NgbTooltipModule, providers: [_tooltipConfig.NgbTooltipConfig] };
    };
    NgbTooltipModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_tooltip.NgbTooltip, _tooltip.NgbTooltipWindow], exports: [_tooltip.NgbTooltip], entryComponents: [_tooltip.NgbTooltipWindow] }] }];
    /** @nocollapse */
    NgbTooltipModule.ctorParameters = function () {
        return [];
    };
    return NgbTooltipModule;
}();
exports.NgbTooltipModule = NgbTooltipModule;
//# sourceMappingURL=tooltip.module.js.map