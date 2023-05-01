"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.noteStore = exports.NoteStore = void 0;
const nedb_promises_1 = __importDefault(require("nedb-promises"));
const note_1 = require("../models/note");
class NoteStore {
    constructor(db) {
        this.db = db;
        const options = process.env.DB_TYPE === "FILE"
            ? { filename: "./data/notes.db", autoload: true }
            : {};
        this.db = db || nedb_promises_1.default.create(options);
    }
    async add(title, importance, dueDate, finished, description) {
        const note = new note_1.Note(title, importance, dueDate, finished, description);
        console.log(note);
        return this.db.insert(note);
    }
    async update(id, title, importance, dueDate, finished, description) {
        const newNote = new note_1.Note(title, importance, dueDate, finished, description);
        await this.db.update({ _id: id }, { $set: newNote });
        return this.get(id);
    }
    async get(id) {
        return this.db.findOne({ _id: id });
    }
    async all() {
        return this.db.find({});
    }
}
exports.NoteStore = NoteStore;
exports.noteStore = new NoteStore();
//# sourceMappingURL=note-store.js.map