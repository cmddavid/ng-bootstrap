'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbDatepickerDayView = undefined;

var _core = require('@angular/core');

var NgbDatepickerDayView = function () {
    function NgbDatepickerDayView() {}
    NgbDatepickerDayView.prototype.isMuted = function () {
        return !this.selected && (this.date.month !== this.currentMonth || this.disabled);
    };
    NgbDatepickerDayView.decorators = [{ type: _core.Component, args: [{
            selector: '[ngbDatepickerDayView]',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            styles: ["\n    :host {\n      text-align: center;\n      width: 2rem;\n      height: 2rem;\n      line-height: 2rem;\n      border-radius: 0.25rem;\n      background: transparent;\n    }\n    :host.outside {\n      opacity: 0.5;\n    }\n  "],
            host: {
                'class': 'btn-light',
                '[class.bg-primary]': 'selected',
                '[class.text-white]': 'selected',
                '[class.text-muted]': 'isMuted()',
                '[class.outside]': 'isMuted()',
                '[class.active]': 'focused'
            },
            template: "{{ date.day }}"
        }] }];
    /** @nocollapse */
    NgbDatepickerDayView.ctorParameters = function () {
        return [];
    };
    NgbDatepickerDayView.propDecorators = {
        "currentMonth": [{ type: _core.Input }],
        "date": [{ type: _core.Input }],
        "disabled": [{ type: _core.Input }],
        "focused": [{ type: _core.Input }],
        "selected": [{ type: _core.Input }]
    };
    return NgbDatepickerDayView;
}();
exports.NgbDatepickerDayView = NgbDatepickerDayView;
//# sourceMappingURL=datepicker-day-view.js.map