const redis = require('redis');
const client = redis.createClient();

client.on("error", err => {
    console.log(err)
})

// client.set('hello', "world")
client.get('contractor', redis.print)

client.quit;