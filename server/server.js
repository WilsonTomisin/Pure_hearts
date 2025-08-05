const dotenv = require("dotenv")
dotenv.config({ path:"./.env"})
const app = require('./index');

app.listen(5500, () => {
    console.log(`Listening on Port: 5500...`)
})