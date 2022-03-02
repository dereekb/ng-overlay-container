import * as i1 from '@angular/cdk/overlay';
import { OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, PortalModule } from '@angular/cdk/portal';
import * as i3 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from '@angular/cdk/drag-drop';
import { DragDropModule } from '@angular/cdk/drag-drop';
import * as i0 from '@angular/core';
import { TemplateRef, Component, ViewEncapsulation, Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs';

/**
 * Default overlay container configuration
 */
const DEFAULT_OVERLAY_CONFIGURATION = {
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    panelClass: 'ng-overlay-container',
    useGlobalPositionStrategy: false,
    width: '400px',
    height: '500px',
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    offsetX: 0,
    offsetY: 10,
    isDraggable: false,
    isResizable: true,
    disableBackdropClose: false
};

/**
 * The reference to the popover container.
 * @param T The data passed into the container to be available in the embedded e.g. component
 * @param R The response data type returned from the afterClosed$ observable when calling close(data?: R)
 */
class NgPopoverRef {
    constructor(_overlay, overlay, content, data, isDraggable, disableBackdropClose) {
        this._overlay = _overlay;
        this.overlay = overlay;
        this.content = content;
        this.data = data;
        this.isDraggable = isDraggable;
        this.disableBackdropClose = disableBackdropClose;
        this.afterClosed = new Subject();
        /**
         * Observable to retrieve the returned data
         */
        this.afterClosed$ = this.afterClosed.asObservable();
        this.initialOverlayConfig = overlay.getConfig();
        this.toggled = false;
        if (!disableBackdropClose) {
            overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
        }
    }
    /**
     * Sets new width and/or height values. If omitted the current value is used
     * @param width The new width
     * @param height The new height
     */
    resize(width, height) {
        const currentConfig = this.overlay.getConfig();
        this.overlay.updateSize({ width: width !== null && width !== void 0 ? width : currentConfig.width, height: height !== null && height !== void 0 ? height : currentConfig.height });
    }
    /**
     * Toggle maximize of the overlay
     */
    toggleMaximize() {
        if (!this.toggled) {
            this.overlay.updatePositionStrategy(this._overlay
                .position()
                .flexibleConnectedTo({})
                .withPositions([
                {
                    originX: 'center',
                    originY: 'bottom',
                    overlayX: 'center',
                    overlayY: 'top',
                    offsetX: 0,
                    offsetY: 0
                }
            ]));
            this.overlay.updateSize({ width: '100%', height: '100%' });
        }
        else {
            this.overlay.updateSize({
                width: this.initialOverlayConfig.width,
                height: this.initialOverlayConfig.height
            });
            this.overlay.updatePositionStrategy(this.initialOverlayConfig.positionStrategy);
        }
        this.toggled = !this.toggled;
    }
    /**
     * Closes the container e.g. on a button click
     * @param data The data returned when closing the container
     */
    close(data) {
        this._close('close', data);
    }
    _close(type, data) {
        this.overlay.dispose();
        this.afterClosed.next({
            type,
            data
        });
        this.afterClosed.complete();
    }
}

function NgPopoverComponent_div_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelement(0, "div", 4);
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("innerHTML", ctx_r0.content, i0.ɵɵsanitizeHtml);
    }
}
function NgPopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function NgPopoverComponent_ng_container_3_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, NgPopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
    }
}
function NgPopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainer(0);
    }
}
function NgPopoverComponent_ng_container_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵtemplate(1, NgPopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngComponentOutlet", ctx_r2.content);
    }
}
/**
 * The host component that embeds the provided content
 */
