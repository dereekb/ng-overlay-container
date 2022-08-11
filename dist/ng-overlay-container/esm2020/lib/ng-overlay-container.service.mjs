import { OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { DEFAULT_OVERLAY_CONFIGURATION } from './models/ng-overlay-container-configuration.interface';
import { NgPopoverRef } from './popover-component/ng-popover-reference';
import { NgPopoverComponent } from './popover-component/ng-popover.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/**
 * The NgOverlayContainerService is an injectable service to open a {@link NgPopoverComponent} that behaves as a parent
 * where anything from text, component or template can be embedded dynamically.
 *
 */
export class NgOverlayContainerService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3ZlcmxheS1jb250YWluZXIuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25nLW92ZXJsYXktY29udGFpbmVyL3NyYy9saWIvbmctb3ZlcmxheS1jb250YWluZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQW1DLGFBQWEsRUFBb0IsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RyxPQUFPLEVBQUUsZUFBZSxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxVQUFVLEVBQVksTUFBTSxlQUFlLENBQUM7QUFDckQsT0FBTyxFQUNMLDZCQUE2QixFQUU5QixNQUFNLHVEQUF1RCxDQUFDO0FBRS9ELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQzs7O0FBRTlFOzs7O0dBSUc7QUFFSCxNQUFNLE9BQU8seUJBQXlCO0lBQ3BDLFlBQTJCLE9BQWdCLEVBQVUsUUFBa0I7UUFBNUMsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7SUFBRyxDQUFDO0lBRTNFOzs7Ozs7Ozs7T0FTRztJQUNJLElBQUksQ0FBbUIsRUFDNUIsT0FBTyxFQUNQLE1BQU0sRUFDTixJQUFJLEVBQ0osYUFBYSxFQUNtQjtRQUNoQyxNQUFNLG9CQUFvQixHQUFHLEVBQUUsR0FBRyw2QkFBNkIsRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFDO1FBQ3BGLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDO1FBRTVGLElBQUksYUFBYSxFQUFFLFVBQVUsRUFBRTtZQUM3QixVQUFVLENBQUMsYUFBYSxDQUFDLGFB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QUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxLQUFLO2FBQ2hCO1lBQ0Q7Z0JBQ0UsUUFBUTtnQkFDUixPQUFPLEVBQUUsS0FBSztnQkFDZCxPQUFPLEVBQUUsUUFBUTtnQkFDakIsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1lBQ0Q7Z0JBQ0UsT0FBTztnQkFDUCxPQUFPLEVBQUUsT0FBTztnQkFDaEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1lBQ0Q7Z0JBQ0UsTUFBTTtnQkFDTixPQUFPLEVBQUUsUUFBUTtnQkFDakIsT0FBTyxFQUFFLEtBQUs7Z0JBQ2QsUUFBUSxFQUFFLFFBQVE7Z0JBQ2xCLFFBQVEsRUFBRSxRQUFRO2FBQ25CO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFTyxjQUFjLENBQUMsVUFBd0IsRUFBRSxRQUFrQjtRQUNqRSxNQUFNLE1BQU0sR0FBRyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxPQUFPLElBQUksY0FBYyxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QyxDQUFDOzt5SUE1SFUseUJBQXlCOzZJQUF6Qix5QkFBeUI7MkZBQXpCLHlCQUF5QjtrQkFEckMsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIsIE92ZXJsYXksIE92ZXJsYXlDb25maWcsIFBvc2l0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBDb21wb25lbnRQb3J0YWwsIFBvcnRhbEluamVjdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgREVGQVVMVF9PVkVSTEFZX0NPTkZJR1VSQVRJT04sXG4gIE5nT3ZlcmxheUNvbnRhaW5lckNvbmZpZ3VyYXRpb25cbn0gZnJvbSAnLi9tb2RlbHMvbmctb3ZlcmxheS1jb250YWluZXItY29uZmlndXJhdGlvbi5pbnRlcmZhY2UnO1xuaW1wb3J0IHsgTmdPdmVybGF5Q29udGFpbmVyUGFyYW1ldGVycyB9IGZyb20gJy4vbW9kZWxzL25nLW92ZXJsYXktY29udGFpbmVyLXBhcmFtZXRlcnMuaW50ZXJmYWNlJztcbmltcG9ydCB7IE5nUG9wb3ZlclJlZiB9IGZyb20gJy4vcG9wb3Zlci1jb21wb25lbnQvbmctcG9wb3Zlci1yZWZlcmVuY2UnO1xuaW1wb3J0IHsgTmdQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLWNvbXBvbmVudC9uZy1wb3BvdmVyLmNvbXBvbmVudCc7XG5cbi8qKlxuICogVGhlIE5nT3ZlcmxheUNvbnRhaW5lclNlcnZpY2UgaXMgYW4gaW5qZWN0YWJsZSBzZXJ2aWNlIHRvIG9wZW4gYSB7QGxpbmsgTmdQb3BvdmVyQ29tcG9uZW50fSB0aGF0IGJlaGF2ZXMgYXMgYSBwYXJlbnRcbiAqIHdoZXJlIGFueXRoaW5nIGZyb20gdGV4dCwgY29tcG9uZW50IG9yIHRlbXBsYXRlIGNhbiBiZSBlbWJlZGRlZCBkeW5hbWljYWxseS5cbiAqXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOZ092ZXJsYXlDb250YWluZXJTZXJ2aWNlIHtcbiAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSwgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IpIHt9XG5cbiAgLyoqXG4gICAqIE9wZW5zIGFuIHBvcG92ZXIgcmVsYXRpdmUgdG8gdGhlIHtAcGFyYW0gb3JpZ2lufSB3aXRoIHRoZSBwcm92aWRlZCB7QHBhcmFtIGNvbnRlbnR9LlxuICAgKiBAcGFyYW0gVCBUaGUgZGF0YSBwYXNzZWQgaW50byB0aGUgY29udGFpbmVyIHRvIGJlIGF2YWlsYWJsZSBpbiB0aGUgZW1iZWRkZWQgZS5nLiBjb21wb25lbnRcbiAgICogQHBhcmFtIFIgVGhlIHJlc3BvbnNlIGRhdGEgdHlwZSByZXR1cm5lZCBmcm9tIHRoZSBhZnRlckNsb3NlZCQgb2JzZXJ2YWJsZSB3aGVuIGNhbGxpbmcgY2xvc2UoZGF0YT86IFIpXG4gICAqIEBwYXJhbSBjb250ZW50IFRoZSBkeW5hbWljIGNvbnRlbnQgdG8gYmUgcmVuZGVyZWQ6ICd0ZW1wbGF0ZScgfCAnY29tcG9uZW50JyB8ICd0ZXh0J1xuICAgKiBAcGFyYW0gb3JpZ2luIFRoZSBvcmlnaW4gdG8gd2hpY2ggdGhlIHBvcG92ZXIgaXMgYXR0YWNoZWQuIE5vdCBuZWVkZWQgaWYgdXNlZCBpbiBjb21iaW5hdGlvbiB3aXRoIE5nT3ZlcmxheUNvbnRhaW5lckNvbmZpZ3VyYXRpb24udXNlR2xvYmFsUG9zaXRpb25TdHJhdGVneSA9IHRydWUuIElmIHRoZSBvdmVybGF5IGNhbid0IGJlIGRpc3BsYXllZCBvbiB0aGUgc2NyZWVuLCBmYWxsYmFjayBwb3NpdGlvbnMgYXJlIHVzZWRcbiAgICogQHBhcmFtIGRhdGEgQW55IGRhdGEgdGhhdCBpcyBuZWVkZWQgaW4gdGhlIHJlbmRlcmVkIGNvbXBvbmVudCAoYWNjZXNzaWJsZSBmcm9tIHRoZSBjb21wb25lbnQgY29uc3RydWN0b3IgdmlhIHRoZSBQb3BvdmVyUmVmIChESSkpIG9yIGluIHRoZSB0ZW1wbGF0ZSB2aWEgdGVtcGxhdGUgdmFyaWFibGUgbGV0LWRhdGFcbiAgICogQHBhcmFtIGNvbmZpZ3VyYXRpb24gQW55IGN1c3RvbSBvdmVybGF5IGNvbmZpZ3VyYXRpb25cbiAgICogQHJldHVybnMgVGhlIHJlZmVyZW5jZSB0byB0aGUgTmdQb3BvdmVyUmVmXG4gICAqL1xuICBwdWJsaWMgb3BlbjxUID0gYW55LCBSID0gYW55Pih7XG4gICAgY29udGVudCxcbiAgICBvcmlnaW4sXG4gICAgZGF0YSxcbiAgICBjb25maWd1cmF0aW9uXG4gIH06IE5nT3ZlcmxheUNvbnRhaW5lclBhcmFtZXRlcnM8VD4pOiBOZ1BvcG92ZXJSZWY8VCwgUj4ge1xuICAgIGNvbnN0IGNvbmZpZ3VyYXRpb25BcHBsaWVkID0geyAuLi5ERUZBVUxUX09WRVJMQVlfQ09ORklHVVJBVElPTiwgLi4uY29uZmlndXJhdGlvbiB9O1xuICAgIGNvbnN0IG92ZXJsYXlSZWYgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKHRoaXMuZ2V0T3ZlcmxheUNvbmZpZyhvcmlnaW4sIGNvbmZpZ3VyYXRpb25BcHBsaWVkKSk7XG5cbiAgICBpZiAoY29uZmlndXJhdGlvbj8ucGFuZWxDbGFzcykge1xuICAgICAgb3ZlcmxheVJlZi5hZGRQYW5lbENsYXNzKGNvbmZpZ3VyYXRpb24ucGFuZWxDbGFzcyk7XG4gICAgfVxuXG4gICAgaWYgKGNvbmZpZ3VyYXRpb25BcHBsaWVkPy5pc1Jlc2l6YWJsZSkge1xuICAgICAgb3ZlcmxheVJlZi5hZGRQYW5lbENsYXNzKCdpc1Jlc2l6YWJsZScpO1xuICAgIH1cblxuICAgIGNvbnN0IG5nUG9wb3ZlclJlZiA9IG5ldyBOZ1BvcG92ZXJSZWY8VCwgUj4oXG4gICAgICB0aGlzLm92ZXJsYXksXG4gICAgICBvdmVybGF5UmVmLFxuICAgICAgY29udGVudCxcbiAgICAgIGRhdGEsXG4gICAgICBjb25maWd1cmF0aW9uPy5pc0RyYWdnYWJsZSA/PyBERUZBVUxUX09WRVJMQVlfQ09ORklHVVJBVElPTi5pc0RyYWdnYWJsZSxcbiAgICAgIGNvbmZpZ3VyYXRpb24/LmRpc2FibGVCYWNrZHJvcENsb3NlID8/IERFRkFVTFRfT1ZFUkxBWV9DT05GSUdVUkFUSU9OLmRpc2FibGVCYWNrZHJvcENsb3NlXG4gICAgKTtcblxuICAgIGNvbnN0IGluamVjdG9yID0gdGhpcy5jcmVhdGVJbmplY3RvcihuZ1BvcG92ZXJSZWYsIHRoaXMuaW5qZWN0b3IpO1xuICAgIG92ZXJsYXlSZWYuYXR0YWNoKG5ldyBDb21wb25lbnRQb3J0YWwoTmdQb3BvdmVyQ29tcG9uZW50LCBudWxsLCBpbmplY3RvcikpO1xuXG4gICAgcmV0dXJuIG5nUG9wb3ZlclJlZjtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3ZlcmxheUNvbmZpZyhvcmlnaW46IEhUTUxFbGVtZW50LCBjb25maWd1cmF0aW9uOiBOZ092ZXJsYXlDb250YWluZXJDb25maWd1cmF0aW9uKTogT3ZlcmxheUNvbmZpZyB7XG4gICAgY29uc3QgY29uZmlnID0gbmV3IE92ZXJsYXlDb25maWcoe1xuICAgICAgd2lkdGg6IGNvbmZpZ3VyYXRpb24ud2lkdGgsXG4gICAgICBoZWlnaHQ6IGNvbmZpZ3VyYXRpb24uaGVpZ2h0LFxuICAgICAgaGFzQmFja2Ryb3A6IGNvbmZpZ3VyYXRpb24uaGFzQmFja2Ryb3AsXG4gICAgICBwYW5lbENsYXNzOiBERUZBVUxUX09WRVJMQVlfQ09ORklHVVJBVElPTi5wYW5lbENsYXNzLFxuICAgICAgYmFja2Ryb3BDbGFzczogY29uZmlndXJhdGlvbi5iYWNrZHJvcENsYXNzLFxuICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5nZXRPdmVybGF5UG9zaXRpb24ob3JpZ2luLCBjb25maWd1cmF0aW9uKSxcbiAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLm92ZXJsYXkuc2Nyb2xsU3RyYXRlZ2llcy5yZXBvc2l0aW9uKClcbiAgICB9KTtcblxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKGNvbmZpZywge1xuICAgICAgLi4uKGNvbmZpZ3VyYXRpb24ubWluV2lkdGggJiYgeyBtaW5XaWR0aDogY29uZmlndXJhdGlvbi5taW5XaWR0aCB9KSxcbiAgICAgIC4uLihjb25maWd1cmF0aW9uLm1pbkhlaWdodCAmJiB7IG1pbkhlaWdodDogY29uZmlndXJhdGlvbi5taW5IZWlnaHQgfSlcbiAgICAgIC8vIC4uLihjb25maWd1cmF0aW9uLm1heFdpZHRoICYmIHsgbWF4V2lkdGg6IGNvbmZpZ3VyYXRpb24ubWF4V2lkdGggfSksXG4gICAgICAvLyAuLi4oY29uZmlndXJhdGlvbi5tYXhIZWlnaHQgJiYgeyBtYXhIZWlnaHQ6IGNvbmZpZ3VyYXRpb24ubWF4SGVpZ2h0IH0pXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGdldE92ZXJsYXlQb3NpdGlvbihvcmlnaW46IEhUTUxFbGVtZW50LCBjb25maWd1cmF0aW9uOiBOZ092ZXJsYXlDb250YWluZXJDb25maWd1cmF0aW9uKTogUG9zaXRpb25TdHJhdGVneSB7XG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IGNvbmZpZ3VyYXRpb24udXNlR2xvYmFsUG9zaXRpb25TdHJhdGVneVxuICAgICAgPyB0aGlzLm92ZXJsYXlcbiAgICAgICAgICAucG9zaXRpb24oKVxuICAgICAgICAgIC5nbG9iYWwoKVxuICAgICAgICAgIC5jZW50ZXJIb3Jpem9udGFsbHkoY29uZmlndXJhdGlvbi5vZmZzZXRYLnRvU3RyaW5nKCkpXG4gICAgICAgICAgLmNlbnRlclZlcnRpY2FsbHkoY29uZmlndXJhdGlvbi5vZmZzZXRZLnRvU3RyaW5nKCkpXG4gICAgICA6IHRoaXMub3ZlcmxheVxuICAgICAgICAgIC5wb3NpdGlvbigpXG4gICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8ob3JpZ2luKVxuICAgICAgICAgIC53aXRoUG9zaXRpb25zKHRoaXMuZ2V0UG9zaXRpb25zKGNvbmZpZ3VyYXRpb24pKVxuICAgICAgICAgIC53aXRoUHVzaChmYWxzZSk7XG5cbiAgICByZXR1cm4gcG9zaXRpb25TdHJhdGVneTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0UG9zaXRpb25zKGNvbmZpZ3VyYXRpb246IE5nT3ZlcmxheUNvbnRhaW5lckNvbmZpZ3VyYXRpb24pOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyW10ge1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIG9yaWdpblg6IGNvbmZpZ3VyYXRpb24ub3JpZ2luWCxcbiAgICAgICAgb3JpZ2luWTogY29uZmlndXJhdGlvbi5vcmlnaW5ZLFxuICAgICAgICBvdmVybGF5WDogY29uZmlndXJhdGlvbi5vdmVybGF5WCxcbiAgICAgICAgb3ZlcmxheVk6IGNvbmZpZ3VyYXRpb24ub3ZlcmxheVksXG4gICAgICAgIG9mZnNldFg6IGNvbmZpZ3VyYXRpb24ub2Zmc2V0WCxcbiAgICAgICAgb2Zmc2V0WTogY29uZmlndXJhdGlvbi5vZmZzZXRZXG4gICAgICB9LCAvLyBGYWxsYmFjayBwb3NpdGlvbnMgaWYgcHJvdmlkZWQgcG9zaXRpb24gaXMgbm90IHBvc3NpYmxlXG4gICAgICB7XG4gICAgICAgIC8vIEJvdHRvbVxuICAgICAgICBvcmlnaW5YOiAnY2VudGVyJyxcbiAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXG4gICAgICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICAgICAgb3ZlcmxheVk6ICd0b3AnXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBSaWdodFxuICAgICAgICBvcmlnaW5YOiAnZW5kJyxcbiAgICAgICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgICAgICBvdmVybGF5WTogJ2NlbnRlcidcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIC8vIExlZnRcbiAgICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcbiAgICAgICAgb3JpZ2luWTogJ2NlbnRlcicsXG4gICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICAgICAgb3ZlcmxheVk6ICdjZW50ZXInXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICAvLyBUb3BcbiAgICAgICAgb3JpZ2luWDogJ2NlbnRlcicsXG4gICAgICAgIG9yaWdpblk6ICd0b3AnLFxuICAgICAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUluamVjdG9yKHBvcG92ZXJSZWY6IE5nUG9wb3ZlclJlZiwgaW5qZWN0b3I6IEluamVjdG9yKTogUG9ydGFsSW5qZWN0b3Ige1xuICAgIGNvbnN0IHRva2VucyA9IG5ldyBXZWFrTWFwKFtbTmdQb3BvdmVyUmVmLCBwb3BvdmVyUmVmXV0pO1xuICAgIHJldHVybiBuZXcgUG9ydGFsSW5qZWN0b3IoaW5qZWN0b3IsIHRva2Vucyk7XG4gIH1cbn1cbiJdfQ==