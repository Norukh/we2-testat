"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    constructor(title, importance, dueDate = "Someday", finished, description) {
        this.title = title;
        this.importance = importance;
        this.dueDate = dueDate;
        this.finished = finished;
        this.description = description;
        this.createdAt = new Date();
    }
}
exports.Note = Note;
//# sourceMappingURL=note.js.map