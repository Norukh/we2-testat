import { Style } from "./style";
import { DateUtil } from "./date-util";

export const helpers = {
  if_eq: function (a: any, b: any, opts: any) {
    if (a === b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  },

  to_date_string: function (date: Date): string {
    const today = new Date();
    const dates = new Map([
      ["Today", today],
      ["Tomorrow", DateUtil.addDays(today, 1)],
      ["Yesterday", DateUtil.addDays(today, -1)],
    ]);

    let dateKey = "";
    dates.forEach((val, key) => {
      if (DateUtil.toDateValue(val) === DateUtil.toDateValue(date)) {
        dateKey = key;
      }
    });

    if (dateKey !== "") {
      return dateKey;
    }

    if (date instanceof Date) {
      const diff = date.getTime() - today.getTime();
      const diffDays = Math.abs(Math.ceil(diff / (1000 * 3600 * 24)));

      if (date > today) {
        return `in ${diffDays} days`;
      } else if (date < today) {
        return `${diffDays} days ago`;
      }
    }

    return "Someday";
  },

  importance_display: function (importance: number): string {
    return Array(importance)
      .fill(0)
      .reduce((acc) => {
        return (acc += "🦄 ");
      }, "");
  },

  to_date_value: function (date: Date): string | void {
    if (date instanceof Date && date !== null && date !== undefined) {
      return DateUtil.toDateValue(date);
    }
  },

  not: function (a: boolean): boolean | undefined {
    if (a === undefined || a === null) {
      return undefined;
    }
    return !a;
  },

  getItemOfList: (list: any[], index: number): any => {
    return list[index];
  },

  evaluateArrow: (a: string, b: string, c: boolean): string => {
    if (a === b) {
      if (c) {
        return "⬆";
      }
      return "⬇";
    }
    return "";
  },

  sunOrMoon: (theme: Style) => {
    if (theme === Style.Light) {
      return "🌙";
    } else if (theme === Style.Dark) {
      return "🌞";
    }
  },
};
