import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { NgPopoverComponent } from './popover-component/ng-popover.component';
import { NgOverlayContainerService } from './ng-overlay-container.service';
import * as i0 from "@angular/core";
export class NgOverlayContainerModule {
}
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerModule.ɵfac = function NgOverlayContainerModule_Factory(t) { return new (t || NgOverlayContainerModule)(); };
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerModule.ɵmod = /** @pureOrBreakMyCode */ i0.ɵɵdefineNgModule({ type: NgOverlayContainerModule });
/** @nocollapse */ /** @nocollapse */ NgOverlayContainerModule.ɵinj = /** @pureOrBreakMyCode */ i0.ɵɵdefineInjector({ providers: [NgOverlayContainerService], imports: [[CommonModule, OverlayModule, PortalModule, DragDropModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgOverlayContainerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, OverlayModule, PortalModule, DragDropModule],
                declarations: [NgPopoverComponent],
                exports: [NgPopoverComponent],
                providers: [NgOverlayContainerService]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(NgOverlayContainerModule, { declarations: [NgPopoverComponent], imports: [CommonModule, OverlayModule, PortalModule, DragDropModule], exports: [NgPopoverComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3ZlcmxheS1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctb3ZlcmxheS1jb250YWluZXIvc3JjL2xpYi9uZy1vdmVybGF5LWNvbnRhaW5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBUTNFLE1BQU0sT0FBTyx3QkFBd0I7O3NJQUF4Qix3QkFBd0I7NEhBQXhCLHdCQUF3QjtpSUFGeEIsQ0FBQyx5QkFBeUIsQ0FBQyxZQUg3QixDQUFDLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsQ0FBQzt1RkFLekQsd0JBQXdCO2NBTnBDLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjLENBQUM7Z0JBQ3BFLFlBQVksRUFBRSxDQUFDLGtCQUFrQixDQUFDO2dCQUNsQyxPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDN0IsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7YUFDdkM7O3dGQUNZLHdCQUF3QixtQkFKcEIsa0JBQWtCLGFBRHZCLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFFekQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT3ZlcmxheU1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcbmltcG9ydCB7IFBvcnRhbE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmdQb3BvdmVyQ29tcG9uZW50IH0gZnJvbSAnLi9wb3BvdmVyLWNvbXBvbmVudC9uZy1wb3BvdmVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ092ZXJsYXlDb250YWluZXJTZXJ2aWNlIH0gZnJvbSAnLi9uZy1vdmVybGF5LWNvbnRhaW5lci5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgT3ZlcmxheU1vZHVsZSwgUG9ydGFsTW9kdWxlLCBEcmFnRHJvcE1vZHVsZV0sXG4gIGRlY2xhcmF0aW9uczogW05nUG9wb3ZlckNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOZ1BvcG92ZXJDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOZ092ZXJsYXlDb250YWluZXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ092ZXJsYXlDb250YWluZXJNb2R1bGUge31cbiJdfQ==