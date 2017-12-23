"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var electronics_component_1 = require("./electronics.component");
var electronics_router_1 = require("./electronics.router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var shared_module_1 = require("../../shared/shared.module");
var ElectronicModulde = (function () {
    function ElectronicModulde() {
    }
    return ElectronicModulde;
}());
ElectronicModulde = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule,
            shared_module_1.SharedModule, electronics_router_1.ElectronicRouter],
        declarations: [
            electronics_component_1.ElectronicComponent
        ],
    })
], ElectronicModulde);
exports.ElectronicModulde = ElectronicModulde;
//# sourceMappingURL=electronics.module.js.map