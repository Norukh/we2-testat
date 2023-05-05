import express from "express";
import { notesController } from "../controller/notes-controller";

const router = express.Router();

router.get("/", notesController.createNote);
router.post("/", notesController.saveNote);
router.get("/:id/", notesController.showNote);
router.post("/:id/", notesController.saveNote);
router.post("/:id/delete", notesController.deleteNote);

export const noteRoutes = router;
