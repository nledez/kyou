// Generated by CoffeeScript 1.7.1
var americano, initTrackers, port;

americano = require('americano');

initTrackers = require('./server/init/trackers');

process.env.TZ = 'UTC';

port = process.env.PORT || 9260;

americano.start({
  name: 'kyou',
  port: port
}, function(app) {
  return initTrackers(app);
});
