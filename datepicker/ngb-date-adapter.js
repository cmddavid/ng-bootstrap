'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDateStructAdapter = exports.NgbDateAdapter = undefined;

var _core = require('@angular/core');

var __extends = undefined && undefined.__extends || function () {
    var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (d, b) {
        d.__proto__ = b;
    } || function (d, b) {
        for (var p in b) {
            if (b.hasOwnProperty(p)) d[p] = b[p];
        }
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();

/**
 * Abstract type serving as a DI token for the service converting from your application Date model to internal
 * NgbDateStruct model.
 * A default implementation converting from and to NgbDateStruct is provided for retro-compatibility,
 * but you can provide another implementation to use an alternative format, ie for using with native Date Object.
 */
var NgbDateAdapter = function () {
    function NgbDateAdapter() {}
    NgbDateAdapter.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbDateAdapter.ctorParameters = function () {
        return [];
    };
    return NgbDateAdapter;
}();
exports.NgbDateAdapter = NgbDateAdapter;

var NgbDateStructAdapter = function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.fromModel = /**
                                               * Converts a NgbDateStruct value into NgbDateStruct value
                                               * @param  {NgbDateStruct} value
                                               * @return {NgbDateStruct}
                                               */
    function (date) {
        return date && date.year && date.month && date.day ? { year: date.year, month: date.month, day: date.day } : null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     * @param  {NgbDateStruct} value
     * @return {NgbDateStruct}
     */
    /**
       * Converts a NgbDateStruct value into NgbDateStruct value
       * @param  {NgbDateStruct} value
       * @return {NgbDateStruct}
       */
    NgbDateStructAdapter.prototype.toModel = /**
                                             * Converts a NgbDateStruct value into NgbDateStruct value
                                             * @param  {NgbDateStruct} value
                                             * @return {NgbDateStruct}
                                             */
    function (date) {
        return date && date.year && date.month && date.day ? { year: date.year, month: date.month, day: date.day } : null;
    };
    NgbDateStructAdapter.decorators = [{ type: _core.Injectable }];
    /** @nocollapse */
    NgbDateStructAdapter.ctorParameters = function () {
        return [];
    };
    return NgbDateStructAdapter;
}(NgbDateAdapter);
exports.NgbDateStructAdapter = NgbDateStructAdapter;
//# sourceMappingURL=ngb-date-adapter.js.map