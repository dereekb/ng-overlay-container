"use strict";
(self["webpackChunkng_overlay_container_demo"] = self["webpackChunkng_overlay_container_demo"] || []).push([["main"],{

/***/ 8920:
/*!******************************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/models/ng-overlay-container-configuration.interface.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_OVERLAY_CONFIGURATION": () => (/* binding */ DEFAULT_OVERLAY_CONFIGURATION)
/* harmony export */ });
/**
 * Default overlay container configuration
 */
const DEFAULT_OVERLAY_CONFIGURATION = {
    hasBackdrop: true,
    backdropClass: 'cdk-overlay-transparent-backdrop',
    panelClass: 'ng-overlay-container',
    useGlobalPositionStrategy: false,
    width: '400px',
    height: '500px',
    originX: 'center',
    originY: 'bottom',
    overlayX: 'center',
    overlayY: 'top',
    offsetX: 0,
    offsetY: 10,
    isDraggable: false,
    isResizable: true,
    disableBackdropClose: false
};


/***/ }),

/***/ 5427:
/*!*******************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/models/ng-overlay-container-content.type.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 1933:
/*!***************************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/models/ng-overlay-container-parameters.interface.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 3654:
/*!******************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/models/ng-popover-close-event.interface.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 6151:
/*!***************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/models/ng-popover-render-method.type.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ 4757:
/*!******************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/ng-overlay-container.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOverlayContainerModule": () => (/* binding */ NgOverlayContainerModule)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);
/* harmony import */ var _popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover-component/ng-popover.component */ 4940);
/* harmony import */ var _ng_overlay_container_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ng-overlay-container.service */ 301);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);







class NgOverlayContainerModule {
}
/** @nocollapse */ NgOverlayContainerModule.ɵfac = function NgOverlayContainerModule_Factory(t) { return new (t || NgOverlayContainerModule)(); };
/** @nocollapse */ NgOverlayContainerModule.ɵmod = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: NgOverlayContainerModule });
/** @nocollapse */ NgOverlayContainerModule.ɵinj = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_ng_overlay_container_service__WEBPACK_IMPORTED_MODULE_1__.NgOverlayContainerService], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](NgOverlayContainerModule, { declarations: [_popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_0__.NgPopoverComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__.PortalModule, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__.DragDropModule], exports: [_popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_0__.NgPopoverComponent] }); })();


/***/ }),

/***/ 301:
/*!*******************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/ng-overlay-container.service.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOverlayContainerService": () => (/* binding */ NgOverlayContainerService)
/* harmony export */ });
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/overlay */ 4244);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ 4476);
/* harmony import */ var _models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/ng-overlay-container-configuration.interface */ 8920);
/* harmony import */ var _popover_component_ng_popover_reference__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover-component/ng-popover-reference */ 6299);
/* harmony import */ var _popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popover-component/ng-popover.component */ 4940);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);








/**
 * The NgOverlayContainerService is an injectable service to open a {@link NgPopoverComponent} that behaves as a parent
 * where anything from text, component or template can be embedded dynamically.
 *
 */
class NgOverlayContainerService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
    }
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
    open({ content, origin, data, configuration }) {
        var _a, _b;
        const configurationApplied = Object.assign(Object.assign({}, _models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_OVERLAY_CONFIGURATION), configuration);
        const overlayRef = this.overlay.create(this.getOverlayConfig(origin, configurationApplied));
        if (configuration === null || configuration === void 0 ? void 0 : configuration.panelClass) {
            overlayRef.addPanelClass(configuration.panelClass);
        }
        if (configurationApplied === null || configurationApplied === void 0 ? void 0 : configurationApplied.isResizable) {
            overlayRef.addPanelClass('isResizable');
        }
        const ngPopoverRef = new _popover_component_ng_popover_reference__WEBPACK_IMPORTED_MODULE_1__.NgPopoverRef(this.overlay, overlayRef, content, data, (_a = configuration === null || configuration === void 0 ? void 0 : configuration.isDraggable) !== null && _a !== void 0 ? _a : _models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_OVERLAY_CONFIGURATION.isDraggable, (_b = configuration === null || configuration === void 0 ? void 0 : configuration.disableBackdropClose) !== null && _b !== void 0 ? _b : _models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_OVERLAY_CONFIGURATION.disableBackdropClose);
        const injector = this.createInjector(ngPopoverRef, this.injector);
        overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.ComponentPortal(_popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_2__.NgPopoverComponent, null, injector));
        return ngPopoverRef;
    }
    getOverlayConfig(origin, configuration) {
        const config = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.OverlayConfig({
            width: configuration.width,
            height: configuration.height,
            hasBackdrop: configuration.hasBackdrop,
            panelClass: _models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_OVERLAY_CONFIGURATION.panelClass,
            backdropClass: configuration.backdropClass,
            positionStrategy: this.getOverlayPosition(origin, configuration),
            scrollStrategy: this.overlay.scrollStrategies.reposition()
        });
        return Object.assign(config, Object.assign(Object.assign({}, (configuration.minWidth && { minWidth: configuration.minWidth })), (configuration.minHeight && { minHeight: configuration.minHeight })
        // ...(configuration.maxWidth && { maxWidth: configuration.maxWidth }),
        // ...(configuration.maxHeight && { maxHeight: configuration.maxHeight })
        ));
    }
    getOverlayPosition(origin, configuration) {
        const positionStrategy = configuration.useGlobalPositionStrategy
            ? this.overlay
                .position()
                .global()
                .centerHorizontally(configuration.offsetX.toString())
                .centerVertically(configuration.offsetY.toString())
            : this.overlay
                .position()
                .flexibleConnectedTo(origin)
                .withPositions(this.getPositions(configuration))
                .withPush(false);
        return positionStrategy;
    }
    getPositions(configuration) {
        return [
            {
                originX: configuration.originX,
                originY: configuration.originY,
                overlayX: configuration.overlayX,
                overlayY: configuration.overlayY,
                offsetX: configuration.offsetX,
                offsetY: configuration.offsetY
            },
            {
                // Bottom
                originX: 'center',
                originY: 'bottom',
                overlayX: 'center',
                overlayY: 'top'
            },
            {
                // Right
                originX: 'end',
                originY: 'center',
                overlayX: 'start',
                overlayY: 'center'
            },
            {
                // Left
                originX: 'start',
                originY: 'center',
                overlayX: 'end',
                overlayY: 'center'
            },
            {
                // Top
                originX: 'center',
                originY: 'top',
                overlayX: 'center',
                overlayY: 'bottom'
            }
        ];
    }
    createInjector(popoverRef, injector) {
        const tokens = new WeakMap([[_popover_component_ng_popover_reference__WEBPACK_IMPORTED_MODULE_1__.NgPopoverRef, popoverRef]]);
        return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__.PortalInjector(injector, tokens);
    }
}
/** @nocollapse */ NgOverlayContainerService.ɵfac = function NgOverlayContainerService_Factory(t) { return new (t || NgOverlayContainerService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_4__.Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injector)); };
/** @nocollapse */ NgOverlayContainerService.ɵprov = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: NgOverlayContainerService, factory: NgOverlayContainerService.ɵfac });


