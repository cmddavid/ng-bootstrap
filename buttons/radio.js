'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbRadio = exports.NgbRadioGroup = undefined;

var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _label2 = require('./label');

var NGB_RADIO_VALUE_ACCESSOR = {
    provide: _forms.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return NgbRadioGroup;
    }),
    multi: true
};
var nextId = 0;
/**
 * Easily create Bootstrap-style radio buttons. A value of a selected button is bound to a variable
 * specified via ngModel.
 */
var NgbRadioGroup = function () {
    function NgbRadioGroup() {
        this._radios = new Set();
        this._value = null;
        /**
           * The name of the group. Unless enclosed inputs specify a name, this name is used as the name of the
           * enclosed inputs. If not specified, a name is generated automatically.
           */
        this.name = "ngb-radio-" + nextId++;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }
    Object.defineProperty(NgbRadioGroup.prototype, "disabled", {
        get: function get() {
            return this._disabled;
        },
        set: function set(isDisabled) {
            this.setDisabledState(isDisabled);
        },
        enumerable: true,
        configurable: true
    });
    NgbRadioGroup.prototype.onRadioChange = function (radio) {
        this.writeValue(radio.value);
        this.onChange(radio.value);
    };
    NgbRadioGroup.prototype.onRadioValueUpdate = function () {
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype.register = function (radio) {
        this._radios.add(radio);
    };
    NgbRadioGroup.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgbRadioGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NgbRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this._disabled = isDisabled;
        this._updateRadiosDisabled();
    };
    NgbRadioGroup.prototype.unregister = function (radio) {
        this._radios.delete(radio);
    };
    NgbRadioGroup.prototype.writeValue = function (value) {
        this._value = value;
        this._updateRadiosValue();
    };
    NgbRadioGroup.prototype._updateRadiosValue = function () {
        var _this = this;
        this._radios.forEach(function (radio) {
            return radio.updateValue(_this._value);
        });
    };
    NgbRadioGroup.prototype._updateRadiosDisabled = function () {
        this._radios.forEach(function (radio) {
            return radio.updateDisabled();
        });
    };
    NgbRadioGroup.decorators = [{ type: _core.Directive, args: [{ selector: '[ngbRadioGroup]', host: { 'role': 'group' }, providers: [NGB_RADIO_VALUE_ACCESSOR] }] }];
    /** @nocollapse */
    NgbRadioGroup.ctorParameters = function () {
        return [];
    };
    NgbRadioGroup.propDecorators = {
        "name": [{ type: _core.Input }]
    };
    return NgbRadioGroup;
}();
exports.NgbRadioGroup = NgbRadioGroup;
/**
 * Marks an input of type "radio" as part of the NgbRadioGroup.
 */

var NgbRadio = function () {
    function NgbRadio(_group, _label, _renderer, _element) {
        this._group = _group;
        this._label = _label;
        this._renderer = _renderer;
        this._element = _element;
        this._value = null;
        this._group.register(this);
    }
    Object.defineProperty(NgbRadio.prototype, "value", {
        get: function get() {
            return this._value;
        },
        set: /**
             * You can specify model value of a given radio by binding to the value property.
             */
        function set(value) {
            this._value = value;
            var stringValue = value ? value.toString() : '';
            this._renderer.setProperty(this._element.nativeElement, 'value', stringValue);
            this._group.onRadioValueUpdate();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "disabled", {
        get: function get() {
            return this._group.disabled || this._disabled;
        },
        set: /**
             * A flag indicating if a given radio button is disabled.
             */
        function set(isDisabled) {
            this._disabled = isDisabled !== false;
            this.updateDisabled();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "focused", {
        set: function set(isFocused) {
            if (this._label) {
                this._label.focused = isFocused;
            }
            if (!isFocused) {
                this._group.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "checked", {
        get: function get() {
            return this._checked;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgbRadio.prototype, "nameAttr", {
        get: function get() {
            return this.name || this._group.name;
        },
        enumerable: true,
        configurable: true
    });
    NgbRadio.prototype.ngOnDestroy = function () {
        this._group.unregister(this);
    };
    NgbRadio.prototype.onChange = function () {
        this._group.onRadioChange(this);
    };
    NgbRadio.prototype.updateValue = function (value) {
        this._checked = this.value === value;
        this._label.active = this._checked;
    };
    NgbRadio.prototype.updateDisabled = function () {
        this._label.disabled = this.disabled;
    };
    NgbRadio.decorators = [{ type: _core.Directive, args: [{
            selector: '[ngbButton][type=radio]',
            host: {
                '[checked]': 'checked',
                '[disabled]': 'disabled',
                '[name]': 'nameAttr',
                '(change)': 'onChange()',
                '(focus)': 'focused = true',
                '(blur)': 'focused = false'
            }
        }] }];
    /** @nocollapse */
    NgbRadio.ctorParameters = function () {
        return [{ type: NgbRadioGroup }, { type: _label2.NgbButtonLabel }, { type: _core.Renderer2 }, { type: _core.ElementRef }];
    };
    NgbRadio.propDecorators = {
        "name": [{ type: _core.Input }],
        "value": [{ type: _core.Input, args: ['value'] }],
        "disabled": [{ type: _core.Input, args: ['disabled'] }]
    };
    return NgbRadio;
}();
exports.NgbRadio = NgbRadio;
//# sourceMappingURL=radio.js.map