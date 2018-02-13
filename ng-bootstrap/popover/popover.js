'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbPopover = exports.NgbPopoverWindow = undefined;

var _core = require('@angular/core');

var _triggers = require('../util/triggers');

var _positioning = require('../util/positioning');

var _popup = require('../util/popup');

var _popoverConfig = require('./popover-config');

var nextId = 0;
var NgbPopoverWindow = function () {
    function NgbPopoverWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbPopoverWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-popover-' + this.placement.toString());
    };
    NgbPopoverWindow.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-popover-window',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            host: {
                '[class]': '"popover bs-popover-" + placement.split("-")[0]+" bs-popover-" + placement',
                'role': 'tooltip',
                '[id]': 'id'
            },
            template: "\n    <div class=\"arrow\"></div>\n    <h3 class=\"popover-header\">{{title}}</h3><div class=\"popover-body\"><ng-content></ng-content></div>",
            styles: ["\n    :host.bs-popover-top .arrow, :host.bs-popover-bottom .arrow {\n      left: 50%;\n      margin-left: -5px;\n    }\n\n    :host.bs-popover-top-left .arrow, :host.bs-popover-bottom-left .arrow {\n      left: 2em;\n    }\n\n    :host.bs-popover-top-right .arrow, :host.bs-popover-bottom-right .arrow {\n      left: auto;\n      right: 2em;\n    }\n\n    :host.bs-popover-left .arrow, :host.bs-popover-right .arrow {\n      top: 50%;\n      margin-top: -5px;\n    }\n    \n    :host.bs-popover-left-top .arrow, :host.bs-popover-right-top .arrow {\n      top: 0.7em;\n    }\n\n    :host.bs-popover-left-bottom .arrow, :host.bs-popover-right-bottom .arrow {\n      top: auto;\n      bottom: 0.7em;\n    }\n  "]
        }] }];
    /** @nocollapse */
    NgbPopoverWindow.ctorParameters = function () {
        return [{ type: _core.ElementRef }, { type: _core.Renderer2 }];
    };
    NgbPopoverWindow.propDecorators = {
        "placement": [{ type: _core.Input }],
        "title": [{ type: _core.Input }],
        "id": [{ type: _core.Input }]
    };
    return NgbPopoverWindow;
}();
exports.NgbPopoverWindow = NgbPopoverWindow;
/**
 * A lightweight, extensible directive for fancy popover creation.
 */

var NgbPopover = function () {
    function NgbPopover(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the popover is shown
           */
        this.shown = new _core.EventEmitter();
        /**
           * Emits an event when the popover is hidden
           */
        this.hidden = new _core.EventEmitter();
        this._ngbPopoverWindowId = "ngb-popover-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new _popup.PopupService(NgbPopoverWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement((0, _positioning.positionElements)(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of the popover.
     * The context is an optional value to be injected into the popover template when it is created.
     */
    /**
       * Opens an element’s popover. This is considered a “manual” triggering of the popover.
       * The context is an optional value to be injected into the popover template when it is created.
       */
    NgbPopover.prototype.open = /**
                                * Opens an element’s popover. This is considered a “manual” triggering of the popover.
                                * The context is an optional value to be injected into the popover template when it is created.
                                */
    function (context) {
        if (!this._windowRef) {
            this._windowRef = this._popupService.open(this.ngbPopover, context);
            this._windowRef.instance.title = this.popoverTitle;
            this._windowRef.instance.id = this._ngbPopoverWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbPopoverWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position popover along the element
            this._windowRef.instance.applyPlacement((0, _positioning.positionElements)(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Closes an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.close = /**
                                 * Closes an element’s popover. This is considered a “manual” triggering of the popover.
                                 */
    function () {
        if (this._windowRef) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
     */
    /**
       * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
       */
    NgbPopover.prototype.toggle = /**
                                  * Toggles an element’s popover. This is considered a “manual” triggering of the popover.
                                  */
    function () {
        if (this._windowRef) {
            this.close();
        } else {
            this.open();
        }
    };
    /**
     * Returns whether or not the popover is currently being shown
     */
    /**
       * Returns whether or not the popover is currently being shown
       */
    NgbPopover.prototype.isOpen = /**
                                  * Returns whether or not the popover is currently being shown
                                  */
    function () {
        return this._windowRef != null;
    };
    NgbPopover.prototype.ngOnInit = function () {
        this._unregisterListenersFn = (0, _triggers.listenToTriggers)(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbPopover.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    NgbPopover.decorators = [{ type: _core.Directive, args: [{ selector: '[ngbPopover]', exportAs: 'ngbPopover' }] }];
    /** @nocollapse */
    NgbPopover.ctorParameters = function () {
        return [{ type: _core.ElementRef }, { type: _core.Renderer2 }, { type: _core.Injector }, { type: _core.ComponentFactoryResolver }, { type: _core.ViewContainerRef }, { type: _popoverConfig.NgbPopoverConfig }, { type: _core.NgZone }];
    };
    NgbPopover.propDecorators = {
        "ngbPopover": [{ type: _core.Input }],
        "popoverTitle": [{ type: _core.Input }],
        "placement": [{ type: _core.Input }],
        "triggers": [{ type: _core.Input }],
        "container": [{ type: _core.Input }],
        "shown": [{ type: _core.Output }],
        "hidden": [{ type: _core.Output }]
    };
    return NgbPopover;
}();
exports.NgbPopover = NgbPopover;
//# sourceMappingURL=popover.js.map