"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notesController = exports.NotesController = void 0;
const note_store_1 = require("../services/note-store");
class NotesController {
    constructor() {
        this.createNote = (req, res) => {
            res.render("note");
        };
        this.newNote = async (req, res) => {
            console.log(req);
            res.render("note", await note_store_1.noteStore.add(req.body.title, req.body.importance, req.body.dueDate, !!req.body.finished, req.body.description));
        };
        this.editNote = async (req, res) => {
            res.render("note", await note_store_1.noteStore.update(req.params.id, req.body.title, req.body.importance, req.body.dueDate, req.body.finished, req.body.description));
        };
        this.showNote = async (req, res) => {
            res.render("note", await note_store_1.noteStore.get(req.params.id));
        };
    }
}
exports.NotesController = NotesController;
exports.notesController = new NotesController();
//# sourceMappingURL=notes-controller.js.map