"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_list_component_1 = require("./hero-list.component");
var hero_list_router_1 = require("./hero.list.router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var shared_module_1 = require("../shared/shared.module");
var listModulde = (function () {
    function listModulde() {
    }
    return listModulde;
}());
listModulde = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule,
            shared_module_1.SharedModule,
            hero_list_router_1.HeroListRouter
        ],
        declarations: [
            hero_list_component_1.HeroesListComponent
        ],
    })
], listModulde);
exports.listModulde = listModulde;
//# sourceMappingURL=hero.list.module.js.map