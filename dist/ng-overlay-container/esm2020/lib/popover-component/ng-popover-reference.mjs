import { Subject } from 'rxjs';
/**
 * The reference to the popover container.
 * @param T The data passed into the container to be available in the embedded e.g. component
 * @param R The response data type returned from the afterClosed$ observable when calling close(data?: R)
 */
export class NgPopoverRef {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9wb3Zlci1yZWZlcmVuY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1vdmVybGF5LWNvbnRhaW5lci9zcmMvbGliL3BvcG92ZXItY29tcG9uZW50L25nLXBvcG92ZXItcmVmZXJlbmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFJL0I7Ozs7R0FJRztBQUNILE1BQU0sT0FBTyxZQUFZO0lBVXZCLFlBQ1UsUUFBaUIsRUFDbEIsT0FBbUIsRUFDbkIsT0FBa0MsRUFDbEMsSUFBTyxFQUNQLFdBQXFCLEVBQ3JCLG9CQUE4QjtRQUw3QixhQUFRLEdBQVIsUUFBUSxDQUFTO1FBQ2xCLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFDbkIsWUFBTyxHQUFQLE9BQU8sQ0FBMkI7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBRztRQUNQLGdCQUFXLEdBQVgsV0FBVyxDQUFVO1FBQ3JCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBVTtRQWYvQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUEwQixDQUFDO1FBSTVEOztXQUVHO1FBQ0ksaUJBQVksR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQVksRUFBRSxDQUFDO1FBVXBELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQ3pCLE9BQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUM3RTtJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTSxDQUFDLEtBQWMsRUFBRSxNQUFlO1FBQzNDLE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sSUFBSSxhQUFhLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztJQUMzRyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxjQUFjO1FBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2pCLElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQ2pDLElBQUksQ0FBQyxRQUFRO2lCQUNWLFFBQVEsRUFBRTtpQkFDVixtQkFBbUIsQ0FBQyxFQUFpQixDQUFDO2lCQUN0QyxhQUFhLENBQUM7Z0JBQ2I7b0JBQ0UsT0FBTyxFQUFFLFFBQVE7b0JBQ2pCLE9BQU8sRUFBRSxRQUFRO29CQUNqQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsUUFBUSxFQUFFLEtBQUs7b0JBQ2YsT0FBTyxFQUFFLENBQUM7b0JBQ1YsT0FBTyxFQUFFLENBQUM7aUJBQ1g7YUFDRixDQUFDLENBQ0wsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQztTQUM1RDthQUFNO1lBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUM7Z0JBQ3RCLEtBQUssRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsS0FBSztnQkFDdEMsTUFBTSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNO2FBQ3pDLENBQUMsQ0FBQztZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDakY7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUMvQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksS0FBSyxDQUFDLElBQVE7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVPLE1BQU0sQ0FBQyxJQUF3QixFQUFFLElBQU87UUFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztZQUNwQixJQUFJO1lBQ0osSUFBSTtTQUNMLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5nT3ZlcmxheUNvbnRhaW5lckNvbnRlbnQgfSBmcm9tICcuLi9tb2RlbHMvbmctb3ZlcmxheS1jb250YWluZXItY29udGVudC50eXBlJztcbmltcG9ydCB7IE5nUG9wb3ZlckNsb3NlRXZlbnQsIE5nUG9wb3ZlckNsb3NlVHlwZSB9IGZyb20gJy4uL21vZGVscy9uZy1wb3BvdmVyLWNsb3NlLWV2ZW50LmludGVyZmFjZSc7XG5cbi8qKlxuICogVGhlIHJlZmVyZW5jZSB0byB0aGUgcG9wb3ZlciBjb250YWluZXIuXG4gKiBAcGFyYW0gVCBUaGUgZGF0YSBwYXNzZWQgaW50byB0aGUgY29udGFpbmVyIHRvIGJlIGF2YWlsYWJsZSBpbiB0aGUgZW1iZWRkZWQgZS5nLiBjb21wb25lbnRcbiAqIEBwYXJhbSBSIFRoZSByZXNwb25zZSBkYXRhIHR5cGUgcmV0dXJuZWQgZnJvbSB0aGUgYWZ0ZXJDbG9zZWQkIG9ic2VydmFibGUgd2hlbiBjYWxsaW5nIGNsb3NlKGRhdGE/OiBSKVxuICovXG5leHBvcnQgY2xhc3MgTmdQb3BvdmVyUmVmPFQgPSBhbnksIFIgPSBhbnk+IHtcbiAgcHJpdmF0ZSBhZnRlckNsb3NlZCA9IG5ldyBTdWJqZWN0PE5nUG9wb3ZlckNsb3NlRXZlbnQ8Uj4+KCk7XG4gIHByaXZhdGUgaW5pdGlhbE92ZXJsYXlDb25maWc6IE92ZXJsYXlDb25maWc7XG4gIHByaXZhdGUgdG9nZ2xlZDogYm9vbGVhbjtcblxuICAvKipcbiAgICogT2JzZXJ2YWJsZSB0byByZXRyaWV2ZSB0aGUgcmV0dXJuZWQgZGF0YVxuICAgKi9cbiAgcHVibGljIGFmdGVyQ2xvc2VkJCA9IHRoaXMuYWZ0ZXJDbG9zZWQuYXNPYnNlcnZhYmxlKCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfb3ZlcmxheTogT3ZlcmxheSxcbiAgICBwdWJsaWMgb3ZlcmxheTogT3ZlcmxheVJlZixcbiAgICBwdWJsaWMgY29udGVudDogTmdPdmVybGF5Q29udGFpbmVyQ29udGVudCxcbiAgICBwdWJsaWMgZGF0YTogVCxcbiAgICBwdWJsaWMgaXNEcmFnZ2FibGU/OiBib29sZWFuLFxuICAgIHB1YmxpYyBkaXNhYmxlQmFja2Ryb3BDbG9zZT86IGJvb2xlYW5cbiAgKSB7XG4gICAgdGhpcy5pbml0aWFsT3ZlcmxheUNvbmZpZyA9IG92ZXJsYXkuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy50b2dnbGVkID0gZmFsc2U7XG4gICAgaWYgKCFkaXNhYmxlQmFja2Ryb3BDbG9zZSkge1xuICAgICAgb3ZlcmxheS5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuX2Nsb3NlKCdiYWNrZHJvcENsaWNrJywgbnVsbCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIG5ldyB3aWR0aCBhbmQvb3IgaGVpZ2h0IHZhbHVlcy4gSWYgb21pdHRlZCB0aGUgY3VycmVudCB2YWx1ZSBpcyB1c2VkXG4gICAqIEBwYXJhbSB3aWR0aCBUaGUgbmV3IHdpZHRoXG4gICAqIEBwYXJhbSBoZWlnaHQgVGhlIG5ldyBoZWlnaHRcbiAgICovXG4gIHB1YmxpYyByZXNpemUod2lkdGg/OiBzdHJpbmcsIGhlaWdodD86IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnRDb25maWcgPSB0aGlzLm92ZXJsYXkuZ2V0Q29uZmlnKCk7XG4gICAgdGhpcy5vdmVybGF5LnVwZGF0ZVNpemUoeyB3aWR0aDogd2lkdGggPz8gY3VycmVudENvbmZpZy53aWR0aCwgaGVpZ2h0OiBoZWlnaHQgPz8gY3VycmVudENvbmZpZy5oZWlnaHQgfSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlIG1heGltaXplIG9mIHRoZSBvdmVybGF5XG4gICAqL1xuICBwdWJsaWMgdG9nZ2xlTWF4aW1pemUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnRvZ2dsZWQpIHtcbiAgICAgIHRoaXMub3ZlcmxheS51cGRhdGVQb3NpdGlvblN0cmF0ZWd5KFxuICAgICAgICB0aGlzLl9vdmVybGF5XG4gICAgICAgICAgLnBvc2l0aW9uKClcbiAgICAgICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh7fSBhcyBIVE1MRWxlbWVudClcbiAgICAgICAgICAud2l0aFBvc2l0aW9ucyhbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9yaWdpblg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcbiAgICAgICAgICAgICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgICAgICAgICAgICBvdmVybGF5WTogJ3RvcCcsXG4gICAgICAgICAgICAgIG9mZnNldFg6IDAsXG4gICAgICAgICAgICAgIG9mZnNldFk6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgKTtcbiAgICAgIHRoaXMub3ZlcmxheS51cGRhdGVTaXplKHsgd2lkdGg6ICcxMDAlJywgaGVpZ2h0OiAnMTAwJScgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3ZlcmxheS51cGRhdGVTaXplKHtcbiAgICAgICAgd2lkdGg6IHRoaXMuaW5pdGlhbE92ZXJsYXlDb25maWcud2lkdGgsXG4gICAgICAgIGhlaWdodDogdGhpcy5pbml0aWFsT3ZlcmxheUNvbmZpZy5oZWlnaHRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5vdmVybGF5LnVwZGF0ZVBvc2l0aW9uU3RyYXRlZ3kodGhpcy5pbml0aWFsT3ZlcmxheUNvbmZpZy5wb3NpdGlvblN0cmF0ZWd5KTtcbiAgICB9XG4gICAgdGhpcy50b2dnbGVkID0gIXRoaXMudG9nZ2xlZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGNvbnRhaW5lciBlLmcuIG9uIGEgYnV0dG9uIGNsaWNrXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBkYXRhIHJldHVybmVkIHdoZW4gY2xvc2luZyB0aGUgY29udGFpbmVyXG4gICAqL1xuICBwdWJsaWMgY2xvc2UoZGF0YT86IFIpOiB2b2lkIHtcbiAgICB0aGlzLl9jbG9zZSgnY2xvc2UnLCBkYXRhKTtcbiAgfVxuXG4gIHByaXZhdGUgX2Nsb3NlKHR5cGU6IE5nUG9wb3ZlckNsb3NlVHlwZSwgZGF0YTogUik6IHZvaWQge1xuICAgIHRoaXMub3ZlcmxheS5kaXNwb3NlKCk7XG4gICAgdGhpcy5hZnRlckNsb3NlZC5uZXh0KHtcbiAgICAgIHR5cGUsXG4gICAgICBkYXRhXG4gICAgfSk7XG4gICAgdGhpcy5hZnRlckNsb3NlZC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=