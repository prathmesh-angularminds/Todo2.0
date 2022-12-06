"use strict";
(self["webpackChunkTodoser"] = self["webpackChunkTodoser"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_todo-compnents_todo-compnents_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./todo-compnents/todo-compnents.module */ 9589)).then((m) => m.TodoCompnentsModule),
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bottom/bottom.component */ 7174);




class AppComponent {
    constructor() {
        this.title = 'Todoser';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, consts: [[1, "todoser"], [1, "todoser-bgblur"], [1, ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-nav")(3, "router-outlet")(4, "app-bottom", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_1__.BottomComponent], styles: ["*[_ngcontent-%COMP%] {\n  padding: 0px;\n  margin: 0px;\n}\n\n.todoser[_ngcontent-%COMP%] {\n  width: 100vw;\n  height: 100vh;\n  background-image: radial-gradient(40.27% 58.3% at 85.9% 66.89%, rgba(224, 0, 0, 0.5) 0%, rgba(224, 0, 0, 0) 100%), radial-gradient(86.04% 170.15% at 86.04% 60.69%, rgba(36, 0, 118, 0.585207) 1.59%, #240076 84.61%);\n}\n\n.todoser[_ngcontent-%COMP%]   .todoser-bgblur[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  background: rgba(255, 255, 255, 0.15);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFlBQUE7RUFDQSxXQUFBO0FBQUo7O0FBR0E7RUFFSSxZQUFBO0VBQ0EsYUFBQTtFQUVBLHFOQUFBO0FBRko7O0FBSUk7RUFFSSxXQUFBO0VBQ0EsWUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0VBRUEscUNBQUE7QUFMUiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcblxuICAgIHBhZGRpbmc6IDBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cblxuLnRvZG9zZXIge1xuXG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1pbWFnZTogIHJhZGlhbC1ncmFkaWVudCg0MC4yNyUgNTguMyUgYXQgODUuOSUgNjYuODklLCByZ2JhKDIyNCwgMCwgMCwgMC41KSAwJSwgcmdiYSgyMjQsIDAsIDAsIDApIDEwMCUpIC8qIHdhcm5pbmc6IGdyYWRpZW50IHVzZXMgYSByb3RhdGlvbiB0aGF0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgQ1NTIGFuZCBtYXkgbm90IGJlaGF2ZSBhcyBleHBlY3RlZCAqLywgcmFkaWFsLWdyYWRpZW50KDg2LjA0JSAxNzAuMTUlIGF0IDg2LjA0JSA2MC42OSUsIHJnYmEoMzYsIDAsIDExOCwgMC41ODUyMDcpIDEuNTklLCAjMjQwMDc2IDg0LjYxJSkgO1xuXG4gICAgLnRvZG9zZXItYmdibHVyIHtcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xNSk7XG4gICAgfVxufVxuXG4iXX0= */"] });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav/nav.component */ 5375);
/* harmony import */ var _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bottom/bottom.component */ 7174);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__.NavComponent,
        _bottom_bottom_component__WEBPACK_IMPORTED_MODULE_3__.BottomComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__.BrowserAnimationsModule] }); })();


/***/ }),

