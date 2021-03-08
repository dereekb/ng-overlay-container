import { OverlayRef } from '@angular/cdk/overlay';
import { Subject } from 'rxjs';
import { NgOverlayContainerContent } from '../models/ng-overlay-container-content.type';
import { NgPopoverCloseEvent, NgPopoverCloseType } from '../models/ng-popover-close-event.interface';

/**
 * The reference to the popover container.
 * @param T The data passed into the container to be available in the embedded e.g. component
 * @param R The response data type returned from the afterClosed$ observable when calling close(data?: R)
 */
export class NgPopoverRef<T = any, R = any> {
  private afterClosed = new Subject<NgPopoverCloseEvent<R>>();

  /**
   * Observable to retrieve the returned data
   */
  public afterClosed$ = this.afterClosed.asObservable();

  constructor(
    public overlay: OverlayRef,
    public content: NgOverlayContainerContent,
    public data: T,
    public isDraggable?: boolean
  ) {
    overlay.backdropClick().subscribe(() => this._close('backdropClick', null));
  }

  /**
   * Sets new width and/or height values. If omitted the current value is used
   * @param width The new width
   * @param height The new height
   */
  public resize(width?: string, height?: string): void {
    const currentConfig = this.overlay.getConfig();
    this.overlay.updateSize({ width: width ?? currentConfig.width, height: height ?? currentConfig.height });
  }

  /**
   * Closes the container e.g. on a button click
   * @param data The data returned when closing the container
   */
  public close(data?: R): void {
    this._close('close', data);
  }

  private _close(type: NgPopoverCloseType, data: R): void {
    this.overlay.dispose();
    this.afterClosed.next({
      type,
      data
    });
    this.afterClosed.complete();
  }
}
