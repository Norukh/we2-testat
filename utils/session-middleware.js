"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sessionUserSettings = void 0;
const sessionUserSettings = (req, res, next) => {
    const userSettings = req.session?.settings || {
        orderBy: "title",
        orderDirection: -1,
        style: Style.Light,
    };
    const { orderBy, orderDirection } = req.query;
    if (orderBy) {
        userSettings.orderBy = orderBy.toString();
    }
    if (orderDirection) {
        userSettings.orderDirection = parseInt(orderDirection.toString());
    }
    req.settings = req.session.settings = userSettings;
    return;
};
exports.sessionUserSettings = sessionUserSettings;
//# sourceMappingURL=session-middleware.js.map