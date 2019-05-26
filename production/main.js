(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./Webworkers/pixelOperationInBoundary.ts":
/*!************************************************!*\
  !*** ./Webworkers/pixelOperationInBoundary.ts ***!
  \************************************************/
/*! exports provided: desire */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "desire", function() { return desire; });
const desire = function () {
    alert('we exist');
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _main_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/app.component */ "./src/app/main/app.component.ts");
/* harmony import */ var _components_angularComponents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/angularComponents */ "./src/components/angularComponents.ts");
/* harmony import */ var _menu_background_background_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu/background/background.component */ "./src/app/menu/background/background.component.ts");
/* harmony import */ var _menu_foreground_foreground_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu/foreground/foreground.component */ "./src/app/menu/foreground/foreground.component.ts");
/* harmony import */ var _miniapps_sunlight_sunlight_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./miniapps/sunlight/sunlight.component */ "./src/app/miniapps/sunlight/sunlight.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _main_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _menu_background_background_component__WEBPACK_IMPORTED_MODULE_5__["BackgroundComponent"],
            _menu_foreground_foreground_component__WEBPACK_IMPORTED_MODULE_6__["ForegroundComponent"],
            _miniapps_sunlight_sunlight_component__WEBPACK_IMPORTED_MODULE_7__["SunlightComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _components_angularComponents__WEBPACK_IMPORTED_MODULE_4__["default"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        providers: [],
        bootstrap: [_main_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/main/app.component.html":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"minigameframe\">\r\n\r\n  <canvas #Main class=\"module\">\r\n\r\n\r\n  </canvas>\r\n\r\n</div>\r\n<div class=\"minigamemenuframe\">\r\n\r\n\r\n  <app-foreground></app-foreground>\r\n  <app-background></app-background>\r\n  \r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/main/app.component.scss":
/*!*****************************************!*\
  !*** ./src/app/main/app.component.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*@import \"~@angular/material/prebuilt-themes/deeppurple-amber.css\";*/\n/*@import \"~@angular/material/prebuilt-themes/pink-bluegrey.css\";*/\n/* For use in src/lib/core/theming/_palette.scss */\n/* For use in src/lib/core/theming/_palette.scss */\n/* For use in src/lib/core/theming/_palette.scss */\n.minigameframe {\n  background-color: #000000;\n  color: #ffffff;\n  width: 100vw;\n  height: 80vh;\n  margin: 0;\n  padding: 0; }\n.minigamemenuframe {\n  background-color: #a7bacc;\n  color: #000000;\n  width: 100vw;\n  height: 20vh;\n  margin: 0;\n  padding: 0; }\n.moduleframe {\n  background-color: #ffffff;\n  color: #000000; }\n.aboutframe {\n  background-color: #ffffff;\n  color: #000000; }\n.contactframe {\n  background-color: #a6a6a6;\n  color: #000000; }\n.warning-hidden {\n  display: none;\n  background-color: #fffbf1;\n  color: #000000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXG5pY2hvbGFzXFxEZXNrdG9wXFxQcm9maWxlXFxwcm9maWxldWkvc3JjXFxhcHBcXG1haW5cXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbWFpbi9DOlxcVXNlcnNcXG5pY2hvbGFzXFxEZXNrdG9wXFxQcm9maWxlXFxwcm9maWxldWkvc3JjXFxNYXRlcmlhbFRoZW1lXFxjdXN0b21QYWxldHRlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUVBQUE7QUFDQSxrRUFBQTtBQ0RBLGtEQUFBO0FBcUNBLGtEQUFBO0FBcUNBLGtEQUFBO0FEdEVBO0VBQ0UseUJDNkVlO0VENUVmLGNDMkZtQjtFRDFGbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVSxFQUFBO0FBRVo7RUFDRSx5QkNMZTtFRE1mLGNDU21CO0VEUm5CLFlBQVk7RUFDWixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVUsRUFBQTtBQUdaO0VBQ0UseUJDVmdCO0VEV2hCLGNDSW9CLEVBQUE7QUREdEI7RUFDRSx5QkNmZ0I7RURnQmhCLGNDRG9CLEVBQUE7QURJdEI7RUFDRSx5QkNzRGdCO0VEckRoQixjQ29Fb0IsRUFBQTtBRGpFdEI7RUFDRSxhQUFhO0VBQ2IseUJDV2dCO0VEVmhCLGNDeUJvQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKkBpbXBvcnQgXCJ+QGFuZ3VsYXIvbWF0ZXJpYWwvcHJlYnVpbHQtdGhlbWVzL2RlZXBwdXJwbGUtYW1iZXIuY3NzXCI7Ki9cclxuLypAaW1wb3J0IFwifkBhbmd1bGFyL21hdGVyaWFsL3ByZWJ1aWx0LXRoZW1lcy9waW5rLWJsdWVncmV5LmNzc1wiOyovXHJcblxyXG5AaW1wb3J0ICcuLi8uLi9NYXRlcmlhbFRoZW1lL2N1c3RvbVBhbGV0dGUnO1xyXG4ubWluaWdhbWVmcmFtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbWFwLWdldCgkcHJvZmlsZXVpYXBwLWFjY2VudCwgNjAwKTtcclxuICBjb2xvcjogbWFwLWdldChtYXAtZ2V0KCRwcm9maWxldWlhcHAtYWNjZW50LCBjb250cmFzdCksIDYwMCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogODB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ubWluaWdhbWVtZW51ZnJhbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHByb2ZpbGV1aWFwcC1wcmltYXJ5LCA2MDApO1xyXG4gIGNvbG9yOiBtYXAtZ2V0KG1hcC1nZXQoJHByb2ZpbGV1aWFwcC1wcmltYXJ5LCBjb250cmFzdCksIDYwMCk7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMjB2aDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1vZHVsZWZyYW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwcm9maWxldWlhcHAtcHJpbWFyeSwgQTEwMCk7XHJcbiAgY29sb3I6IG1hcC1nZXQobWFwLWdldCgkcHJvZmlsZXVpYXBwLXByaW1hcnksIGNvbnRyYXN0KSwgQTEwMCk7XHJcbn1cclxuXHJcbi5hYm91dGZyYW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwcm9maWxldWlhcHAtcHJpbWFyeSwgQTEwMCk7XHJcbiAgY29sb3I6IG1hcC1nZXQobWFwLWdldCgkcHJvZmlsZXVpYXBwLXByaW1hcnksIGNvbnRyYXN0KSwgQTEwMCk7XHJcbn1cclxuXHJcbi5jb250YWN0ZnJhbWUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IG1hcC1nZXQoJHByb2ZpbGV1aWFwcC1hY2NlbnQsIEExMDApO1xyXG4gIGNvbG9yOiBtYXAtZ2V0KG1hcC1nZXQoJHByb2ZpbGV1aWFwcC1hY2NlbnQsIGNvbnRyYXN0KSwgQTEwMCk7XHJcbn1cclxuXHJcbi53YXJuaW5nLWhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBtYXAtZ2V0KCRwcm9maWxldWlhcHAtd2FybiwgQTEwMCk7XHJcbiAgY29sb3I6IG1hcC1nZXQobWFwLWdldCgkcHJvZmlsZXVpYXBwLXdhcm4sIGNvbnRyYXN0KSwgQTEwMCk7XHJcbn1cclxuXHJcbiIsIi8qIEZvciB1c2UgaW4gc3JjL2xpYi9jb3JlL3RoZW1pbmcvX3BhbGV0dGUuc2NzcyAqL1xyXG4kcHJvZmlsZXVpYXBwLXByaW1hcnk6IChcclxuICAgIDUwIDogI2Y1ZjdmOSxcclxuICAgIDEwMCA6ICNlN2VjZjEsXHJcbiAgICAyMDAgOiAjZDdlMGU4LFxyXG4gICAgMzAwIDogI2M2ZDNkZixcclxuICAgIDQwMCA6ICNiYWM5ZDgsXHJcbiAgICA1MDAgOiAjYWVjMGQxLFxyXG4gICAgNjAwIDogI2E3YmFjYyxcclxuICAgIDcwMCA6ICM5ZGIyYzYsXHJcbiAgICA4MDAgOiAjOTRhYWMwLFxyXG4gICAgOTAwIDogIzg0OWNiNSxcclxuICAgIEExMDAgOiAjZmZmZmZmLFxyXG4gICAgQTIwMCA6ICNmZmZmZmYsXHJcbiAgICBBNDAwIDogI2RjZWRmZixcclxuICAgIEE3MDAgOiAjYzNlMGZmLFxyXG4gICAgY29udHJhc3Q6IChcclxuICAgICAgICA1MCA6ICMwMDAwMDAsXHJcbiAgICAgICAgMTAwIDogIzAwMDAwMCxcclxuICAgICAgICAyMDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDMwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgNDAwIDogIzAwMDAwMCxcclxuICAgICAgICA1MDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDYwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgNzAwIDogIzAwMDAwMCxcclxuICAgICAgICA4MDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDkwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgQTEwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgQTIwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgQTQwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgQTcwMCA6ICMwMDAwMDAsXHJcbiAgICApXHJcbik7XHJcblxyXG5cclxuXHJcblxyXG4vKiBGb3IgdXNlIGluIHNyYy9saWIvY29yZS90aGVtaW5nL19wYWxldHRlLnNjc3MgKi9cclxuJHByb2ZpbGV1aWFwcC13YXJuOiAoXHJcbiAgICA1MCA6ICNmOWY2ZWEsXHJcbiAgICAxMDAgOiAjZjFlOGNiLFxyXG4gICAgMjAwIDogI2U4ZDhhOCxcclxuICAgIDMwMCA6ICNkZWM4ODUsXHJcbiAgICA0MDAgOiAjZDdiZDZhLFxyXG4gICAgNTAwIDogI2QwYjE1MCxcclxuICAgIDYwMCA6ICNjYmFhNDksXHJcbiAgICA3MDAgOiAjYzRhMTQwLFxyXG4gICAgODAwIDogI2JlOTgzNyxcclxuICAgIDkwMCA6ICNiMzg4MjcsXHJcbiAgICBBMTAwIDogI2ZmZmJmMSxcclxuICAgIEEyMDAgOiAjZmZlYWJlLFxyXG4gICAgQTQwMCA6ICNmZmQ5OGIsXHJcbiAgICBBNzAwIDogI2ZmZDE3MixcclxuICAgIGNvbnRyYXN0OiAoXHJcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcclxuICAgICAgICAzMDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDQwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgNTAwIDogIzAwMDAwMCxcclxuICAgICAgICA2MDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDcwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgODAwIDogIzAwMDAwMCxcclxuICAgICAgICA5MDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIEE0MDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIEE3MDAgOiAjMDAwMDAwLFxyXG4gICAgKVxyXG4pO1xyXG5cclxuXHJcblxyXG5cclxuLyogRm9yIHVzZSBpbiBzcmMvbGliL2NvcmUvdGhlbWluZy9fcGFsZXR0ZS5zY3NzICovXHJcbiRwcm9maWxldWlhcHAtYWNjZW50OiAoXHJcbiAgICA1MCA6ICNlMGUwZTAsXHJcbiAgICAxMDAgOiAjYjNiM2IzLFxyXG4gICAgMjAwIDogIzgwODA4MCxcclxuICAgIDMwMCA6ICM0ZDRkNGQsXHJcbiAgICA0MDAgOiAjMjYyNjI2LFxyXG4gICAgNTAwIDogIzAwMDAwMCxcclxuICAgIDYwMCA6ICMwMDAwMDAsXHJcbiAgICA3MDAgOiAjMDAwMDAwLFxyXG4gICAgODAwIDogIzAwMDAwMCxcclxuICAgIDkwMCA6ICMwMDAwMDAsXHJcbiAgICBBMTAwIDogI2E2YTZhNixcclxuICAgIEEyMDAgOiAjOGM4YzhjLFxyXG4gICAgQTQwMCA6ICM3MzczNzMsXHJcbiAgICBBNzAwIDogIzY2NjY2NixcclxuICAgIGNvbnRyYXN0OiAoXHJcbiAgICAgICAgNTAgOiAjMDAwMDAwLFxyXG4gICAgICAgIDEwMCA6ICMwMDAwMDAsXHJcbiAgICAgICAgMjAwIDogIzAwMDAwMCxcclxuICAgICAgICAzMDAgOiAjZmZmZmZmLFxyXG4gICAgICAgIDQwMCA6ICNmZmZmZmYsXHJcbiAgICAgICAgNTAwIDogI2ZmZmZmZixcclxuICAgICAgICA2MDAgOiAjZmZmZmZmLFxyXG4gICAgICAgIDcwMCA6ICNmZmZmZmYsXHJcbiAgICAgICAgODAwIDogI2ZmZmZmZixcclxuICAgICAgICA5MDAgOiAjZmZmZmZmLFxyXG4gICAgICAgIEExMDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIEEyMDAgOiAjMDAwMDAwLFxyXG4gICAgICAgIEE0MDAgOiAjZmZmZmZmLFxyXG4gICAgICAgIEE3MDAgOiAjZmZmZmZmLFxyXG4gICAgKVxyXG4pO1xyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/main/app.component.ts":
/*!***************************************!*\
  !*** ./src/app/main/app.component.ts ***!
  \***************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var Webworkers_pixelOperationInBoundary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Webworkers/pixelOperationInBoundary */ "./Webworkers/pixelOperationInBoundary.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let AppComponent = class AppComponent {
    constructor() {
        // Canvas Calculation Variables
        this.menublocks = 7;
        this.menuInflectionPoints = { 1: true, 4: true };
    }
    get MenuWidth() {
        console.log("window width   ", this.Menu.width);
        return this.Menu.width;
    }
    get MenuHeight() {
        console.log("window height    ", this.Menu.height);
        return this.Menu.height * 0.8;
    }
    get MenuPadding() {
        return this.MenuWidth * 0.1;
    }
    get BlockContainerWidth() {
        return (this.MenuWidth - (this.MenuPadding * 2)) / this.menublocks;
    }
    get BlockSeperation() {
        return this.BlockContainerWidth * 0.03;
    }
    get BlockBaseWidth() {
        return this.BlockContainerWidth - (2 * this.BlockSeperation);
    }
    get Main() {
        return this.mainCanvas.nativeElement;
    }
    get Menu() {
        return this.menuCanvas.nativeElement;
    }
    ngAfterViewInit() {
        Object(Webworkers_pixelOperationInBoundary__WEBPACK_IMPORTED_MODULE_1__["desire"])();
        this.Menu.setAttribute("width", `${window.screen.width}`);
        this.Menu.setAttribute("height", `${window.screen.height}`);
        this.initializeMainCanvas(this.Main).then(success => { console.log(success); });
        this.initializeMenuCanvas(this.Menu).then(success => { console.log(success); });
        window.onresize = (event) => {
            console.log("Window Resize", event);
            this.initializeMenuCanvas(this.Menu).then(success => { console.log(success); });
        };
    }
    async initializeMenuCanvas(canvas) {
        let width = canvas.width;
        let height = canvas.height;
        let ctx = canvas.getContext('2d');
        //ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#ffd98b";
        //ctx.transform(1, 0, -0.1, 1, 0, 0);
        let next = { left: 0 + this.MenuPadding, top: 0, height: this.MenuHeight };
        for (let start = 0; start < this.menublocks; start++) {
            console.log("next", next);
            if (this.menuInflectionPoints[start]) {
                next.height = this.MenuHeight;
            }
            next = this.drawBlock(ctx, next.left, 0, next.height);
        }
        return Promise.resolve(true);
    }
    async initializeMainCanvas(canvas) {
        return Promise.resolve(true);
    }
    drawBlock(context, left, top, height) {
        context.fillRect(left, top, this.BlockBaseWidth, height);
        return { left: left + this.BlockContainerWidth, height: height * 0.7 };
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Main'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], AppComponent.prototype, "mainCanvas", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('Menu'),
    __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
], AppComponent.prototype, "menuCanvas", void 0);
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! ./app.component.html */ "./src/app/main/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/main/app.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);



/***/ }),

