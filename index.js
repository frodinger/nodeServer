import http from "http";

// Request = info från användaren
// Response = används för att skicka tillbaka

const app = http.createServer((req, res) => {
    res.write("Hello world");
    res.end();
});

app.listen(4001, () => {
    console.log("server started listening to port 4001");
});

//sluta köra med ctrl c