/***/ }),

/***/ 6299:
/*!*****************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/popover-component/ng-popover-reference.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPopoverRef": () => (/* binding */ NgPopoverRef)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2218);

/**
 * The reference to the popover container.
 * @param T The data passed into the container to be available in the embedded e.g. component
 * @param R The response data type returned from the afterClosed$ observable when calling close(data?: R)
 */
class NgPopoverRef {
    constructor(_overlay, overlay, content, data, isDraggable, disableBackdropClose) {
        this._overlay = _overlay;
        this.overlay = overlay;
        this.content = content;
        this.data = data;
        this.isDraggable = isDraggable;
        this.disableBackdropClose = disableBackdropClose;
        this.afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
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
        this.overlay.updateSize({ width: width !== null && width !== void 0 ? width : currentConfig.width, height: height !== null && height !== void 0 ? height : currentConfig.height });
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


/***/ }),

/***/ 4940:
/*!*****************************************************************************************!*\
  !*** ./projects/ng-overlay-container/src/lib/popover-component/ng-popover.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgPopoverComponent": () => (/* binding */ NgPopoverComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_popover_reference__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ng-popover-reference */ 6299);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ 4941);





function NgPopoverComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", ctx_r0.content, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
} }
function NgPopoverComponent_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgPopoverComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgPopoverComponent_ng_container_3_ng_container_1_Template, 1, 0, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r1.content)("ngTemplateOutletContext", ctx_r1.context);
} }
function NgPopoverComponent_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainer"](0);
} }
function NgPopoverComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NgPopoverComponent_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngComponentOutlet", ctx_r2.content);
} }
/**
 * The host component that embeds the provided content
 */
class NgPopoverComponent {
    constructor(ngPopoverRef) {
        this.ngPopoverRef = ngPopoverRef;
    }
    ngOnInit() {
        this.content = this.ngPopoverRef.content;
        this.isDraggable = this.ngPopoverRef.isDraggable;
        if (typeof this.content === 'string') {
            this.ngRenderMethod = 'text';
        }
        else if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_1__.TemplateRef) {
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
/** @nocollapse */ NgPopoverComponent.ɵfac = function NgPopoverComponent_Factory(t) { return new (t || NgPopoverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_popover_reference__WEBPACK_IMPORTED_MODULE_0__.NgPopoverRef)); };
/** @nocollapse */ NgPopoverComponent.ɵcmp = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NgPopoverComponent, selectors: [["ng-component"]], decls: 5, vars: 6, consts: [["cdkDrag", "", "cdkDragHandle", "", "cdkDragRootElement", ".cdk-overlay-pane", "id", "ng-popover", 1, "ng-popover", 3, "cdkDragDisabled", "cdkDragBoundary"], [3, "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchCase"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngComponentOutlet"]], template: function NgPopoverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NgPopoverComponent_div_2_Template, 1, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NgPopoverComponent_ng_container_3_Template, 2, 2, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NgPopoverComponent_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cdkDragDisabled", !ctx.isDraggable)("cdkDragBoundary", "body");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitch", ctx.ngRenderMethod);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngSwitchCase", "component");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgComponentOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgSwitchCase, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDrag, _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__.CdkDragHandle], styles: [".ng-overlay-container {\n  background-color: #ffffff;\n  box-shadow: 0 3px 14px 2px rgba(158, 158, 158, 0.12), 0 8px 10px 1px rgba(158, 158, 158, 0.14), 0 5px 5px -3px rgba(158, 158, 158, 0.2);\n  border-radius: 4px;\n}\n.ng-overlay-container.isResizable {\n  resize: both;\n  overflow: auto;\n}\n.ng-overlay-container ng-component {\n  width: 100%;\n  height: 100%;\n}\n.ng-overlay-container ng-component .ng-popover {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5nLXBvcG92ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLHVJQUFBO0VBRUEsa0JBQUE7QUFBSjtBQUVJO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFEWiIsImZpbGUiOiJuZy1wb3BvdmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLW92ZXJsYXktY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDE0cHggMnB4IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4xMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4xNCksXG4gICAgICAgIDAgNXB4IDVweCAtM3B4IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmLmlzUmVzaXphYmxlIHtcbiAgICAgICAgcmVzaXplOiBib3RoO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICB9XG5cbiAgICBuZy1jb21wb25lbnQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIC5uZy1wb3BvdmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 3172:
/*!*********************************************************!*\
  !*** ./projects/ng-overlay-container/src/public-api.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEFAULT_OVERLAY_CONFIGURATION": () => (/* reexport safe */ _lib_models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__.DEFAULT_OVERLAY_CONFIGURATION),
