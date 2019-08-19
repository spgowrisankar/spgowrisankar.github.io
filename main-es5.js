(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div>\n  <app-login></app-login>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home-page/home-page.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home-page/home-page.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bgline\"></div>\n\n<div class=\"login\">\n  <div class=\"row align-items-center\">\n    <div class=\"col\"></div>\n    <div class=\"col\">\n      <div class=\"login-wrap\">\n        <svg class=\"header-logo\">\n          <use xlink:href=\"#logo\"></use>\n        </svg>\n        <div id=\"signinbox\">\n          <form id=\"signinform\">\n            <input\n              type=\"text\"\n              class=\"inputfield\"\n              placeholder=\"Username\"\n              required\n            />\n            <input\n              type=\"Password\"\n              class=\"inputfield\"\n              placeholder=\"Password\"\n              required\n            />\n          </form>\n          <fieldset class=\"clearfix\"></fieldset>\n          <button id=\"loginsubmit\" type=\"submit\" class=\"inputsubmit\">\n            Sign In\n          </button>\n          <div class=\"spf\">\n            <a style=\"margin-bottom: 10px;\">Forgot Password?</a\n            ><a onclick=\"susb()\">Create account</a>\n          </div>\n        </div>\n        <div id=\"signupbox\">\n          <form id=\"signupform\">\n            <input\n              type=\"text\"\n              class=\"inputfield\"\n              placeholder=\"Username\"\n              required\n            />\n            <fieldset class=\"clearfix\"></fieldset>\n            <input\n              type=\"Password\"\n              class=\"inputfield\"\n              placeholder=\"Password\"\n              required\n            />\n            <input\n              type=\"Password\"\n              class=\"inputfield\"\n              placeholder=\"Repeat Password\"\n              required\n            />\n            <input\n              type=\"email\"\n              class=\"inputfield\"\n              placeholder=\"Email Address\"\n              required\n            />\n          </form>\n          <button id=\"signupsubmit\" type=\"submit\" class=\"inputsubmit\">\n            Sign Up\n          </button>\n          <div class=\"spf\">\n            <a onclick=\"sisb()\">Sign in instead</a>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"col\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark \">\n  <div class=\"container\">\n    <a routerLink=\"/\" class=\"navbar-brand\">Pirai Infotech</a>\n    <button\n      #logoff\n      class=\"navbar-toggler\"\n      type=\"button\"\n      data-toggle=\"collapse\"\n      data-target=\"#navbarMain\"\n    >\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarMain\">\n      <ul class=\"navbar-nav mr-auto\"></ul>\n      <ul class=\"navbar-nav ml-auto\">\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a\n            *ngIf=\"loggedInUser == 'admin@gmail.com'\"\n            routerLink=\"settings\"\n            class=\"nav-link\"\n            >Settings</a\n          >\n        </li>\n\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a routerLink=\"user/my_posts\" class=\"nav-link\">{{ loggedInUser }}</a>\n        </li>\n        <li *ngIf=\"isLoggedIn\" class=\"nav-item\">\n          <a routerLink=\"/login\" (click)=\"onLogoutClick()\" class=\"nav-link\"\n            >Logout</a\n          >\n        </li>\n        <li *ngIf=\"!isLoggedIn && showRegister\" class=\"nav-item\">\n          <a routerLink=\"/register\" class=\"nav-link\">Register</a>\n        </li>\n\n        <li class=\"nav-item\">\n          <a routerLink=\"/info\" class=\"nav-link\"\n            ><i class=\"fa fa-info-circle\"> Info</i></a\n          >\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'pirai-login';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-page/home-page.component */ "./src/app/components/home-page/home-page.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _components_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home-page/home-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS1wYWdlL2hvbWUtcGFnZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! raw-loader!./home-page.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/components/home-page/home-page.component.css")]
        })
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  margin: 50;\r\n}\r\n\r\na {\r\n  cursor: pointer;\r\n}\r\n\r\ninput:focus,\r\nbutton:focus {\r\n  outline: none;\r\n}\r\n\r\n::-webkit-input-placeholder {\r\n  color: #fff;\r\n  opacity: 1;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n::-moz-placeholder {\r\n  color: #fff;\r\n  opacity: 1;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: #fff;\r\n  opacity: 1;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n::placeholder {\r\n  color: #fff;\r\n  opacity: 1;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n::-ms-input-placeholder {\r\n  color: #fff;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\nbody {\r\n  background: linear-gradient(90deg, #1a67b8, #2572d9, #51e1ff, #e9e6ff);\r\n  background-size: 600% 100%;\r\n  -webkit-animation: bggradient 10s linear infinite;\r\n          animation: bggradient 10s linear infinite;\r\n  -webkit-animation-direction: alternate;\r\n          animation-direction: alternate;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n@-webkit-keyframes bggradient {\r\n  0% {\r\n    background-position: 0%;\r\n  }\r\n  100% {\r\n    background-position: 100%;\r\n  }\r\n}\r\n\r\n@keyframes bggradient {\r\n  0% {\r\n    background-position: 0%;\r\n  }\r\n  100% {\r\n    background-position: 100%;\r\n  }\r\n}\r\n\r\n.bgline {\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  height: 100vh;\r\n  width: 100%;\r\n  background: url('Pirai-logo.jpeg');\r\n  no-repeat: center;\r\n  background-size: 100%;\r\n  z-index: -1;\r\n}\r\n\r\n.header-logo {\r\n  width: 100%;\r\n  height: 40px;\r\n  float: left;\r\n  margin: 30px 0 40px 0;\r\n}\r\n\r\n.login {\r\n  padding-top: 1%;\r\n  padding-bottom: 1%;\r\n\r\n  margin: 0 auto;\r\n}\r\n\r\n.login-wrap {\r\n  background: rgba(0, 0, 58, 0.8);\r\n  width: 100%;\r\n  border-radius: 50px 50px;\r\n  padding: 50px;\r\n\r\n  overflow: auto;\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),\r\n    0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n#signinbox {\r\n  display: block;\r\n  float: left;\r\n  margin-bottom: 114px;\r\n}\r\n\r\n@media (max-height: 518px) {\r\n  #signinbox {\r\n    margin-bottom: calc((100vh - 404px));\r\n  }\r\n}\r\n\r\n#signupbox {\r\n  display: none;\r\n  float: left;\r\n}\r\n\r\n.inputfield {\r\n  height: 20px;\r\n  width: calc(100% - 22px);\r\n  padding: 20px;\r\n  font-size: 14px;\r\n  border-radius: 14px;\r\n  background: rgba(255, 255, 255, 0);\r\n  border: white solid 1px;\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n  font-family: \"Roboto\", sans-serif;\r\n}\r\n\r\n.inputsubmit {\r\n  height: 40px;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  border: none;\r\n  border-radius: 14px;\r\n  background: rgba(255, 255, 255, 0.25);\r\n  text-align: center;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  font-family: \"Roboto\", sans-serif;\r\n  position: relative;\r\n  overflow: hidden;\r\n}\r\n\r\n.inputsubmit:active {\r\n  background: rgba(255, 255, 255, 0.35);\r\n}\r\n\r\n.submitfunc:after {\r\n  background: repeating-linear-gradient(\r\n    -45deg,\r\n    rgba(0, 0, 0, 0.25),\r\n    rgba(0, 0, 0, 0.25) 10px,\r\n    rgba(0, 0, 0, 0) 10px,\r\n    rgba(0, 0, 0, 0) 20px\r\n  );\r\n\r\n  background-size: 100% 100%;\r\n  height: 40px;\r\n  width: 100%;\r\n  border: 0;\r\n  content: \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  line-height: 40px;\r\n  transition: all 1s ease-in-out;\r\n}\r\n\r\n.spf {\r\n  width: 100%;\r\n  line-height: 20px;\r\n  margin-top: 30px;\r\n  color: #fff;\r\n  float: left;\r\n  margin-bottom: 30px;\r\n}\r\n\r\n.spf a {\r\n  width: 100%;\r\n  float: right;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTs7RUFFRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFKQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUNBQWlDO0FBQ25DOztBQUpBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7QUFDbkM7O0FBSkE7RUFDRSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxzRUFBc0U7RUFDdEUsMEJBQTBCO0VBQzFCLGlEQUF5QztVQUF6Qyx5Q0FBeUM7RUFDekMsc0NBQThCO1VBQTlCLDhCQUE4QjtFQUM5QixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBUEE7RUFDRTtJQUNFLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0FBQ0Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxhQUFhO0VBQ2IsV0FBVztFQUNYLGtDQUFnRDtFQUNoRCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7O0VBRWxCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixhQUFhOztFQUViLGNBQWM7RUFDZDtxQ0FDbUM7QUFDckM7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0lBQ0Usb0NBQW9DO0VBQ3RDO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlDQUFpQztFQUNqQyxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0U7Ozs7OztHQU1DOztFQUVELDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLGlCQUFpQjtFQUNqQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICBtYXJnaW46IDUwO1xyXG59XHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzLFxyXG5idXR0b246Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMWE2N2I4LCAjMjU3MmQ5LCAjNTFlMWZmLCAjZTllNmZmKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgMTAwJTtcclxuICBhbmltYXRpb246IGJnZ3JhZGllbnQgMTBzIGxpbmVhciBpbmZpbml0ZTtcclxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XHJcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgYmdncmFkaWVudCB7XHJcbiAgMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCU7XHJcbiAgfVxyXG4gIDEwMCUge1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5iZ2xpbmUge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvUGlyYWktbG9nby5qcGVnKTtcclxuICBuby1yZXBlYXQ6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5oZWFkZXItbG9nbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbjogMzBweCAwIDQwcHggMDtcclxufVxyXG5cclxuLmxvZ2luIHtcclxuICBwYWRkaW5nLXRvcDogMSU7XHJcbiAgcGFkZGluZy1ib3R0b206IDElO1xyXG5cclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmxvZ2luLXdyYXAge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgNTgsIDAuOCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweCA1MHB4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcblxyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSxcclxuICAgIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG5cclxuI3NpZ25pbmJveCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTE0cHg7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LWhlaWdodDogNTE4cHgpIHtcclxuICAjc2lnbmluYm94IHtcclxuICAgIG1hcmdpbi1ib3R0b206IGNhbGMoKDEwMHZoIC0gNDA0cHgpKTtcclxuICB9XHJcbn1cclxuXHJcbiNzaWdudXBib3gge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5pbnB1dGZpZWxkIHtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwKTtcclxuICBib3JkZXI6IHdoaXRlIHNvbGlkIDFweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmlucHV0c3VibWl0IHtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiAxNHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmlucHV0c3VibWl0OmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjM1KTtcclxufVxyXG5cclxuLnN1Ym1pdGZ1bmM6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXHJcbiAgICAtNDVkZWcsXHJcbiAgICByZ2JhKDAsIDAsIDAsIDAuMjUpLFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjI1KSAxMHB4LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAxMHB4LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwKSAyMHB4XHJcbiAgKTtcclxuXHJcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlcjogMDtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zcGYge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLnNwZiBhIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar {\r\n  background-color: rgba(0, 0, 58, 0.8);\r\n  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),\r\n    0 17px 50px 0 rgba(0, 0, 0, 0.19);\r\n  color: white;\r\n}\r\n.navbar-brand {\r\n  color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckM7cUNBQ21DO0VBQ25DLFlBQVk7QUFDZDtBQUNBO0VBQ0UsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDU4LCAwLjgpO1xyXG4gIGJveC1zaGFkb3c6IDAgMTJweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjI0KSxcclxuICAgIDAgMTdweCA1MHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/*import  {AuthService} from '../../services/auth.service';
import {SettingsService} from '../../services/settings.service';
import {Router} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages';
import swal from 'sweetalert';*/
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.isLoggedIn = true;
        this.loggedInUser = "abc@gmail.com";
        this.showRegister = true;
        /*this.authService.getAuth().subscribe(auth=>{
          if(auth){
            this.isLoggedIn=true;
            this.loggedInUser=auth.email;
          }
          else{
            this.isLoggedIn=false;
          }
        });
      this.showRegister=this.ss.getSettings().allowRegistration;
      }
    
      onLogoutClick(){
        this.authService.logout();
        // this.flashMessage.show('You logged out!',{
        //   cssClass:'alert-info mt-2',timeout:5000
        // });
    
        this.isLoggedIn=false;
        // if(document.getElementById("logoff")){
        //   document.getElementById("logoff").click();
        // }
        document.getElementById("logoff").click();
    
    
        this.router.navigate(['/login']);
    
        */
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-navbar",
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\courses\Pirai infotech\pirai-login\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map