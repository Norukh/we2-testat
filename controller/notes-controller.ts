import { Request, Response } from "express";
import { noteStore } from "../services/note-store";
import { prepareNote } from "../utils/request-util";
import { Note } from "../models/note";

export class NotesController {
  createNote = (req: Request, res: Response): void => {
    res.render("note", { theme: req.settings.style });
  };

  saveNote = async (req: Request, res: Response): Promise<void> => {
    const note = req.params.id
      ? await noteStore.get(req.params.id as string)
      : new Note();

    res.render("note", {
      note: await noteStore.save(prepareNote(req.body, note)),
      theme: req.settings.style,
    });
  };

  showNote = async (req: Request, res: Response): Promise<void> => {
    res.render("note", {
      note: await noteStore.get(req.params.id as string),
      theme: req.settings.style,
    });
  };

  deleteNote = async (req: Request, res: Response): Promise<void> => {
    await noteStore.deleteById(req.params.id as string);
    res.redirect("/");
  };
}
export const notesController = new NotesController();
