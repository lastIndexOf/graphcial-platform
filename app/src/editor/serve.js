const connect = require("connect")
const serveStatic = require("serve-static")

const app = connect()
app.use(serveStatic(__dirname))

app.listen(4040)