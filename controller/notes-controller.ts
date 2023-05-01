import { Request, Response } from "express";
import { noteStore } from "../services/note-store";
import { prepareRequestBody } from "../utils/request-util";

export class NotesController {
  createNote = (req: Request, res: Response): void => {
    res.render("note");
  };

  newNote = async (req: Request, res: Response): Promise<void> => {
    const preparedReqBody = prepareRequestBody(req.body);
    res.render("note", {
      note: await noteStore.add(
        preparedReqBody.title,
        preparedReqBody.importance,
        preparedReqBody.dueDate,
        preparedReqBody.finished,
        preparedReqBody.description
      ),
    });
  };

  editNote = async (req: Request, res: Response): Promise<void> => {
    const preparedReqBody = prepareRequestBody(req.body);
    res.render("note", {
      note: await noteStore.update(
        req.params.id,
        preparedReqBody.title,
        preparedReqBody.importance,
        preparedReqBody.dueDate,
        preparedReqBody.finished,
        preparedReqBody.description
      ),
    });
  };

  showNote = async (req: Request, res: Response): Promise<void> => {
    res.render("note", {
      note: await noteStore.get(req.params.id),
    });
  };
}
export const notesController = new NotesController();
