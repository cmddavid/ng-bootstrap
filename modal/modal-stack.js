'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbModalStack = undefined;

var _core = require('@angular/core');

var _popup = require('../util/popup');

var _util = require('../util/util');

var _modalBackdrop = require('./modal-backdrop');

var _modalWindow = require('./modal-window');

var _modalRef = require('./modal-ref');

var NgbModalStack = function () {
    function NgbModalStack(_applicationRef, _injector, _componentFactoryResolver) {
        this._applicationRef = _applicationRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._backdropFactory = _componentFactoryResolver.resolveComponentFactory(_modalBackdrop.NgbModalBackdrop);
        this._windowFactory = _componentFactoryResolver.resolveComponentFactory(_modalWindow.NgbModalWindow);
    }
    NgbModalStack.prototype.open = function (moduleCFR, contentInjector, content, options) {
        var containerSelector = options.container || 'body';
        var containerEl = document.querySelector(containerSelector);
        if (!containerEl) {
            throw new Error("The specified modal container \"" + containerSelector + "\" was not found in the DOM.");
        }
        var activeModal = new _modalRef.NgbActiveModal();
        var contentRef = this._getContentRef(moduleCFR, options.injector || contentInjector, content, activeModal);
        var windowCmptRef;
        var backdropCmptRef;
        var ngbModalRef;
        if (options.backdrop !== false) {
            backdropCmptRef = this._backdropFactory.create(this._injector);
            this._applicationRef.attachView(backdropCmptRef.hostView);
            containerEl.appendChild(backdropCmptRef.location.nativeElement);
        }
        windowCmptRef = this._windowFactory.create(this._injector, contentRef.nodes);
        this._applicationRef.attachView(windowCmptRef.hostView);
        containerEl.appendChild(windowCmptRef.location.nativeElement);
        ngbModalRef = new _modalRef.NgbModalRef(windowCmptRef, contentRef, backdropCmptRef, options.beforeDismiss);
        activeModal.close = function (result) {
            ngbModalRef.close(result);
        };
        activeModal.dismiss = function (reason) {
            ngbModalRef.dismiss(reason);
        };
        this._applyWindowOptions(windowCmptRef.instance, options);
        return ngbModalRef;
    };
    NgbModalStack.prototype._applyWindowOptions = function (windowInstance, options) {
        ['backdrop', 'keyboard', 'size', 'windowClass'].forEach(function (optionName) {
            if ((0, _util.isDefined)(options[optionName])) {
                windowInstance[optionName] = options[optionName];
            }
        });
    };
    NgbModalStack.prototype._getContentRef = function (moduleCFR, contentInjector, content, context) {
        if (!content) {
            return new _popup.ContentRef([]);
        } else if (content instanceof _core.TemplateRef) {
            var viewRef = content.createEmbeddedView(context);
            this._applicationRef.attachView(viewRef);
            return new _popup.ContentRef([viewRef.rootNodes], viewRef);
        } else if ((0, _util.isString)(content)) {
            return new _popup.ContentRef([[document.createTextNode("" + content)]]);
        } else {
            var contentCmptFactory = moduleCFR.resolveComponentFactory(content);
            var modalContentInjector = _core.ReflectiveInjector.resolveAndCreate([{ provide: _modalRef.NgbActiveModal, useValue: context }], contentInjector);
            var componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new _popup.ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
    };
    NgbModalStack.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbModalStack.ctorParameters = function () {
        return [{ type: _core.ApplicationRef }, { type: _core.Injector }, { type: _core.ComponentFactoryResolver }];
    };
    return NgbModalStack;
}();
exports.NgbModalStack = NgbModalStack;
//# sourceMappingURL=modal-stack.js.map