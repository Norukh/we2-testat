import { Request, Response } from "express";
import { noteStore } from "../services/note-store";
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
    const settings = req.settings;

    let newStyle = Style.Light;
    if (settings.style === Style.Light) {
      newStyle = Style.Dark;
    }

    // bring user back to the page the action was called from
    const origin = req.headers.origin as string;
    let redirectUrl = req.headers.referer as string;

    redirectUrl = redirectUrl?.replace(origin, "");

    settings.style = newStyle;
    res.redirect(redirectUrl);
  }

  async orderByRedirect(req: Request, res: Response) {
    res.redirect("/");
  }
}

export const indexController = new IndexController();
