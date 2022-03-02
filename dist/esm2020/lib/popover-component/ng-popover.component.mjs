import { Component, TemplateRef, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./ng-popover-reference";
import * as i2 from "@angular/cdk/drag-drop";
import * as i3 from "@angular/common";
function NgPopoverComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("innerHTML", ctx_r0.content, i0.ɵɵsanitizeHtml);
} }
function NgPopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgPopoverComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NgPopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
} }
function NgPopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function NgPopoverComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, NgPopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngComponentOutlet", ctx_r2.content);
} }
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
/** @nocollapse */ /** @nocollapse */ NgPopoverComponent.ɵfac = function NgPopoverComponent_Factory(t) { return new (t || NgPopoverComponent)(i0.ɵɵdirectiveInject(i1.NgPopoverRef)); };
/** @nocollapse */ /** @nocollapse */ NgPopoverComponent.ɵcmp = /** @pureOrBreakMyCode */ i0.ɵɵdefineComponent({ type: NgPopoverComponent, selectors: [["ng-component"]], decls: 5, vars: 6, consts: [["cdkDrag", "", "cdkDragHandle", "", "cdkDragRootElement", ".cdk-overlay-pane", "id", "ng-popover", 1, "ng-popover", 3, "cdkDragDisabled", "cdkDragBoundary"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]], template: function NgPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementContainerStart(1, 1);
        i0.ɵɵtemplate(2, NgPopoverComponent_div_2_Template, 1, 1, "div", 2);
        i0.ɵɵtemplate(3, NgPopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        i0.ɵɵtemplate(4, NgPopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        i0.ɵɵelementContainerEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("cdkDragDisabled", !ctx.isDraggable)("cdkDragBoundary", "body");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitch", ctx.ngRenderMethod);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "text");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "template");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngSwitchCase", "component");
    } }, directives: [i2.CdkDrag, i2.CdkDragHandle, i3.NgSwitch, i3.NgSwitchCase, i3.NgTemplateOutlet, i3.NgComponentOutlet], styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgPopoverComponent, [{
        type: Component,
        args: [{ encapsulation: ViewEncapsulation.None, template: "<div cdkDrag\n     cdkDragHandle\n     cdkDragRootElement=\".cdk-overlay-pane\"\n     [cdkDragDisabled]=\"!isDraggable\"\n     [cdkDragBoundary]=\"'body'\"\n     id=\"ng-popover\"\n     class=\"ng-popover\">\n  <ng-container [ngSwitch]=\"ngRenderMethod\">\n\n    <div *ngSwitchCase=\"'text'\"\n         [innerHTML]=\"content\"></div>\n\n    <ng-container *ngSwitchCase=\"'template'\">\n      <ng-container *ngTemplateOutlet=\"content; context: context\"></ng-container>\n    </ng-container>\n\n    <ng-container *ngSwitchCase=\"'component'\">\n      <ng-container *ngComponentOutlet=\"content\"></ng-container>\n    </ng-container>\n\n  </ng-container>\n</div>", styles: [".ng-overlay-container{background-color:#fff;box-shadow:0 3px 14px 2px #9e9e9e1f,0 8px 10px 1px #9e9e9e24,0 5px 5px -3px #9e9e9e33;border-radius:4px}.ng-overlay-container.isResizable{resize:both;overflow:auto}.ng-overlay-container ng-component{width:100%;height:100%}.ng-overlay-container ng-component .ng-popover{width:100%;height:100%}\n"] }]
    }], function () { return [{ type: i1.NgPopoverRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZy1vdmVybGF5LWNvbnRhaW5lci9zcmMvbGliL3BvcG92ZXItY29tcG9uZW50L25nLXBvcG92ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctb3ZlcmxheS1jb250YWluZXIvc3JjL2xpYi9wb3BvdmVyLWNvbXBvbmVudC9uZy1wb3BvdmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7SUNTOUUseUJBQ2lDOzs7SUFBNUIsNkRBQXFCOzs7SUFHeEIsd0JBQTJFOzs7SUFEN0UsNkJBQXlDO0lBQ3ZDLG9HQUEyRTtJQUM3RSwwQkFBZTs7O0lBREUsZUFBMkI7SUFBM0IsaURBQTJCLDJDQUFBOzs7SUFJMUMsd0JBQTBEOzs7SUFENUQsNkJBQTBDO0lBQ3hDLG9HQUEwRDtJQUM1RCwwQkFBZTs7O0lBREUsZUFBMEI7SUFBMUIsa0RBQTBCOztBRFovQzs7R0FFRztBQU1ILE1BQU0sT0FBTyxrQkFBa0I7SUFNM0IsWUFBMkIsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7SUFBRyxDQUFDO0lBRXpELFFBQVE7UUFDSixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUM7UUFFakQsSUFBSSxPQUFPLElBQUksQ0FBQyxPQUFPLEtBQUssUUFBUSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxDQUFDO1NBQ2hDO2FBQU0sSUFBSSxJQUFJLENBQUMsT0FBTyxZQUFZLFdBQVcsRUFBRTtZQUM1QyxJQUFJLENBQUMsY0FBYyxHQUFHLFVBQVUsQ0FBQztZQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHO2dCQUNYLElBQUksRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUk7Z0JBQzVCLEtBQUssRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQzthQUN6RCxDQUFDO1NBQ0w7YUFBTTtZQUNILElBQUksQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO1NBQ3JDO0lBQ0wsQ0FBQzs7MEhBdkJRLGtCQUFrQjt1SEFBbEIsa0JBQWtCO1FDYi9CLDhCQU13QjtRQUN0QixnQ0FBMEM7UUFFeEMsbUVBQ2lDO1FBRWpDLHFGQUVlO1FBRWYscUZBRWU7UUFFakIsMEJBQWU7UUFDakIsaUJBQU07O1FBbEJELGtEQUFnQywyQkFBQTtRQUlyQixlQUEyQjtRQUEzQiw2Q0FBMkI7UUFFakMsZUFBb0I7UUFBcEIscUNBQW9CO1FBR1gsZUFBd0I7UUFBeEIseUNBQXdCO1FBSXhCLGVBQXlCO1FBQXpCLDBDQUF5Qjs7dUZESC9CLGtCQUFrQjtjQUw5QixTQUFTO2dDQUdTLGlCQUFpQixDQUFDLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVGVtcGxhdGVSZWYsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOZ092ZXJsYXlDb250YWluZXJDb250ZW50IH0gZnJvbSAnLi4vbW9kZWxzL25nLW92ZXJsYXktY29udGFpbmVyLWNvbnRlbnQudHlwZSc7XG5pbXBvcnQgeyBOZ1BvcG92ZXJSZW5kZXJNZXRob2QgfSBmcm9tICcuLi9tb2RlbHMvbmctcG9wb3Zlci1yZW5kZXItbWV0aG9kLnR5cGUnO1xuaW1wb3J0IHsgTmdQb3BvdmVyUmVmIH0gZnJvbSAnLi9uZy1wb3BvdmVyLXJlZmVyZW5jZSc7XG5cbi8qKlxuICogVGhlIGhvc3QgY29tcG9uZW50IHRoYXQgZW1iZWRzIHRoZSBwcm92aWRlZCBjb250ZW50XG4gKi9cbkBDb21wb25lbnQoe1xuICAgIHRlbXBsYXRlVXJsOiAnLi9uZy1wb3BvdmVyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9uZy1wb3BvdmVyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxufSlcbmV4cG9ydCBjbGFzcyBOZ1BvcG92ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHB1YmxpYyBuZ1JlbmRlck1ldGhvZDogTmdQb3BvdmVyUmVuZGVyTWV0aG9kO1xuICAgIHB1YmxpYyBjb250ZW50OiBOZ092ZXJsYXlDb250YWluZXJDb250ZW50O1xuICAgIHB1YmxpYyBjb250ZXh0OiB7IGRhdGE6IGFueTsgY2xvc2U6IGFueSB9O1xuICAgIHB1YmxpYyBpc0RyYWdnYWJsZT86IGJvb2xlYW47XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IocHJpdmF0ZSBuZ1BvcG92ZXJSZWY6IE5nUG9wb3ZlclJlZikge31cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLm5nUG9wb3ZlclJlZi5jb250ZW50O1xuICAgICAgICB0aGlzLmlzRHJhZ2dhYmxlID0gdGhpcy5uZ1BvcG92ZXJSZWYuaXNEcmFnZ2FibGU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICB0aGlzLm5nUmVuZGVyTWV0aG9kID0gJ3RleHQnO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmKSB7XG4gICAgICAgICAgICB0aGlzLm5nUmVuZGVyTWV0aG9kID0gJ3RlbXBsYXRlJztcbiAgICAgICAgICAgIHRoaXMuY29udGV4dCA9IHtcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLm5nUG9wb3ZlclJlZi5kYXRhLFxuICAgICAgICAgICAgICAgIGNsb3NlOiB0aGlzLm5nUG9wb3ZlclJlZi5jbG9zZS5iaW5kKHRoaXMubmdQb3BvdmVyUmVmKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubmdSZW5kZXJNZXRob2QgPSAnY29tcG9uZW50JztcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIjxkaXYgY2RrRHJhZ1xuICAgICBjZGtEcmFnSGFuZGxlXG4gICAgIGNka0RyYWdSb290RWxlbWVudD1cIi5jZGstb3ZlcmxheS1wYW5lXCJcbiAgICAgW2Nka0RyYWdEaXNhYmxlZF09XCIhaXNEcmFnZ2FibGVcIlxuICAgICBbY2RrRHJhZ0JvdW5kYXJ5XT1cIidib2R5J1wiXG4gICAgIGlkPVwibmctcG9wb3ZlclwiXG4gICAgIGNsYXNzPVwibmctcG9wb3ZlclwiPlxuICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJuZ1JlbmRlck1ldGhvZFwiPlxuXG4gICAgPGRpdiAqbmdTd2l0Y2hDYXNlPVwiJ3RleHQnXCJcbiAgICAgICAgIFtpbm5lckhUTUxdPVwiY29udGVudFwiPjwvZGl2PlxuXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3RlbXBsYXRlJ1wiPlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImNvbnRlbnQ7IGNvbnRleHQ6IGNvbnRleHRcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidjb21wb25lbnQnXCI+XG4gICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbnRlbnRcIj48L25nLWNvbnRhaW5lcj5cbiAgICA8L25nLWNvbnRhaW5lcj5cblxuICA8L25nLWNvbnRhaW5lcj5cbjwvZGl2PiJdfQ==