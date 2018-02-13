"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NgbModuleNgFactory = exports.NgbRootModuleNgFactory = undefined;

var _core = require("@angular/core");

var i0 = _interopRequireWildcard(_core);

var _index = require("./index");

var i1 = _interopRequireWildcard(_index);

var _alert = require("./alert/alert.ngfactory");

var i2 = _interopRequireWildcard(_alert);

var _tooltip = require("./tooltip/tooltip.ngfactory");

var i3 = _interopRequireWildcard(_tooltip);

var _typeaheadWindow = require("./typeahead/typeahead-window.ngfactory");

var i4 = _interopRequireWildcard(_typeaheadWindow);

var _datepicker = require("./datepicker/datepicker.ngfactory");

var i5 = _interopRequireWildcard(_datepicker);

var _modalBackdrop = require("./modal/modal-backdrop.ngfactory");

var i6 = _interopRequireWildcard(_modalBackdrop);

var _modalWindow = require("./modal/modal-window.ngfactory");

var i7 = _interopRequireWildcard(_modalWindow);

var _popover = require("./popover/popover.ngfactory");

var i8 = _interopRequireWildcard(_popover);

var _common = require("@angular/common");

var i9 = _interopRequireWildcard(_common);

var _forms = require("@angular/forms");

var i10 = _interopRequireWildcard(_forms);

var _modalStack = require("./modal/modal-stack");

var i11 = _interopRequireWildcard(_modalStack);

var _modal = require("./modal/modal");

var i12 = _interopRequireWildcard(_modal);

var _alertConfig = require("./alert/alert-config");

var i13 = _interopRequireWildcard(_alertConfig);

var _progressbarConfig = require("./progressbar/progressbar-config");

var i14 = _interopRequireWildcard(_progressbarConfig);

var _tooltipConfig = require("./tooltip/tooltip-config");

var i15 = _interopRequireWildcard(_tooltipConfig);

var _typeaheadConfig = require("./typeahead/typeahead-config");

var i16 = _interopRequireWildcard(_typeaheadConfig);

var _accordionConfig = require("./accordion/accordion-config");

var i17 = _interopRequireWildcard(_accordionConfig);

var _carouselConfig = require("./carousel/carousel-config");

var i18 = _interopRequireWildcard(_carouselConfig);

var _ngbCalendar = require("./datepicker/ngb-calendar");

var i19 = _interopRequireWildcard(_ngbCalendar);

var _datepickerI18n = require("./datepicker/datepicker-i18n");

var i20 = _interopRequireWildcard(_datepickerI18n);

var _ngbDateParserFormatter = require("./datepicker/ngb-date-parser-formatter");

var i21 = _interopRequireWildcard(_ngbDateParserFormatter);

var _ngbDateAdapter = require("./datepicker/ngb-date-adapter");

var i22 = _interopRequireWildcard(_ngbDateAdapter);

var _datepickerConfig = require("./datepicker/datepicker-config");

var i23 = _interopRequireWildcard(_datepickerConfig);

var _dropdownConfig = require("./dropdown/dropdown-config");

var i24 = _interopRequireWildcard(_dropdownConfig);

var _paginationConfig = require("./pagination/pagination-config");

var i25 = _interopRequireWildcard(_paginationConfig);

var _popoverConfig = require("./popover/popover-config");

var i26 = _interopRequireWildcard(_popoverConfig);

var _ratingConfig = require("./rating/rating-config");

var i27 = _interopRequireWildcard(_ratingConfig);

var _tabsetConfig = require("./tabset/tabset-config");

var i28 = _interopRequireWildcard(_tabsetConfig);

var _timepickerConfig = require("./timepicker/timepicker-config");

var i29 = _interopRequireWildcard(_timepickerConfig);

var _alert2 = require("./alert/alert.module");

var i30 = _interopRequireWildcard(_alert2);

var _buttons = require("./buttons/buttons.module");

var i31 = _interopRequireWildcard(_buttons);

var _collapse = require("./collapse/collapse.module");

var i32 = _interopRequireWildcard(_collapse);

var _progressbar = require("./progressbar/progressbar.module");

var i33 = _interopRequireWildcard(_progressbar);

var _tooltip2 = require("./tooltip/tooltip.module");

var i34 = _interopRequireWildcard(_tooltip2);

var _typeahead = require("./typeahead/typeahead.module");

var i35 = _interopRequireWildcard(_typeahead);

var _accordion = require("./accordion/accordion.module");

var i36 = _interopRequireWildcard(_accordion);

