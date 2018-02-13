'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTypeaheadConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbTypeahead component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the typeaheads used in the application.
 */
var NgbTypeaheadConfig = function () {
    function NgbTypeaheadConfig() {
        this.editable = true;
        this.focusFirst = true;
        this.showHint = false;
        this.placement = 'bottom-left';
    }
    NgbTypeaheadConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbTypeaheadConfig.ctorParameters = function () {
        return [];
    };
    return NgbTypeaheadConfig;
}();
exports.NgbTypeaheadConfig = NgbTypeaheadConfig;
//# sourceMappingURL=typeahead-config.js.map