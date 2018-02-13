'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbPopoverModule = exports.NgbPopoverConfig = exports.NgbPopover = undefined;

var _popover = require('./popover');

Object.defineProperty(exports, 'NgbPopover', {
    enumerable: true,
    get: function get() {
        return _popover.NgbPopover;
    }
});

var _popoverConfig = require('./popover-config');

Object.defineProperty(exports, 'NgbPopoverConfig', {
    enumerable: true,
    get: function get() {
        return _popoverConfig.NgbPopoverConfig;
    }
});

var _core = require('@angular/core');

var NgbPopoverModule = function () {
    function NgbPopoverModule() {}
    NgbPopoverModule.forRoot = function () {
        return { ngModule: NgbPopoverModule, providers: [_popoverConfig.NgbPopoverConfig] };
    };
    NgbPopoverModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_popover.NgbPopover, _popover.NgbPopoverWindow], exports: [_popover.NgbPopover], entryComponents: [_popover.NgbPopoverWindow] }] }];
    /** @nocollapse */
    NgbPopoverModule.ctorParameters = function () {
        return [];
    };
    return NgbPopoverModule;
}();
exports.NgbPopoverModule = NgbPopoverModule;
//# sourceMappingURL=popover.module.js.map