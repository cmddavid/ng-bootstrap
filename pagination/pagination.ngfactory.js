"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.NgbPaginationNgFactory = exports.RenderType_NgbPagination = undefined;
exports.View_NgbPagination_0 = View_NgbPagination_0;
exports.View_NgbPagination_Host_0 = View_NgbPagination_Host_0;

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _common = require("@angular/common");

var i1 = _interopRequireWildcard(_common);

var _pagination = require("./pagination");

var i2 = _interopRequireWildcard(_pagination);

var _paginationConfig = require("./pagination-config");

var i3 = _interopRequireWildcard(_paginationConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
var styles_NgbPagination = [];
var RenderType_NgbPagination = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbPagination, data: {} });
exports.RenderType_NgbPagination = RenderType_NgbPagination;

function View_NgbPagination_1(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "li", [["class", "page-item"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "a", [["aria-label", "First"], ["class", "page-link"], ["href", ""]], [[1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = !!_co.selectPage(1) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\xAB\xAB"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "]))], null, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = !_co.hasPrevious() || _co.disabled;_ck(_v, 0, 0, currVal_0);var currVal_1 = _co.hasPrevious() ? null : "-1";_ck(_v, 2, 0, currVal_1);
        });
}
function View_NgbPagination_2(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "li", [["class", "page-item"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "a", [["aria-label", "Previous"], ["class", "page-link"], ["href", ""]], [[1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = !!_co.selectPage(_co.page - 1) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\xAB"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "]))], null, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = !_co.hasPrevious() || _co.disabled;_ck(_v, 0, 0, currVal_0);var currVal_1 = _co.hasPrevious() ? null : "-1";_ck(_v, 2, 0, currVal_1);
        });
}
function View_NgbPagination_4(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "a", [["class", "page-link"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["..."]))], null, null);
}
function View_NgbPagination_6(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["(current)"]))], null, null);
}
function View_NgbPagination_5(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 4, "a", [["class", "page-link"], ["href", ""]], null, [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = !!_co.selectPage(_v.parent.context.$implicit) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), (_l()(), i0.ɵted(1, null, ["\n          ", "\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_6)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_1 = _v.parent.context.$implicit === _co.page;_ck(_v, 3, 0, currVal_1);
        }, function (_ck, _v) {
                var currVal_0 = _v.parent.context.$implicit;_ck(_v, 1, 0, currVal_0);
        });
}
function View_NgbPagination_3(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "li", [["class", "page-item"]], [[2, "active", null], [2, "disabled", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_4)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_5)), i0.ɵdid(6, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = _co.isEllipsis(_v.context.$implicit);_ck(_v, 3, 0, currVal_2);var currVal_3 = !_co.isEllipsis(_v.context.$implicit);_ck(_v, 6, 0, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _v.context.$implicit === _co.page;var currVal_1 = _co.isEllipsis(_v.context.$implicit) || _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbPagination_7(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "li", [["class", "page-item"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "a", [["aria-label", "Next"], ["class", "page-link"], ["href", ""]], [[1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = !!_co.selectPage(_co.page + 1) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\xBB"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "]))], null, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = !_co.hasNext() || _co.disabled;_ck(_v, 0, 0, currVal_0);var currVal_1 = _co.hasNext() ? null : "-1";_ck(_v, 2, 0, currVal_1);
        });
}
function View_NgbPagination_8(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "li", [["class", "page-item"]], [[2, "disabled", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(2, 0, null, null, 4, "a", [["aria-label", "Last"], ["class", "page-link"], ["href", ""]], [[1, "tabindex", 0]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = !!_co.selectPage(_co.pageCount) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(4, 0, null, null, 1, "span", [["aria-hidden", "true"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\xBB\xBB"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n      "]))], null, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = !_co.hasNext() || _co.disabled;_ck(_v, 0, 0, currVal_0);var currVal_1 = _co.hasNext() ? null : "-1";_ck(_v, 2, 0, currVal_1);
        });
}
function View_NgbPagination_0(_l) {
        return i0.ɵvid(2, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 16, "ul", [], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_1)), i0.ɵdid(4, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_2)), i0.ɵdid(7, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_3)), i0.ɵdid(10, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_7)), i0.ɵdid(13, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n\n      "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbPagination_8)), i0.ɵdid(16, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_1 = _co.boundaryLinks;_ck(_v, 4, 0, currVal_1);var currVal_2 = _co.directionLinks;_ck(_v, 7, 0, currVal_2);var currVal_3 = _co.pages;_ck(_v, 10, 0, currVal_3);var currVal_4 = _co.directionLinks;_ck(_v, 13, 0, currVal_4);var currVal_5 = _co.boundaryLinks;_ck(_v, 16, 0, currVal_5);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = "pagination" + (_co.size ? " pagination-" + _co.size : "");_ck(_v, 1, 0, currVal_0);
        });
}
function View_NgbPagination_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-pagination", [["role", "navigation"]], null, null, null, View_NgbPagination_0, RenderType_NgbPagination)), i0.ɵdid(1, 573440, null, 0, i2.NgbPagination, [i3.NgbPaginationConfig], null, null)], null, null);
}
var NgbPaginationNgFactory = i0.ɵccf("ngb-pagination", i2.NgbPagination, View_NgbPagination_Host_0, { disabled: "disabled", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", ellipses: "ellipses", rotate: "rotate", collectionSize: "collectionSize", maxSize: "maxSize", page: "page", pageSize: "pageSize", size: "size" }, { pageChange: "pageChange" }, []);
exports.NgbPaginationNgFactory = NgbPaginationNgFactory;
//# sourceMappingURL=pagination.ngfactory.js.map