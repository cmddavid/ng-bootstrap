"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbModalWindowNgFactory = exports.RenderType_NgbModalWindow = undefined;
exports.View_NgbModalWindow_0 = View_NgbModalWindow_0;
exports.View_NgbModalWindow_Host_0 = View_NgbModalWindow_Host_0;

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _modalWindow = require("./modal-window");

var i1 = _interopRequireWildcard(_modalWindow);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
var styles_NgbModalWindow = [];
var RenderType_NgbModalWindow = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbModalWindow, data: {} });
exports.RenderType_NgbModalWindow = RenderType_NgbModalWindow;
function View_NgbModalWindow_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 4, "div", [["role", "document"]], [[8, "className", 0]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(3, 0, null, null, 1, "div", [["class", "modal-content"]], null, null, null, null, null)), i0.ɵncd(null, 0), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], null, function (_ck, _v) {
        var _co = _v.component;var currVal_0 = "modal-dialog" + (_co.size ? " modal-" + _co.size : "");_ck(_v, 1, 0, currVal_0);
    });
}
function View_NgbModalWindow_Host_0(_l) {
    return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "ngb-modal-window", [["role", "dialog"], ["style", "display: block;"], ["tabindex", "-1"]], [[8, "className", 0]], [[null, "keyup.esc"], [null, "click"]], function (_v, en, $event) {
        var ad = true;if ("keyup.esc" === en) {
            var pd_0 = i0.ɵnov(_v, 1).escKey($event) !== false;
            ad = pd_0 && ad;
        }if ("click" === en) {
            var pd_1 = i0.ɵnov(_v, 1).backdropClick($event) !== false;
            ad = pd_1 && ad;
        }return ad;
    }, View_NgbModalWindow_0, RenderType_NgbModalWindow)), i0.ɵdid(1, 4440064, null, 0, i1.NgbModalWindow, [i0.ElementRef, i0.Renderer2], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, function (_ck, _v) {
        var currVal_0 = "modal fade show" + (i0.ɵnov(_v, 1).windowClass ? " " + i0.ɵnov(_v, 1).windowClass : "");_ck(_v, 0, 0, currVal_0);
    });
}
var NgbModalWindowNgFactory = i0.ɵccf("ngb-modal-window", i1.NgbModalWindow, View_NgbModalWindow_Host_0, { backdrop: "backdrop", keyboard: "keyboard", size: "size", windowClass: "windowClass" }, { dismissEvent: "dismiss" }, ["*"]);
exports.NgbModalWindowNgFactory = NgbModalWindowNgFactory;
//# sourceMappingURL=modal-window.ngfactory.js.map