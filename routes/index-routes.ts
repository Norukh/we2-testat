import express from "express";
import { indexController } from "../controller/index-controller";

const router = express.Router();

router.route("/")
    .get(indexController.index)
    .post(indexController.orderByRedirect);

router.route("/switch-theme")
    .post(indexController.switchTheme);

export const indexRoutes = router;
