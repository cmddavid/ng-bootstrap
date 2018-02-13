'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbCheckBox = undefined;

var _core = require('@angular/core');

var _forms = require('@angular/forms');

var _label2 = require('./label');

var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: _forms.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return NgbCheckBox;
    }),
    multi: true
};
/**
 * Easily create Bootstrap-style checkbox buttons. A value of a checked button is bound to a variable
 * specified via ngModel.
 */
var NgbCheckBox = function () {
    function NgbCheckBox(_label) {
        this._label = _label;
        /**
           * A flag indicating if a given checkbox button is disabled.
           */
        this.disabled = false;
        /**
           * Value to be propagated as model when the checkbox is checked.
           */
        this.valueChecked = true;
        /**
           * Value to be propagated as model when the checkbox is unchecked.
           */
        this.valueUnChecked = false;
        this.onChange = function (_) {};
        this.onTouched = function () {};
    }
    Object.defineProperty(NgbCheckBox.prototype, "focused", {
        set: function set(isFocused) {
            this._label.focused = isFocused;
            if (!isFocused) {
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbCheckBox.prototype.onInputChange = function ($event) {
        var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    };
    NgbCheckBox.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgbCheckBox.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NgbCheckBox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    };
    NgbCheckBox.prototype.writeValue = function (value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
    };
    NgbCheckBox.decorators = [{ type: _core.Directive, args: [{
            selector: '[ngbButton][type=checkbox]',
            host: {
                'autocomplete': 'off',
                '[checked]': 'checked',
                '[disabled]': 'disabled',
                '(change)': 'onInputChange($event)',
                '(focus)': 'focused = true',
                '(blur)': 'focused = false'
            },
            providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    NgbCheckBox.ctorParameters = function () {
        return [{ type: _label2.NgbButtonLabel }];
    };
    NgbCheckBox.propDecorators = {
        "disabled": [{ type: _core.Input }],
        "valueChecked": [{ type: _core.Input }],
        "valueUnChecked": [{ type: _core.Input }]
    };
    return NgbCheckBox;
}();
exports.NgbCheckBox = NgbCheckBox;
//# sourceMappingURL=checkbox.js.map