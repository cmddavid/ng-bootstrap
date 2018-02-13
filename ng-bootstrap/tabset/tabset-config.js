'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTabsetConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbTabset component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the tabsets used in the application.
 */
var NgbTabsetConfig = function () {
    function NgbTabsetConfig() {
        this.justify = 'start';
        this.orientation = 'horizontal';
        this.type = 'tabs';
    }
    NgbTabsetConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbTabsetConfig.ctorParameters = function () {
        return [];
    };
    return NgbTabsetConfig;
}();
exports.NgbTabsetConfig = NgbTabsetConfig;
//# sourceMappingURL=tabset-config.js.map