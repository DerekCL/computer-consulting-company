const gulp = require("gulp");
const gutil = require("gulp-util");
const less = require("gulp-less");
const spawn = require("child_process").spawn;
let node;
let sourceLess = "./public/less";
let targetCss = "./public/css";

const foldersToWatch = [
    "./helpers/**/*",
    "./public/**/*",
    "./routes/**/*",
    "./tests/**/*",
    "./views/**/*",
    "./index.js"
];

// Default Task
gulp.task("default", ["dev"], function() {
});

gulp.task("server", function () {
    if (node) {
        node.kill()
    }
    node = spawn("node", [
        "--max_old_space_size=4096",
        "./index.js"
    ], {stdio: "inherit"});
    node.on("close", function (code) {
        if (code === 8) {
            gutil.log("Error detected, waiting for changes...");
        }
    });
});

// The less task
gulp.task("build-less", function(){
    return gulp.src([sourceLess + "/style.less"])
        .pipe(less())
        .pipe(gulp.dest(targetCss));
});

gulp.task("")

// Environment Tasks
gulp.task("dev", [
    "set-dev-port",
    "set-dev-node-env",
    "build-less",
    "server"
], function () {
    gulp.watch(foldersToWatch, [
        "build-less",
        "server"
    ]);
});

gulp.task("set-dev-node-env", function() {
    return process.env.NODE_ENV = "development";
});

gulp.task("set-dev-port", function() {
    return process.env.PORT = 8000;
});