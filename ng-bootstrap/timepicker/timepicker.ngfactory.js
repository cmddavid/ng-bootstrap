"use strict";

Object.defineProperty(exports, "__esModule", {
        value: true
});
exports.NgbTimepickerNgFactory = exports.RenderType_NgbTimepicker = undefined;
exports.View_NgbTimepicker_0 = View_NgbTimepicker_0;
exports.View_NgbTimepicker_Host_0 = View_NgbTimepicker_Host_0;

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _common = require("@angular/common");

var i1 = _interopRequireWildcard(_common);

var _forms = require("@angular/forms");

var i2 = _interopRequireWildcard(_forms);

var _timepicker = require("./timepicker");

var i3 = _interopRequireWildcard(_timepicker);

var _timepickerConfig = require("./timepicker-config");

var i4 = _interopRequireWildcard(_timepickerConfig);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var styles_NgbTimepicker = [".ngb-tp[_ngcontent-%COMP%] {\n      display: flex;\n      align-items: center;\n    }\n\n    .ngb-tp-hour[_ngcontent-%COMP%], .ngb-tp-minute[_ngcontent-%COMP%], .ngb-tp-second[_ngcontent-%COMP%], .ngb-tp-meridian[_ngcontent-%COMP%] {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: space-around;\n    }\n\n    .ngb-tp-spacer[_ngcontent-%COMP%] {\n      width: 1em;\n      text-align: center;\n    }\n\n    .chevron[_ngcontent-%COMP%]::before {\n      border-style: solid;\n      border-width: 0.29em 0.29em 0 0;\n      content: '';\n      display: inline-block;\n      height: 0.69em;\n      left: 0.05em;\n      position: relative;\n      top: 0.15em;\n      transform: rotate(-45deg);\n      -webkit-transform: rotate(-45deg);\n      -ms-transform: rotate(-45deg);\n      vertical-align: middle;\n      width: 0.71em;\n    }\n\n    .chevron.bottom[_ngcontent-%COMP%]:before {\n      top: -.3em;\n      -webkit-transform: rotate(135deg);\n      -ms-transform: rotate(135deg);\n      transform: rotate(135deg);\n    }\n\n    input[_ngcontent-%COMP%] {\n      text-align: center;\n      display: inline-block;\n      width: auto;\n    }"]; /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @fileoverview This file is generated by the Angular template compiler.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * Do not edit.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         * tslint:disable
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         */

var RenderType_NgbTimepicker = i0.ɵcrt({ encapsulation: 0, styles: styles_NgbTimepicker, data: {} });
exports.RenderType_NgbTimepicker = RenderType_NgbTimepicker;

