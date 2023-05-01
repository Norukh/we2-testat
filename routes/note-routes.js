"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteRoutes = void 0;
const express_1 = __importDefault(require("express"));
const notes_controller_1 = require("../controller/notes-controller");
const router = express_1.default.Router();
router.get("/", notes_controller_1.notesController.createNote);
router.post("/", notes_controller_1.notesController.newNote);
router.get("/:id/", notes_controller_1.notesController.showNote);
router.post("/:id/", notes_controller_1.notesController.editNote);
exports.noteRoutes = router;
//# sourceMappingURL=note-routes.js.map