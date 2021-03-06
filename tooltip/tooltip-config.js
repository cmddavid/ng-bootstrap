'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTooltipConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbTooltip directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tooltips used in the application.
 */
var NgbTooltipConfig = function () {
    function NgbTooltipConfig() {
        this.placement = 'top';
        this.triggers = 'hover';
    }
    NgbTooltipConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbTooltipConfig.ctorParameters = function () {
        return [];
    };
    return NgbTooltipConfig;
}();
exports.NgbTooltipConfig = NgbTooltipConfig;
//# sourceMappingURL=tooltip-config.js.map