const express = require("express")
const app = express()

app.get('/', (req, res) => {
     res.json({title: 'Hi'})
})

app.post('/editUser', (req, res) => {

})

app.listen(5000, () => console.log("Server started"))