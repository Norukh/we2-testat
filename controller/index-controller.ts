import { Request, Response } from "express";
import { noteStore } from "../services/note-store";
import { Session } from "express-session";
import { Settings } from "../utils/session-middleware";
import { Style } from "../utils/style";

export class IndexController {
  async index(req: Request, res: Response) {
    let notesFiltered = await noteStore.all(
      req.settings.orderBy as string,
      req.settings.orderAsc
    );

    if (req.settings.filterCompleted) {
      notesFiltered = notesFiltered.filter(
        (note) => note.finished === req.settings.filterCompleted
      );
    }

    res.render("index", {
      notes: notesFiltered,
      orderBy: req.settings.orderBy ?? "_id",
      orderAsc: req.settings.orderAsc,
      filterCompleted: req.settings.filterCompleted,
      filters: [
        ["title", "By Title"],
        ["dueDate", "By Due Date"],
        ["createdAt", "by Creation Date"],
        ["importance", "Importance"],
      ],
      theme: req.settings.style,
    });
  }

  async switchTheme(req: Request, res: Response) {
    const session = req.session as Session & { settings: Settings };

    let newStyle = Style.Dark;
    if (session.settings.style === Style.Light) {
      newStyle = Style.Light;
    }

    session.settings.style = newStyle;
    res.redirect("/");
  }

  async orderByRedirect(req: Request, res: Response) {
    res.redirect("/");
  }
}

export const indexController = new IndexController();
