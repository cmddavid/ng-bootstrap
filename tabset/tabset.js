'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NgbTabset = exports.NgbTab = exports.NgbTabContent = exports.NgbTabTitle = undefined;

var _core = require('@angular/core');

var _tabsetConfig = require('./tabset-config');

var nextId = 0;
/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
var NgbTabTitle = function () {
    function NgbTabTitle(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabTitle.decorators = [{ type: _core.Directive, args: [{ selector: 'ng-template[ngbTabTitle]' }] }];
    /** @nocollapse */
    NgbTabTitle.ctorParameters = function () {
        return [{ type: _core.TemplateRef }];
    };
    return NgbTabTitle;
}();
exports.NgbTabTitle = NgbTabTitle;
/**
 * This directive must be used to wrap content to be displayed in a tab.
 */

var NgbTabContent = function () {
    function NgbTabContent(templateRef) {
        this.templateRef = templateRef;
    }
    NgbTabContent.decorators = [{ type: _core.Directive, args: [{ selector: 'ng-template[ngbTabContent]' }] }];
    /** @nocollapse */
    NgbTabContent.ctorParameters = function () {
        return [{ type: _core.TemplateRef }];
    };
    return NgbTabContent;
}();
exports.NgbTabContent = NgbTabContent;
/**
 * A directive representing an individual tab.
 */

var NgbTab = function () {
    function NgbTab() {
        /**
           * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
           */
        this.id = "ngb-tab-" + nextId++;
        /**
           * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
           */
        this.disabled = false;
    }
    NgbTab.decorators = [{ type: _core.Directive, args: [{ selector: 'ngb-tab' }] }];
    /** @nocollapse */
    NgbTab.ctorParameters = function () {
        return [];
    };
    NgbTab.propDecorators = {
        "id": [{ type: _core.Input }],
        "title": [{ type: _core.Input }],
        "disabled": [{ type: _core.Input }],
        "contentTpl": [{ type: _core.ContentChild, args: [NgbTabContent] }],
        "titleTpl": [{ type: _core.ContentChild, args: [NgbTabTitle] }]
    };
    return NgbTab;
}();
exports.NgbTab = NgbTab;
/**
 * A component that makes it easy to create tabbed interface.
 */

var NgbTabset = function () {
    function NgbTabset(config) {
        /**
           * Whether the closed tabs should be hidden without destroying them
           */
        this.destroyOnHide = true;
        /**
           * A tab change event fired right before the tab selection happens. See NgbTabChangeEvent for payload details
           */
        this.tabChange = new _core.EventEmitter();
        this.type = config.type;
        this.justify = config.justify;
        this.orientation = config.orientation;
    }
    Object.defineProperty(NgbTabset.prototype, "justify", {
        set: /**
             * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
             * 'justified'
             * The default value is 'start'.
             */
        function set(className) {
            if (className === 'fill' || className === 'justified') {
                this.justifyClass = "nav-" + className;
            } else {
                this.justifyClass = "justify-content-" + className;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Selects the tab with the given id and shows its associated pane.
     * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
     */
    /**
       * Selects the tab with the given id and shows its associated pane.
       * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
       */
    NgbTabset.prototype.select = /**
                                 * Selects the tab with the given id and shows its associated pane.
                                 * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
                                 */
    function (tabId) {
        var selectedTab = this._getTabById(tabId);
        if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
            var defaultPrevented_1 = false;
            this.tabChange.emit({ activeId: this.activeId, nextId: selectedTab.id, preventDefault: function preventDefault() {
                    defaultPrevented_1 = true;
                } });
            if (!defaultPrevented_1) {
                this.activeId = selectedTab.id;
            }
        }
    };
    NgbTabset.prototype.ngAfterContentChecked = function () {
        // auto-correct activeId that might have been set incorrectly as input
        var activeTab = this._getTabById(this.activeId);
        this.activeId = activeTab ? activeTab.id : this.tabs.length ? this.tabs.first.id : null;
    };
    NgbTabset.prototype._getTabById = function (id) {
        var tabsWithId = this.tabs.filter(function (tab) {
            return tab.id === id;
        });
        return tabsWithId.length ? tabsWithId[0] : null;
    };
    NgbTabset.decorators = [{ type: _core.Component, args: [{
            selector: 'ngb-tabset',
            exportAs: 'ngbTabset',
            template: "\n    <ul [class]=\"'nav nav-' + type + (orientation == 'horizontal'?  ' ' + justifyClass : ' flex-column')\" role=\"tablist\">\n      <li class=\"nav-item\" *ngFor=\"let tab of tabs\">\n        <a [id]=\"tab.id\" class=\"nav-link\" [class.active]=\"tab.id === activeId\" [class.disabled]=\"tab.disabled\"\n          href (click)=\"!!select(tab.id)\" role=\"tab\" [attr.tabindex]=\"(tab.disabled ? '-1': undefined)\"\n          [attr.aria-controls]=\"(!destroyOnHide || tab.id === activeId ? tab.id + '-panel' : null)\"\n          [attr.aria-expanded]=\"tab.id === activeId\" [attr.aria-disabled]=\"tab.disabled\">\n          {{tab.title}}<ng-template [ngTemplateOutlet]=\"tab.titleTpl?.templateRef\"></ng-template>\n        </a>\n      </li>\n    </ul>\n    <div class=\"tab-content\">\n      <ng-template ngFor let-tab [ngForOf]=\"tabs\">\n        <div\n          class=\"tab-pane {{tab.id === activeId ? 'active' : null}}\"\n          *ngIf=\"!destroyOnHide || tab.id === activeId\"\n          role=\"tabpanel\"\n          [attr.aria-labelledby]=\"tab.id\" id=\"{{tab.id}}-panel\"\n          [attr.aria-expanded]=\"tab.id === activeId\">\n          <ng-template [ngTemplateOutlet]=\"tab.contentTpl.templateRef\"></ng-template>\n        </div>\n      </ng-template>\n    </div>\n  "
        }] }];
    /** @nocollapse */
    NgbTabset.ctorParameters = function () {
        return [{ type: _tabsetConfig.NgbTabsetConfig }];
    };
    NgbTabset.propDecorators = {
        "tabs": [{ type: _core.ContentChildren, args: [NgbTab] }],
        "activeId": [{ type: _core.Input }],
        "destroyOnHide": [{ type: _core.Input }],
        "justify": [{ type: _core.Input }],
        "orientation": [{ type: _core.Input }],
        "type": [{ type: _core.Input }],
        "tabChange": [{ type: _core.Output }]
    };
    return NgbTabset;
}();
exports.NgbTabset = NgbTabset;
//# sourceMappingURL=tabset.js.map