/***/ "./src/app/menu/background/background.component.html":
/*!***********************************************************!*\
  !*** ./src/app/menu/background/background.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #Menu class=\"module\"></canvas>\r\n"

/***/ }),

/***/ "./src/app/menu/background/background.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/menu/background/background.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvYmFja2dyb3VuZC9iYWNrZ3JvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/background/background.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu/background/background.component.ts ***!
  \*********************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let BackgroundComponent = class BackgroundComponent {
    constructor() { }
    ngOnInit() {
    }
};
BackgroundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-background',
        template: __webpack_require__(/*! ./background.component.html */ "./src/app/menu/background/background.component.html"),
        styles: [__webpack_require__(/*! ./background.component.scss */ "./src/app/menu/background/background.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BackgroundComponent);



/***/ }),

/***/ "./src/app/menu/foreground/foreground.component.html":
/*!***********************************************************!*\
  !*** ./src/app/menu/foreground/foreground.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<canvas #Menu class=\"module\"></canvas>\r\n"

/***/ }),

/***/ "./src/app/menu/foreground/foreground.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/menu/foreground/foreground.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvZm9yZWdyb3VuZC9mb3JlZ3JvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/menu/foreground/foreground.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/menu/foreground/foreground.component.ts ***!
  \*********************************************************/
