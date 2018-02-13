'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbInputDatepicker = undefined;

var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _ngbDate = require('./ngb-date');

var _datepicker = require('./datepicker');

var _ngbDateParserFormatter = require('./ngb-date-parser-formatter');

var _positioning = require('../util/positioning');

var _ngbDateAdapter2 = require('./ngb-date-adapter');

var _ngbCalendar = require('./ngb-calendar');

var _datepickerService = require('./datepicker-service');

var NGB_DATEPICKER_VALUE_ACCESSOR = {
    provide: _forms.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return NgbInputDatepicker;
    }),
    multi: true
};
var NGB_DATEPICKER_VALIDATOR = {
    provide: _forms.NG_VALIDATORS,
    useExisting: (0, _core.forwardRef)(function () {
        return NgbInputDatepicker;
    }),
    multi: true
};
/**
 * A directive that makes it possible to have datepickers on input fields.
 * Manages integration with the input field itself (data entry) and ngModel (validation etc.).
 */
var NgbInputDatepicker = function () {
    function NgbInputDatepicker(_parserFormatter, _elRef, _vcRef, _renderer, _cfr, ngZone, _service, _calendar, _ngbDateAdapter) {
        var _this = this;
        this._parserFormatter = _parserFormatter;
        this._elRef = _elRef;
        this._vcRef = _vcRef;
        this._renderer = _renderer;
        this._cfr = _cfr;
        this._service = _service;
        this._calendar = _calendar;
        this._ngbDateAdapter = _ngbDateAdapter;
        this._cRef = null;
        this._disabled = false;
        /**
              * Placement of a datepicker popup accepts:
              *    "top", "top-left", "top-right", "bottom", "bottom-left", "bottom-right",
              *    "left", "left-top", "left-bottom", "right", "right-top", "right-bottom"
              * and array of above values.
              */
        this.placement = 'bottom-left';
        /**
           * An event fired when navigation happens and currently displayed month changes.
           * See NgbDatepickerNavigateEvent for the payload info.
           */
        this.navigate = new _core.EventEmitter();
        this._onChange = function (_) {};
        this._onTouched = function () {};
        this._validatorChange = function () {};
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._cRef) {
                (0, _positioning.positionElements)(_this._elRef.nativeElement, _this._cRef.location.nativeElement, _this.placement, _this.container === 'body');
            }
        });
    }
    Object.defineProperty(NgbInputDatepicker.prototype, "disabled", {
        get: function get() {
            return this._disabled;
        },
        set: function set(value) {
            this._disabled = value === '' || value && value !== 'false';
            if (this.isOpen()) {
                this._cRef.instance.setDisabledState(this._disabled);
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbInputDatepicker.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    NgbInputDatepicker.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    NgbInputDatepicker.prototype.registerOnValidatorChange = function (fn) {
        this._validatorChange = fn;
    };
    ;
    NgbInputDatepicker.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgbInputDatepicker.prototype.validate = function (c) {
        var value = c.value;
        if (value === null || value === undefined) {
            return null;
        }
        var ngbDate = this._fromDateStruct(this._ngbDateAdapter.fromModel(value));
        if (!this._calendar.isValid(ngbDate)) {
            return { 'ngbDate': { invalid: c.value } };
        }
        if (this.minDate && ngbDate.before(_ngbDate.NgbDate.from(this.minDate))) {
            return { 'ngbDate': { requiredBefore: this.minDate } };
        }
        if (this.maxDate && ngbDate.after(_ngbDate.NgbDate.from(this.maxDate))) {
            return { 'ngbDate': { requiredAfter: this.maxDate } };
        }
    };
    NgbInputDatepicker.prototype.writeValue = function (value) {
        this._model = this._fromDateStruct(this._ngbDateAdapter.fromModel(value));
        this._writeModelValue(this._model);
    };
    NgbInputDatepicker.prototype.manualDateChange = function (value, updateView) {
        if (updateView === void 0) {
            updateView = false;
        }
        this._model = this._fromDateStruct(this._parserFormatter.parse(value));
        this._onChange(this._model ? this._ngbDateAdapter.toModel(this._model) : value === '' ? null : value);
        if (updateView && this._model) {
            this._writeModelValue(this._model);
        }
    };
    NgbInputDatepicker.prototype.isOpen = function () {
        return !!this._cRef;
    };
    /**
     * Opens the datepicker with the selected date indicated by the ngModel value.
     */
    /**
       * Opens the datepicker with the selected date indicated by the ngModel value.
       */
    NgbInputDatepicker.prototype.open = /**
                                        * Opens the datepicker with the selected date indicated by the ngModel value.
                                        */
    function () {
        var _this = this;
        if (!this.isOpen()) {
            var cf = this._cfr.resolveComponentFactory(_datepicker.NgbDatepicker);
            this._cRef = this._vcRef.createComponent(cf);
            this._applyPopupStyling(this._cRef.location.nativeElement);
            this._applyDatepickerInputs(this._cRef.instance);
            this._subscribeForDatepickerOutputs(this._cRef.instance);
            this._cRef.instance.ngOnInit();
            this._cRef.instance.writeValue(this._ngbDateAdapter.toModel(this._model));
            // date selection event handling
            this._cRef.instance.registerOnChange(function (selectedDate) {
                _this.writeValue(selectedDate);
                _this._onChange(selectedDate);
                _this.close();
            });
            // focus handling
            this._cRef.instance.focus();
            this._cRef.instance.setDisabledState(this.disabled);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._cRef.location.nativeElement);
            }
        }
    };
    /**
     * Closes the datepicker popup.
     */
    /**
       * Closes the datepicker popup.
       */
    NgbInputDatepicker.prototype.close = /**
                                         * Closes the datepicker popup.
                                         */
    function () {
        if (this.isOpen()) {
            this._vcRef.remove(this._vcRef.indexOf(this._cRef.hostView));
            this._cRef = null;
        }
    };
    /**
     * Toggles the datepicker popup (opens when closed and closes when opened).
     */
    /**
       * Toggles the datepicker popup (opens when closed and closes when opened).
       */
    NgbInputDatepicker.prototype.toggle = /**
                                          * Toggles the datepicker popup (opens when closed and closes when opened).
                                          */
    function () {
        if (this.isOpen()) {
            this.close();
        } else {
            this.open();
        }
    };
    /**
     * Navigates current view to provided date.
     * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
     * If nothing or invalid date provided calendar will open current month.
     * Use 'startDate' input as an alternative
     */
    /**
       * Navigates current view to provided date.
       * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
       * If nothing or invalid date provided calendar will open current month.
       * Use 'startDate' input as an alternative
       */
    NgbInputDatepicker.prototype.navigateTo = /**
                                              * Navigates current view to provided date.
                                              * With default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
                                              * If nothing or invalid date provided calendar will open current month.
                                              * Use 'startDate' input as an alternative
                                              */
    function (date) {
        if (this.isOpen()) {
            this._cRef.instance.navigateTo(date);
        }
    };
    NgbInputDatepicker.prototype.onBlur = function () {
        this._onTouched();
    };
    NgbInputDatepicker.prototype.ngOnChanges = function (changes) {
        if (changes['minDate'] || changes['maxDate']) {
            this._validatorChange();
        }
    };
    NgbInputDatepicker.prototype.ngOnDestroy = function () {
        this.close();
        this._zoneSubscription.unsubscribe();
    };
    NgbInputDatepicker.prototype._applyDatepickerInputs = function (datepickerInstance) {
        var _this = this;
        ['dayTemplate', 'displayMonths', 'firstDayOfWeek', 'markDisabled', 'minDate', 'maxDate', 'navigation', 'outsideDays', 'showNavigation', 'showWeekdays', 'showWeekNumbers'].forEach(function (optionName) {
            if (_this[optionName] !== undefined) {
                datepickerInstance[optionName] = _this[optionName];
            }
        });
        datepickerInstance.startDate = this.startDate || this._model;
    };
    NgbInputDatepicker.prototype._applyPopupStyling = function (nativeElement) {
        this._renderer.addClass(nativeElement, 'dropdown-menu');
        this._renderer.setStyle(nativeElement, 'padding', '0');
    };
    NgbInputDatepicker.prototype._subscribeForDatepickerOutputs = function (datepickerInstance) {
        var _this = this;
        datepickerInstance.navigate.subscribe(function (date) {
            return _this.navigate.emit(date);
        });
        datepickerInstance.select.subscribe(function () {
            _this.close();
        });
    };
    NgbInputDatepicker.prototype._writeModelValue = function (model) {
        this._renderer.setProperty(this._elRef.nativeElement, 'value', this._parserFormatter.format(model));
        if (this.isOpen()) {
            this._cRef.instance.writeValue(this._ngbDateAdapter.toModel(model));
            this._onTouched();
        }
    };
    NgbInputDatepicker.prototype._fromDateStruct = function (date) {
        var ngbDate = date ? new _ngbDate.NgbDate(date.year, date.month, date.day) : null;
        return this._calendar.isValid(ngbDate) ? ngbDate : null;
    };
    NgbInputDatepicker.decorators = [{ type: _core.Directive, args: [{
            selector: 'input[ngbDatepicker]',
            exportAs: 'ngbDatepicker',
            host: {
                '(input)': 'manualDateChange($event.target.value)',
                '(change)': 'manualDateChange($event.target.value, true)',
                '(keyup.esc)': 'close()',
                '(blur)': 'onBlur()',
                '[disabled]': 'disabled'
            },
            providers: [NGB_DATEPICKER_VALUE_ACCESSOR, NGB_DATEPICKER_VALIDATOR, _datepickerService.NgbDatepickerService]
        }] }];
    /** @nocollapse */
    NgbInputDatepicker.ctorParameters = function () {
        return [{ type: _ngbDateParserFormatter.NgbDateParserFormatter }, { type: _core.ElementRef }, { type: _core.ViewContainerRef }, { type: _core.Renderer2 }, { type: _core.ComponentFactoryResolver }, { type: _core.NgZone }, { type: _datepickerService.NgbDatepickerService }, { type: _ngbCalendar.NgbCalendar }, { type: _ngbDateAdapter2.NgbDateAdapter }];
    };
    NgbInputDatepicker.propDecorators = {
        "dayTemplate": [{ type: _core.Input }],
        "displayMonths": [{ type: _core.Input }],
        "firstDayOfWeek": [{ type: _core.Input }],
        "markDisabled": [{ type: _core.Input }],
        "minDate": [{ type: _core.Input }],
        "maxDate": [{ type: _core.Input }],
        "navigation": [{ type: _core.Input }],
        "outsideDays": [{ type: _core.Input }],
        "placement": [{ type: _core.Input }],
        "showWeekdays": [{ type: _core.Input }],
        "showWeekNumbers": [{ type: _core.Input }],
        "startDate": [{ type: _core.Input }],
        "container": [{ type: _core.Input }],
        "navigate": [{ type: _core.Output }],
        "disabled": [{ type: _core.Input }]
    };
    return NgbInputDatepicker;
}();
exports.NgbInputDatepicker = NgbInputDatepicker;
//# sourceMappingURL=datepicker-input.js.map