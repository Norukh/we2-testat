"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexRoutes = void 0;
const express_1 = __importDefault(require("express"));
const index_controller_1 = require("../controller/index-controller");
const router = express_1.default.Router();
router.get("/", index_controller_1.indexController.index.bind(index_controller_1.indexController));
exports.indexRoutes = router;
//# sourceMappingURL=index-routes.js.map