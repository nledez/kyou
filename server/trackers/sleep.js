// Generated by CoffeeScript 1.7.1
var americano;

americano = require('americano-cozy');

module.exports = {
  name: "Sleep Duration - Jawbone",
  color: "#2D3E50",
  description: "Number of minutes you sleep every day. Data should be imported from Jawbone\nKonnector.",
  model: americano.getModel('JawboneSleep', {
    date: Date
  }),
  request: {
    map: function(doc) {
      return emit(doc.date.substring(0, 10), doc.sleepDuration / 60);
    },
    reduce: function(key, values, rereduce) {
      return sum(values);
    }
  }
};
