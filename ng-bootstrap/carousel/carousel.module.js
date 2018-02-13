'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbCarouselModule = exports.NgbCarouselConfig = exports.NgbSlide = exports.NgbCarousel = undefined;

var _carousel = require('./carousel');

Object.defineProperty(exports, 'NgbCarousel', {
    enumerable: true,
    get: function get() {
        return _carousel.NgbCarousel;
    }
});
Object.defineProperty(exports, 'NgbSlide', {
    enumerable: true,
    get: function get() {
        return _carousel.NgbSlide;
    }
});

var _carouselConfig = require('./carousel-config');

Object.defineProperty(exports, 'NgbCarouselConfig', {
    enumerable: true,
    get: function get() {
        return _carouselConfig.NgbCarouselConfig;
    }
});

var _core = require('@angular/core');

var _common = require('@angular/common');

var NgbCarouselModule = function () {
    function NgbCarouselModule() {}
    NgbCarouselModule.forRoot = function () {
        return { ngModule: NgbCarouselModule, providers: [_carouselConfig.NgbCarouselConfig] };
    };
    NgbCarouselModule.decorators = [{ type: _core.NgModule, args: [{ declarations: _carousel.NGB_CAROUSEL_DIRECTIVES, exports: _carousel.NGB_CAROUSEL_DIRECTIVES, imports: [_common.CommonModule] }] }];
    /** @nocollapse */
    NgbCarouselModule.ctorParameters = function () {
        return [];
    };
    return NgbCarouselModule;
}();
exports.NgbCarouselModule = NgbCarouselModule;
//# sourceMappingURL=carousel.module.js.map