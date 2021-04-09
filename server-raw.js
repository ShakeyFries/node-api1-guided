// Attendance code 3766

const http = require("http")
                    // req and res stands for request and response
const server = http.createServer((req, res) => {
    console.log("received a new viewer");
    
    res.statusCode = 200

    res.setHeader("Content-Type", "text/html")
    res.write(`<h1>Hello, World. the current time is ${new Date()}</h1>`)

    res.end()
})

server.listen(8080, () => {
    console.log("Server started on port 8080")
})