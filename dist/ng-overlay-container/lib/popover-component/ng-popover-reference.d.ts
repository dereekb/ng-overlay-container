import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { NgOverlayContainerContent } from '../models/ng-overlay-container-content.type';
import { NgPopoverCloseEvent } from '../models/ng-popover-close-event.interface';
/**
 * The reference to the popover container.
 * @param T The data passed into the container to be available in the embedded e.g. component
 * @param R The response data type returned from the afterClosed$ observable when calling close(data?: R)
 */
export declare class NgPopoverRef<T = any, R = any> {
    private _overlay;
    overlay: OverlayRef;
    content: NgOverlayContainerContent;
    data: T;
    isDraggable?: boolean;
    disableBackdropClose?: boolean;
    private afterClosed;
    private initialOverlayConfig;
    private toggled;
    /**
     * Observable to retrieve the returned data
     */
    afterClosed$: import("rxjs").Observable<NgPopoverCloseEvent<R>>;
    constructor(_overlay: Overlay, overlay: OverlayRef, content: NgOverlayContainerContent, data: T, isDraggable?: boolean, disableBackdropClose?: boolean);
    /**
     * Sets new width and/or height values. If omitted the current value is used
     * @param width The new width
     * @param height The new height
     */
    resize(width?: string, height?: string): void;
    /**
     * Toggle maximize of the overlay
     */
    toggleMaximize(): void;
    /**
     * Closes the container e.g. on a button click
     * @param data The data returned when closing the container
     */
    close(data?: R): void;
    private _close;
}
