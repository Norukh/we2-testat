import express from "express";
import { indexController } from "../controller/index-controller";

const router = express.Router();

router.get("/", indexController.index.bind(indexController));
router.post("/", indexController.orderByRedirect.bind(indexController));
router.post("/switch-theme", indexController.switchTheme.bind(indexController));

export const indexRoutes = router;
