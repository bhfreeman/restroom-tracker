const date_fns = require('date-fns')

module.exports = {
    format_date: (date) => {
    //   // Format date as MM/DD/YYYY
    //   return date.toLocaleDateString();
    date_fns.format(new Date(date), 'MM/dd/yyyy')
    }
  };