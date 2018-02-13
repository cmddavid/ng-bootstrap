'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbAccordionConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbAccordion component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the accordions used in the application.
 */
var NgbAccordionConfig = function () {
    function NgbAccordionConfig() {
        this.closeOthers = false;
    }
    NgbAccordionConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbAccordionConfig.ctorParameters = function () {
        return [];
    };
    return NgbAccordionConfig;
}();
exports.NgbAccordionConfig = NgbAccordionConfig;
//# sourceMappingURL=accordion-config.js.map