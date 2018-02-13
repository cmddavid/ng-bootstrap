'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTypeaheadModule = exports.NgbTypeahead = exports.NgbTypeaheadConfig = exports.NgbTypeaheadWindow = exports.NgbHighlight = undefined;

var _highlight = require('./highlight');

Object.defineProperty(exports, 'NgbHighlight', {
    enumerable: true,
    get: function get() {
        return _highlight.NgbHighlight;
    }
});

var _typeaheadWindow = require('./typeahead-window');

Object.defineProperty(exports, 'NgbTypeaheadWindow', {
    enumerable: true,
    get: function get() {
        return _typeaheadWindow.NgbTypeaheadWindow;
    }
});

var _typeaheadConfig = require('./typeahead-config');

Object.defineProperty(exports, 'NgbTypeaheadConfig', {
    enumerable: true,
    get: function get() {
        return _typeaheadConfig.NgbTypeaheadConfig;
    }
});

var _typeahead = require('./typeahead');

Object.defineProperty(exports, 'NgbTypeahead', {
    enumerable: true,
    get: function get() {
        return _typeahead.NgbTypeahead;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbTypeaheadModule = function () {
    function NgbTypeaheadModule() {}
    NgbTypeaheadModule.forRoot = function () {
        return { ngModule: NgbTypeaheadModule, providers: [_typeaheadConfig.NgbTypeaheadConfig] };
    };
    NgbTypeaheadModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: [_typeahead.NgbTypeahead, _highlight.NgbHighlight, _typeaheadWindow.NgbTypeaheadWindow],
            exports: [_typeahead.NgbTypeahead, _highlight.NgbHighlight],
            imports: [_common.CommonModule],
            entryComponents: [_typeaheadWindow.NgbTypeaheadWindow]
        }] }];
    /** @nocollapse */
    NgbTypeaheadModule.ctorParameters = function () {
        return [];
    };
    return NgbTypeaheadModule;
}();
exports.NgbTypeaheadModule = NgbTypeaheadModule;
//# sourceMappingURL=typeahead.module.js.map