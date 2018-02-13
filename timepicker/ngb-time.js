"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTime = undefined;

var _util = require("../util/util");

var NgbTime = function () {
    function NgbTime(hour, minute, second) {
        this.hour = (0, _util.toInteger)(hour);
        this.minute = (0, _util.toInteger)(minute);
        this.second = (0, _util.toInteger)(second);
    }
    NgbTime.prototype.changeHour = function (step) {
        if (step === void 0) {
            step = 1;
        }
        this.updateHour((isNaN(this.hour) ? 0 : this.hour) + step);
    };
    NgbTime.prototype.updateHour = function (hour) {
        if ((0, _util.isNumber)(hour)) {
            this.hour = (hour < 0 ? 24 + hour : hour) % 24;
        } else {
            this.hour = NaN;
        }
    };
    NgbTime.prototype.changeMinute = function (step) {
        if (step === void 0) {
            step = 1;
        }
        this.updateMinute((isNaN(this.minute) ? 0 : this.minute) + step);
    };
    NgbTime.prototype.updateMinute = function (minute) {
        if ((0, _util.isNumber)(minute)) {
            this.minute = minute % 60 < 0 ? 60 + minute % 60 : minute % 60;
            this.changeHour(Math.floor(minute / 60));
        } else {
            this.minute = NaN;
        }
    };
    NgbTime.prototype.changeSecond = function (step) {
        if (step === void 0) {
            step = 1;
        }
        this.updateSecond((isNaN(this.second) ? 0 : this.second) + step);
    };
    NgbTime.prototype.updateSecond = function (second) {
        if ((0, _util.isNumber)(second)) {
            this.second = second < 0 ? 60 + second % 60 : second % 60;
            this.changeMinute(Math.floor(second / 60));
        } else {
            this.second = NaN;
        }
    };
    NgbTime.prototype.isValid = function (checkSecs) {
        if (checkSecs === void 0) {
            checkSecs = true;
        }
        return (0, _util.isNumber)(this.hour) && (0, _util.isNumber)(this.minute) && (checkSecs ? (0, _util.isNumber)(this.second) : true);
    };
    NgbTime.prototype.toString = function () {
        return (this.hour || 0) + ":" + (this.minute || 0) + ":" + (this.second || 0);
    };
    return NgbTime;
}();
exports.NgbTime = NgbTime;
//# sourceMappingURL=ngb-time.js.map