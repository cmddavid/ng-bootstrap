'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbPaginationConfig = undefined;

var _core = require('@angular/core');

/**
 * Configuration service for the NgbPagination component.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the paginations used in the application.
 */
var NgbPaginationConfig = function () {
    function NgbPaginationConfig() {
        this.disabled = false;
        this.boundaryLinks = false;
        this.directionLinks = true;
        this.ellipses = true;
        this.maxSize = 0;
        this.pageSize = 10;
        this.rotate = false;
    }
    NgbPaginationConfig.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbPaginationConfig.ctorParameters = function () {
        return [];
    };
    return NgbPaginationConfig;
}();
exports.NgbPaginationConfig = NgbPaginationConfig;
//# sourceMappingURL=pagination-config.js.map