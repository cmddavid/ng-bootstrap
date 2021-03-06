"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTypeaheadWindowNgFactory = exports.RenderType_NgbTypeaheadWindow = undefined;
exports.View_NgbTypeaheadWindow_0 = View_NgbTypeaheadWindow_0;
exports.View_NgbTypeaheadWindow_Host_0 = View_NgbTypeaheadWindow_Host_0;

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _highlight = require("./highlight.ngfactory");

var i1 = _interopRequireWildcard(_highlight);

var _highlight2 = require("./highlight");

var i2 = _interopRequireWildcard(_highlight2);

var _common = require("@angular/common");

var i3 = _interopRequireWildcard(_common);

var _typeaheadWindow = require("./typeahead-window");

var i4 = _interopRequireWildcard(_typeaheadWindow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var styles_NgbTypeaheadWindow = []; /**
                                    * @fileoverview This file is generated by the Angular template compiler.
                                    * Do not edit.
                                    * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
                                    * tslint:disable
                                    */

var RenderType_NgbTypeaheadWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbTypeaheadWindow, data: {} });
exports.RenderType_NgbTypeaheadWindow = RenderType_NgbTypeaheadWindow;

function View_NgbTypeaheadWindow_1(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(1, 0, null, null, 1, "ngb-highlight", [], null, null, null, i1.View_NgbHighlight_0, i1.RenderType_NgbHighlight)), i0.ɵdid(2, 573440, null, 0, i2.NgbHighlight, [], { result: [0, "result"], term: [1, "term"] }, null), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) {
        var currVal_0 = _v.context.formatter(_v.context.result);var currVal_1 = _v.context.term;_ck(_v, 2, 0, currVal_0, currVal_1);
    }, null);
}
function View_NgbTypeaheadWindow_3(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null);
}
function View_NgbTypeaheadWindow_2(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(1, 0, null, null, 5, "button", [["class", "dropdown-item"], ["role", "option"], ["type", "button"]], [[8, "id", 0], [2, "active", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) {
        var ad = true;var _co = _v.component;if ("mouseenter" === en) {
            var pd_0 = _co.markActive(_v.context.index) !== false;
            ad = pd_0 && ad;
        }if ("click" === en) {
            var pd_1 = _co.select(_v.context.$implicit) !== false;
            ad = pd_1 && ad;
        }return ad;
    }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 2, null, View_NgbTypeaheadWindow_3)), i0.ɵdid(4, 540672, null, 0, i3.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), i0.ɵpod(5, { result: 0, term: 1, formatter: 2 }), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) {
        var _co = _v.component;var currVal_2 = _ck(_v, 5, 0, _v.context.$implicit, _co.term, _co.formatter);var currVal_3 = _co.resultTemplate || i0.ɵnov(_v.parent, 1);_ck(_v, 4, 0, currVal_2, currVal_3);
    }, function (_ck, _v) {
        var _co = _v.component;var currVal_0 = _co.id + "-" + _v.context.index;var currVal_1 = _v.context.index === _co.activeIdx;_ck(_v, 1, 0, currVal_0, currVal_1);
    });
}
function View_NgbTypeaheadWindow_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(0, [["rt", 2]], null, 0, null, View_NgbTypeaheadWindow_1)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTypeaheadWindow_2)), i0.ɵdid(4, 802816, null, 0, i3.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) {
        var _co = _v.component;var currVal_0 = _co.results;_ck(_v, 4, 0, currVal_0);
    }, null);
}
function View_NgbTypeaheadWindow_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-typeahead-window", [["class", "dropdown-menu"], ["role", "listbox"], ["style", "display: block"]], [[8, "id", 0]], null, null, View_NgbTypeaheadWindow_0, RenderType_NgbTypeaheadWindow)), i0.ɵdid(1, 114688, null, 0, i4.NgbTypeaheadWindow, [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, function (_ck, _v) {
        var currVal_0 = i0.ɵnov(_v, 1).id;_ck(_v, 0, 0, currVal_0);
    });
}
var NgbTypeaheadWindowNgFactory = i0.ɵccf("ngb-typeahead-window", i4.NgbTypeaheadWindow, View_NgbTypeaheadWindow_Host_0, { id: "id", focusFirst: "focusFirst", results: "results", term: "term", formatter: "formatter", resultTemplate: "resultTemplate" }, { selectEvent: "select", activeChangeEvent: "activeChange" }, []);
exports.NgbTypeaheadWindowNgFactory = NgbTypeaheadWindowNgFactory;
//# sourceMappingURL=typeahead-window.ngfactory.js.map