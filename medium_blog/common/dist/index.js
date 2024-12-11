"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.newBlogSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    name: zod_1.default.string(),
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.signinSchema = zod_1.default.object({
    email: zod_1.default.string().email(),
    password: zod_1.default.string().min(6)
});
exports.newBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(10),
    Content: zod_1.default.string().min(10)
});
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(10),
    Content: zod_1.default.string().min(10),
    id: zod_1.default.string()
});
