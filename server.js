import http from "http";
import fs from "fs/promises";

import url from "url";
import path from "path";

const PORT = process.env.PORT || 3000;

// Get current path
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__filename, __dirname);
console.log(import.meta);
console.log(import.meta.url);

const server = http.createServer(async (req, res) => {
  try {
    // check if GET request
    let filePath;

    if (req.method === "GET") {
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url === "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (error) {
    console.log(error);
    res.writeHead(500, {
      "Content-Type": "text/html",
    });
    res.end("<h1>Server error</h1>");
  }
});

server.listen(PORT, () => {
  console.log("server running on port ", PORT);
});
