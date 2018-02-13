'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTabsetModule = exports.NgbTabsetConfig = exports.NgbTabTitle = exports.NgbTabContent = exports.NgbTab = exports.NgbTabset = undefined;

var _tabset = require('./tabset');

Object.defineProperty(exports, 'NgbTabset', {
    enumerable: true,
    get: function get() {
        return _tabset.NgbTabset;
    }
});
Object.defineProperty(exports, 'NgbTab', {
    enumerable: true,
    get: function get() {
        return _tabset.NgbTab;
    }
});
Object.defineProperty(exports, 'NgbTabContent', {
    enumerable: true,
    get: function get() {
        return _tabset.NgbTabContent;
    }
});
Object.defineProperty(exports, 'NgbTabTitle', {
    enumerable: true,
    get: function get() {
        return _tabset.NgbTabTitle;
    }
});

var _tabsetConfig = require('./tabset-config');

Object.defineProperty(exports, 'NgbTabsetConfig', {
    enumerable: true,
    get: function get() {
        return _tabsetConfig.NgbTabsetConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NGB_TABSET_DIRECTIVES = [_tabset.NgbTabset, _tabset.NgbTab, _tabset.NgbTabContent, _tabset.NgbTabTitle];
var NgbTabsetModule = function () {
    function NgbTabsetModule() {}
    NgbTabsetModule.forRoot = function () {
        return { ngModule: NgbTabsetModule, providers: [_tabsetConfig.NgbTabsetConfig] };
    };
    NgbTabsetModule.decorators = [{ type: _core.NgModule, args: [{ declarations: NGB_TABSET_DIRECTIVES, exports: NGB_TABSET_DIRECTIVES, imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbTabsetModule.ctorParameters = function () {
        return [];
    };
    return NgbTabsetModule;
}();
exports.NgbTabsetModule = NgbTabsetModule;
//# sourceMappingURL=tabset.module.js.map