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
      ["Tomorrow", new Date(new Date().getDate() + 1)],
      ["Yesterday", new Date(new Date().getDate() - 1)],
    ]);

    dates.forEach((val, key) => {
      if (date === val) {
        return key;
      }
    });

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
      const offset = date.getTimezoneOffset();
      date = new Date(date.getTime() - offset * 60 * 1000);
      return date.toISOString().split("T")[0];
    }
  },
};
