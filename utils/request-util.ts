import { Note } from "../models/note";

export function prepareNote(requestBody: any, note: Note): Note {
  note.title = requestBody.title;
  note.importance = +requestBody.importance;
  note.dueDate = new Date(requestBody.dueDate);
  note.finished = !!requestBody.finished;
  note.description = requestBody.description;

  return note;
}
