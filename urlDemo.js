import url from "url";

const urlString = "http://www.google.com/search?q=hello+world";

//URL Object
const urlObj = new URL(urlString);
console.log(urlObj);
console.log(urlObj.pathname);
console.log(urlObj.search);
console.log(urlObj.searchParams);
// ...

//format() - turns object to the string url
console.log(url.format(urlObj));

// import.meta.url -file URL
// import.meta - info about current module
console.log(import.meta.url);

//fileURLToPath() - make file to regular path
console.log(url.fileURLToPath(import.meta.url));

const params = new URLSearchParams(urlObj.search);
console.log(params);
console.log(params.get("q"));
params.append("limit", "5");
// params.delete("limit");
console.log(params);
