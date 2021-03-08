import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { NgPopoverComponent } from './popover-component/ng-popover.component';

@NgModule({
    imports: [CommonModule, OverlayModule, PortalModule, DragDropModule],
    declarations: [NgPopoverComponent],
    exports: [NgPopoverComponent]
})
export class NgOverlayContainerModule {}
