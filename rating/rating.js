'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbRating = undefined;

var _core = require('@angular/core');

var _ratingConfig = require('./rating-config');

var _util = require('../util/util');

var _forms = require('@angular/forms');

var Key;
(function (Key) {
    Key[Key["End"] = 35] = "End";
    Key[Key["Home"] = 36] = "Home";
    Key[Key["ArrowLeft"] = 37] = "ArrowLeft";
    Key[Key["ArrowUp"] = 38] = "ArrowUp";
    Key[Key["ArrowRight"] = 39] = "ArrowRight";
    Key[Key["ArrowDown"] = 40] = "ArrowDown";
})(Key || (Key = {}));
var NGB_RATING_VALUE_ACCESSOR = {
    provide: _forms.NG_VALUE_ACCESSOR,
    useExisting: (0, _core.forwardRef)(function () {
        return NgbRating;
    }),
    multi: true
};
/**
 * Rating directive that will take care of visualising a star rating bar.
 */
var NgbRating = function () {
    function NgbRating(config, _changeDetectorRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this.contexts = [];
        this.disabled = false;
        /**
           * An event fired when a user is hovering over a given rating.
           * Event's payload equals to the rating being hovered over.
           */
        this.hover = new _core.EventEmitter();
        /**
           * An event fired when a user stops hovering over a given rating.
           * Event's payload equals to the rating of the last item being hovered over.
           */
        this.leave = new _core.EventEmitter();
        /**
           * An event fired when a user selects a new rating.
           * Event's payload equals to the newly selected rating.
           */
        this.rateChange = new _core.EventEmitter(true);
        this.onChange = function (_) {};
        this.onTouched = function () {};
        this.max = config.max;
        this.readonly = config.readonly;
    }
    NgbRating.prototype.ariaValueText = function () {
        return this.nextRate + " out of " + this.max;
    };
    NgbRating.prototype.enter = function (value) {
        if (!this.readonly && !this.disabled) {
            this._updateState(value);
        }
        this.hover.emit(value);
    };
    NgbRating.prototype.handleBlur = function () {
        this.onTouched();
    };
    NgbRating.prototype.handleClick = function (value) {
        this.update(this.resettable && this.rate === value ? 0 : value);
    };
    NgbRating.prototype.handleKeyDown = function (event) {
        if (Key[(0, _util.toString)(event.which)]) {
            event.preventDefault();
            switch (event.which) {
                case Key.ArrowDown:
                case Key.ArrowLeft:
                    this.update(this.rate - 1);
                    break;
                case Key.ArrowUp:
                case Key.ArrowRight:
                    this.update(this.rate + 1);
                    break;
                case Key.Home:
                    this.update(0);
                    break;
                case Key.End:
                    this.update(this.max);
                    break;
            }
        }
    };
    NgbRating.prototype.ngOnChanges = function (changes) {
        if (changes['rate']) {
            this.update(this.rate);
        }
    };
    NgbRating.prototype.ngOnInit = function () {
        this.contexts = Array.from({ length: this.max }, function (v, k) {
            return { fill: 0, index: k };
        });
        this._updateState(this.rate);
    };
    NgbRating.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    NgbRating.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    NgbRating.prototype.reset = function () {
        this.leave.emit(this.nextRate);
        this._updateState(this.rate);
    };
    NgbRating.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    NgbRating.prototype.update = function (value, internalChange) {
        if (internalChange === void 0) {
            internalChange = true;
        }
        var newRate = (0, _util.getValueInRange)(value, this.max, 0);
        if (!this.readonly && !this.disabled && this.rate !== newRate) {
            this.rate = newRate;
            this.rateChange.emit(this.rate);
        }
        if (internalChange) {
            this.onChange(this.rate);
            this.onTouched();
        }
        this._updateState(this.rate);
    };
    NgbRating.prototype.writeValue = function (value) {
        this.update(value, false);
        this._changeDetectorRef.markForCheck();
    };
    NgbRating.prototype._getFillValue = function (index) {
        var diff = this.nextRate - index;
        if (diff >= 1) {
            return 100;
        }
        if (diff < 1 && diff > 0) {
            return Number.parseInt((diff * 100).toFixed(2));
        }
        return 0;
    };
    NgbRating.prototype._updateState = function (nextValue) {
        var _this = this;
        this.nextRate = nextValue;
        this.contexts.forEach(function (context, index) {
            return context.fill = _this._getFillValue(index);
        });
    };
    NgbRating.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-rating',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            host: {
                'class': 'd-inline-flex',
                'tabindex': '0',
                'role': 'slider',
                'aria-valuemin': '0',
                '[attr.aria-valuemax]': 'max',
                '[attr.aria-valuenow]': 'nextRate',
                '[attr.aria-valuetext]': 'ariaValueText()',
                '[attr.aria-disabled]': 'readonly ? true : null',
                '(blur)': 'handleBlur()',
                '(keydown)': 'handleKeyDown($event)',
                '(mouseleave)': 'reset()'
            },
            template: "\n    <ng-template #t let-fill=\"fill\">{{ fill === 100 ? '&#9733;' : '&#9734;' }}</ng-template>\n    <ng-template ngFor [ngForOf]=\"contexts\" let-index=\"index\">\n      <span class=\"sr-only\">({{ index < nextRate ? '*' : ' ' }})</span>\n      <span (mouseenter)=\"enter(index + 1)\" (click)=\"handleClick(index + 1)\" [style.cursor]=\"readonly || disabled ? 'default' : 'pointer'\">\n        <ng-template [ngTemplateOutlet]=\"starTemplate || t\" [ngTemplateOutletContext]=\"contexts[index]\"></ng-template>\n      </span>\n    </ng-template>\n  ",
            providers: [NGB_RATING_VALUE_ACCESSOR]
        }] }];
    /** @nocollapse */
    NgbRating.ctorParameters = function () {
        return [{ type: _ratingConfig.NgbRatingConfig }, { type: _core.ChangeDetectorRef }];
    };
    NgbRating.propDecorators = {
        "max": [{ type: _core.Input }],
        "rate": [{ type: _core.Input }],
        "readonly": [{ type: _core.Input }],
        "resettable": [{ type: _core.Input }],
        "starTemplate": [{ type: _core.Input }, { type: _core.ContentChild, args: [_core.TemplateRef] }],
        "hover": [{ type: _core.Output }],
        "leave": [{ type: _core.Output }],
        "rateChange": [{ type: _core.Output }]
    };
    return NgbRating;
}();
exports.NgbRating = NgbRating;
//# sourceMappingURL=rating.js.map