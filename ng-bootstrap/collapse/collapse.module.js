'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbCollapseModule = exports.NgbCollapse = undefined;

var _collapse = require('./collapse');

Object.defineProperty(exports, 'NgbCollapse', {
    enumerable: true,
    get: function get() {
        return _collapse.NgbCollapse;
    }
});

var _core = require('@angular/core');

var NgbCollapseModule = function () {
    function NgbCollapseModule() {}
    NgbCollapseModule.forRoot = function () {
        return { ngModule: NgbCollapseModule, providers: [] };
    };
    NgbCollapseModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_collapse.NgbCollapse], exports: [_collapse.NgbCollapse] }] }];
    /** @nocollapse */
    NgbCollapseModule.ctorParameters = function () {
        return [];
    };
    return NgbCollapseModule;
}();
exports.NgbCollapseModule = NgbCollapseModule;
//# sourceMappingURL=collapse.module.js.map