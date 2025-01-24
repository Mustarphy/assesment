const fs = require("fs");

// Create a file named "welcome.txt" and write "Hello Node" to it
fs.writeFileSync("welcome.txt", "Hello Node");

// Read the content of the file and log it to the console
const data = fs.readFileSync("welcome.txt", "utf-8");
console.log(data);