var _carousel = require("./carousel/carousel.module");

var i37 = _interopRequireWildcard(_carousel);

var _datepicker2 = require("./datepicker/datepicker.module");

var i38 = _interopRequireWildcard(_datepicker2);

var _dropdown = require("./dropdown/dropdown.module");

var i39 = _interopRequireWildcard(_dropdown);

var _modal2 = require("./modal/modal.module");

var i40 = _interopRequireWildcard(_modal2);

var _pagination = require("./pagination/pagination.module");

var i41 = _interopRequireWildcard(_pagination);

var _popover2 = require("./popover/popover.module");

var i42 = _interopRequireWildcard(_popover2);

var _rating = require("./rating/rating.module");

var i43 = _interopRequireWildcard(_rating);

var _tabset = require("./tabset/tabset.module");

var i44 = _interopRequireWildcard(_tabset);

var _timepicker = require("./timepicker/timepicker.module");

var i45 = _interopRequireWildcard(_timepicker);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/
var NgbRootModuleNgFactory = i0.ɵcmf(i1.NgbRootModule, [], function (_l) {
  return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.NgbAlertNgFactory, i3.NgbTooltipWindowNgFactory, i4.NgbTypeaheadWindowNgFactory, i5.NgbDatepickerNgFactory, i6.NgbModalBackdropNgFactory, i7.NgbModalWindowNgFactory, i8.NgbPopoverWindowNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i9.NgLocalization, i9.NgLocaleLocalization, [i0.LOCALE_ID, [2, i9.ɵa]]), i0.ɵmpd(4608, i10.ɵi, i10.ɵi, []), i0.ɵmpd(4608, i11.NgbModalStack, i11.NgbModalStack, [i0.ApplicationRef, i0.Injector, i0.ComponentFactoryResolver]), i0.ɵmpd(4608, i12.NgbModal, i12.NgbModal, [i0.ComponentFactoryResolver, i0.Injector, i11.NgbModalStack]), i0.ɵmpd(4608, i13.NgbAlertConfig, i13.NgbAlertConfig, []), i0.ɵmpd(4608, i14.NgbProgressbarConfig, i14.NgbProgressbarConfig, []), i0.ɵmpd(4608, i15.NgbTooltipConfig, i15.NgbTooltipConfig, []), i0.ɵmpd(4608, i16.NgbTypeaheadConfig, i16.NgbTypeaheadConfig, []), i0.ɵmpd(4608, i17.NgbAccordionConfig, i17.NgbAccordionConfig, []), i0.ɵmpd(4608, i18.NgbCarouselConfig, i18.NgbCarouselConfig, []), i0.ɵmpd(4608, i19.NgbCalendar, i19.NgbCalendarGregorian, []), i0.ɵmpd(4608, i20.NgbDatepickerI18n, i20.NgbDatepickerI18nDefault, []), i0.ɵmpd(4608, i21.NgbDateParserFormatter, i21.NgbDateISOParserFormatter, []), i0.ɵmpd(4608, i22.NgbDateAdapter, i22.NgbDateStructAdapter, []), i0.ɵmpd(4608, i23.NgbDatepickerConfig, i23.NgbDatepickerConfig, []), i0.ɵmpd(4608, i24.NgbDropdownConfig, i24.NgbDropdownConfig, []), i0.ɵmpd(4608, i25.NgbPaginationConfig, i25.NgbPaginationConfig, []), i0.ɵmpd(4608, i26.NgbPopoverConfig, i26.NgbPopoverConfig, []), i0.ɵmpd(4608, i27.NgbRatingConfig, i27.NgbRatingConfig, []), i0.ɵmpd(4608, i28.NgbTabsetConfig, i28.NgbTabsetConfig, []), i0.ɵmpd(4608, i29.NgbTimepickerConfig, i29.NgbTimepickerConfig, []), i0.ɵmpd(512, i9.CommonModule, i9.CommonModule, []), i0.ɵmpd(512, i30.NgbAlertModule, i30.NgbAlertModule, []), i0.ɵmpd(512, i31.NgbButtonsModule, i31.NgbButtonsModule, []), i0.ɵmpd(512, i32.NgbCollapseModule, i32.NgbCollapseModule, []), i0.ɵmpd(512, i33.NgbProgressbarModule, i33.NgbProgressbarModule, []), i0.ɵmpd(512, i34.NgbTooltipModule, i34.NgbTooltipModule, []), i0.ɵmpd(512, i35.NgbTypeaheadModule, i35.NgbTypeaheadModule, []), i0.ɵmpd(512, i36.NgbAccordionModule, i36.NgbAccordionModule, []), i0.ɵmpd(512, i37.NgbCarouselModule, i37.NgbCarouselModule, []), i0.ɵmpd(512, i10.ɵba, i10.ɵba, []), i0.ɵmpd(512, i10.FormsModule, i10.FormsModule, []), i0.ɵmpd(512, i38.NgbDatepickerModule, i38.NgbDatepickerModule, []), i0.ɵmpd(512, i39.NgbDropdownModule, i39.NgbDropdownModule, []), i0.ɵmpd(512, i40.NgbModalModule, i40.NgbModalModule, []), i0.ɵmpd(512, i41.NgbPaginationModule, i41.NgbPaginationModule, []), i0.ɵmpd(512, i42.NgbPopoverModule, i42.NgbPopoverModule, []), i0.ɵmpd(512, i43.NgbRatingModule, i43.NgbRatingModule, []), i0.ɵmpd(512, i44.NgbTabsetModule, i44.NgbTabsetModule, []), i0.ɵmpd(512, i45.NgbTimepickerModule, i45.NgbTimepickerModule, []), i0.ɵmpd(512, i1.NgbRootModule, i1.NgbRootModule, [])]);
});
exports.NgbRootModuleNgFactory = NgbRootModuleNgFactory;