/*! exports provided: ForegroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForegroundComponent", function() { return ForegroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let ForegroundComponent = class ForegroundComponent {
    constructor() { }
    ngOnInit() {
    }
};
ForegroundComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-foreground',
        template: __webpack_require__(/*! ./foreground.component.html */ "./src/app/menu/foreground/foreground.component.html"),
        styles: [__webpack_require__(/*! ./foreground.component.scss */ "./src/app/menu/foreground/foreground.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ForegroundComponent);



/***/ }),

/***/ "./src/app/miniapps/sunlight/sunlight.component.html":
/*!***********************************************************!*\
  !*** ./src/app/miniapps/sunlight/sunlight.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sunlight works!\n</p>\n"

/***/ }),

/***/ "./src/app/miniapps/sunlight/sunlight.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/miniapps/sunlight/sunlight.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pbmlhcHBzL3N1bmxpZ2h0L3N1bmxpZ2h0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/miniapps/sunlight/sunlight.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/miniapps/sunlight/sunlight.component.ts ***!
  \*********************************************************/
/*! exports provided: SunlightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SunlightComponent", function() { return SunlightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let SunlightComponent = class SunlightComponent {
    constructor() { }
    ngOnInit() {
    }
};
SunlightComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sunlight',
        template: __webpack_require__(/*! ./sunlight.component.html */ "./src/app/miniapps/sunlight/sunlight.component.html"),
        styles: [__webpack_require__(/*! ./sunlight.component.scss */ "./src/app/miniapps/sunlight/sunlight.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], SunlightComponent);



/***/ }),

/***/ "./src/components/angularComponents.ts":
/*!*********************************************!*\
  !*** ./src/components/angularComponents.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AngularComponents = class AngularComponents {
};
AngularComponents = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]],
        exports: [_angular_material__WEBPACK_IMPORTED_MODULE_0__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_0__["MatCheckboxModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"]],
    })
], AngularComponents);
/* harmony default export */ __webpack_exports__["default"] = (AngularComponents);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
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
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nicholas\Desktop\Profile\profileui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map