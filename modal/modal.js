'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbModal = undefined;

var _core = require('@angular/core');

var _modalStack2 = require('./modal-stack');

/**
 * A service to open modal windows. Creating a modal is straightforward: create a template and pass it as an argument to
 * the "open" method!
 */
var NgbModal = function () {
    function NgbModal(_moduleCFR, _injector, _modalStack) {
        this._moduleCFR = _moduleCFR;
        this._injector = _injector;
        this._modalStack = _modalStack;
    }
    /**
     * Opens a new modal window with the specified content and using supplied options. Content can be provided
     * as a TemplateRef or a component type. If you pass a component type as content than instances of those
     * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
     * NgbActiveModal class to close / dismiss modals from "inside" of a component.
     */
    /**
       * Opens a new modal window with the specified content and using supplied options. Content can be provided
       * as a TemplateRef or a component type. If you pass a component type as content than instances of those
       * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
       * NgbActiveModal class to close / dismiss modals from "inside" of a component.
       */
    NgbModal.prototype.open = /**
                              * Opens a new modal window with the specified content and using supplied options. Content can be provided
                              * as a TemplateRef or a component type. If you pass a component type as content than instances of those
                              * components can be injected with an instance of the NgbActiveModal class. You can use methods on the
                              * NgbActiveModal class to close / dismiss modals from "inside" of a component.
                              */
    function (content, options) {
        if (options === void 0) {
            options = {};
        }
        return this._modalStack.open(this._moduleCFR, this._injector, content, options);
    };
    NgbModal.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbModal.ctorParameters = function () {
        return [{ type: _core.ComponentFactoryResolver }, { type: _core.Injector }, { type: _modalStack2.NgbModalStack }];
    };
    return NgbModal;
}();
exports.NgbModal = NgbModal;
//# sourceMappingURL=modal.js.map