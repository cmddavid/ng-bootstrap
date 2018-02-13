'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbAlert = undefined;

var _core = require('@angular/core');

var _alertConfig = require('./alert-config');

/**
 * Alerts can be used to provide feedback messages.
 */
var NgbAlert = function () {
    function NgbAlert(config) {
        /**
           * An event emitted when the close button is clicked. This event has no payload. Only relevant for dismissible alerts.
           */
        this.close = new _core.EventEmitter();
        this.dismissible = config.dismissible;
        this.type = config.type;
    }
    NgbAlert.prototype.closeHandler = function () {
        this.close.emit(null);
    };
    NgbAlert.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-alert',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            template: "\n    <div [class]=\"'alert alert-' + type + (dismissible ? ' alert-dismissible' : '')\" role=\"alert\">\n      <button *ngIf=\"dismissible\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeHandler()\">\n            <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <ng-content></ng-content>\n    </div>\n    "
        }] }];
    /** @nocollapse */
    NgbAlert.ctorParameters = function () {
        return [{ type: _alertConfig.NgbAlertConfig }];
    };
    NgbAlert.propDecorators = {
        "dismissible": [{ type: _core.Input }],
        "type": [{ type: _core.Input }],
        "close": [{ type: _core.Output }]
    };
    return NgbAlert;
}();
exports.NgbAlert = NgbAlert;
//# sourceMappingURL=alert.js.map