'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbButtonsModule = exports.NgbRadioGroup = exports.NgbRadio = exports.NgbCheckBox = exports.NgbButtonLabel = undefined;

var _label = require('./label');

Object.defineProperty(exports, 'NgbButtonLabel', {
    enumerable: true,
    get: function get() {
        return _label.NgbButtonLabel;
    }
});

var _checkbox = require('./checkbox');

Object.defineProperty(exports, 'NgbCheckBox', {
    enumerable: true,
    get: function get() {
        return _checkbox.NgbCheckBox;
    }
});

var _radio = require('./radio');

Object.defineProperty(exports, 'NgbRadio', {
    enumerable: true,
    get: function get() {
        return _radio.NgbRadio;
    }
});
Object.defineProperty(exports, 'NgbRadioGroup', {
    enumerable: true,
    get: function get() {
        return _radio.NgbRadioGroup;
    }
});

var _core = require('@angular/core');

var NGB_BUTTON_DIRECTIVES = [_label.NgbButtonLabel, _checkbox.NgbCheckBox, _radio.NgbRadioGroup, _radio.NgbRadio];
var NgbButtonsModule = function () {
    function NgbButtonsModule() {}
    NgbButtonsModule.forRoot = function () {
        return { ngModule: NgbButtonsModule, providers: [] };
    };
    NgbButtonsModule.decorators = [{ type: _core.NgModule, args: [{ declarations: NGB_BUTTON_DIRECTIVES, exports: NGB_BUTTON_DIRECTIVES }] }];
    /** @nocollapse */
    NgbButtonsModule.ctorParameters = function () {
        return [];
    };
    return NgbButtonsModule;
}();
exports.NgbButtonsModule = NgbButtonsModule;
//# sourceMappingURL=buttons.module.js.map