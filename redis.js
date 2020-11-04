const redis = require('redis');
const client = redis.createClient();

client.on("error", err => {
    console.log(err)
})

client.get('hello', redis.print)

// client.hgetall("id:1159", (err, rep) => {
//     console.log(rep)
// })

// client.hexists("id:1159", 'contractor', redis.print)

// client.hget("id:1159", 'contractor', redis.print)
client.hdel("id:1159", 'contractor', redis.print)

client.quit();