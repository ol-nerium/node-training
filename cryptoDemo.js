// provide cryptographic functionality

import crypto from "crypto";

// // createHash()
// const hash = crypto.createHash("sha256"); // algorythm
// hash.update("password12434");
// console.log(hash.digest("hex"));

// // generate randomBytes()
// crypto.randomBytes(16, (err, buff) => {
//   if (err) throw err;
//   console.log(buff.toString("hex"));
// });

// createCipheriv & createDecipheriv
const algorythm = "aes-256-cbc";
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cipher = crypto.createCipheriv(algorythm, key, iv);
let encrypted = cipher.update("Hello, this is a secret message", "utf8", "hex");
encrypted += cipher.final("hex");
console.log(encrypted);

const decipher = crypto.createDecipheriv(algorythm, key, iv);
let decrypted = decipher.update(encrypted, "hex", "utf-8");
decrypted += decipher.final("utf-8");
console.log(decrypted);
