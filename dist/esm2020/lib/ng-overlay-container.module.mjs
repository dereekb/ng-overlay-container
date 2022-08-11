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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctb3ZlcmxheS1jb250YWluZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vcHJvamVjdHMvbmctb3ZlcmxheS1jb250YWluZXIvc3JjL2xpYi9uZy1vdmVybGF5LWNvbnRhaW5lci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDOUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7O0FBUTNFLE1BQU0sT0FBTyx3QkFBd0I7O3dJQUF4Qix3QkFBd0I7eUlBQXhCLHdCQUF3QixpQkFKcEIsa0JBQWtCLGFBRHZCLFlBQVksRUFBRSxhQUFhLEVBQUUsWUFBWSxFQUFFLGNBQWMsYUFFekQsa0JBQWtCO3lJQUdqQix3QkFBd0IsYUFGeEIsQ0FBQyx5QkFBeUIsQ0FBQyxZQUg1QixZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxjQUFjOzJGQUt4RCx3QkFBd0I7a0JBTnBDLFFBQVE7bUJBQUM7b0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsY0FBYyxDQUFDO29CQUNwRSxZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztvQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7b0JBQzdCLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO2lCQUN2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE92ZXJsYXlNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5pbXBvcnQgeyBQb3J0YWxNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5nUG9wb3ZlckNvbXBvbmVudCB9IGZyb20gJy4vcG9wb3Zlci1jb21wb25lbnQvbmctcG9wb3Zlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgTmdPdmVybGF5Q29udGFpbmVyU2VydmljZSB9IGZyb20gJy4vbmctb3ZlcmxheS1jb250YWluZXIuc2VydmljZSc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE92ZXJsYXlNb2R1bGUsIFBvcnRhbE1vZHVsZSwgRHJhZ0Ryb3BNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOZ1BvcG92ZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbTmdQb3BvdmVyQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbTmdPdmVybGF5Q29udGFpbmVyU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTmdPdmVybGF5Q29udGFpbmVyTW9kdWxlIHt9XG4iXX0=