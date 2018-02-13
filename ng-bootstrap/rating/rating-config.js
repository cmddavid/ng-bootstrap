'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbRatingConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbRating component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the ratings used in the application.
 */
var NgbRatingConfig = function () {
    function NgbRatingConfig() {
        this.max = 10;
        this.readonly = false;
        this.resettable = false;
    }
    NgbRatingConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbRatingConfig.ctorParameters = function () {
        return [];
    };
    return NgbRatingConfig;
}();
exports.NgbRatingConfig = NgbRatingConfig;
//# sourceMappingURL=rating-config.js.map