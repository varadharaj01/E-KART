"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var men_component_1 = require("./men.component");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var men_router_1 = require("./men.router");
var shared_module_1 = require("../../shared/shared.module");
var MenModule = (function () {
    function MenModule() {
    }
    return MenModule;
}());
MenModule = __decorate([
    core_1.NgModule({
        imports: [forms_1.FormsModule, common_1.CommonModule,
            shared_module_1.SharedModule,
            men_router_1.MenRouter
        ],
        declarations: [
            men_component_1.MenComponent
        ],
    })
], MenModule);
exports.MenModule = MenModule;
//# sourceMappingURL=men.module.js.map