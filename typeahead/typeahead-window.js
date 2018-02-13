'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTypeaheadWindow = undefined;

var _core = require('@angular/core');

var _util = require('../util/util');

var NgbTypeaheadWindow = function () {
    function NgbTypeaheadWindow() {
        this.activeIdx = 0;
        /**
           * Flag indicating if the first row should be active initially
           */
        this.focusFirst = true;
        /**
           * A function used to format a given result before display. This function should return a formatted string without any
           * HTML markup
           */
        this.formatter = _util.toString;
        /**
           * Event raised when user selects a particular result row
           */
        this.selectEvent = new _core.EventEmitter();
        this.activeChangeEvent = new _core.EventEmitter();
    }
    NgbTypeaheadWindow.prototype.getActive = function () {
        return this.results[this.activeIdx];
    };
    NgbTypeaheadWindow.prototype.markActive = function (activeIdx) {
        this.activeIdx = activeIdx;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.next = function () {
        if (this.activeIdx === this.results.length - 1) {
            this.activeIdx = this.focusFirst ? (this.activeIdx + 1) % this.results.length : -1;
        } else {
            this.activeIdx++;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.prev = function () {
        if (this.activeIdx < 0) {
            this.activeIdx = this.results.length - 1;
        } else if (this.activeIdx === 0) {
            this.activeIdx = this.focusFirst ? this.results.length - 1 : -1;
        } else {
            this.activeIdx--;
        }
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype.select = function (item) {
        this.selectEvent.emit(item);
    };
    NgbTypeaheadWindow.prototype.ngOnInit = function () {
        this.activeIdx = this.focusFirst ? 0 : -1;
        this._activeChanged();
    };
    NgbTypeaheadWindow.prototype._activeChanged = function () {
        this.activeChangeEvent.emit(this.activeIdx >= 0 ? this.id + '-' + this.activeIdx : undefined);
    };
    NgbTypeaheadWindow.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-typeahead-window',
            exportAs: 'ngbTypeaheadWindow',
            host: { 'class': 'dropdown-menu', 'style': 'display: block', 'role': 'listbox', '[id]': 'id' },
            template: "\n    <ng-template #rt let-result=\"result\" let-term=\"term\" let-formatter=\"formatter\">\n      <ngb-highlight [result]=\"formatter(result)\" [term]=\"term\"></ngb-highlight>\n    </ng-template>\n    <ng-template ngFor [ngForOf]=\"results\" let-result let-idx=\"index\">\n      <button type=\"button\" class=\"dropdown-item\" role=\"option\"\n        [id]=\"id + '-' + idx\"\n        [class.active]=\"idx === activeIdx\"\n        (mouseenter)=\"markActive(idx)\"\n        (click)=\"select(result)\">\n          <ng-template [ngTemplateOutlet]=\"resultTemplate || rt\"\n          [ngTemplateOutletContext]=\"{result: result, term: term, formatter: formatter}\"></ng-template>\n      </button>\n    </ng-template>\n  "
        }] }];
    /** @nocollapse */
    NgbTypeaheadWindow.ctorParameters = function () {
        return [];
    };
    NgbTypeaheadWindow.propDecorators = {
        "id": [{ type: _core.Input }],
        "focusFirst": [{ type: _core.Input }],
        "results": [{ type: _core.Input }],
        "term": [{ type: _core.Input }],
        "formatter": [{ type: _core.Input }],
        "resultTemplate": [{ type: _core.Input }],
        "selectEvent": [{ type: _core.Output, args: ['select'] }],
        "activeChangeEvent": [{ type: _core.Output, args: ['activeChange'] }]
    };
    return NgbTypeaheadWindow;
}();
exports.NgbTypeaheadWindow = NgbTypeaheadWindow;
//# sourceMappingURL=typeahead-window.js.map