let fs = require("fs");
let path = require("path");

const toJson = function (fileRoot, baseName, outputTo) {
  let outputPath = outputTo ? path.join(fileRoot, outputTo+".json") : path.join(fileRoot, baseName+ ".json");
  let inputPath = path.join(fileRoot, baseName+ ".scss");
  console.log(path.join(fileRoot, baseName), outputPath);
  
  fs.readFile(inputPath, "utf8", readScss(outputPath));

}
const readScss = function (outputPath) {

  return function (err, data) {
    if (err) {
      console.error(err);
      return;
    }
    //console.log(data.split("\n")[0]);
    let stringArr = data.split(";");
    stringArr.splice(stringArr.length - 1, 1);
    let newData = stringArr.join(";");
    let output = "{\n"
    output += newData.replace(/(\/\*.*\*\/)|(\/\/.*\n)/g, "");
    output = output.replace(/([A]?\d?\d\d)\s?:/g, "\"$1\":");
    output = output.replace(/\(/g, "{");
    output = output.replace(/\$(.*):/g, "\"$1\":");
    output = output.replace(/contrast\s?:/g, "\"contrast\":");
    output = output.replace(/\);/g, "},");
    output = output.replace(/:\s?(#.{6}),/g, ": \"$1\",");
    output = output.replace(/\)/g, "}");
    output = output.replace(/,((\s*\n\s*)*)\}/g, "$2}");
    output += "\n}";
   
    fs.writeFile(outputPath, '', finishedWrite);
    fs.writeFile(outputPath, output, finishedWrite);
    //let writeStream = fs.createWriteStream(outputPath);
    //writeStream.write(data);
    //writeStream.end();
  }.bind(outputPath);
  
  
}
const finishedWrite = function (err) {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Finished a Write Operation");
}

module.exports = toJson;

require('make-runnable');
