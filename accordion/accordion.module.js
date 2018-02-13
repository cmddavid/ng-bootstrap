'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbAccordionModule = exports.NgbAccordionConfig = exports.NgbPanelContent = exports.NgbPanelTitle = exports.NgbPanel = exports.NgbAccordion = undefined;

var _accordion = require('./accordion');

Object.defineProperty(exports, 'NgbAccordion', {
    enumerable: true,
    get: function get() {
        return _accordion.NgbAccordion;
    }
});
Object.defineProperty(exports, 'NgbPanel', {
    enumerable: true,
    get: function get() {
        return _accordion.NgbPanel;
    }
});
Object.defineProperty(exports, 'NgbPanelTitle', {
    enumerable: true,
    get: function get() {
        return _accordion.NgbPanelTitle;
    }
});
Object.defineProperty(exports, 'NgbPanelContent', {
    enumerable: true,
    get: function get() {
        return _accordion.NgbPanelContent;
    }
});

var _accordionConfig = require('./accordion-config');

Object.defineProperty(exports, 'NgbAccordionConfig', {
    enumerable: true,
    get: function get() {
        return _accordionConfig.NgbAccordionConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NGB_ACCORDION_DIRECTIVES = [_accordion.NgbAccordion, _accordion.NgbPanel, _accordion.NgbPanelTitle, _accordion.NgbPanelContent];
var NgbAccordionModule = function () {
    function NgbAccordionModule() {}
    NgbAccordionModule.forRoot = function () {
        return { ngModule: NgbAccordionModule, providers: [_accordionConfig.NgbAccordionConfig] };
    };
    NgbAccordionModule.decorators = [{ type: _core.NgModule, args: [{ declarations: NGB_ACCORDION_DIRECTIVES, exports: NGB_ACCORDION_DIRECTIVES, imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbAccordionModule.ctorParameters = function () {
        return [];
    };
    return NgbAccordionModule;
}();
exports.NgbAccordionModule = NgbAccordionModule;
//# sourceMappingURL=accordion.module.js.map