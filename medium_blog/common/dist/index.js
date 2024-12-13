"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogSchema = exports.newBlogSchema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = __importDefault(require("zod"));
exports.signupSchema = zod_1.default.object({
    name: zod_1.default.string().min(3, "Name must be at least 3 characters long"),
    email: zod_1.default.string().email("Invalid email address"),
    password: zod_1.default.string().min(6, "Password must be at least 6 characters long")
});
exports.signinSchema = zod_1.default.object({
    email: zod_1.default.string().email("Invalid email address"),
    password: zod_1.default.string().min(6, "Password must be at least 6 characters long")
});
exports.newBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(5, "Blog title must be atleast 5 characters  long"),
    Content: zod_1.default.string().min(10, "Blog title must be atleast 10 characters  long")
});
exports.updateBlogSchema = zod_1.default.object({
    title: zod_1.default.string().min(5, "Blog title must be atleast 5 characters  long"),
    Content: zod_1.default.string().min(10, "Blog title must be atleast 10 characters  long"),
    id: zod_1.default.string()
});