/* harmony export */   "NgOverlayContainerModule": () => (/* reexport safe */ _lib_ng_overlay_container_module__WEBPACK_IMPORTED_MODULE_5__.NgOverlayContainerModule),
/* harmony export */   "NgOverlayContainerService": () => (/* reexport safe */ _lib_ng_overlay_container_service__WEBPACK_IMPORTED_MODULE_6__.NgOverlayContainerService),
/* harmony export */   "NgPopoverComponent": () => (/* reexport safe */ _lib_popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_8__.NgPopoverComponent),
/* harmony export */   "NgPopoverRef": () => (/* reexport safe */ _lib_popover_component_ng_popover_reference__WEBPACK_IMPORTED_MODULE_7__.NgPopoverRef)
/* harmony export */ });
/* harmony import */ var _lib_models_ng_overlay_container_configuration_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/models/ng-overlay-container-configuration.interface */ 8920);
/* harmony import */ var _lib_models_ng_overlay_container_content_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/models/ng-overlay-container-content.type */ 5427);
/* harmony import */ var _lib_models_ng_overlay_container_parameters_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/models/ng-overlay-container-parameters.interface */ 1933);
/* harmony import */ var _lib_models_ng_popover_close_event_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/models/ng-popover-close-event.interface */ 3654);
/* harmony import */ var _lib_models_ng_popover_render_method_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models/ng-popover-render-method.type */ 6151);
/* harmony import */ var _lib_ng_overlay_container_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/ng-overlay-container.module */ 4757);
/* harmony import */ var _lib_ng_overlay_container_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/ng-overlay-container.service */ 301);
/* harmony import */ var _lib_popover_component_ng_popover_reference__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/popover-component/ng-popover-reference */ 6299);
/* harmony import */ var _lib_popover_component_ng_popover_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/popover-component/ng-popover.component */ 4940);
/*
 * Public API Surface of ng-overlay-container
 */











/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ 7317);





