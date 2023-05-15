import express from "express";
import { notesController } from "../controller/notes-controller";

const router = express.Router();

router
  .route("/")
  .get(notesController.createNote)
  .post(notesController.saveNote);

router
  .route("/:id/")
  .get(notesController.showNote)
  .post(notesController.saveNote);

router.post("/:id/delete", notesController.deleteNote);

export const noteRoutes = router;
