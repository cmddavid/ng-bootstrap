"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
var /**
    * A reference to an active (currently opened) modal. Instances of this class
    * can be injected into components passed as modal content.
    */
NgbActiveModal = function () {
    function NgbActiveModal() {}
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbActiveModal.prototype.close = /**
                                     * Can be used to close a modal, passing an optional result.
                                     */
    function (result) {};
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbActiveModal.prototype.dismiss = /**
                                       * Can be used to dismiss a modal, passing an optional reason.
                                       */
    function (reason) {};
    return NgbActiveModal;
}();
/**
 * A reference to an active (currently opened) modal. Instances of this class
 * can be injected into components passed as modal content.
 */
exports.NgbActiveModal = NgbActiveModal;
/**
 * A reference to a newly opened modal.
 */

var /**
    * A reference to a newly opened modal.
    */
NgbModalRef = function () {
    function NgbModalRef(_windowCmptRef, _contentRef, _backdropCmptRef, _beforeDismiss) {
        var _this = this;
        this._windowCmptRef = _windowCmptRef;
        this._contentRef = _contentRef;
        this._backdropCmptRef = _backdropCmptRef;
        this._beforeDismiss = _beforeDismiss;
        _windowCmptRef.instance.dismissEvent.subscribe(function (reason) {
            _this.dismiss(reason);
        });
        this.result = new Promise(function (resolve, reject) {
            _this._resolve = resolve;
            _this._reject = reject;
        });
        this.result.then(null, function () {});
    }
    Object.defineProperty(NgbModalRef.prototype, "componentInstance", {
        /**
         * The instance of component used as modal's content.
         * Undefined when a TemplateRef is used as modal's content.
         */
        get: /**
             * The instance of component used as modal's content.
             * Undefined when a TemplateRef is used as modal's content.
             */
        function get() {
            if (this._contentRef.componentRef) {
                return this._contentRef.componentRef.instance;
            }
        },
        // only needed to keep TS1.8 compatibility
        set:
        // only needed to keep TS1.8 compatibility
        function set(instance) {},
        enumerable: true,
        configurable: true
    });
    /**
     * Can be used to close a modal, passing an optional result.
     */
    /**
       * Can be used to close a modal, passing an optional result.
       */
    NgbModalRef.prototype.close = /**
                                  * Can be used to close a modal, passing an optional result.
                                  */
    function (result) {
        if (this._windowCmptRef) {
            this._resolve(result);
            this._removeModalElements();
        }
    };
    /**
     * Can be used to dismiss a modal, passing an optional reason.
     */
    /**
       * Can be used to dismiss a modal, passing an optional reason.
       */
    NgbModalRef.prototype.dismiss = /**
                                    * Can be used to dismiss a modal, passing an optional reason.
                                    */
    function (reason) {
        if (this._windowCmptRef) {
            if (!this._beforeDismiss || this._beforeDismiss() !== false) {
                this._reject(reason);
                this._removeModalElements();
            }
        }
    };
    NgbModalRef.prototype._removeModalElements = function () {
        var windowNativeEl = this._windowCmptRef.location.nativeElement;
        windowNativeEl.parentNode.removeChild(windowNativeEl);
        this._windowCmptRef.destroy();
        if (this._backdropCmptRef) {
            var backdropNativeEl = this._backdropCmptRef.location.nativeElement;
            backdropNativeEl.parentNode.removeChild(backdropNativeEl);
            this._backdropCmptRef.destroy();
        }
        if (this._contentRef && this._contentRef.viewRef) {
            this._contentRef.viewRef.destroy();
        }
        this._windowCmptRef = null;
        this._backdropCmptRef = null;
        this._contentRef = null;
    };
    return NgbModalRef;
}();
/**
 * A reference to a newly opened modal.
 */
exports.NgbModalRef = NgbModalRef;
//# sourceMappingURL=modal-ref.js.map