const _c0 = function () { return ["/demo"]; };
const _c1 = function () { return ["/docs"]; };
class AppComponent {
    constructor() {
        this.title = 'ng-overlay-container';
    }
}
/** @nocollapse */ AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
/** @nocollapse */ AppComponent.ɵcmp = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 4, consts: [[1, "drawer-container"], ["mode", "over", "autosize", ""], ["drawer", ""], [1, "menu"], [1, "menu-entries"], ["routerLinkActive", "router-link-active", 3, "routerLink", "click"], ["href", "https://github.com/schulzi66/ng-overlay-container", "target", "_blank", "rel", "noopener", 3, "click"], ["href", "https://www.npmjs.com/package/ng-overlay-container", "target", "_blank", "rel", "noopener", 3, "click"], ["role", "banner", 1, "toolbar"], ["mat-icon-button", "", 3, "click"], [1, "spacer"], ["href", "https://github.com/schulzi66/ng-overlay-container", "target", "_blank", "rel", "noopener"], [1, "github-star-badge"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", 1, "material-icons"], ["d", "M0 0h24v24H0z", "fill", "none"], ["d", "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0)(1, "mat-drawer", 1, 2)(3, "div", 3)(4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "NgOverlayContainer \uD83D\uDE80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Demo \u2728");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Documentation \uD83D\uDCD6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Github \u2B50");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.close()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "NPM \uD83C\uDF81");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8)(16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](_r0.toggle()); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "NgOverlayContainer \uD83D\uDE80");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Love NgOverlayContainer?\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Give my repo a star. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "svg", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "path", 14)(30, "path", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Star ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawer, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__.MatDrawerContainer, _angular_material_button__WEBPACK_IMPORTED_MODULE_4__.MatButton], styles: ["[_nghost-%COMP%] {\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n  margin: 8px;\n}\n\np[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n\na[_ngcontent-%COMP%], a[_ngcontent-%COMP%]:visited, a[_ngcontent-%COMP%]:hover {\n  color: #1976d2;\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: #125699;\n}\n\nfooter[_ngcontent-%COMP%] {\n  margin: 16px 0;\n  display: flex;\n  align-items: center;\n  line-height: 20px;\n  justify-content: center;\n}\n\nfooter[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.github-star-badge[_ngcontent-%COMP%] {\n  color: #24292e;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  padding: 3px 10px;\n  border: 1px solid rgba(27, 31, 35, 0.2);\n  border-radius: 3px;\n  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);\n  margin-left: 4px;\n  font-weight: 600;\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;\n}\n\n.github-star-badge[_ngcontent-%COMP%]:hover {\n  background-image: linear-gradient(-180deg, #f0f3f6, #e6ebf1 90%);\n  border-color: rgba(27, 31, 35, 0.35);\n  background-position: -0.5em;\n}\n\n.github-star-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n  margin-right: 4px;\n}\n\n.drawer-container[_ngcontent-%COMP%] {\n  width: auto;\n  height: 100%;\n}\n\n.menu[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 200px;\n  padding: 10px;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-entries[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  margin: 10px;\n}\n\n.menu[_ngcontent-%COMP%]   .menu-entries[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUlFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUFGRjs7QUFLQTs7Ozs7O0VBTUUsV0FBQTtBQUZGOztBQUtBO0VBQ0UsU0FBQTtBQUZGOztBQUtBO0VBQ0UsT0FBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7OztFQUdFLGNBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnRUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwSUFBQTtBQUZGOztBQU1BO0VBQ0UsZ0VBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBSEY7O0FBTUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQU1BO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFIRjs7QUFLRTtFQUNFLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0k7RUFDRSxvQkFBQTtBQUhOIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLy8gICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgSGVsdmV0aWNhLFxuICAvLyAgICAgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICAvLyAgIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMzMzM7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBtYXJnaW46IDhweDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi50b29sYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLnRvb2xiYXIgaW1nIHtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ28ge1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbjogMCAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuYSxcbmE6dmlzaXRlZCxcbmE6aG92ZXIge1xuICBjb2xvcjogIzE5NzZkMjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5hOmhvdmVyIHtcbiAgY29sb3I6ICMxMjU2OTk7XG59XG5cbmZvb3RlciB7XG4gIG1hcmdpbjogMTZweCAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmZvb3RlciBhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlIHtcbiAgY29sb3I6ICMyNDI5MmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjcsIDMxLCAzNSwgMC4yKTtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgI2ZhZmJmYywgI2VmZjNmNiA5MCUpO1xuICBtYXJnaW4tbGVmdDogNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgQXBwbGUgQ29sb3IgRW1vamksXG4gICAgU2Vnb2UgVUkgRW1vamksIFNlZ29lIFVJIFN5bWJvbDtcbn1cblxuLmdpdGh1Yi1zdGFyLWJhZGdlOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICNmMGYzZjYsICNlNmViZjEgOTAlKTtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI3LCAzMSwgMzUsIDAuMzUpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMC41ZW07XG59XG5cbi5naXRodWItc3Rhci1iYWRnZSAubWF0ZXJpYWwtaWNvbnMge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cblxuLmRyYXdlci1jb250YWluZXIge1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyMDBweDtcbiAgcGFkZGluZzogMTBweDtcblxuICAubWVudS1lbnRyaWVzIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDEwcHg7XG5cbiAgICBhIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/sidenav */ 7216);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var ng_overlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-overlay-container */ 3172);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-markdown */ 3981);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _demo_overlay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./demo-overlay.component */ 4730);
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/demo.component */ 9793);
/* harmony import */ var _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./documentation/documentation.component */ 4547);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);





















const routes = [
    {
        path: '',
        redirectTo: 'demo',
        pathMatch: 'full'
    },
    { path: 'demo', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__.DemoComponent },
    { path: 'docs', component: _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__.DocumentationComponent }
];
class AppModule {
}
/** @nocollapse */ AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
/** @nocollapse */ AppModule.ɵmod = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
/** @nocollapse */ AppModule.ɵinj = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' }),
        ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkdownModule.forRoot({
            loader: _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClient
        }),
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ng_overlay_container__WEBPACK_IMPORTED_MODULE_0__.NgOverlayContainerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _demo_overlay_component__WEBPACK_IMPORTED_MODULE_2__.DemoOverlayComponent, _documentation_documentation_component__WEBPACK_IMPORTED_MODULE_4__.DocumentationComponent, _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__.DemoComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__.BrowserAnimationsModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, ngx_markdown__WEBPACK_IMPORTED_MODULE_11__.MarkdownModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_14__.MatInputModule,
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_15__.MatSidenavModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__.MatRadioModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_18__.MatSelectModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule,
        ng_overlay_container__WEBPACK_IMPORTED_MODULE_0__.NgOverlayContainerModule] }); })();


/***/ }),

/***/ 4730:
/*!*******************************************!*\
  !*** ./src/app/demo-overlay.component.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoOverlayComponent": () => (/* binding */ DemoOverlayComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ng_overlay_container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng-overlay-container */ 3172);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 5590);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ 3365);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ 7317);







