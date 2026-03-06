import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Dooe" },
  { id: 2, name: "Jane Dooe" },
  { id: 3, name: "Jim Dooe" },
];

const server = createServer((req, res) => {
  if (req.url === "/api/users" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    const user = users.find((item) => item.id === Number(id));

    res.setHeader("Content-Type", "application/json");

    if (!user) {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "User not found" }));
      res.end();

      return;
    }
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Route not found" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
