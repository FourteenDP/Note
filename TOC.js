var fs = require("fs");
var path = require("path");

var filePath = path.resolve("1000-技术");

var tree = {};

fileDisplay(filePath);

function fileDisplay(filePath) {
  fs.readdir(filePath, function (err, files) {
    if (err) {
      err.message = "Error: " + filePath + "not found";
      console.log(err);
    } else {
      files.forEach(function (filename) {
        var fileDir = path.join(filePath, filename);

        fs.stat(fileDir, function (err, stats) {
          if (err) {
            err.message = "Error: " + filePath + "not found";
            console.log(err);
          } else {
            var isFile = stats.isFile();
            var isDir = stats.isDirectory();
            if (isFile) {
              if (tree[filePath]) {
                tree[filePath];
              }
            }
            if (isDir) {
              fileDisplay(fileDir);
            }
          }
        });
      });
    }
  });
}
