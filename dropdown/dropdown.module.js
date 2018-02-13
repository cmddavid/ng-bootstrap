'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDropdownModule = exports.NgbDropdownConfig = exports.NgbDropdownMenu = exports.NgbDropdownToggle = exports.NgbDropdown = undefined;

var _dropdown = require('./dropdown');

Object.defineProperty(exports, 'NgbDropdown', {
    enumerable: true,
    get: function get() {
        return _dropdown.NgbDropdown;
    }
});
Object.defineProperty(exports, 'NgbDropdownToggle', {
    enumerable: true,
    get: function get() {
        return _dropdown.NgbDropdownToggle;
    }
});
Object.defineProperty(exports, 'NgbDropdownMenu', {
    enumerable: true,
    get: function get() {
        return _dropdown.NgbDropdownMenu;
    }
});

var _dropdownConfig = require('./dropdown-config');

Object.defineProperty(exports, 'NgbDropdownConfig', {
    enumerable: true,
    get: function get() {
        return _dropdownConfig.NgbDropdownConfig;
    }
});

var _core = require('@angular/core');

var NGB_DROPDOWN_DIRECTIVES = [_dropdown.NgbDropdown, _dropdown.NgbDropdownToggle, _dropdown.NgbDropdownMenu];
var NgbDropdownModule = function () {
    function NgbDropdownModule() {}
    NgbDropdownModule.forRoot = function () {
        return { ngModule: NgbDropdownModule, providers: [_dropdownConfig.NgbDropdownConfig] };
    };
    NgbDropdownModule.decorators = [{ type: _core.NgModule, args: [{ declarations: NGB_DROPDOWN_DIRECTIVES, exports: NGB_DROPDOWN_DIRECTIVES }] }];
    /** @nocollapse */
    NgbDropdownModule.ctorParameters = function () {
        return [];
    };
    return NgbDropdownModule;
}();
exports.NgbDropdownModule = NgbDropdownModule;
//# sourceMappingURL=dropdown.module.js.map