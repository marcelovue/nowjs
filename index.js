const express = require('express')
const app = express()

app.get("*", function(req, res) {
  res.send("Alô criançada o bozo chegou")
})

let port = 7000
const server = app.listen(port, function() {
  console.log(`Running on port ${port}`)
})