class DemoOverlayComponent {
    constructor(popoverRef) {
        this.popoverRef = popoverRef;
        this.valueTextField = '';
        this.isExpanded = false;
        this.demoInput = this.popoverRef.data.demoInput;
    }
    get resizeIcon() {
        return this.isExpanded ? 'fullscreen_exit' : 'fullscreen';
    }
    close() {
        this.popoverRef.close({ returnValue: this.valueTextField });
    }
    maximize() {
        this.popoverRef.toggleMaximize();
        this.isExpanded = !this.isExpanded;
    }
}
/** @nocollapse */ DemoOverlayComponent.ɵfac = function DemoOverlayComponent_Factory(t) { return new (t || DemoOverlayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ng_overlay_container__WEBPACK_IMPORTED_MODULE_0__.NgPopoverRef)); };
/** @nocollapse */ DemoOverlayComponent.ɵcmp = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DemoOverlayComponent, selectors: [["demo-overlay"]], decls: 18, vars: 3, consts: [["mat-icon-button", "", "color", "primary", 2, "float", "right", 3, "click"], [2, "display", "flex", "flex-direction", "column", "height", "100%"], [2, "flex", "1"], [2, "margin-bottom", "10px"], [2, "margin", "10px"], [2, "width", "100%"], ["name", "valueTextField", "matInput", "", "value", "", 3, "ngModel", "ngModelChange"], ["mat-stroked-button", "", "color", "primary", 2, "margin", "10px", 3, "click"]], template: function DemoOverlayComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoOverlayComponent_Template_button_click_0_listener() { return ctx.maximize(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1)(4, "div", 2)(5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "This is a demo component");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "You can pass any component to be displayed into the overlay container.");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "form", 4)(12, "mat-form-field", 5)(13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Example data to pass back to host");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function DemoOverlayComponent_Template_input_ngModelChange_15_listener($event) { return ctx.valueTextField = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DemoOverlayComponent_Template_button_click_16_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Pass data back");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.resizeIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" You can also pass data to the component like this number[]: ", ctx.demoInput, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.valueTextField);
    } }, dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm, _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_5__.MatInput, _angular_material_button__WEBPACK_IMPORTED_MODULE_6__.MatButton], encapsulation: 2 });


/***/ }),

/***/ 9793:
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DemoComponent": () => (/* binding */ DemoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _demo_overlay_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../demo-overlay.component */ 4730);
/* harmony import */ var ng_overlay_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-overlay-container */ 3172);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ 4770);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/radio */ 8390);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ 7317);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ 1434);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/core */ 8133);











