webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var gallery_component_1 = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var routes = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'gallery/:id', component: gallery_component_1.GalleryComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var animations_1 = __webpack_require__("../../../platform-browser/esm5/animations.js");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var material_module_1 = __webpack_require__("../../../../../src/app/modules/material.module.ts");
var navbar_component_1 = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
var gallery_component_1 = __webpack_require__("../../../../../src/app/components/gallery/gallery.component.ts");
var add_photo_component_1 = __webpack_require__("../../../../../src/app/components/add-photo/add-photo.component.ts");
var add_album_component_1 = __webpack_require__("../../../../../src/app/components/add-album/add-album.component.ts");
var sidenav_component_1 = __webpack_require__("../../../../../src/app/components/navbar/sidenav/sidenav.component.ts");
var home_component_1 = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
var navbar_service_1 = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                navbar_component_1.NavbarComponent,
                gallery_component_1.GalleryComponent,
                add_photo_component_1.AddPhotoComponent,
                add_album_component_1.AddAlbumComponent,
                sidenav_component_1.SidenavComponent,
                home_component_1.HomeComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule,
            ],
            providers: [navbar_service_1.NavbarService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/components/add-album/add-album.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-album/add-album.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-album works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-album/add-album.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AddAlbumComponent = /** @class */ (function () {
    function AddAlbumComponent() {
    }
    AddAlbumComponent.prototype.ngOnInit = function () {
    };
    AddAlbumComponent = __decorate([
        core_1.Component({
            selector: 'app-add-album',
            template: __webpack_require__("../../../../../src/app/components/add-album/add-album.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-album/add-album.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddAlbumComponent);
    return AddAlbumComponent;
}());
exports.AddAlbumComponent = AddAlbumComponent;


/***/ }),

/***/ "../../../../../src/app/components/add-photo/add-photo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/add-photo/add-photo.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  add-photo works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/add-photo/add-photo.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AddPhotoComponent = /** @class */ (function () {
    function AddPhotoComponent() {
    }
    AddPhotoComponent.prototype.ngOnInit = function () {
    };
    AddPhotoComponent = __decorate([
        core_1.Component({
            selector: 'app-add-photo',
            template: __webpack_require__("../../../../../src/app/components/add-photo/add-photo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/add-photo/add-photo.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddPhotoComponent);
    return AddPhotoComponent;
}());
exports.AddPhotoComponent = AddPhotoComponent;


/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  gallery works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/gallery/gallery.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        core_1.Component({
            selector: 'app-gallery',
            template: __webpack_require__("../../../../../src/app/components/gallery/gallery.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/gallery/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());
exports.GalleryComponent = GalleryComponent;


/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n    <mat-toolbar-row>\n        <button mat-icon-button (click)=\"toggleSideNavClick()\"><mat-icon>menu</mat-icon></button>\n        <span>Photo Gallery</span>\n        <button mat-button [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{extended: true}\" [routerLink]=\"['']\"><mat-icon>home</mat-icon> Home</button>\n    </mat-toolbar-row>\n</mat-toolbar>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var navbar_service_1 = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, navbarService) {
        this.router = router;
        this.navbarService = navbarService;
        this.albumName = '';
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.toggleSideNavClick = function () {
        this.navbarService.toggleSidebar();
    };
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, navbar_service_1.NavbarService])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;


/***/ }),

/***/ "../../../../../src/app/components/navbar/sidenav/sidenav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container>\n    <mat-sidenav #sidenav mode=\"side\" [opened]=\"state\" [fixedInViewport]=\"true\">\n        <mat-nav-list *ngIf=\"albumsObservable | async; let albums; else loading\">\n            <button mat-raised-button color=\"primary\" (click)=\"addAlbumClick()\"><mat-icon>add</mat-icon> Add Album</button>\n            <hr>\n            <!-- <a mat-list-item (click)=\"closeSideNav()\" *ngFor=\"let album of albums\" [routerLink]=\"['gallery', album._id]\">{{ album.name }}</a> -->\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content style=\"background-color: #fff;\">\n        <app-navbar></app-navbar>\n        <router-outlet></router-outlet>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n<ng-template #loading>Loading ...</ng-template>"

/***/ }),

/***/ "../../../../../src/app/components/navbar/sidenav/sidenav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var navbar_service_1 = __webpack_require__("../../../../../src/app/services/navbar.service.ts");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
__webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var sidenav_1 = __webpack_require__("../../../material/esm5/sidenav.es5.js");
var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(router, navbarService) {
        this.router = router;
        this.navbarService = navbarService;
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.navbarService.sidebarState.subscribe(function (res) { return _this.state = res; });
    };
    __decorate([
        core_1.ViewChild('sidenav'),
        __metadata("design:type", sidenav_1.MatSidenav)
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        core_1.Component({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/components/navbar/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/navbar/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router, navbar_service_1.NavbarService])
    ], SidenavComponent);
    return SidenavComponent;
}());
exports.SidenavComponent = SidenavComponent;


/***/ }),

/***/ "../../../../../src/app/modules/material.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var material_1 = __webpack_require__("../../../material/esm5/material.es5.js");
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            imports: [
                material_1.MatTableModule,
                material_1.MatInputModule,
                material_1.MatDialogModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatSidenavModule,
                material_1.MatListModule
            ],
            exports: [
                material_1.MatTableModule,
                material_1.MatInputModule,
                material_1.MatDialogModule,
                material_1.MatToolbarModule,
                material_1.MatCardModule,
                material_1.MatIconModule,
                material_1.MatButtonModule,
                material_1.MatSidenavModule,
                material_1.MatListModule
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;


/***/ }),

/***/ "../../../../../src/app/services/navbar.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.state = false;
        this.sidebarOpen = new BehaviorSubject_1.BehaviorSubject(false);
        this.sidebarState = this.sidebarOpen.asObservable();
    }
    NavbarService.prototype.toggleSidebar = function () {
        if (this.state) {
            this.sidebarOpen.next(false);
        }
        else {
            this.sidebarOpen.next(true);
        }
        this.state = !this.state;
    };
    NavbarService.prototype.openSidebar = function () {
        this.state = true;
        this.sidebarOpen.next(true);
    };
    NavbarService.prototype.closeSidebar = function () {
        this.state = false;
        this.sidebarOpen.next(false);
    };
    NavbarService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());
exports.NavbarService = NavbarService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
__webpack_require__("../../../../hammerjs/hammer.js");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map