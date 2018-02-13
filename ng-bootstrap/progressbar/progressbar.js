'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbProgressbar = undefined;

var _core = require('@angular/core');

var _util = require('../util/util');

var _progressbarConfig = require('./progressbar-config');

/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
var NgbProgressbar = function () {
    function NgbProgressbar(config) {
        /**
           * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
           */
        this.value = 0;
        this.max = config.max;
        this.animated = config.animated;
        this.striped = config.striped;
        this.type = config.type;
        this.showValue = config.showValue;
        this.height = config.height;
    }
    NgbProgressbar.prototype.getValue = function () {
        return (0, _util.getValueInRange)(this.value, this.max);
    };
    NgbProgressbar.prototype.getPercentValue = function () {
        return 100 * this.getValue() / this.max;
    };
    NgbProgressbar.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-progressbar',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            template: "\n    <div class=\"progress\" [style.height]=\"height\">\n      <div class=\"progress-bar{{type ? ' bg-' + type : ''}}{{animated ? ' progress-bar-animated' : ''}}{{striped ?\n    ' progress-bar-striped' : ''}}\" role=\"progressbar\" [style.width.%]=\"getPercentValue()\"\n    [attr.aria-valuenow]=\"getValue()\" aria-valuemin=\"0\" [attr.aria-valuemax]=\"max\">\n        <span *ngIf=\"showValue\">{{getPercentValue()}}%</span><ng-content></ng-content>\n      </div>\n    </div>\n  "
        }] }];
    /** @nocollapse */
    NgbProgressbar.ctorParameters = function () {
        return [{ type: _progressbarConfig.NgbProgressbarConfig }];
    };
    NgbProgressbar.propDecorators = {
        "max": [{ type: _core.Input }],
        "animated": [{ type: _core.Input }],
        "striped": [{ type: _core.Input }],
        "showValue": [{ type: _core.Input }],
        "type": [{ type: _core.Input }],
        "value": [{ type: _core.Input }],
        "height": [{ type: _core.Input }]
    };
    return NgbProgressbar;
}();
exports.NgbProgressbar = NgbProgressbar;
//# sourceMappingURL=progressbar.js.map