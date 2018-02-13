'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbHighlight = undefined;

var _core = require('@angular/core');

var _util = require('../util/util');

var NgbHighlight = function () {
    function NgbHighlight() {
        this.highlightClass = 'ngb-highlight';
    }
    NgbHighlight.prototype.ngOnChanges = function (changes) {
        var resultStr = (0, _util.toString)(this.result);
        var resultLC = resultStr.toLowerCase();
        var termLC = (0, _util.toString)(this.term).toLowerCase();
        var currentIdx = 0;
        if (termLC.length > 0) {
            this.parts = resultLC.split(new RegExp("(" + (0, _util.regExpEscape)(termLC) + ")")).map(function (part) {
                var originalPart = resultStr.substr(currentIdx, part.length);
                currentIdx += part.length;
                return originalPart;
            });
        } else {
            this.parts = [resultStr];
        }
    };
    NgbHighlight.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-highlight',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            template: "<ng-template ngFor [ngForOf]=\"parts\" let-part let-isOdd=\"odd\">" + "<span *ngIf=\"isOdd\" class=\"{{highlightClass}}\">{{part}}</span><ng-template [ngIf]=\"!isOdd\">{{part}}</ng-template>" + "</ng-template>",
            // template needs to be formatted in a certain way so we don't add empty text nodes
            styles: ["\n    .ngb-highlight {\n      font-weight: bold;\n    }\n  "]
        }] }];
    /** @nocollapse */
    NgbHighlight.ctorParameters = function () {
        return [];
    };
    NgbHighlight.propDecorators = {
        "highlightClass": [{ type: _core.Input }],
        "result": [{ type: _core.Input }],
        "term": [{ type: _core.Input }]
    };
    return NgbHighlight;
}();
exports.NgbHighlight = NgbHighlight;
//# sourceMappingURL=highlight.js.map