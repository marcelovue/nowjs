const express = require('express')
const app = express()

app.get("*", function(req, res) {
  res.send("Alô criançada o bozo chegou")
})

module.exports = app
