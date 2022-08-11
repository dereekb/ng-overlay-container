import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ng-popover-reference";
import * as i2 from "@angular/common";
import * as i3 from "@angular/cdk/drag-drop";
/**
 * The host component that embeds the provided content
 */
export class NgPopoverComponent {
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
/** @nocollapse */ NgPopoverComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgPopoverComponent, deps: [{ token: i1.NgPopoverRef }], target: i0.ɵɵFactoryTarget.Component });
/** @nocollapse */ NgPopoverComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "14.1.2", type: NgPopoverComponent, selector: "ng-component", ngImport: i0, template: "<div cdkDrag\n     cdkDragHandle\n     cdkDragRootElement=\".cdk-overlay-pane\"\n     [cdkDragDisabled]=\"!isDraggable\"\n     [cdkDragBoundary]=\"'body'\"\n     id=\"ng-popover\"\n     class=\"ng-popover\">\n  <ng-container [ngSwitch]=\"ngRenderMethod\">\n\n    <div *ngSwitchCase=\"'text'\"\n         [innerHTML]=\"content\"></div>\n\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>", styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"], dependencies: [{ kind: "directive", type: i2.NgComponentOutlet, selector: "[ngComponentOutlet]", inputs: ["ngComponentOutlet", "ngComponentOutletInjector", "ngComponentOutletContent", "ngComponentOutletNgModule", "ngComponentOutletNgModuleFactory"] }, { kind: "directive", type: i2.NgTemplateOutlet, selector: "[ngTemplateOutlet]", inputs: ["ngTemplateOutletContext", "ngTemplateOutlet", "ngTemplateOutletInjector"] }, { kind: "directive", type: i2.NgSwitch, selector: "[ngSwitch]", inputs: ["ngSwitch"] }, { kind: "directive", type: i2.NgSwitchCase, selector: "[ngSwitchCase]", inputs: ["ngSwitchCase"] }, { kind: "directive", type: i3.CdkDrag, selector: "[cdkDrag]", inputs: ["cdkDragData", "cdkDragLockAxis", "cdkDragRootElement", "cdkDragBoundary", "cdkDragStartDelay", "cdkDragFreeDragPosition", "cdkDragDisabled", "cdkDragConstrainPosition", "cdkDragPreviewClass", "cdkDragPreviewContainer"], outputs: ["cdkDragStarted", "cdkDragReleased", "cdkDragEnded", "cdkDragEntered", "cdkDragExited", "cdkDragDropped", "cdkDragMoved"], exportAs: ["cdkDrag"] }, { kind: "directive", type: i3.CdkDragHandle, selector: "[cdkDragHandle]", inputs: ["cdkDragHandleDisabled"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "14.1.2", ngImport: i0, type: NgPopoverComponent, decorators: [{
            type: Component,
            args: [{ encapsulation: ViewEncapsulation.None, template: "<div cdkDrag\n     cdkDragHandle\n     cdkDragRootElement=\".cdk-overlay-pane\"\n     [cdkDragDisabled]=\"!isDraggable\"\n     [cdkDragBoundary]=\"'body'\"\n     id=\"ng-popover\"\n     class=\"ng-popover\">\n  <ng-container [ngSwitch]=\"ngRenderMethod\">\n\n    <div *ngSwitchCase=\"'text'\"\n         [innerHTML]=\"content\"></div>\n\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>", styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NgPopoverRef }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1vdmVybGF5LWNvbnRhaW5lci9zcmMvbGliL3BvcG92ZXItY29tcG9uZW50L25nLXBvcG92ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctb3ZlcmxheS1jb250YWluZXIvc3JjL2xpYi9wb3BvdmVyLWNvbXBvbmVudC9uZy1wb3BvdmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztBQUtsRjs7R0FFRztBQU1ILE1BQU0sT0FBTyxrQkFBa0I7SUFNM0IsWUFBMkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRXpELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFFakQsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7Z0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN6RCxDQUFDO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQzs7a0lBdkJRLGtCQUFrQjtzSEFBbEIsa0JBQWtCLG9EQ2IvQixzcEJBcUJNOzJGRFJPLGtCQUFrQjtrQkFMOUIsU0FBUztvQ0FHUyxpQkFBaUIsQ0FBQyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdPdmVybGF5Q29udGFpbmVyQ29udGVudCB9IGZyb20gJy4uL21vZGVscy9uZy1vdmVybGF5LWNvbnRhaW5lci1jb250ZW50LnR5cGUnO1xuaW1wb3J0IHsgTmdQb3BvdmVyUmVuZGVyTWV0aG9kIH0gZnJvbSAnLi4vbW9kZWxzL25nLXBvcG92ZXItcmVuZGVyLW1ldGhvZC50eXBlJztcbmltcG9ydCB7IE5nUG9wb3ZlclJlZiB9IGZyb20gJy4vbmctcG9wb3Zlci1yZWZlcmVuY2UnO1xuXG4vKipcbiAqIFRoZSBob3N0IGNvbXBvbmVudCB0aGF0IGVtYmVkcyB0aGUgcHJvdmlkZWQgY29udGVudFxuICovXG5AQ29tcG9uZW50KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vbmctcG9wb3Zlci5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vbmctcG9wb3Zlci5jb21wb25lbnQuc2NzcyddLFxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcbn0pXG5leHBvcnQgY2xhc3MgTmdQb3BvdmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgbmdSZW5kZXJNZXRob2Q6IE5nUG9wb3ZlclJlbmRlck1ldGhvZDtcbiAgICBwdWJsaWMgY29udGVudDogTmdPdmVybGF5Q29udGFpbmVyQ29udGVudDtcbiAgICBwdWJsaWMgY29udGV4dDogeyBkYXRhOiBhbnk7IGNsb3NlOiBhbnkgfTtcbiAgICBwdWJsaWMgaXNEcmFnZ2FibGU/OiBib29sZWFuO1xuXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHByaXZhdGUgbmdQb3BvdmVyUmVmOiBOZ1BvcG92ZXJSZWYpIHt9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5uZ1BvcG92ZXJSZWYuY29udGVudDtcbiAgICAgICAgdGhpcy5pc0RyYWdnYWJsZSA9IHRoaXMubmdQb3BvdmVyUmVmLmlzRHJhZ2dhYmxlO1xuXG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5jb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdGhpcy5uZ1JlbmRlck1ldGhvZCA9ICd0ZXh0JztcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNvbnRlbnQgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikge1xuICAgICAgICAgICAgdGhpcy5uZ1JlbmRlck1ldGhvZCA9ICd0ZW1wbGF0ZSc7XG4gICAgICAgICAgICB0aGlzLmNvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgZGF0YTogdGhpcy5uZ1BvcG92ZXJSZWYuZGF0YSxcbiAgICAgICAgICAgICAgICBjbG9zZTogdGhpcy5uZ1BvcG92ZXJSZWYuY2xvc2UuYmluZCh0aGlzLm5nUG9wb3ZlclJlZilcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm5nUmVuZGVyTWV0aG9kID0gJ2NvbXBvbmVudCc7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCI8ZGl2IGNka0RyYWdcbiAgICAgY2RrRHJhZ0hhbmRsZVxuICAgICBjZGtEcmFnUm9vdEVsZW1lbnQ9XCIuY2RrLW92ZXJsYXktcGFuZVwiXG4gICAgIFtjZGtEcmFnRGlzYWJsZWRdPVwiIWlzRHJhZ2dhYmxlXCJcbiAgICAgW2Nka0RyYWdCb3VuZGFyeV09XCInYm9keSdcIlxuICAgICBpZD1cIm5nLXBvcG92ZXJcIlxuICAgICBjbGFzcz1cIm5nLXBvcG92ZXJcIj5cbiAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwibmdSZW5kZXJNZXRob2RcIj5cblxuICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid0ZXh0J1wiXG4gICAgICAgICBbaW5uZXJIVE1MXT1cImNvbnRlbnRcIj48L2Rpdj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid0ZW1wbGF0ZSdcIj5cbiAgICAgIDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjb250ZW50OyBjb250ZXh0OiBjb250ZXh0XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInY29tcG9uZW50J1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb250ZW50XCI+PC9uZy1jb250YWluZXI+XG4gICAgPC9uZy1jb250YWluZXI+XG5cbiAgPC9uZy1jb250YWluZXI+XG48L2Rpdj4iXX0=