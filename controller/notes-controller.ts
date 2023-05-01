import { Request, Response } from "express";
import { noteStore } from "../services/note-store";

export class NotesController {
  createNote = (req: Request, res: Response): void => {
    res.render("note");
  };

  newNote = async (req: Request, res: Response): Promise<void> => {
    console.log(req);

    res.render(
      "note",
      await noteStore.add(
        req.body.title,
        req.body.importance,
        req.body.dueDate,
        !!req.body.finished,
        req.body.description
      )
    );
  };

  editNote = async (req: Request, res: Response): Promise<void> => {
    res.render(
      "note",
      await noteStore.update(
        req.params.id,
        req.body.title,
        req.body.importance,
        req.body.dueDate,
        req.body.finished,
        req.body.description
      )
    );
  };

  showNote = async (req: Request, res: Response): Promise<void> => {
    res.render("note", await noteStore.get(req.params.id));
  };
}
export const notesController = new NotesController();
