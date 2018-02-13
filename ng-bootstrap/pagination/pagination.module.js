'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbPaginationModule = exports.NgbPaginationConfig = exports.NgbPagination = undefined;

var _pagination = require('./pagination');

Object.defineProperty(exports, 'NgbPagination', {
    enumerable: true,
    get: function get() {
        return _pagination.NgbPagination;
    }
});

var _paginationConfig = require('./pagination-config');

Object.defineProperty(exports, 'NgbPaginationConfig', {
    enumerable: true,
    get: function get() {
        return _paginationConfig.NgbPaginationConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbPaginationModule = function () {
    function NgbPaginationModule() {}
    NgbPaginationModule.forRoot = function () {
        return { ngModule: NgbPaginationModule, providers: [_paginationConfig.NgbPaginationConfig] };
    };
    NgbPaginationModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_pagination.NgbPagination], exports: [_pagination.NgbPagination], imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbPaginationModule.ctorParameters = function () {
        return [];
    };
    return NgbPaginationModule;
}();
exports.NgbPaginationModule = NgbPaginationModule;
//# sourceMappingURL=pagination.module.js.map