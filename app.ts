import express from "express";
import exphbs from "express-handlebars";
import session from "express-session";
import path from "path";
import bodyParser from "body-parser";
import { indexRoutes } from "./routes/index-routes";
import { helpers } from "./utils/handlebar-util";
import { sessionUserSettings, Settings } from "./utils/session-middleware";

declare module "express-session" {
  interface SessionData {
    settings: Settings;
  }
}

declare global {
  namespace Express {
    interface Request {
      settings: Settings;
    }
  }
}

export const app = express();
const hbs = exphbs.create({
  extname: ".hbs",
  defaultLayout: "default",
  helpers: {
    ...helpers,
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.resolve("views"));

app.use(express.static(path.resolve("public")));
app.use(
  session({
    secret: "casduichasidbnuwezrfinasdcvjkadfhsuilfuzihfioda",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", indexRoutes);
