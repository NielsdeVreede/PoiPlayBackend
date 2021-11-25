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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AttendenceController = void 0;
const common_1 = require("@nestjs/common");
const attendance_entity_1 = require("./attendance.entity");
const attendance_service_1 = require("./attendance.service");
let AttendenceController = class AttendenceController {
    constructor(service) {
        this.service = service;
    }
    async getDefaultAttandence(id) {
        return await this.service.getAttendanceById(id);
    }
    saveNewAttendance(attendance) {
        attendance.date = new Date();
        this.service.saveAttendance(attendance);
        return "success";
    }
};
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], AttendenceController.prototype, "getDefaultAttandence", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [attendance_entity_1.Attendance]),
    __metadata("design:returntype", String)
], AttendenceController.prototype, "saveNewAttendance", null);
AttendenceController = __decorate([
    (0, common_1.Controller)('attendance'),
    __metadata("design:paramtypes", [attendance_service_1.AttendenceService])
], AttendenceController);
exports.AttendenceController = AttendenceController;
//# sourceMappingURL=attendance.controller.js.map