const _c0 = ["originTemplate"];
const _c1 = ["originComponent"];
const _c2 = ["originText"];
function DemoComponent_mat_radio_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", position_r22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](position_r22);
} }
function DemoComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "This is a Template");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "This is an example with utilizing ng-template.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_ng_template_21_Template_button_click_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r26); const close_r24 = restoredCtx.close; return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](close_r24({ id: 2 })); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const data_r23 = ctx.data;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("This is data passed to the template: ", data_r23, "");
} }
function DemoComponent_mat_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const width_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", width_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](width_r27);
} }
function DemoComponent_mat_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const height_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", height_r28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](height_r28);
} }
function DemoComponent_mat_option_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const width_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", width_r29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](width_r29);
} }
function DemoComponent_mat_option_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const height_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", height_r30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](height_r30);
} }
function DemoComponent_mat_option_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const originX_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", originX_r31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](originX_r31);
} }
function DemoComponent_mat_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const originY_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", originY_r32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](originY_r32);
} }
function DemoComponent_mat_option_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overlayX_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", overlayX_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](overlayX_r33);
} }
function DemoComponent_mat_option_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const overlayY_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", overlayY_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](overlayY_r34);
} }
function DemoComponent_mat_option_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offsetX_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", offsetX_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](offsetX_r35);
} }
function DemoComponent_mat_option_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const offsetY_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", offsetY_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](offsetY_r36);
} }
function DemoComponent_mat_option_98_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hasBackdrop_r37 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", hasBackdrop_r37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", hasBackdrop_r37, " ");
} }
function DemoComponent_mat_option_104_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const backdropClass_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", backdropClass_r38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", backdropClass_r38, "");
} }
function DemoComponent_mat_option_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const useGlobal_r39 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", useGlobal_r39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", useGlobal_r39, "");
} }
function DemoComponent_mat_option_116_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const draggable_r40 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", draggable_r40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", draggable_r40, " ");
} }
function DemoComponent_mat_option_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const resizable_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", resizable_r41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", resizable_r41, " ");
} }
function DemoComponent_mat_option_128_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const disable_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", disable_r42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", disable_r42, " ");
} }
class DemoComponent {
    constructor(ngOverlayContainerService) {
        this.ngOverlayContainerService = ngOverlayContainerService;
        this.selectedWidth = '400px';
        this.widths = ['300px', '400px', '500px', '90vw', '100vw', '100%'];
        this.selectedHeight = '300px';
        this.heights = ['300px', '400px', '500px', '90vh', '100vh', '100%'];
        this.selectedMinWidth = undefined;
        this.minWidths = ['300px', '400px', '500px', '90vw', '100vw', '100%'];
        this.selectedMinHeight = undefined;
        this.minHeights = ['300px', '400px', '500px', '90vw', '100vw', '100%'];
        // public selectedMaxWidth = undefined;
        // public maxWidths = ['300px', '400px', '500px', '90vw', '100vw', '100%'];
        // public selectedMaxHeight = undefined;
        // public maxHeights = ['300px', '400px', '500px', '90vw', '100vw', '100%'];
        this.selectedOriginX = 'center';
        this.originXs = ['start', 'center', 'end'];
        this.selectedOriginY = 'bottom';
        this.originYs = ['top', 'center', 'bottom'];
        this.selectedOverlayX = 'center';
        this.overlayXs = ['start', 'center', 'end'];
        this.selectedOverlayY = 'top';
        this.overlayYs = ['top', 'center', 'bottom'];
        this.selectedOffsetX = '0';
        this.offsetXs = ['-20', '-10', '0', '10', '20'];
        this.selectedOffsetY = '10';
        this.offsetYs = ['-20', '-10', '0', '10', '20'];
        this.selectedHasBackdrop = 'true';
        this.hasBackdrops = ['true', 'false'];
        this.selectedBackdropClass = 'cdk-overlay-transparent-backdrop';
        this.backdropClasses = ['cdk-overlay-transparent-backdrop', 'cdk-overlay-dark-backdrop'];
        this.customPanelClass = 'custom-panel';
        this.selectedUseGlobalPositionStrategy = 'false';
        this.useGlobalPositionStrategy = ['true', 'false'];
        this.selectedIsDraggable = 'false';
        this.isDraggable = ['true', 'false'];
        this.selectedIsResizable = 'true';
        this.isResizable = ['true', 'false'];
        this.selectedDisableBackdropClose = 'false';
        this.disableBackdropClose = ['true', 'false'];
        this.selectedCommonPosition = 'bottom';
        this.commonPositions = ['bottom', 'right', 'left', 'top', 'overlay'];
        this.updateConfig();
    }
    updateConfig() {
        this.overlayConfiguration = {
            hasBackdrop: /true/i.test(this.selectedHasBackdrop),
            backdropClass: this.selectedBackdropClass,
            panelClass: this.customPanelClass,
            useGlobalPositionStrategy: /true/i.test(this.selectedUseGlobalPositionStrategy),
            width: this.selectedWidth,
            height: this.selectedHeight,
            minWidth: this.selectedMinWidth,
            minHeight: this.selectedMinHeight,
            // maxWidth: this.selectedMaxWidth,
            // maxHeight: this.selectedMaxHeight,
            originX: this.selectedOriginX,
            originY: this.selectedOriginY,
            overlayX: this.selectedOverlayX,
            overlayY: this.selectedOverlayY,
            offsetX: Number(this.selectedOffsetX),
            offsetY: Number(this.selectedOffsetY),
            isDraggable: /true/i.test(this.selectedIsDraggable),
            isResizable: /true/i.test(this.selectedIsResizable),
            disableBackdropClose: /true/i.test(this.selectedDisableBackdropClose)
        };
    }
    updateCommonPosition() {
        this.selectedWidth = '400px';
        this.selectedHeight = '300px';
        this.selectedUseGlobalPositionStrategy = 'false';
        switch (this.selectedCommonPosition) {
            case 'bottom':
                this.selectedOriginX = 'center';
                this.selectedOriginY = 'bottom';
                this.selectedOverlayX = 'center';
                this.selectedOverlayY = 'top';
                break;
            case 'right':
                this.selectedOriginX = 'end';
                this.selectedOriginY = 'center';
                this.selectedOverlayX = 'start';
                this.selectedOverlayY = 'center';
                break;
            case 'left':
                this.selectedOriginX = 'start';
                this.selectedOriginY = 'center';
                this.selectedOverlayX = 'end';
                this.selectedOverlayY = 'center';
                break;
            case 'top':
                this.selectedOriginX = 'center';
                this.selectedOriginY = 'top';
                this.selectedOverlayX = 'center';
                this.selectedOverlayY = 'bottom';
                break;
            case 'overlay':
                this.selectedWidth = '90vw';
                this.selectedHeight = '90vh';
                this.selectedUseGlobalPositionStrategy = 'true';
        }
        this.updateConfig();
    }
    /**
     * Demonstrates how to use the service with a TemplateRef
     * @param content Reference to the ng-template
     */
    openTemplate(content) {
        const ngPopoverRef = this.ngOverlayContainerService.open({
            content,
            data: 'Demo Dummy',
            origin: this.originTemplate.element.nativeElement,
            configuration: this.overlayConfiguration
        });
        ngPopoverRef.afterClosed$.subscribe((result) => {
            console.log('Returned value:');
            console.log(result);
        });
    }
    /**
     * Demonstrates how to use the service with any component
     * Make sure to include the Component (in this case DemoOverlayComponent) as entryComponent in your module
     */
    openComponent() {
        const ngPopoverRef = this.ngOverlayContainerService.open({
            content: _demo_overlay_component__WEBPACK_IMPORTED_MODULE_0__.DemoOverlayComponent,
            data: {
                demoInput: [1, 2, 3, 4]
            },
            origin: this.originComponent.element.nativeElement,
            configuration: this.overlayConfiguration
        });
        ngPopoverRef.afterClosed$.subscribe((result) => {
            if (result.data) {
                this.returnedValue = result.data.returnValue;
            }
        });
    }
    /**
     * Demonstrates how to use the service with a plain text
     */
    openText() {
        const ngPopoverRef = this.ngOverlayContainerService.open({
            content: 'Hello World 🌍🚀',
            origin: this.originText.element.nativeElement,
            configuration: this.overlayConfiguration
        });
        ngPopoverRef.afterClosed$.subscribe((result) => {
            console.log('Returned value:');
            console.log(result);
        });
    }
    /**
     * Demonstrates ho to use the service to open the overlay unrelated to any origin element by using `NgOverlayContainerConfiguration.useGlobalPositionStrategy = true`
     */
    openWithoutOrigin() {
        const ngPopoverRef = this.ngOverlayContainerService.open({
            content: 'Demonstration Centered',
            configuration: { useGlobalPositionStrategy: true }
        });
    }
}
/** @nocollapse */ DemoComponent.ɵfac = function DemoComponent_Factory(t) { return new (t || DemoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ng_overlay_container__WEBPACK_IMPORTED_MODULE_1__.NgOverlayContainerService)); };
/** @nocollapse */ DemoComponent.ɵcmp = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DemoComponent, selectors: [["app-demo"]], viewQuery: function DemoComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c2, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewContainerRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originTemplate = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originComponent = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.originText = _t.first);
    } }, decls: 129, vars: 35, consts: [[1, "content"], [2, "display", "flex", "align-items", "center", "flex-direction", "column"], [1, "common-positions"], [1, "section"], [3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "card-container"], ["target", "_blank", "rel", "noopener", 1, "card", 3, "click"], ["originTemplate", ""], ["template", ""], ["originComponent", ""], ["originText", ""], [1, "config-container"], ["appearance", "outline"], [3, "ngModel", "ngModelChange", "selectionChange"], [1, "config-container", "right"], [3, "value"], [2, "display", "flex", "flex-direction", "column", "height", "100%"], [2, "flex", "1"], ["mat-stroked-button", "", "color", "primary", 3, "click"]], template: function DemoComponent_Template(rf, ctx) { if (rf & 1) {
        const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Demo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "You can use NgOverlayContainer with either a template, a component or just with a plain text.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "You can return data from the embedded component to the parent. Returned value from component:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "div", 3)(12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Common positions");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-radio-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_radio_group_ngModelChange_14_listener($event) { return ctx.selectedCommonPosition = $event; })("change", function DemoComponent_Template_mat_radio_group_change_14_listener() { return ctx.updateCommonPosition(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, DemoComponent_mat_radio_button_15_Template, 2, 2, "mat-radio-button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6)(17, "a", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r43); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](22); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openTemplate(_r2)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "A template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, DemoComponent_ng_template_21_Template, 10, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "a", 7, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_Template_a_click_23_listener() { return ctx.openComponent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "A component");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "a", 7, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DemoComponent_Template_a_click_27_listener() { return ctx.openText(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Plain text");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 12)(32, "div", 3)(33, "mat-form-field", 13)(34, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Width");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_36_listener($event) { return ctx.selectedWidth = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_36_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](37, DemoComponent_mat_option_37_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "div", 3)(39, "mat-form-field", 13)(40, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Height");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_42_listener($event) { return ctx.selectedHeight = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_42_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](43, DemoComponent_mat_option_43_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 3)(45, "mat-form-field", 13)(46, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "MinWidth");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_48_listener($event) { return ctx.selectedMinWidth = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_48_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](49, DemoComponent_mat_option_49_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 3)(51, "mat-form-field", 13)(52, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "MinHeight");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_54_listener($event) { return ctx.selectedMinHeight = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_54_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](55, DemoComponent_mat_option_55_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "div", 3)(57, "mat-form-field", 13)(58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "OriginX");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_60_listener($event) { return ctx.selectedOriginX = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_60_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](61, DemoComponent_mat_option_61_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "div", 3)(63, "mat-form-field", 13)(64, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "OriginY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_66_listener($event) { return ctx.selectedOriginY = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_66_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, DemoComponent_mat_option_67_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 3)(69, "mat-form-field", 13)(70, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "OverlayX");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](72, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_72_listener($event) { return ctx.selectedOverlayX = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_72_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, DemoComponent_mat_option_73_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "div", 3)(75, "mat-form-field", 13)(76, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77, "OverlayY");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](78, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_78_listener($event) { return ctx.selectedOverlayY = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_78_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](79, DemoComponent_mat_option_79_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 3)(81, "mat-form-field", 13)(82, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](83, "OffsetX in px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](84, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_84_listener($event) { return ctx.selectedOffsetX = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_84_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](85, DemoComponent_mat_option_85_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "div", 3)(87, "mat-form-field", 13)(88, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](89, "OffsetY in px");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](90, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_90_listener($event) { return ctx.selectedOffsetY = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_90_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](91, DemoComponent_mat_option_91_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "div", 15)(93, "div", 3)(94, "mat-form-field", 13)(95, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](96, "HasBackdrop");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](97, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_97_listener($event) { return ctx.selectedHasBackdrop = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_97_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](98, DemoComponent_mat_option_98_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](99, "div", 3)(100, "mat-form-field", 13)(101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "BackdropClass");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_103_listener($event) { return ctx.selectedBackdropClass = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_103_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](104, DemoComponent_mat_option_104_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](105, "div", 3)(106, "mat-form-field", 13)(107, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](108, "UseGlobalPositionStrategy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](109, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_109_listener($event) { return ctx.selectedUseGlobalPositionStrategy = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_109_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, DemoComponent_mat_option_110_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 3)(112, "mat-form-field", 13)(113, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](114, "IsDraggable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](115, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_115_listener($event) { return ctx.selectedIsDraggable = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_115_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](116, DemoComponent_mat_option_116_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](117, "div", 3)(118, "mat-form-field", 13)(119, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](120, "IsResizable");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_121_listener($event) { return ctx.selectedIsResizable = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_121_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](122, DemoComponent_mat_option_122_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](123, "div", 3)(124, "mat-form-field", 13)(125, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](126, "DisableCloseOnBackdropClick");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "mat-select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function DemoComponent_Template_mat_select_ngModelChange_127_listener($event) { return ctx.selectedDisableBackdropClose = $event; })("selectionChange", function DemoComponent_Template_mat_select_selectionChange_127_listener() { return ctx.updateConfig(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](128, DemoComponent_mat_option_128_Template, 2, 2, "mat-option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.returnedValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedCommonPosition);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.commonPositions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.widths);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.heights);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedMinWidth);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.minWidths);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedMinHeight);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.minHeights);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOriginX);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.originXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOriginY);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.originYs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOverlayX);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.overlayXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOverlayY);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.overlayYs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOffsetX);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.offsetXs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedOffsetY);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.offsetYs);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedHasBackdrop);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hasBackdrops);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedBackdropClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.backdropClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedUseGlobalPositionStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.useGlobalPositionStrategy);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedIsDraggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.isDraggable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedIsResizable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.isResizable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.selectedDisableBackdropClose);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.disableBackdropClose);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__.MatLabel, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_6__.MatRadioButton, _angular_material_button__WEBPACK_IMPORTED_MODULE_7__.MatButton, _angular_material_select__WEBPACK_IMPORTED_MODULE_8__.MatSelect, _angular_material_core__WEBPACK_IMPORTED_MODULE_9__.MatOption], styles: [".card-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 8em;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  border: 1px solid #eee;\n  background-color: #ffffff;\n  height: 40px;\n  width: 200px;\n  margin: 0 8px 16px;\n  padding: 16px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2s ease-in-out;\n  line-height: 24px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0;\n}\n\n.card.card-small[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 168px;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card) {\n  cursor: pointer;\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover {\n  transform: translateY(-3px);\n  box-shadow: 0 4px 17px rgba(0, 0, 0, 0.35);\n}\n\n.card-container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(.highlight-card):hover   .material-icons[_ngcontent-%COMP%]   path[_ngcontent-%COMP%] {\n  fill: rgb(105, 103, 103);\n}\n\n.card.highlight-card[_ngcontent-%COMP%] {\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n  border: none;\n  width: auto;\n  min-width: 30%;\n  position: relative;\n}\n\n.card.card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 60px;\n}\n\n\n\n@media screen and (max-width: 767px) {\n  .card-container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(.circle-link) {\n    width: 100%;\n  }\n  .card[_ngcontent-%COMP%]:not(.highlight-card) {\n    height: 16px;\n    margin: 8px 0;\n  }\n  .card.highlight-card[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    margin-left: 72px;\n  }\n}\n\n.config-container[_ngcontent-%COMP%] {\n  position: absolute;\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  grid-row-gap: 10px;\n  margin-top: 30px;\n}\n\n.right[_ngcontent-%COMP%] {\n  right: 0;\n}\n\n.section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.common-positions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 30px 0;\n}\n\n.common-positions[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.common-positions[_ngcontent-%COMP%]   mat-radio-group[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  margin: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlbW8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVBO0VBQ0ksZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7QUFDSjs7QUFFQTtFQUNJLDJCQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFQTtFQUNJLHdCQUFBO0FBQ0o7O0FBRUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxpQkFBQTtBQUNKOztBQUVBLHNCQUFBOztBQUNBO0VBQ0k7SUFDSSxXQUFBO0VBQ047RUFFRTtJQUNJLFlBQUE7SUFDQSxhQUFBO0VBQU47RUFHRTtJQUNJLGlCQUFBO0VBRE47QUFDRjs7QUFJQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJEQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUlBO0VBQ0ksUUFBQTtBQURKOztBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFNQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FBSEo7O0FBS0k7RUFDSSxhQUFBO0FBSFI7O0FBS1E7RUFDSSxXQUFBO0FBSFoiLCJmaWxlIjoiZGVtby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogOGVtO1xufVxuXG4uY2FyZCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMCA4cHggMTZweDtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2FyZC5jYXJkLXNtYWxsIHtcbiAgICBoZWlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDE2OHB4O1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNhcmQtY29udGFpbmVyIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNweCk7XG4gICAgYm94LXNoYWRvdzogMCA0cHggMTdweCByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uY2FyZC1jb250YWluZXIgLmNhcmQ6bm90KC5oaWdobGlnaHQtY2FyZCk6aG92ZXIgLm1hdGVyaWFsLWljb25zIHBhdGgge1xuICAgIGZpbGw6IHJnYigxMDUsIDEwMywgMTAzKTtcbn1cblxuLmNhcmQuaGlnaGxpZ2h0LWNhcmQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTc2ZDI7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG1pbi13aWR0aDogMzAlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNhcmQuY2FyZC5oaWdobGlnaHQtY2FyZCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogNjBweDtcbn1cblxuLyogUmVzcG9uc2l2ZSBTdHlsZXMgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLmNhcmQtY29udGFpbmVyID4gKjpub3QoLmNpcmNsZS1saW5rKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5jYXJkOm5vdCguaGlnaGxpZ2h0LWNhcmQpIHtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgIH1cblxuICAgIC5jYXJkLmhpZ2hsaWdodC1jYXJkIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogNzJweDtcbiAgICB9XG59XG5cbi5jb25maWctY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcbiAgICBncmlkLXJvdy1nYXA6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5yaWdodCB7XG4gICAgcmlnaHQ6IDA7XG59XG5cblxuXG4uc2VjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb21tb24tcG9zaXRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDMwcHggMDtcblxuICAgIG1hdC1yYWRpby1ncm91cCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICBtYXJnaW46IDVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 4547:
/*!**********************************************************!*\
  !*** ./src/app/documentation/documentation.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentationComponent": () => (/* binding */ DocumentationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_markdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-markdown */ 3981);


class DocumentationComponent {
}
/** @nocollapse */ DocumentationComponent.ɵfac = function DocumentationComponent_Factory(t) { return new (t || DocumentationComponent)(); };
/** @nocollapse */ DocumentationComponent.ɵcmp = /** @pureOrBreakMyCode */ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DocumentationComponent, selectors: [["app-documentation"]], decls: 4, vars: 1, consts: [[1, "content"], [3, "src"]], template: function DocumentationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "markdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/README.md");
    } }, dependencies: [ngx_markdown__WEBPACK_IMPORTED_MODULE_1__.MarkdownComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudGF0aW9uLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map