import { Request, Response } from "express";
import { noteStore } from "../services/note-store";

export class IndexController {
  async index(req: Request, res: Response) {
    res.render("index", {
      notes: await noteStore.all(),
      dark: false,
    });
  }
}

export const indexController = new IndexController();
