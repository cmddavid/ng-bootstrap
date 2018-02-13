'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbAlertConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbAlert component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the alerts used in the application.
 */
var NgbAlertConfig = function () {
    function NgbAlertConfig() {
        this.dismissible = true;
        this.type = 'warning';
    }
    NgbAlertConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbAlertConfig.ctorParameters = function () {
        return [];
    };
    return NgbAlertConfig;
}();
exports.NgbAlertConfig = NgbAlertConfig;
//# sourceMappingURL=alert-config.js.map