class NgPopoverComponent {
    constructor(ngPopoverRef) {
        this.ngPopoverRef = ngPopoverRef;
    }
    ngOnInit() {
        this.content = this.ngPopoverRef.content;
        this.isDraggable = this.ngPopoverRef.isDraggable;
        if (typeof this.content === 'string') {
            this.ngRenderMethod = 'text';
        }
        else if (this.content instanceof TemplateRef) {
            this.ngRenderMethod = 'template';
            this.context = {
                data: this.ngPopoverRef.data,
                close: this.ngPopoverRef.close.bind(this.ngPopoverRef)
            };
        }
        else {
            this.ngRenderMethod = 'component';
        }
    }
}
/** @nocollapse */ /** @nocollapse */ NgPopoverComponent.ɵfac = function NgPopoverComponent_Factory(t) { return new (t || NgPopoverComponent)(i0.ɵɵdirectiveInject(NgPopoverRef)); };
/** @nocollapse */ /** @nocollapse */ NgPopoverComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgPopoverComponent, selectors: [["ng-component"]], decls: 5, vars: 6, consts: [["cdkDrag", "", "cdkDragHandle", "", "cdkDragRootElement", ".cdk-overlay-pane", "id", "ng-popover", 1, "ng-popover", 3, "cdkDragDisabled", "cdkDragBoundary"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]], template: function NgPopoverComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementContainerStart(1, 1);
            i0.ɵɵtemplate(2, NgPopoverComponent_div_2_Template, 1, 1, "div", 2);
            i0.ɵɵtemplate(3, NgPopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
            i0.ɵɵtemplate(4, NgPopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("cdkDragDisabled", !ctx.isDraggable)("cdkDragBoundary", "body");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.ngRenderMethod);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "text");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "template");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "component");
        }
    }, directives: [i2.CdkDrag, i2.CdkDragHandle, i3.NgSwitch, i3.NgSwitchCase, i3.NgTemplateOutlet, i3.NgComponentOutlet], styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgPopoverComponent, [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, template: "<div cdkDrag\n     cdkDragHandle\n     cdkDragRootElement=\".cdk-overlay-pane\"\n     [cdkDragDisabled]=\"!isDraggable\"\n     [cdkDragBoundary]=\"'body'\"\n     id=\"ng-popover\"\n     class=\"ng-popover\">\n  <ng-container [ngSwitch]=\"ngRenderMethod\">\n\n    <div *ngSwitchCase=\"'text'\"\n         [innerHTML]=\"content\"></div>\n\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>", styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"] }]
        }], function () { return [{ type: NgPopoverRef }]; }, null);
})();

/**
 * The NgOverlayContainerService is an injectable service to open a {@link NgPopoverComponent} that behaves as a parent
 * where anything from text, component or template can be embedded dynamically.
 *
 */
