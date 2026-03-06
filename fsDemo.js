import fs from "fs/promises";
// import fs from "fs";
import path from "path";

// // readFile() - callback
// fs.readFile("./test.txt", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // readFileSync() - Synchromous version
// const data = fs.readFileSync("./test.txt", "utf8");
// console.log(data);

// // readFile() - Promise .then()
// fs.readFile("./test.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));

// readFile() - Promise async/await
const readFile = async () => {
  try {
    const data = await fs.readFile("./test.txt", "utf8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
readFile();

// ...

const writeFile = async () => {
  try {
    await fs.writeFile("./test.txt", "Hello, I'm writing to ths file");
    console.log("file written to...");
  } catch (error) {
    console.log(error);
  }
};

//appendFile

const appendFile = async () => {
  try {
    await fs.appendFile("./test.txt", "\nThis is appended test");
    console.log("File appended to...");
  } catch (error) {
    console.log(error);
  }
};

writeFile();
appendFile();
readFile();
