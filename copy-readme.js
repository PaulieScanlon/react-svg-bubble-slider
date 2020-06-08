const fs = require("fs");

fs.copyFile("./README.md", "./react-svg-bubble-slider/README.md", (err) => {
  if (err) {
    throw err;
  }
  console.log("README copied to theme ok!");
});
