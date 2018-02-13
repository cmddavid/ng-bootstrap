'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTooltip = exports.NgbTooltipWindow = undefined;

var _core = require('@angular/core');

var _triggers = require('../util/triggers');

var _positioning = require('../util/positioning');

var _popup = require('../util/popup');

var _tooltipConfig = require('./tooltip-config');

var nextId = 0;
var NgbTooltipWindow = function () {
    function NgbTooltipWindow(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.placement = 'top';
    }
    NgbTooltipWindow.prototype.applyPlacement = function (_placement) {
        // remove the current placement classes
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.removeClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
        // set the new placement classes
        this.placement = _placement;
        // apply the new placement
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString().split('-')[0]);
        this._renderer.addClass(this._element.nativeElement, 'bs-tooltip-' + this.placement.toString());
    };
    NgbTooltipWindow.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-tooltip-window',
            changeDetection: _core.ChangeDetectionStrategy.OnPush,
            host: {
                '[class]': '"tooltip show bs-tooltip-" + placement.split("-")[0]+" bs-tooltip-" + placement',
                'role': 'tooltip',
                '[id]': 'id'
            },
            template: "<div class=\"arrow\"></div><div class=\"tooltip-inner\"><ng-content></ng-content></div>",
            styles: ["\n    :host.bs-tooltip-top .arrow, :host.bs-tooltip-bottom .arrow {\n      left: calc(50% - 0.4rem);\n    }\n\n    :host.bs-tooltip-top-left .arrow, :host.bs-tooltip-bottom-left .arrow {\n      left: 1em;\n    }\n\n    :host.bs-tooltip-top-right .arrow, :host.bs-tooltip-bottom-right .arrow {\n      left: auto;\n      right: 0.8rem;\n    }\n\n    :host.bs-tooltip-left .arrow, :host.bs-tooltip-right .arrow {\n      top: calc(50% - 0.4rem);\n    }\n    \n    :host.bs-tooltip-left-top .arrow, :host.bs-tooltip-right-top .arrow {\n      top: 0.4rem;\n    }\n\n    :host.bs-tooltip-left-bottom .arrow, :host.bs-tooltip-right-bottom .arrow {\n      top: auto;\n      bottom: 0.4rem;\n    }\n  "]
        }] }];
    /** @nocollapse */
    NgbTooltipWindow.ctorParameters = function () {
        return [{ type: _core.ElementRef }, { type: _core.Renderer2 }];
    };
    NgbTooltipWindow.propDecorators = {
        "placement": [{ type: _core.Input }],
        "id": [{ type: _core.Input }]
    };
    return NgbTooltipWindow;
}();
exports.NgbTooltipWindow = NgbTooltipWindow;
/**
 * A lightweight, extensible directive for fancy tooltip creation.
 */

var NgbTooltip = function () {
    function NgbTooltip(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
           * Emits an event when the tooltip is shown
           */
        this.shown = new _core.EventEmitter();
        /**
           * Emits an event when the tooltip is hidden
           */
        this.hidden = new _core.EventEmitter();
        this._ngbTooltipWindowId = "ngb-tooltip-" + nextId++;
        this.placement = config.placement;
        this.triggers = config.triggers;
        this.container = config.container;
        this._popupService = new _popup.PopupService(NgbTooltipWindow, injector, viewContainerRef, _renderer, componentFactoryResolver);
        this._zoneSubscription = ngZone.onStable.subscribe(function () {
            if (_this._windowRef) {
                _this._windowRef.instance.applyPlacement((0, _positioning.positionElements)(_this._elementRef.nativeElement, _this._windowRef.location.nativeElement, _this.placement, _this.container === 'body'));
            }
        });
    }
    Object.defineProperty(NgbTooltip.prototype, "ngbTooltip", {
        get: function get() {
            return this._ngbTooltip;
        },
        set: /**
             * Content to be displayed as tooltip. If falsy, the tooltip won't open.
             */
        function set(value) {
            this._ngbTooltip = value;
            if (!value && this._windowRef) {
                this.close();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     * The context is an optional value to be injected into the tooltip template when it is created.
     */
    /**
       * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       * The context is an optional value to be injected into the tooltip template when it is created.
       */
    NgbTooltip.prototype.open = /**
                                * Opens an element’s tooltip. This is considered a “manual” triggering of the tooltip.
                                * The context is an optional value to be injected into the tooltip template when it is created.
                                */
    function (context) {
        if (!this._windowRef && this._ngbTooltip) {
            this._windowRef = this._popupService.open(this._ngbTooltip, context);
            this._windowRef.instance.id = this._ngbTooltipWindowId;
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ngbTooltipWindowId);
            if (this.container === 'body') {
                window.document.querySelector(this.container).appendChild(this._windowRef.location.nativeElement);
            }
            this._windowRef.instance.placement = Array.isArray(this.placement) ? this.placement[0] : this.placement;
            // apply styling to set basic css-classes on target element, before going for positioning
            this._windowRef.changeDetectorRef.detectChanges();
            this._windowRef.changeDetectorRef.markForCheck();
            // position tooltip along the element
            this._windowRef.instance.applyPlacement((0, _positioning.positionElements)(this._elementRef.nativeElement, this._windowRef.location.nativeElement, this.placement, this.container === 'body'));
            this.shown.emit();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.close = /**
                                 * Closes an element’s tooltip. This is considered a “manual” triggering of the tooltip.
                                 */
    function () {
        if (this._windowRef != null) {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
            this._popupService.close();
            this._windowRef = null;
            this.hidden.emit();
        }
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
     */
    /**
       * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
       */
    NgbTooltip.prototype.toggle = /**
                                  * Toggles an element’s tooltip. This is considered a “manual” triggering of the tooltip.
                                  */
    function () {
        if (this._windowRef) {
            this.close();
        } else {
            this.open();
        }
    };
    /**
     * Returns whether or not the tooltip is currently being shown
     */
    /**
       * Returns whether or not the tooltip is currently being shown
       */
    NgbTooltip.prototype.isOpen = /**
                                  * Returns whether or not the tooltip is currently being shown
                                  */
    function () {
        return this._windowRef != null;
    };
    NgbTooltip.prototype.ngOnInit = function () {
        this._unregisterListenersFn = (0, _triggers.listenToTriggers)(this._renderer, this._elementRef.nativeElement, this.triggers, this.open.bind(this), this.close.bind(this), this.toggle.bind(this));
    };
    NgbTooltip.prototype.ngOnDestroy = function () {
        this.close();
        this._unregisterListenersFn();
        this._zoneSubscription.unsubscribe();
    };
    NgbTooltip.decorators = [{ type: _core.Directive, args: [{ selector: '[ngbTooltip]', exportAs: 'ngbTooltip' }] }];
    /** @nocollapse */
    NgbTooltip.ctorParameters = function () {
        return [{ type: _core.ElementRef }, { type: _core.Renderer2 }, { type: _core.Injector }, { type: _core.ComponentFactoryResolver }, { type: _core.ViewContainerRef }, { type: _tooltipConfig.NgbTooltipConfig }, { type: _core.NgZone }];
    };
    NgbTooltip.propDecorators = {
        "placement": [{ type: _core.Input }],
        "triggers": [{ type: _core.Input }],
        "container": [{ type: _core.Input }],
        "shown": [{ type: _core.Output }],
        "hidden": [{ type: _core.Output }],
        "ngbTooltip": [{ type: _core.Input }]
    };
    return NgbTooltip;
}();
exports.NgbTooltip = NgbTooltip;
//# sourceMappingURL=tooltip.js.map