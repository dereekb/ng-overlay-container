import { OnInit } from '@angular/core';
import { NgOverlayContainerContent } from '../models/ng-overlay-container-content.type';
import { NgPopoverRenderMethod } from '../models/ng-popover-render-method.type';
import { NgPopoverRef } from './ng-popover-reference';
import * as i0 from "@angular/core";
/**
 * The host component that embeds the provided content
 */
export declare class NgPopoverComponent implements OnInit {
    private ngPopoverRef;
    ngRenderMethod: NgPopoverRenderMethod;
    content: NgOverlayContainerContent;
    context: {
        data: any;
        close: any;
    };
    isDraggable?: boolean;
    constructor(ngPopoverRef: NgPopoverRef);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgPopoverComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgPopoverComponent, "ng-component", never, {}, {}, never, never, false>;
}
