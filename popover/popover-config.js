'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbPopoverConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbPopover directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the popovers used in the application.
 */
var NgbPopoverConfig = function () {
    function NgbPopoverConfig() {
        this.placement = 'top';
        this.triggers = 'click';
    }
    NgbPopoverConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbPopoverConfig.ctorParameters = function () {
        return [];
    };
    return NgbPopoverConfig;
}();
exports.NgbPopoverConfig = NgbPopoverConfig;
//# sourceMappingURL=popover-config.js.map