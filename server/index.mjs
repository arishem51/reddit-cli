import http from "http";

const host = "localhost";
const port = 8000;

const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("close", () => {
      console.log(body);
    });

    res.writeHead(201, "POST Success");
    res.end("Ok");
  } else {
    res.writable(200, "GET Success");
    res.end("Hi");
  }
});

server.listen(port, host, () => {
  console.log(`Server on ${host}:${port}`);
});