class NgOverlayContainerService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
    /**
     * Opens an popover relative to the {@param origin} with the provided {@param content}.
     * @param T The data passed into the container to be available in the embedded e.g. component
     * @param R The response data type returned from the afterClosed$ observable when calling close(data?: R)
     * @param content The dynamic content to be rendered: 'template' | 'component' | 'text'
     * @param origin The origin to which the popover is attached. Not needed if used in combination with NgOverlayContainerConfiguration.useGlobalPositionStrategy = true. If the overlay can't be displayed on the screen, fallback positions are used
     * @param data Any data that is needed in the rendered component (accessible from the component constructor via the PopoverRef (DI)) or in the template via template variable let-data
     * @param configuration Any custom overlay configuration
     * @returns The reference to the NgPopoverRef
     */
    open({ content, origin, data, configuration }) {
        var _a, _b;
        const configurationApplied = Object.assign(Object.assign({}, DEFAULT_OVERLAY_CONFIGURATION), configuration);
        const overlayRef = this.overlay.create(this.getOverlayConfig(origin, configurationApplied));
        if (configuration === null || configuration === void 0 ? void 0 : configuration.panelClass) {
            overlayRef.addPanelClass(configuration.panelClass);
        }
        if (configurationApplied === null || configurationApplied === void 0 ? void 0 : configurationApplied.isResizable) {
            overlayRef.addPanelClass('isResizable');
        }
        const ngPopoverRef = new NgPopoverRef(this.overlay, overlayRef, content, data, (_a = configuration === null || configuration === void 0 ? void 0 : configuration.isDraggable) !== null && _a !== void 0 ? _a : DEFAULT_OVERLAY_CONFIGURATION.isDraggable, (_b = configuration === null || configuration === void 0 ? void 0 : configuration.disableBackdropClose) !== null && _b !== void 0 ? _b : DEFAULT_OVERLAY_CONFIGURATION.disableBackdropClose);
        const injector = this.createInjector(ngPopoverRef, this.injector);
        overlayRef.attach(new ComponentPortal(NgPopoverComponent, null, injector));
        return ngPopoverRef;
    }
    getOverlayConfig(origin, configuration) {
        const config = new OverlayConfig({
            width: configuration.width,
            height: configuration.height,
            hasBackdrop: configuration.hasBackdrop,
            panelClass: DEFAULT_OVERLAY_CONFIGURATION.panelClass,
            backdropClass: configuration.backdropClass,
            positionStrategy: this.getOverlayPosition(origin, configuration),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
        return Object.assign(config, Object.assign(Object.assign({}, (configuration.minWidth && { minWidth: configuration.minWidth })), (configuration.minHeight && { minHeight: configuration.minHeight })
        // ...(configuration.maxWidth && { maxWidth: configuration.maxWidth }),
        // ...(configuration.maxHeight && { maxHeight: configuration.maxHeight })
        ));
    }
    getOverlayPosition(origin, configuration) {
        const positionStrategy = configuration.useGlobalPositionStrategy
            ? this.overlay
                .position()
                .global()
                .centerHorizontally(configuration.offsetX.toString())
                .centerVertically(configuration.offsetY.toString())
            : this.overlay
                .position()
                .flexibleConnectedTo(origin)
                .withPositions(this.getPositions(configuration))
                .withPush(false);
        return positionStrategy;
    }
    getPositions(configuration) {
        return [
            {
                originX: configuration.originX,
                originY: configuration.originY,
                overlayX: configuration.overlayX,
                overlayY: configuration.overlayY,
                offsetX: configuration.offsetX,
                offsetY: configuration.offsetY
            },
            {
                // Bottom
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top'
            },
            {
                // Right
                originX: 'end',
                originY: 'center',
                overlayX: 'start',
                overlayY: 'center'
            },
            {
                // Left
                originX: 'start',
                originY: 'center',
                overlayX: 'end',
                overlayY: 'center'
            },
            {
                // Top
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
            }
        ];
    }
    createInjector(popoverRef, injector) {
        const tokens = new WeakMap([[NgPopoverRef, popoverRef]]);
        return new PortalInjector(injector, tokens);
    }
}
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerService.ɵfac = function NgOverlayContainerService_Factory(t) { return new (t || NgOverlayContainerService)(i0.ɵɵinject(i1.Overlay), i0.ɵɵinject(i0.Injector)); };
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerService.ɵprov = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjectable({ token: NgOverlayContainerService, factory: NgOverlayContainerService.ɵfac });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgOverlayContainerService, [{
            type: Injectable
        }], function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; }, null);
})();

class NgOverlayContainerModule {
}
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerModule.ɵfac = function NgOverlayContainerModule_Factory(t) { return new (t || NgOverlayContainerModule)(); };
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgOverlayContainerModule });
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [NgOverlayContainerService], imports: [[CommonModule, OverlayModule, PortalModule, DragDropModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgOverlayContainerModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, PortalModule, DragDropModule],
                    declarations: [NgPopoverComponent],
                    exports: [NgPopoverComponent],
                    providers: [NgOverlayContainerService]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgOverlayContainerModule, { declarations: [NgPopoverComponent], imports: [CommonModule, OverlayModule, PortalModule, DragDropModule], exports: [NgPopoverComponent] }); })();

/*
 * Public API Surface of ng-overlay-container
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_OVERLAY_CONFIGURATION, NgOverlayContainerModule, NgOverlayContainerService, NgPopoverComponent, NgPopoverRef };
//# sourceMappingURL=ng-overlay-container.mjs.map
