const keys = require('./keys');
const redis = require('redis');

const redisClient = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
  retry_strategy: () => 1000,
});
const sub = redisClient.duplicate();

function ciag(index) {
  if (index > 10) index = 10
  return 3 + (index - 1) * 2

}

sub.on('message', (channel, message) => {
  redisClient.hset('values', message, ciag(parseInt(message)));
});
sub.subscribe('insert');