function View_NgbTimepicker_1(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "button", [["class", "btn btn-link"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.changeHour(_co.hourStep) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Increment hours"])), (_l()(), i0.ɵted(-1, null, ["\n          "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-link";var currVal_3 = _co.setButtonSize();_ck(_v, 1, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbTimepicker_2(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "button", [["class", "btn btn-link"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.changeHour(0 - _co.hourStep) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "chevron bottom"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Decrement hours"])), (_l()(), i0.ɵted(-1, null, ["\n          "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-link";var currVal_3 = _co.setButtonSize();_ck(_v, 1, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbTimepicker_3(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "button", [["class", "btn btn-link"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.changeMinute(_co.minuteStep) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Increment minutes"])), (_l()(), i0.ɵted(-1, null, ["\n          "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-link";var currVal_3 = _co.setButtonSize();_ck(_v, 1, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbTimepicker_4(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "button", [["class", "btn btn-link"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.changeMinute(0 - _co.minuteStep) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "chevron bottom"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Decrement minutes"])), (_l()(), i0.ɵted(-1, null, ["\n          "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-link";var currVal_3 = _co.setButtonSize();_ck(_v, 1, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbTimepicker_5(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 1, "div", [["class", "ngb-tp-spacer"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [":"]))], null, null);
}
function View_NgbTimepicker_7(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "button", [["class", "btn btn-link"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.changeSecond(_co.secondStep) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "chevron"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Increment seconds"])), (_l()(), i0.ɵted(-1, null, ["\n          "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-link";var currVal_3 = _co.setButtonSize();_ck(_v, 1, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbTimepicker_8(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 7, "button", [["class", "btn btn-link"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.changeSecond(0 - _co.secondStep) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(1, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(3, 0, null, null, 0, "span", [["class", "chevron bottom"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n            "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["Decrement seconds"])), (_l()(), i0.ɵted(-1, null, ["\n          "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-link";var currVal_3 = _co.setButtonSize();_ck(_v, 1, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 0, 0, currVal_0, currVal_1);
        });
}
function View_NgbTimepicker_6(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 10, "div", [["class", "ngb-tp-second"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_7)), i0.ɵdid(3, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(5, 0, null, null, 1, "input", [["aria-label", "Seconds"], ["class", "form-control"], ["maxlength", "2"], ["placeholder", "SS"], ["size", "2"], ["type", "text"]], [[8, "value", 0], [8, "readOnly", 0], [8, "disabled", 0]], [[null, "change"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("change" === en) {
                        var pd_0 = _co.updateSecond($event.target.value) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(6, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_8)), i0.ɵdid(9, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.spinners;_ck(_v, 3, 0, currVal_0);var currVal_4 = "form-control";var currVal_5 = _co.setFormControlSize();_ck(_v, 6, 0, currVal_4, currVal_5);var currVal_6 = _co.spinners;_ck(_v, 9, 0, currVal_6);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_1 = _co.formatMinSec(_co.model == null ? null : _co.model.second);var currVal_2 = _co.readonlyInputs;var currVal_3 = _co.disabled;_ck(_v, 5, 0, currVal_1, currVal_2, currVal_3);
        });
}
function View_NgbTimepicker_9(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 0, "div", [["class", "ngb-tp-spacer"]], null, null, null, null, null))], null, null);
}
function View_NgbTimepicker_10(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 5, "div", [["class", "ngb-tp-meridian"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(2, 0, null, null, 2, "button", [["class", "btn btn-outline-primary"], ["type", "button"]], [[8, "disabled", 0], [2, "disabled", null]], [[null, "click"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("click" === en) {
                        var pd_0 = _co.toggleMeridian() !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(3, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(4, null, ["", ""])), (_l()(), i0.ɵted(-1, null, ["\n        "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = "btn btn-outline-primary";var currVal_3 = _co.setButtonSize();_ck(_v, 3, 0, currVal_2, currVal_3);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 2, 0, currVal_0, currVal_1);var currVal_4 = (_co.model == null ? null : _co.model.hour) >= 12 ? "PM" : "AM";_ck(_v, 4, 0, currVal_4);
        });
}
function View_NgbTimepicker_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵeld(1, 0, null, null, 43, "fieldset", [], [[8, "disabled", 0], [2, "disabled", null]], null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(3, 0, null, null, 40, "div", [["class", "ngb-tp"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(5, 0, null, null, 10, "div", [["class", "ngb-tp-hour"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_1)), i0.ɵdid(8, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(10, 0, null, null, 1, "input", [["aria-label", "Hours"], ["class", "form-control"], ["maxlength", "2"], ["placeholder", "HH"], ["size", "2"], ["type", "text"]], [[8, "value", 0], [8, "readOnly", 0], [8, "disabled", 0]], [[null, "change"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("change" === en) {
                        var pd_0 = _co.updateHour($event.target.value) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(11, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_2)), i0.ɵdid(14, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(17, 0, null, null, 1, "div", [["class", "ngb-tp-spacer"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, [":"])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵeld(20, 0, null, null, 10, "div", [["class", "ngb-tp-minute"]], null, null, null, null, null)), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_3)), i0.ɵdid(23, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵeld(25, 0, null, null, 1, "input", [["aria-label", "Minutes"], ["class", "form-control"], ["maxlength", "2"], ["placeholder", "MM"], ["size", "2"], ["type", "text"]], [[8, "value", 0], [8, "readOnly", 0], [8, "disabled", 0]], [[null, "change"]], function (_v, en, $event) {
                var ad = true;var _co = _v.component;if ("change" === en) {
                        var pd_0 = _co.updateMinute($event.target.value) !== false;
                        ad = pd_0 && ad;
                }return ad;
        }, null, null)), i0.ɵdid(26, 278528, null, 0, i1.NgClass, [i0.IterableDiffers, i0.KeyValueDiffers, i0.ElementRef, i0.Renderer2], { klass: [0, "klass"], ngClass: [1, "ngClass"] }, null), (_l()(), i0.ɵted(-1, null, ["\n          "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_4)), i0.ɵdid(29, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_5)), i0.ɵdid(33, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_6)), i0.ɵdid(36, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_9)), i0.ɵdid(39, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbTimepicker_10)), i0.ɵdid(42, 16384, null, 0, i1.NgIf, [i0.ViewContainerRef, i0.TemplateRef], { ngIf: [0, "ngIf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) {
                var _co = _v.component;var currVal_2 = _co.spinners;_ck(_v, 8, 0, currVal_2);var currVal_6 = "form-control";var currVal_7 = _co.setFormControlSize();_ck(_v, 11, 0, currVal_6, currVal_7);var currVal_8 = _co.spinners;_ck(_v, 14, 0, currVal_8);var currVal_9 = _co.spinners;_ck(_v, 23, 0, currVal_9);var currVal_13 = "form-control";var currVal_14 = _co.setFormControlSize();_ck(_v, 26, 0, currVal_13, currVal_14);var currVal_15 = _co.spinners;_ck(_v, 29, 0, currVal_15);var currVal_16 = _co.seconds;_ck(_v, 33, 0, currVal_16);var currVal_17 = _co.seconds;_ck(_v, 36, 0, currVal_17);var currVal_18 = _co.meridian;_ck(_v, 39, 0, currVal_18);var currVal_19 = _co.meridian;_ck(_v, 42, 0, currVal_19);
        }, function (_ck, _v) {
                var _co = _v.component;var currVal_0 = _co.disabled;var currVal_1 = _co.disabled;_ck(_v, 1, 0, currVal_0, currVal_1);var currVal_3 = _co.formatHour(_co.model == null ? null : _co.model.hour);var currVal_4 = _co.readonlyInputs;var currVal_5 = _co.disabled;_ck(_v, 10, 0, currVal_3, currVal_4, currVal_5);var currVal_10 = _co.formatMinSec(_co.model == null ? null : _co.model.minute);var currVal_11 = _co.readonlyInputs;var currVal_12 = _co.disabled;_ck(_v, 25, 0, currVal_10, currVal_11, currVal_12);
        });
}
function View_NgbTimepicker_Host_0(_l) {
        return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 2, "ngb-timepicker", [], null, null, null, View_NgbTimepicker_0, RenderType_NgbTimepicker)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) {
                return [p0_0];
        }, [i3.NgbTimepicker]), i0.ɵdid(2, 573440, null, 0, i3.NgbTimepicker, [i4.NgbTimepickerConfig], null, null)], null, null);
}
var NgbTimepickerNgFactory = i0.ɵccf("ngb-timepicker", i3.NgbTimepicker, View_NgbTimepicker_Host_0, { meridian: "meridian", spinners: "spinners", seconds: "seconds", hourStep: "hourStep", minuteStep: "minuteStep", secondStep: "secondStep", readonlyInputs: "readonlyInputs", size: "size" }, {}, []);
exports.NgbTimepickerNgFactory = NgbTimepickerNgFactory;
//# sourceMappingURL=timepicker.ngfactory.js.map