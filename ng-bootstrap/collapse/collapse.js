'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbCollapse = undefined;

var _core = require('@angular/core');

/**
 * The NgbCollapse directive provides a simple way to hide and show an element with animations.
 */
var NgbCollapse = function () {
    function NgbCollapse() {
        /**
           * A flag indicating collapsed (true) or open (false) state.
           */
        this.collapsed = false;
    }
    NgbCollapse.decorators = [{ type: _core.Directive, args: [{
            selector: '[ngbCollapse]',
            exportAs: 'ngbCollapse',
            host: { '[class.collapse]': 'true', '[class.show]': '!collapsed' }
        }] }];
    /** @nocollapse */
    NgbCollapse.ctorParameters = function () {
        return [];
    };
    NgbCollapse.propDecorators = {
        "collapsed": [{ type: _core.Input, args: ['ngbCollapse'] }]
    };
    return NgbCollapse;
}();
exports.NgbCollapse = NgbCollapse;
//# sourceMappingURL=collapse.js.map