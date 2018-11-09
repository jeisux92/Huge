var gulp = require("gulp");

var connect = require("gulp-connect");
var root = "public";

gulp.task("connect", function() {
  connect.server({
    root: "public",
    livereload: true
  });
});

gulp.task("default", ["connect"]);