var NgbModuleNgFactory = i0.ɵcmf(i1.NgbModule, [], function (_l) {
  return i0.ɵmod([i0.ɵmpd(512, i0.ComponentFactoryResolver, i0.ɵCodegenComponentFactoryResolver, [[8, [i2.NgbAlertNgFactory, i5.NgbDatepickerNgFactory, i6.NgbModalBackdropNgFactory, i7.NgbModalWindowNgFactory, i8.NgbPopoverWindowNgFactory, i3.NgbTooltipWindowNgFactory, i4.NgbTypeaheadWindowNgFactory]], [3, i0.ComponentFactoryResolver], i0.NgModuleRef]), i0.ɵmpd(4608, i9.NgLocalization, i9.NgLocaleLocalization, [i0.LOCALE_ID, [2, i9.ɵa]]), i0.ɵmpd(4608, i10.ɵi, i10.ɵi, []), i0.ɵmpd(4608, i12.NgbModal, i12.NgbModal, [i0.ComponentFactoryResolver, i0.Injector, i11.NgbModalStack]), i0.ɵmpd(512, i9.CommonModule, i9.CommonModule, []), i0.ɵmpd(512, i36.NgbAccordionModule, i36.NgbAccordionModule, []), i0.ɵmpd(512, i30.NgbAlertModule, i30.NgbAlertModule, []), i0.ɵmpd(512, i31.NgbButtonsModule, i31.NgbButtonsModule, []), i0.ɵmpd(512, i37.NgbCarouselModule, i37.NgbCarouselModule, []), i0.ɵmpd(512, i32.NgbCollapseModule, i32.NgbCollapseModule, []), i0.ɵmpd(512, i10.ɵba, i10.ɵba, []), i0.ɵmpd(512, i10.FormsModule, i10.FormsModule, []), i0.ɵmpd(512, i38.NgbDatepickerModule, i38.NgbDatepickerModule, []), i0.ɵmpd(512, i39.NgbDropdownModule, i39.NgbDropdownModule, []), i0.ɵmpd(512, i40.NgbModalModule, i40.NgbModalModule, []), i0.ɵmpd(512, i41.NgbPaginationModule, i41.NgbPaginationModule, []), i0.ɵmpd(512, i42.NgbPopoverModule, i42.NgbPopoverModule, []), i0.ɵmpd(512, i33.NgbProgressbarModule, i33.NgbProgressbarModule, []), i0.ɵmpd(512, i43.NgbRatingModule, i43.NgbRatingModule, []), i0.ɵmpd(512, i44.NgbTabsetModule, i44.NgbTabsetModule, []), i0.ɵmpd(512, i45.NgbTimepickerModule, i45.NgbTimepickerModule, []), i0.ɵmpd(512, i34.NgbTooltipModule, i34.NgbTooltipModule, []), i0.ɵmpd(512, i35.NgbTypeaheadModule, i35.NgbTypeaheadModule, []), i0.ɵmpd(512, i1.NgbModule, i1.NgbModule, [])]);
});
exports.NgbModuleNgFactory = NgbModuleNgFactory;
//# sourceMappingURL=index.ngfactory.js.map