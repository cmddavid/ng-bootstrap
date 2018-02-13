'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbRatingModule = exports.NgbRatingConfig = exports.NgbRating = undefined;

var _rating = require('./rating');

Object.defineProperty(exports, 'NgbRating', {
    enumerable: true,
    get: function get() {
        return _rating.NgbRating;
    }
});

var _ratingConfig = require('./rating-config');

Object.defineProperty(exports, 'NgbRatingConfig', {
    enumerable: true,
    get: function get() {
        return _ratingConfig.NgbRatingConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbRatingModule = function () {
    function NgbRatingModule() {}
    NgbRatingModule.forRoot = function () {
        return { ngModule: NgbRatingModule, providers: [_ratingConfig.NgbRatingConfig] };
    };
    NgbRatingModule.decorators = [{ type: _core.NgModule, args: [{ declarations: [_rating.NgbRating], exports: [_rating.NgbRating], imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbRatingModule.ctorParameters = function () {
        return [];
    };
    return NgbRatingModule;
}();
exports.NgbRatingModule = NgbRatingModule;
//# sourceMappingURL=rating.module.js.map