const redis = require('redis');
const client = redis.createClient("redis://127.0.0.1:6379");

client.on("error", err => {
    console.log(err)
})
client.set('hello', "world")
client.get('hello', redis.print)

client.quit()