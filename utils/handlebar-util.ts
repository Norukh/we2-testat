export const helpers = {
  if_eq: function (a: any, b: any, opts: any) {
    if (a === b) {
      return opts.fn(this);
    } else {
      return opts.inverse(this);
    }
  },

  to_date_string: function (date: Date) {
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

    if (date > today) {
      return `in ${date.getDate() - today.getDate()} days`;
    } else if (date < today) {
      return `${today.getDate() - date.getDate()} days ago`;
    }

    return "Someday";
  },
};
