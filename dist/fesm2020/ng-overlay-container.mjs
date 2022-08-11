import * as i1 from '@angular/cdk/overlay';
import { OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector, PortalModule } from '@angular/cdk/portal';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i3 from '@angular/cdk/drag-drop';
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
        this.overlay.updateSize({ width: width ?? currentConfig.width, height: height ?? currentConfig.height });
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
/** @nocollapse */ NgPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgPopoverComponent, deps: [{ token: NgPopoverRef }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NgPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.2", type: NgPopoverComponent, selector: "ng-component", ngImport: i0, template: "<div cdkDrag\n     cdkDragHandle\n     cdkDragRootElement=\".cdk-overlay-pane\"\n     [cdkDragDisabled]=\"!isDraggable\"\n     [cdkDragBoundary]=\"'body'\"\n     id=\"ng-popover\"\n     class=\"ng-popover\">\n  <ng-container [ngSwitch]=\"ngRenderMethod\">\n\n    <div *ngSwitchCase=\"'text'\"\n         [innerHTML]=\"content\"></div>\n\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>", styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i3.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i3.CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgPopoverComponent, decorators: [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, template: "<div cdkDrag\n     cdkDragHandle\n     cdkDragRootElement=\".cdk-overlay-pane\"\n     [cdkDragDisabled]=\"!isDraggable\"\n     [cdkDragBoundary]=\"'body'\"\n     id=\"ng-popover\"\n     class=\"ng-popover\">\n  <ng-container [ngSwitch]=\"ngRenderMethod\">\n\n    <div *ngSwitchCase=\"'text'\"\n         [innerHTML]=\"content\"></div>\n\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>", styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: NgPopoverRef }]; } });

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
        const configurationApplied = { ...DEFAULT_OVERLAY_CONFIGURATION, ...configuration };
        const overlayRef = this.overlay.create(this.getOverlayConfig(origin, configurationApplied));
        if (configuration?.panelClass) {
            overlayRef.addPanelClass(configuration.panelClass);
        }
        if (configurationApplied?.isResizable) {
            overlayRef.addPanelClass('isResizable');
        }
        const ngPopoverRef = new NgPopoverRef(this.overlay, overlayRef, content, data, configuration?.isDraggable ?? DEFAULT_OVERLAY_CONFIGURATION.isDraggable, configuration?.disableBackdropClose ?? DEFAULT_OVERLAY_CONFIGURATION.disableBackdropClose);
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
        return Object.assign(config, {
            ...(configuration.minWidth && { minWidth: configuration.minWidth }),
            ...(configuration.minHeight && { minHeight: configuration.minHeight })
            // ...(configuration.maxWidth && { maxWidth: configuration.maxWidth }),
            // ...(configuration.maxHeight && { maxHeight: configuration.maxHeight })
        });
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
/** @nocollapse */ NgOverlayContainerService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerService, deps: [{ token: i1.Overlay }, { token: i0.Injector }], target: i0.ɵɵFactoryTarget.Injectable });
/** @nocollapse */ NgOverlayContainerService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: i1.Overlay }, { type: i0.Injector }]; } });

class NgOverlayContainerModule {
}
/** @nocollapse */ NgOverlayContainerModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
/** @nocollapse */ NgOverlayContainerModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerModule, declarations: [NgPopoverComponent], imports: [CommonModule, OverlayModule, PortalModule, DragDropModule], exports: [NgPopoverComponent] });
/** @nocollapse */ NgOverlayContainerModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerModule, providers: [NgOverlayContainerService], imports: [CommonModule, OverlayModule, PortalModule, DragDropModule] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgOverlayContainerModule, decorators: [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, OverlayModule, PortalModule, DragDropModule],
                    declarations: [NgPopoverComponent],
                    exports: [NgPopoverComponent],
                    providers: [NgOverlayContainerService]
                }]
        }] });

/*
 * Public API Surface of ng-overlay-container
 */

/**
 * Generated bundle index. Do not edit.
 */

export { DEFAULT_OVERLAY_CONFIGURATION, NgOverlayContainerModule, NgOverlayContainerService, NgPopoverComponent, NgPopoverRef };
//# sourceMappingURL=ng-overlay-container.mjs.map
