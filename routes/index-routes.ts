import express from "express";
import { indexController } from "../controller/index-controller";

const router = express.Router();

router.get("/", indexController.index);
router.post("/", indexController.orderByRedirect);
router.post("/switch-theme", indexController.switchTheme);

export const indexRoutes = router;
