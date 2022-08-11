import { Overlay } from '@angular/cdk/overlay';
import { Injector } from '@angular/core';
import { NgOverlayContainerParameters } from './models/ng-overlay-container-parameters.interface';
import { NgPopoverRef } from './popover-component/ng-popover-reference';
import * as i0 from "@angular/core";
/**
 * The NgOverlayContainerService is an injectable service to open a {@link NgPopoverComponent} that behaves as a parent
 * where anything from text, component or template can be embedded dynamically.
 *
 */
export declare class NgOverlayContainerService {
    private overlay;
    private injector;
    constructor(overlay: Overlay, injector: Injector);
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
    open<T = any, R = any>({ content, origin, data, configuration }: NgOverlayContainerParameters<T>): NgPopoverRef<T, R>;
    private getOverlayConfig;
    private getOverlayPosition;
    private getPositions;
    private createInjector;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgOverlayContainerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgOverlayContainerService>;
}
