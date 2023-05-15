import { NextFunction, Request, Response } from "express";
import { Style } from "./style";

export const sessionUserSettings = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const userSettings = req.session?.settings || {
    orderBy: "importance",
    orderAsc: false,
    filterCompleted: false,
    style: Style.Light,
  };

  const { orderBy, orderAsc, filterCompleted } = req.body ?? userSettings;

  if (orderBy) {
    userSettings.orderBy = orderBy.toString();
  }
  if (orderAsc) {
    userSettings.orderAsc = orderAsc === "true";
  }
  if (filterCompleted) {
    userSettings.filterCompleted = filterCompleted === "true";
  }

  req.settings = req.session.settings = userSettings;

  next();
};

export interface Settings {
  style: Style;
  orderBy: string;
  orderAsc: boolean;
  filterCompleted: boolean;
}
