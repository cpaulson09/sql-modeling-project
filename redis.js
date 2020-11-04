const redis = require('redis');
const client = redis.createClient("redis://127.0.0.1:6379");

client.on("error", err => {
    console.log(err)
})
client.set('hello', "world")
client.get('hello', redis.print)


// client.hgetall("id:{id}", redis.print)


// LIST TEST
// client.keys("*", function (err, keys) {
//   if (err) return console.log(err);

//   for (var i = 0, len = keys.length; i < len; i++) {
//     const regex = "/id:*/g";
//     if (keys[i].search(regex)) {
//       client.hgetall(keys[i], (err, rep) => {
//         console.log(rep);
//         return;
//       });
//     }
//   }
// });

      
// READ TEST
// client.hexists("id:1159", 'contractor', redis.print)

// READ TEST
// client.hget("id:1159", 'contractor', redis.print)

// DELETE TEST
// client.hdel("id:1159", 'contractor', redis.print)

// client.quit();
