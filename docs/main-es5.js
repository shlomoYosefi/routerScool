function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./comps/c1/c1.component */
    "./src/app/comps/c1/c1.component.ts");
    /* harmony import */


    var _comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./comps/c2/c2.component */
    "./src/app/comps/c2/c2.component.ts");
    /* harmony import */


    var _comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./comps/c3/c3.component */
    "./src/app/comps/c3/c3.component.ts");
    /* harmony import */


    var _comps_c4_c4_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./comps/c4/c4.component */
    "./src/app/comps/c4/c4.component.ts");
    /* harmony import */


    var _comps_c5_c5_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/c5/c5.component */
    "./src/app/comps/c5/c5.component.ts");

    var routes = [{
      path: "",
      component: _comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_2__["C1Component"],
      children: [{
        path: "rishum",
        component: _comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_3__["C2Component"]
      }, {
        path: "user",
        component: _comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_4__["C3Component"]
      }, {
        path: "class1",
        component: _comps_c4_c4_component__WEBPACK_IMPORTED_MODULE_5__["C4Component"]
      }, {
        path: "class2",
        component: _comps_c5_c5_component__WEBPACK_IMPORTED_MODULE_6__["C5Component"]
      }]
    }, {
      path: "**",
      component: _comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_2__["C1Component"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'material';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _moduls_mat_mat_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./moduls/mat/mat.module */
    "./src/app/moduls/mat/mat.module.ts");
    /* harmony import */


    var _comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./comps/c1/c1.component */
    "./src/app/comps/c1/c1.component.ts");
    /* harmony import */


    var _comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./comps/c2/c2.component */
    "./src/app/comps/c2/c2.component.ts");
    /* harmony import */


    var _comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./comps/c3/c3.component */
    "./src/app/comps/c3/c3.component.ts");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _comps_c4_c4_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./comps/c4/c4.component */
    "./src/app/comps/c4/c4.component.ts");
    /* harmony import */


    var _comps_c5_c5_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./comps/c5/c5.component */
    "./src/app/comps/c5/c5.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"],
        useValue: 'he-IL'
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _moduls_mat_mat_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_6__["C1Component"], _comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_7__["C2Component"], _comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_8__["C3Component"], _comps_c4_c4_component__WEBPACK_IMPORTED_MODULE_10__["C4Component"], _comps_c5_c5_component__WEBPACK_IMPORTED_MODULE_11__["C5Component"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _moduls_mat_mat_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _comps_c1_c1_component__WEBPACK_IMPORTED_MODULE_6__["C1Component"], _comps_c2_c2_component__WEBPACK_IMPORTED_MODULE_7__["C2Component"], _comps_c3_c3_component__WEBPACK_IMPORTED_MODULE_8__["C3Component"], _comps_c4_c4_component__WEBPACK_IMPORTED_MODULE_10__["C4Component"], _comps_c5_c5_component__WEBPACK_IMPORTED_MODULE_11__["C5Component"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _moduls_mat_mat_module__WEBPACK_IMPORTED_MODULE_5__["DemoMaterialModule"]],
          providers: [{
            provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_9__["MAT_DATE_LOCALE"],
            useValue: 'he-IL'
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/c1/c1.component.ts":
  /*!******************************************!*\
    !*** ./src/app/comps/c1/c1.component.ts ***!
    \******************************************/

  /*! exports provided: C1Component */

  /***/
  function srcAppCompsC1C1ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C1Component", function () {
      return C1Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");

    var C1Component = /*#__PURE__*/function () {
      function C1Component() {
        _classCallCheck(this, C1Component);
      }

      _createClass(C1Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return C1Component;
    }();

    C1Component.ɵfac = function C1Component_Factory(t) {
      return new (t || C1Component)();
    };

    C1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: C1Component,
      selectors: [["app-c1"]],
      decls: 43,
      vars: 2,
      consts: [["dir", "rtl"], [1, "all"], [1, "hider"], [1, "rishum"], ["id", "rishum", "routerLink", "/rishum"], ["id", "user", "routerLink", "/user"], [1, "menu"], ["mat-button", "", 3, "matMenuTriggerFor"], ["yPosition", "above"], ["aboveMenu", "matMenu"], ["routerLink", "/class1", "mat-menu-item", ""], ["routerLink", "/class2", "mat-menu-item", ""], ["routerLink", "/class3", "mat-menu-item", ""], ["routerLink", "/class4", "mat-menu-item", ""], ["routerLink", "/class5", "mat-menu-item", ""], ["routerLink", "/class6", "mat-menu-item", ""], ["routerLink", "/class7", "mat-menu-item", ""], ["routerLink", "/class8", "mat-menu-item", ""], ["yPosition", "below"], ["belowMenu", "matMenu"], ["routerLink", "/comp3", "mat-menu-item", ""]],
      template: function C1Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05D1\u05D0\u05D9\u05DD \u05DC\u05D1\u05D9\u05EA \u05D4\u05E1\u05E4\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u05D4\u05E8\u05E9\u05DE\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05DB\u05E0\u05D9\u05E1\u05EA \u05EA\u05DC\u05DE\u05D9\u05D3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05EA\u05DC\u05DE\u05D9\u05D3\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05DB\u05D9\u05EA\u05D4 \u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u05DB\u05D9\u05EA\u05D4 \u05D1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05DB\u05D9\u05EA\u05D4 \u05D2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05DB\u05D9\u05EA\u05D4 \u05D3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u05DB\u05D9\u05EA\u05D4 \u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05DB\u05D9\u05EA\u05D4 \u05D5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "\u05DB\u05D9\u05EA\u05D4 \u05D6");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u05DB\u05D9\u05EA\u05D4 \u05D7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u05E8\u05E9\u05D9\u05DE\u05EA \u05D7\u05D5\u05D2\u05D9\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-menu", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u05D7\u05D5\u05D2 \u05E6\u05D9\u05D5\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u05D7\u05D5\u05D2 \u05E1\u05E4\u05D5\u05E8\u05D8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u05D7\u05D5\u05D2 \u05E7\u05E8\u05DE\u05D9\u05E7\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r1);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_1__["Dir"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: [".rishum[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50px;\r\n    background: lightgray;\r\n    display: flex;\r\n    text-align: center;  \r\n}\r\n\r\n.hider[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 50px;\r\n    background: lightgray;\r\n    text-align: center;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    font-size: xx-large;\r\n    margin: auto;\r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    height: 50px;\r\n    margin-left: 30px;\r\n}\r\n\r\n#rishum[_ngcontent-%COMP%]{\r\n    background: darkcyan;\r\n    margin: auto;\r\n    width: 120px;\r\n}\r\n\r\n#user[_ngcontent-%COMP%]{\r\n    background: darkkhaki;\r\n    margin: auto;\r\n    width: 120px;\r\n\r\n}\r\n\r\n.menu[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 70px;\r\n    background: yellow;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYzEvYzEuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFlBQVk7O0FBRWhCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jMS9jMS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJpc2h1bXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgIFxyXG59XHJcblxyXG4uaGlkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JheTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaDF7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG5idXR0b257XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuI3Jpc2h1bXtcclxuICAgIGJhY2tncm91bmQ6IGRhcmtjeWFuO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG59XHJcblxyXG4jdXNlcntcclxuICAgIGJhY2tncm91bmQ6IGRhcmtraGFraTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHdpZHRoOiAxMjBweDtcclxuXHJcbn1cclxuXHJcbi5tZW51e1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c1',
          templateUrl: './c1.component.html',
          styleUrls: ['./c1.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/c2/c2.component.ts":
  /*!******************************************!*\
    !*** ./src/app/comps/c2/c2.component.ts ***!
    \******************************************/

  /*! exports provided: C2Component */

  /***/
  function srcAppCompsC2C2ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C2Component", function () {
      return C2Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_scool_students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/scool/students */
    "./src/app/scool/students.ts");
    /* harmony import */


    var src_app_servies_get_stu_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/servies/get-stu.service */
    "./src/app/servies/get-stu.service.ts");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var C2Component = /*#__PURE__*/function () {
      function C2Component(srv) {
        _classCallCheck(this, C2Component);

        this.srv = srv; // @Output() sentStudent: EventEmitter<Students> = new EventEmitter<Students>()

        this.student = new src_app_scool_students__WEBPACK_IMPORTED_MODULE_1__["Students"]();
        this.students = [];
      }

      _createClass(C2Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sentStu",
        value: function sentStu(firstName, lastName, tZ, phone, password, pictchur) {
          this.student.firstName = firstName.value;
          this.student.lastName = lastName.value;
          this.student.tZ = tZ.value;
          this.student.phone = phone.value;
          this.student.password = password.value;
          this.student.pictchur = pictchur;
          this.students.push(this.student);
          this.srv.arrayStudents.push(this.students);
          this.student = new src_app_scool_students__WEBPACK_IMPORTED_MODULE_1__["Students"]();
          console.log(this.srv.arrayStudents); // this.sentStudent.emit(this.student)
        }
      }, {
        key: "radio",
        value: function radio(x) {
          this.student.men = x;
        }
      }, {
        key: "date",
        value: function date(x) {
          this.student.datePicker = "".concat(x.value.getDate(), "/").concat(x.value.getMonth() + 1, "/").concat(x.value.getFullYear());
        }
      }]);

      return C2Component;
    }();

    C2Component.ɵfac = function C2Component_Factory(t) {
      return new (t || C2Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_stu_service__WEBPACK_IMPORTED_MODULE_2__["GetStuService"]));
    };

    C2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: C2Component,
      selectors: [["app-c2"]],
      decls: 111,
      vars: 2,
      consts: [["dir", "rtl"], [1, "rishum", "mat-elevation-z6"], [1, "optins"], ["aria-label", "Select an option"], ["value", "\u05D1\u05DF", 3, "change"], ["value", "\u05D1\u05EA", 3, "change"], [1, "rows"], [1, "row1"], [1, "us1"], [1, "us2"], ["firstname", ""], ["lastName", ""], ["tZ", ""], [1, "row2"], [1, "us3"], [1, "us4"], ["phone", ""], ["type", "password"], ["password", ""], ["appearance", "fill"], ["matInput", "", 3, "matDatepicker", "dateInput"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "pictchur"], ["pictchur", ""], ["id", "next", "routerLink", "\"\"", 3, "click"]],
      template: function C2Component_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "body", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u05E8\u05D9\u05E9\u05D5\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-radio-group", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-radio-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function C2Component_Template_mat_radio_button_change_9_listener($event) {
            return ctx.radio($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u05D6\u05DB\u05E8");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\xA0\xA0\xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function C2Component_Template_mat_radio_button_change_12_listener($event) {
            return ctx.radio($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05E0\u05E7\u05D1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u05EA.\u05D6.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "input", null, 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", null, 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", null, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "\u05D8\u05DC\u05E4\u05D5\u05DF :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "\u05E1\u05D9\u05E1\u05DE\u05D0 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D9\u05D3\u05D4 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "input", null, 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "input", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "mat-form-field", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "\u05D1\u05D7\u05E8 \u05EA\u05D0\u05E8\u05D9\u05DA");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateInput", function C2Component_Template_input_dateInput_93_listener($event) {
            return ctx.date($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "mat-datepicker-toggle", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](95, "mat-datepicker", null, 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "\u05D4\u05D5\u05E1\u05E3 \u05EA\u05DE\u05D5\u05E0\u05D4 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "input", null, 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function C2Component_Template_button_click_109_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](53);

            var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](80);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](86);

            var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](105);

            return ctx.sentStu(_r0, _r1, _r2, _r3, _r4, _r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u05E8\u05D9\u05E9\u05D5\u05DD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](96);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](93);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matDatepicker", _r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", _r5);
        }
      },
      directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_3__["Dir"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__["MatRadioButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepicker"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
      styles: [".rishum[_ngcontent-%COMP%]{\r\n    width: 50%;\r\n    height: 70%;\r\n    border: lightsalmon solid 5px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    \r\n}\r\n\r\n.row1[_ngcontent-%COMP%]{\r\n   text-align: center;\r\n   margin: auto;\r\n   display: flex;\r\n}\r\n\r\n.row2[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n    margin: auto;\r\n    display: flex;\r\n }\r\n\r\n.rows[_ngcontent-%COMP%]{\r\n     display: flex;\r\n }\r\n\r\nh1[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n     text-decoration: underline;\r\n     margin-top: 30px;\r\n }\r\n\r\n.optins[_ngcontent-%COMP%]{\r\n     text-align: center;\r\n }\r\n\r\n#next[_ngcontent-%COMP%]{\r\n     width: 100px;\r\n     height: 50px;\r\n     margin: auto;\r\n     margin-right: 400px;\r\n     margin-bottom: 15px;\r\n     background: rosybrown;\r\n }\r\n\r\n.pictchur[_ngcontent-%COMP%]{\r\n     display: flex;\r\n     margin-right: 310px;\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYzIvYzIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7O0FBRUE7R0FDRyxrQkFBa0I7R0FDbEIsWUFBWTtHQUNaLGFBQWE7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUE7S0FDSSxhQUFhO0NBQ2pCOztBQUVBO0tBQ0ksa0JBQWtCO0tBQ2xCLDBCQUEwQjtLQUMxQixnQkFBZ0I7Q0FDcEI7O0FBRUE7S0FDSSxrQkFBa0I7Q0FDdEI7O0FBRUE7S0FDSSxZQUFZO0tBQ1osWUFBWTtLQUNaLFlBQVk7S0FDWixtQkFBbUI7S0FDbkIsbUJBQW1CO0tBQ25CLHFCQUFxQjtDQUN6Qjs7QUFFQTtLQUNJLGFBQWE7S0FDYixtQkFBbUI7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wcy9jMi9jMi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ucmlzaHVte1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNzAlO1xyXG4gICAgYm9yZGVyOiBsaWdodHNhbG1vbiBzb2xpZCA1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5yb3cxe1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1hcmdpbjogYXV0bztcclxuICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnJvdzJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gfVxyXG5cclxuIC5yb3dze1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiB9XHJcblxyXG4gaDF7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiB9XHJcblxyXG4gLm9wdGluc3tcclxuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiB9XHJcblxyXG4gI25leHR7XHJcbiAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgIGhlaWdodDogNTBweDtcclxuICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiA0MDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgIGJhY2tncm91bmQ6IHJvc3licm93bjtcclxuIH1cclxuIFxyXG4gLnBpY3RjaHVye1xyXG4gICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgbWFyZ2luLXJpZ2h0OiAzMTBweDtcclxuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c2',
          templateUrl: './c2.component.html',
          styleUrls: ['./c2.component.css']
        }]
      }], function () {
        return [{
          type: src_app_servies_get_stu_service__WEBPACK_IMPORTED_MODULE_2__["GetStuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/c3/c3.component.ts":
  /*!******************************************!*\
    !*** ./src/app/comps/c3/c3.component.ts ***!
    \******************************************/

  /*! exports provided: C3Component */

  /***/
  function srcAppCompsC3C3ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C3Component", function () {
      return C3Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var C3Component = /*#__PURE__*/function () {
      function C3Component() {
        _classCallCheck(this, C3Component);
      }

      _createClass(C3Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myName",
        value: function myName(x) {
          console.log(x);
        }
      }]);

      return C3Component;
    }();

    C3Component.ɵfac = function C3Component_Factory(t) {
      return new (t || C3Component)();
    };

    C3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: C3Component,
      selectors: [["app-c3"]],
      decls: 28,
      vars: 0,
      consts: [[1, "logIn", "mat-elevation-z6"], [1, "rishum"], [1, "user"], [1, "pssword"]],
      template: function C3Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05DB\u05E0\u05D9\u05E1\u05EA \u05DE\u05E9\u05EA\u05DE\u05E9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u05E1\u05D9\u05E1\u05DE\u05D0 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05DB\u05E0\u05D9\u05E1\u05D4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".logIn[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n    height: 250px;\r\n    margin: auto;\r\n    background: lightgray;\r\n    text-align: center;\r\n    margin-top: 40px;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    text-decoration: underline;\r\n}\r\n\r\n.rishum[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    margin-right: 120px; \r\n}\r\n\r\nbutton[_ngcontent-%COMP%]{\r\n    width: 100px;\r\n    height: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYzMvYzMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvY29tcHMvYzMvYzMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dJbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogbGlnaHRncmF5O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuaDF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuLnJpc2h1bXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEyMHB4OyBcclxufVxyXG5cclxuYnV0dG9ue1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c3',
          templateUrl: './c3.component.html',
          styleUrls: ['./c3.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/c4/c4.component.ts":
  /*!******************************************!*\
    !*** ./src/app/comps/c4/c4.component.ts ***!
    \******************************************/

  /*! exports provided: C4Component */

  /***/
  function srcAppCompsC4C4ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C4Component", function () {
      return C4Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");

    var C4Component = /*#__PURE__*/function () {
      function C4Component() {
        _classCallCheck(this, C4Component);
      }

      _createClass(C4Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return C4Component;
    }();

    C4Component.ɵfac = function C4Component_Factory(t) {
      return new (t || C4Component)();
    };

    C4Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: C4Component,
      selectors: [["app-c4"]],
      decls: 33,
      vars: 0,
      consts: [[1, "allStu"], [1, "example-card", "mat-elevation-z24"], ["mat-card-avatar", "", 1, "example-header-image"], ["mat-card-image", "", "src", "https://material.angular.io/assets/img/examples/shiba2.jpg", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSw-T9Tn5s8KWraEwZVxwROEfEkkI9Ak9CBxw&usqp=CAU", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRe7hoGgMhATfU89QU3sqr8ZI64MSnFWCd4gA&usqp=CAU", "alt", "Photo of a Shiba Inu"], ["mat-card-image", "", "src", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAsJChUWFRUXFhUYGBUZGhYZFxoaGB8WFxoYGBUgFRUYGhgdIiEdGBcfGBUXHSkeHyUlJiYmFR0rLiolLiElJiUBDAwMEA4QGhERGi0iHiIqKC0lMDAtKCUlKCknLScnJy0tJysoKSUtLi4lJScnJSclKikpLSUtJSUmLSUlJyclKP/AABEIALgBEwMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYHAf/EAD8QAAIBAgIGBwcCAwcFAAAAAAECAAMRBCEFEhMxQVEiMlJhcYGSBjNykaGxskLBFNHwFRYjYpPS8UOCosLh/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADMRAAIBAgQEAwgCAgMBAAAAAAABAgMRBBIhMQVBUWETcdEigZGhscHh8BQyU5IVUoIG/9oADAMBAAIRAxEAPwD1OhRTUXor1R+kchJNgnYX0iMP1F+FfsJLAItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAItgnYX0iYtTpgElUAG8kAD5zX0hpBKK3bNj1VG8/wAh3zkcZjqlY3dujwQdUeXE95kLFY6nh9HrLp6/t+xLw+EnX12j19P23cv8TpbDLcKgqHuUBfUf2vKupphz1aVNB8Osf2+0rAhO4SQUjzlLV4liJ7PKu3ruWkMFQhurvvr+Cf8Aj6xN7jyppb8ZnTxlXi1v+xf9shVCOMykf+TX/wAkv9n6m7pUv+kfgidsU5VgxRgRY6yL/wCoEq9nY943EZGT1A2++Uhms69Wds0m7d/vudKdKEb2S17IuMBpYDo1VVhwfVAIPDWAGY75aaLx9KtdTTRXHAAFSAbXU2zE5SfcNUNJ1dd6tex3Z5EeYk7D8SqwcVN3S362/G5GrYClNScVaXLpf8noGwTsL6RGwTsL6ROXHtBWuBqU7E8bqPNicvG06bDVGZFLAKTwDaw8iN8u6GJp17+HfTs0VNbDzo2z2173MtgnYX0iNgnYX0iSxJBwItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAItgnYX0iNgnYX0iSxAKLGUl2jdFeHAdkRMsd7xvL8REAtsP1F+FfsJLIsP1F+FfsJLAEREAREQBERAE08fjFo0y5z4KOJbgJuTitOY0VKxW/RTor3t+o/t5SLjMR4FJyW70XmScJQ8epl5LVmjXrNUZnY3Y/IDkOQmExE+zykm5Ntu7Z6JJJWWxKgY7jYSQG29ppvUA3mFqXFzFna5jLfXkbRqjhI9qec1QzOSKa6xG88B4ma1Cva+sc5v4UrXZsqf7zLF6pAzMio1NYXmGGotXawyQdZv2HfPmJUUarqLBciB3ETfwGoZmFlzZF/bczq1LG0ypVARlNMUHqK9QXsu7vzz+klp4NlpLWF7Z6y91+sJssO3HuZeVK19b29+9jYYHI52424jznXaColaZIq69Ns1FrFT+oHP6Tl8M6utx5iX2gKtnanwYawHeMj9LSRw2cYV1GS1eiff7kDHqTpNLlv5fj1R0sRE9KUIiIgCIiAIiIAiIgCIiAUmO943l+IiMd7xvL8REAtsP1F+FfsJLIsP1F+FfsJLAEREAREQBERAE8/wBJshr1SoChWIyG8/qJ7ybz0CcN7R6N2R2ysSrPmvBSRz453lfxKnOdL2eTu/IseGSiqrUnZtWXmaAM+O4AJkCVxbnNfFVri085Gm27F6oNux9NFnpvVJ6KkADnnnJdGIMQxAYhV61gc+4Na31lpR0ctXD0kckJrLUcDLXsb6pPI8ZvfxagmmiVH1MiKVMsq8gSMge6WsMPF20v2IdXGSWaMdLPR9F29TZo0VRdVVAXkJRf2CTUJLdC9xbrW5S+pVVYHVO7IgghgeRBzEknRxT3I0K06d8r3IqFFaahVFgJr4nR1GrfXQNfIm5Bt4jObswq3sbb7H7TaxzzSvuc/wD2XgadQbJxQrDsVSCe50JKuPEToAoK2NiLeRnnntF7T4jA19jRVRS1QQHpgrUuoOvrb3JJa9+U7bRdYvTQldTWRHK9guDdRyGV7d8lVqEoRzN32+auR6dVSk4pWKOsP4eq6fpOa+BP/Il77NDXrPUHVVdXxJ/4+s0dO4UtqMLC1wT3cP3kuAqBQqKuoQLhgbknmZXUqahXVRrYtK01Voaf2aszuokGGqa6Kx3kAyeXydzzz0EREyBERAEREAREQBERAKTHe8by/ERGO943l+IiAW2H6i/Cv2ElkWH6i/Cv2ElgCIiAIiIAiIgCa2Lwy1abIwurCx/YibMTDSejMptO63PPP7Ko09Y1GZhrEKBlcA5TXraOpMDsmYNwV+Pgec6HTGDIJP6S2srcATvU8pUbJiRlq55nh43lNOkotxaL+liZzSnnd/l8Ni6w66qKN1lH2nHe1tHFrSpHCBzqM+1FMknpEkMaf6gbjpcNW07Cg4IyN5k9NTvGfA8R5zvQq+FK9r6WIFan4ittqc37J1MSaCHFBtqWbr5Pst4LDubIeM6iRhFUZD9yf5z5Sq3v0WBG8WJt35RVn4s3JLcQjkjZvY+sxvYDvz3CfVJ3EefCZeTekxUQqpZ7U1AuWqED5DiZqqcnsmbOcVzNargqbkFlBtmAQGAPMXBt5SalTCiw8e+fKHVU3vcXvzvnJZhybVm9EEktbGpj0JTLeCD+37zDB6PqMeqy3yLMNUAcdUHMmbbi9gN7Gw8/6vOkUWAnWhRVS7fI0q15U4pR5mNNAoAG4Cw8pnESxK8REQBERAEREAREQBERAKTHe8by/ERGO943l+IiAW2H6i/Cv2ElkWH6i/Cv2ElgCIiAIiIAiIgCIiAYMoIIIBB3g5iaR0VQJvsx8zb5XtLCJq4p7oypSjs7HJYmkcPUIt/hsbqeHhNhKgIyM6GtSVwVYBlPAyrqaES90d17r3H1kOphne8CZDExatPR9dzVkdRCQdVmRrZMpsw8P5GTPo1kBLYhVUcWWw+ZM0qb0mYIuMps53KqaxPgAZy8GouXzXqb+NSulmWvn6HOYmlpgVQP419h21RS9uRAF7/SRP7PVKtWm1TE16ihgX2u7LOyg24906arSrAkAggG2Y1T8gcpgMNWYqAwLHcLn8s7TLqVH7D3O8ZRis6stOS+3obbVFUbwOUlpUKr7l1V7T5fJd5+k57F6Yq4WsaYo0i4Fyc6hA72JFpD/fauMjTTvsv83iMacXabd+lmQf5TnU8GlCTm1e1m3be9l269ju8JgVpm5JZu0eHco4TenAp7bta5p0yONqhU/UG02qPtzQPWpOPgIcftJcK1K1ou3uaIEsXTcmpytJaO6aa7ao7SJW6J0tRxSs1InomzBhqsD3iWU7J31R1TTV0IiJkyIiIAiIgCIiAIiIBSY73jeX4iIx3vG8vxEQC2w/UX4V+wksiw/UX4V+wksAREQBERAEREAREQBERAEiq1VRWZjZVBLE7gAM5mzAAk7hOZ05VqYils6ICqxBZmNrqDewA5kfKc6lRQV37jOWbTcVexx3tBplqxLnJB7tOQ5kcWP0lJozGtRrpW3lWva9ri+a+mb+mdDVqS7VmVkHZJuL8bHhKQStzO+ZvVl3/89wqOSeIxCvUldW3yxeltNm/Q9YpaXwdcBhXWm56yudU3tyP7TXxvtBhcMpNNxWrEWAXMDxIyAnmMmwtBqrhF6zGwvunXx3fMoq/UsXwOhDWVSWRa20+v4N5a7VGqVXN2JsTwuQDYdwMrHbM+J+hM6epoKtTGqo178Rl9DKPSWi6uGN6lij3IYcDxU98jx1bb3KnhKtxfEVpRtFpqDe1tLW/8x+nQ0hvByuN1+PcRLjDurAWHiOIPIyj179X58Js4Ok5cCmGZ73PhfMngFmZRurMsOOcGpY+PjQajUiv7PaSXJ/Z+53L7R+KrUK61KKtULC1SmoJ11HcOI4GepYPE7VA+q6X3q6lGB5EGeWYeu1J1qLbXQhs93I5eBM9E0ZpcViFK6rEXB/Sw7uInfCYiKSpyer27niMDL2XFv3FzERLEsBERAEREAREQBERAKTHe8by/ERGO943l+IiAW2H6i/Cv2ElkWH6i/Cv2ElgCIiAIiIAiIgCIiAIiIBo6TNqTcv1fDxlMaigb8v6+U6VlBBBFwd4nK6e0aaVB6lC91zKnMavG3hv8pExFKUvaXIkUq0KcXnv10Vyr0lgTi7IKrKgN2y11Y8BaVrexrjdiKRHC4cH8TNv2Xrs20ub7iPO86yUNTiEqVWVJwTS23T+TJ2H4jWjTjOjK0ZK9mk/scGfZCvfKpSI56zD6as39F6F/hnO1KMSOiQS2qBzJAtOumvXw6va97jcQbER/yUXo6du6d/k0dZ8SxFVZKklle9kk/ifFGUwq0lcarKrKeBFx8jNXGYWqqMaTlmGeqeI4gd85qlpVxUBqM2ocjbIqedu7lJMMTCom43duXP4ECri6NGUYzbV9nZ297+u5d1vZ3CN/09X4CU+028Do+lQFqShQd53sfFjmZU6R0w9AIygVKbjJr2N+VxJNH6ZqV76lFRYXJapYD/xnWFWM4Z09P3kdamNipeFOo78l7T7rlY0NMYcJUNuqwv8APfN7Q2ItsWvmrAN87W+Vpr4vBVaz3d0A4BQTl5xgcOadQUlJa7KV55nORZVISlHI9VJNfEoZRccROaVoyenn5ed9z0qIielJoiIgCIiAIiIAiIgFJjveN5fiIjHe8by/ERALbD9RfhX7CSyLD9RfhX7CSwBERAEREAREQBERAEREATFgCCCMjkZlEA8txeOTR+Mq0qa66dAkaxQoSL6gOYIsR85Yp7XYc2vTqrzsUYD7EzkvajDVaOMrGqptUcspO5l4WPdkLd0qNt/WUq6tGEpO9OL81r8dz1GDwGClQhm3tyb567fvM9MHtTg+1V/0h/un3+9GD7VX/TH+6eaCoDwPymetI7oUf8Ufg/UlLhGEaupS/wBl6Ho59qcGONU+CKPqWnN6Y0lha1zSpVEqHeSVKnxUce+c01S3P5TDazpCnCP9KcU+y1OdTg/D2stW7XeWnysbbVBazZC/da/zvLTQWNWm7AtZGFu7nnK/RWja2Lq7Okpt0ddyOii617n5HLjO0T2BINzih5Uv5vOrw8qsHFrc8jxTh9LCYiP8Ntq13dp2d7W67dSY1lAvrC3jJ/ZzVrYl3AutNAAf065P3tJcP7E0B16lRxy6gPjbP6zpsHg6dFAlNAijgOfMnie+c8JwzwameTvbY4LxJtZ0kl3ubUREtzuIiIAiIgCIiAIiIBSY73jeX4iIx3vG8vxEQC2w/UX4V+wksiw/UX4V+wksAREQBERAEREAREQBERAERNTSGLWjSeo25Ru4k8AO8mZSbdkYbSV3scT7a01bEUgc7Uzlyu2XzsflOZOFS2Qzm5icQ1V2qObu5ueQHBR3ASKegoQdOmoPkeSxNfxa0prZ7GGkKCNTVgo4X6I5TRoYSmy5qL8crSx1yAc8uIOYmdfRrU9lUZdVai6ygE8+N9xtnaJRp3Skk29tF6G9GrWjTl4cpJLXRtb6cmVp0co3avmBI6mDKi+REtZg4yPhOihFbKxyeIqTftvN56ll7B1SuJdb2VqZy5lSLediZ6eJ4toPF7HFUqh6oezctVuiT5Xv5T2gG4vKfHRtUv1X0PRYCSdLL0f11PsREhE4REQBERAEREAREQBERAKTHe8by/ERGO943l+IiAW2H6i/Cv2ElkWH6i/Cv2ElgCIiAIiIAiIgCIiAIiIAnAaf02axNFBakrZses5RuHIXHnOo01pJaNJ8wahU6ib2YnLcOHfPNVO4cfrLDA0VJupJbbepUcUxMoJUoPe+by6GcjdwBczImadXWqOtNFLMxsAOJMtnpqyjpwzysS4am+JqrSpqTrEAnkt8yeQtO89rsMRhqbDPZMt7dkjVMs9A6LXDUFSw1znUYDex7+Q3SyxFBaiMjC6sCCO4ymq4vNVjJbRfx6no6WCUKEoc5L4dDyUGfHFwQJvaQ0VWwzEMrNS/RUAutuTEdU+M0gby3jJTWaLujzlSnKlPLJWZWDCsb5f/AGbAxVYkK7udUWW5OQHATbkuGpAsWO4ZD9zDS3Zv/IlZmeH03i6ZFqzkLuV+kCORvnOt0R7W0a7mmyNTccyCp5kEZgTlnw6m55zm6FbUxQZb2FQA+AbVIlXxJQhCM0kne3mtfwX/AABzxdSpTk27Qct72atbfrsz3efZoaLqXpgZ9Elc+7P7ETfleWIiIgCIiAIiIAiIgFJjveN5fiIjHe8by/ERALbD9RfhX7CSyLD9RfhX7CSwBERAEREAREQBETTxOIYA7OmajDKwYKB4sf2vBlK5uSKtVVFLMQqgXJO4CUL6ZqUiP4qi9FSbB0IqUx8TDMfKUHtJpKpSKulZa9CqD/hsqlRxsCljbv3zR1IpXfv6kmng6tSShG13fLd+y2uWZXXuItIYwVK9SoAxRrBSRY2UdneBNdkVhmAR/XGaOL0nQNINSD06wIuhY1EI4kXOsPnMcDpIP0WGqw3j+UusNiqFW1OnLVLRPf8AfI8rxLg+PwubEV6dk3q1tfy3t0ez6kGOwZXNWNuRP2M6D2CwQapUrMPdjUW4/U2ZN+YFvnKPFVSSRe4nd+yWj6lKkzuwtV1XVBwFusf8xFvlNsZLLSavq/1mOGKUqibV7a+h08REpj0J8tKzEaFw1S+tSUE/qXoN81tLSLzKk4u8XY1lGMlaSuu+p5hj9HbGoyPrBSx1CTZWS+XS4m2+QmqvUUi+7Lco/nLzTOBxWMrrejrYSm3RQ1BT2h4v4cB3eM3VwVJF1X0bqrzplajDvys0mw4lynF6c+vy+5X1+ALSVOqtdcuns9v7LXtZW2ORx1YpSbVBJAsSNy3yuZR6Koh69JTxdQfXeT6Zo00rMKL1DSOYV9YFTyIO/wA5eex2jy1Q1iMl6Cd7Hd8hKvFYl4qrFJWS5b++567hPDYcHwFStJ3nNbtOL1Voqz21u++56TgkATLiST43t+02phTWwA5C0znYoxERAEREAREQBERAKTHe8by/ERGO943l+IiAWVCsmovSXqj9Q5CSbdO2vqERAG3Ttr6hG3Ttr6hEQBt07a+oRt07a+oREAbdO2vqEbdO2vqERAPjV0semvqE1MLjaIRRrqDbO5zvxvEQDHF4uiyMpZWDAgi4IsRPHtJUdnVdL3ClrW6WRzG6fYnDEQTS7FrwnEzoznl2a25XWz8zRs56qMfIzawei8UWutMjvJ1Rbj1jPkTSjDLJNOzRLx+PqTpuM4xaas007WfvLOnh3ZxTCjXJ1bcAed91u+et0GpoiqHWygKOkOAtES3xdVzy36X+J5HBUI0lNrrbly93cl26dtfUI26dtfUIiQicNunbX1CR16gKsFdQxBAOsMjaIhgxoYqkQAGUECxUsLi338ZKcQnbX1CfYgHN6c0dhsVq9IK4I6a2uV4j/N+0tNH4elRUKpRVUWVQwNhxJPFjETGVJ3tqbutUlTjTcnlT0XJXLDbp219Qjbp219QiJk0G3Ttr6hG3Ttr6hEQBt07a+oRt07a+oREAbdO2vqEbdO2vqERAG3Ttr6hG3Ttr6hEQCnxlZdo3SXhxHZEREA//2Q==", "alt", "Photo of a Shiba Inu"]],
      template: function C4Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u05D9\u05E9\u05E8\u05D0\u05DC \u05D9\u05E9\u05E8\u05D0\u05DC\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05DB\u05D9\u05EA\u05D4 \u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u05D7\u05D9\u05D9\u05DD \u05D7\u05D9\u05D9\u05DE\u05D5\u05D1\u05D9\u05E5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u05DB\u05D9\u05EA\u05D4 \u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u05D0\u05D4\u05E8\u05D5\u05DF \u05D0\u05D4\u05E8\u05D5\u05E0\u05D9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u05DB\u05D9\u05EA\u05D4 \u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-card-title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " \u05E7\u05D5\u05D1\u05D9 \u05D9\u05E2\u05E7\u05D5\u05D1\u05D9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card-subtitle");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u05DB\u05D9\u05EA\u05D4 \u05D0");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardHeader"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardAvatar"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardSubtitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_1__["MatCardImage"]],
      styles: [".example-card[_ngcontent-%COMP%] {\r\n    max-width: 200px;\r\n    margin-right: 40px;\r\n  }\r\n\r\n  .allStu[_ngcontent-%COMP%]{\r\n      display: flex;\r\n      margin-right: 60px;\r\n      margin-top: 60px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcHMvYzQvYzQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEI7O0VBRUE7TUFDSSxhQUFhO01BQ2Isa0JBQWtCO01BQ2xCLGdCQUFnQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2M0L2M0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1jYXJkIHtcclxuICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuYWxsU3R1e1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C4Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c4',
          templateUrl: './c4.component.html',
          styleUrls: ['./c4.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/comps/c5/c5.component.ts":
  /*!******************************************!*\
    !*** ./src/app/comps/c5/c5.component.ts ***!
    \******************************************/

  /*! exports provided: C5Component */

  /***/
  function srcAppCompsC5C5ComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "C5Component", function () {
      return C5Component;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_servies_get_stu_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/servies/get-stu.service */
    "./src/app/servies/get-stu.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function C5Component_ul_0_li_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9 :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4 :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u05D8\u05DC\u05E4\u05D5\u05DF :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u05E1\u05D9\u05E1\u05DE\u05D0 :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u05EA\u05D0\u05E8\u05D9\u05DA \u05DC\u05D9\u05D3\u05D4 :");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.firstName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.lastName);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.tZ);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.phone);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.password);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.datePicker);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](j_r3.men);
      }
    }

    function C5Component_ul_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, C5Component_ul_0_li_1_Template, 34, 7, "li", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var i_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", i_r1);
      }
    }

    var C5Component = /*#__PURE__*/function () {
      function C5Component(srv) {
        _classCallCheck(this, C5Component);

        this.srv = srv;
      }

      _createClass(C5Component, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return C5Component;
    }();

    C5Component.ɵfac = function C5Component_Factory(t) {
      return new (t || C5Component)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_servies_get_stu_service__WEBPACK_IMPORTED_MODULE_1__["GetStuService"]));
    };

    C5Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: C5Component,
      selectors: [["app-c5"]],
      decls: 1,
      vars: 1,
      consts: [[4, "ngFor", "ngForOf"]],
      template: function C5Component_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, C5Component_ul_0_Template, 2, 1, "ul", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.srv.arrayStudents);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBzL2M1L2M1LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](C5Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-c5',
          templateUrl: './c5.component.html',
          styleUrls: ['./c5.component.css']
        }]
      }], function () {
        return [{
          type: src_app_servies_get_stu_service__WEBPACK_IMPORTED_MODULE_1__["GetStuService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/moduls/mat/mat.module.ts":
  /*!******************************************!*\
    !*** ./src/app/moduls/mat/mat.module.ts ***!
    \******************************************/

  /*! exports provided: DemoMaterialModule */

  /***/
  function srcAppModulsMatMatModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function () {
      return DemoMaterialModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/clipboard */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/clipboard.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/stepper */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/tree */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/badge.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button-toggle.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");

    var DemoMaterialModule = function DemoMaterialModule() {
      _classCallCheck(this, DemoMaterialModule);
    };

    DemoMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: DemoMaterialModule
    });
    DemoMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function DemoMaterialModule_Factory(t) {
        return new (t || DemoMaterialModule)();
      },
      imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DemoMaterialModule, {
        exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemoMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          exports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_2__["ClipboardModule"], _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_6__["CdkStepperModule"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_7__["CdkTableModule"], _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["DragDropModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_10__["MatBadgeModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheetModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButtonModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_13__["MatButtonToggleModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_17__["MatStepperModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_19__["MatDialogModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_20__["MatDividerModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_22__["MatGridListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_23__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_25__["MatListModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_26__["MatMenuModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatNativeDateModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_29__["MatProgressBarModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_30__["MatProgressSpinnerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_27__["MatRippleModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_32__["MatSelectModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_33__["MatSidenavModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_34__["MatSliderModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_35__["MatSlideToggleModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_36__["MatSnackBarModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_37__["MatSortModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_38__["MatTableModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_39__["MatTabsModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_40__["MatToolbarModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_41__["MatTooltipModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_42__["MatTreeModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_4__["PortalModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_5__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/scool/students.ts":
  /*!***********************************!*\
    !*** ./src/app/scool/students.ts ***!
    \***********************************/

  /*! exports provided: Students */

  /***/
  function srcAppScoolStudentsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Students", function () {
      return Students;
    });

    var Students = function Students() {
      _classCallCheck(this, Students);
    };
    /***/

  },

  /***/
  "./src/app/servies/get-stu.service.ts":
  /*!********************************************!*\
    !*** ./src/app/servies/get-stu.service.ts ***!
    \********************************************/

  /*! exports provided: GetStuService */

  /***/
  function srcAppServiesGetStuServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GetStuService", function () {
      return GetStuService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var GetStuService = function GetStuService() {
      _classCallCheck(this, GetStuService);

      this.arrayStudents = [];
    };

    GetStuService.ɵfac = function GetStuService_Factory(t) {
      return new (t || GetStuService)();
    };

    GetStuService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: GetStuService,
      factory: GetStuService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GetStuService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\stu\Desktop\New folder\material\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map