'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbModalModule = exports.ModalDismissReasons = exports.NgbActiveModal = exports.NgbModalRef = exports.NgbModal = undefined;

var _modal = require('./modal');

Object.defineProperty(exports, 'NgbModal', {
    enumerable: true,
    get: function get() {
        return _modal.NgbModal;
    }
});

var _modalRef = require('./modal-ref');

Object.defineProperty(exports, 'NgbModalRef', {
    enumerable: true,
    get: function get() {
        return _modalRef.NgbModalRef;
    }
});
Object.defineProperty(exports, 'NgbActiveModal', {
    enumerable: true,
    get: function get() {
        return _modalRef.NgbActiveModal;
    }
});

var _modalDismissReasons = require('./modal-dismiss-reasons');

Object.defineProperty(exports, 'ModalDismissReasons', {
    enumerable: true,
    get: function get() {
        return _modalDismissReasons.ModalDismissReasons;
    }
});

var _core = require('@angular/core');

var _modalBackdrop = require('./modal-backdrop');

var _modalWindow = require('./modal-window');

var _modalStack = require('./modal-stack');

var NgbModalModule = function () {
    function NgbModalModule() {}
    NgbModalModule.forRoot = function () {
        return { ngModule: NgbModalModule, providers: [_modal.NgbModal, _modalStack.NgbModalStack] };
    };
    NgbModalModule.decorators = [{ type: _core.NgModule, args: [{
            declarations: [_modalBackdrop.NgbModalBackdrop, _modalWindow.NgbModalWindow],
            entryComponents: [_modalBackdrop.NgbModalBackdrop, _modalWindow.NgbModalWindow],
            providers: [_modal.NgbModal]
        }] }];
    /** @nocollapse */
    NgbModalModule.ctorParameters = function () {
        return [];
    };
    return NgbModalModule;
}();
exports.NgbModalModule = NgbModalModule;
//# sourceMappingURL=modal.module.js.map