/***/ 7174:
/*!********************************************!*\
  !*** ./src/app/bottom/bottom.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BottomComponent": () => (/* binding */ BottomComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class BottomComponent {
    constructor() { }
    ngOnInit() {
    }
}
BottomComponent.ɵfac = function BottomComponent_Factory(t) { return new (t || BottomComponent)(); };
BottomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BottomComponent, selectors: [["app-bottom"]], decls: 19, vars: 8, consts: [[1, "bottom-content"], [1, "main-block"], ["title", "All Task", 1, "imp-btn", 3, "routerLinkActive"], [3, "routerLink"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M15 11C14.45 11 13.9793 10.804 13.588 10.412C13.196 10.0207 13 9.55 13 9V5C13 4.45 13.196 3.979 13.588 3.587C13.9793 3.19567 14.45 3 15 3H19C19.55 3 20.021 3.19567 20.413 3.587C20.8043 3.979 21 4.45 21 5V9C21 9.55 20.8043 10.0207 20.413 10.412C20.021 10.804 19.55 11 19 11H15ZM11 9C11 9.55 10.8043 10.0207 10.413 10.412C10.021 10.804 9.55 11 9 11H5C4.45 11 3.979 10.804 3.587 10.412C3.19567 10.0207 3 9.55 3 9V5C3 4.45 3.19567 3.979 3.587 3.587C3.979 3.19567 4.45 3 5 3H9C9.55 3 10.021 3.19567 10.413 3.587C10.8043 3.979 11 4.45 11 5V9ZM13 15C13 14.45 13.196 13.979 13.588 13.587C13.9793 13.1957 14.45 13 15 13H19C19.55 13 20.021 13.1957 20.413 13.587C20.8043 13.979 21 14.45 21 15V19C21 19.55 20.8043 20.021 20.413 20.413C20.021 20.8043 19.55 21 19 21H15C14.45 21 13.9793 20.8043 13.588 20.413C13.196 20.021 13 19.55 13 19V15ZM9 13C9.55 13 10.021 13.1957 10.413 13.587C10.8043 13.979 11 14.45 11 15V19C11 19.55 10.8043 20.021 10.413 20.413C10.021 20.8043 9.55 21 9 21H5C4.45 21 3.979 20.8043 3.587 20.413C3.19567 20.021 3 19.55 3 19V15C3 14.45 3.19567 13.979 3.587 13.587C3.979 13.1957 4.45 13 5 13H9Z", "fill", "#6C2CFF", 1, "svg"], ["title", "Add Task", 1, "add-btn", 3, "routerLinkActive"], ["d", "M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z", "fill", "white", 1, "svg"], ["title", "Completed Task", 1, "complete-btn", 3, "routerLinkActive"], ["d", "M16.5 20.385L14.5575 18.4425L13.5 19.5L16.5 22.5L22.5 16.5L21.4425 15.4425L16.5 20.385Z", "fill", "white", 1, "svg"], ["d", "M18.75 3.75H16.5V3C16.4988 2.60254 16.3404 2.2217 16.0593 1.94065C15.7783 1.6596 15.3975 1.50119 15 1.5H9C8.60254 1.50119 8.2217 1.6596 7.94065 1.94065C7.6596 2.2217 7.50119 2.60254 7.5 3V3.75H5.25C4.85254 3.75119 4.4717 3.9096 4.19065 4.19065C3.9096 4.4717 3.75119 4.85254 3.75 5.25V21C3.75119 21.3975 3.9096 21.7783 4.19065 22.0593C4.4717 22.3404 4.85254 22.4988 5.25 22.5H12V21H5.25V5.25H7.5V7.5H16.5V5.25H18.75V13.5H20.25V5.25C20.2488 4.85254 20.0904 4.4717 19.8093 4.19065C19.5283 3.9096 19.1475 3.75119 18.75 3.75ZM15 6H9V3H15V6Z", "fill", "white", 1, "svg"], ["title", "Deleted Task", 1, "delete-btn", 3, "routerLinkActive"], ["d", "M9.4 16.5L12 13.9L14.6 16.5L16 15.1L13.4 12.5L16 9.9L14.6 8.5L12 11.1L9.4 8.5L8 9.9L10.6 12.5L8 15.1L9.4 16.5ZM5 21V6H4V4H9V3H15V4H20V6H19V21H5ZM7 19H17V6H7V19ZM7 6V19V6Z", "fill", "white", 1, "svg"]], template: function BottomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6)(7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8)(11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9)(14, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11)(16, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "add-task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "complete-task");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActive", "active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "delete-task");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive], styles: [".bottom-content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  bottom: 0px;\n  box-sizing: border-box;\n  margin-bottom: 30px;\n}\n.bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%] {\n  width: 30%;\n  border: 0.5px solid white;\n  border-radius: 20px;\n  background: linear-gradient(90.36deg, rgba(255, 255, 255, 0.5) -242.43%, rgba(255, 255, 255, 0) 160.75%);\n  -webkit-backdrop-filter: blur(2px);\n          backdrop-filter: blur(2px);\n  box-sizing: border-box;\n  padding: 0.8%;\n  display: flex;\n  justify-content: space-around;\n}\n.bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .all-btn[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .imp-btn[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .complete-btn[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  -webkit-backdrop-filter: blur(1.325px);\n          backdrop-filter: blur(1.325px);\n  border-radius: 6.625px;\n  border: 1px solid white;\n}\n.bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .all-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .imp-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .complete-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 60%;\n  display: flex;\n  justify-content: center;\n  align-self: center;\n}\n.bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .all-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .imp-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .add-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .complete-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .delete-btn[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  background: linear-gradient(136.01deg, rgba(255, 255, 255, 0.8) -30.89%, rgba(255, 255, 255, 0) 163.24%);\n}\n.bottom-content[_ngcontent-%COMP%]   .main-block[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .svg[_ngcontent-%COMP%] {\n  fill: #6C2CFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvdHRvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUdBLGVBQUE7RUFDQSxXQUFBO0VBRUEsc0JBQUE7RUFDQSxtQkFBQTtBQUxGO0FBT0U7RUFDRSxVQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdHQUFBO0VBS0Esa0NBQUE7VUFBQSwwQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUVBLGFBQUE7RUFDQSw2QkFBQTtBQVZKO0FBWUk7Ozs7O0VBS0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHNDQUFBO1VBQUEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBWE47QUFhTTs7Ozs7RUFFRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBUlI7QUFVUTs7Ozs7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUpaO0FBVUk7RUFDRSx3R0FBQTtBQVJOO0FBY007RUFFRSxhQUFBO0FBYlIiLCJmaWxlIjoiYm90dG9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBCb3R0b20gY29udGVudCBjc3Ncbi5ib3R0b20tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gIC8vIEZvciB0YWtpbmcgZGl2IGJlbG93XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAwcHg7XG5cbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAubWFpbi1ibG9jayB7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxuICAgICAgOTAuMzZkZWcsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkgLTI0Mi40MyUsXG4gICAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDE2MC43NSVcbiAgICApO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigycHgpO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC44JTtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG5cbiAgICAuYWxsLWJ0bixcbiAgICAuaW1wLWJ0bixcbiAgICAuYWRkLWJ0bixcbiAgICAuY29tcGxldGUtYnRuLFxuICAgIC5kZWxldGUtYnRuIHtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEuMzI1cHgpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNi42MjVweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuXG4gICAgICBhIHtcblxuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDYwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLXNlbGY6Y2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXG4gICAgICAgIDEzNi4wMWRlZyxcbiAgICAgICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIC0zMC44OSUsXG4gICAgICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTYzLjI0JVxuICAgICAgKTtcblxuICAgICAgLnN2ZyB7XG5cbiAgICAgICAgZmlsbDogIzZDMkNGRjtcbiAgICAgIH1cbiAgICB9XG5cbiAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 5375:
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


class NavComponent {
    constructor() { }
    ngOnInit() {
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 6, vars: 3, consts: [[1, "nav"], [1, "nav-logo-body"], ["src", "../../assets/Todoser-Logo.svg", "alt", "Todoser Logo"], [1, "nav-title"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, "Todoser"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.UpperCasePipe], styles: [".nav[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 0.6%;\n  display: flex;\n  align-items: center;\n}\n.nav[_ngcontent-%COMP%]   .nav-logo-body[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(136.01deg, rgba(255, 255, 255, 0.8) -30.89%, rgba(255, 255, 255, 0) 163.24%);\n  -webkit-backdrop-filter: blur(1.325px);\n          backdrop-filter: blur(1.325px);\n  border-radius: 6.625px;\n}\n.nav[_ngcontent-%COMP%]   .nav-logo-body[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 50%;\n  height: 50%;\n}\n.nav[_ngcontent-%COMP%]   .nav-title[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: bold;\n  color: white;\n  box-sizing: border-box;\n  margin-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUVJLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFKSjtBQU1JO0VBRUksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUVBLHdHQUFBO0VBQ0Esc0NBQUE7VUFBQSw4QkFBQTtFQUNBLHNCQUFBO0FBTlI7QUFPUTtFQUVJLFVBQUE7RUFDQSxXQUFBO0FBTlo7QUFVSTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBRUEsc0JBQUE7RUFDQSxpQkFBQTtBQVZSIiwiZmlsZSI6Im5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vLyBOYXYgU2Nzc1xuXG4ubmF2IHtcblxuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMC42JTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAubmF2LWxvZ28tYm9keSB7XG5cbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNi4wMWRlZywgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpIC0zMC44OSUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTYzLjI0JSk7XG4gICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigxLjMyNXB4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNi42MjVweDtcbiAgICAgICAgaW1nIHtcblxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm5hdi10aXRsZSB7XG5cbiAgICAgICAgZm9udC1zaXplOiAxLjA1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIH1cbn1cblxuXG4vLyBNZWRpYSBRdWVyeSBmb3Igc21hbGwgc2NyZWVuIGRldmljZVxuIl19 */"] });


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
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
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