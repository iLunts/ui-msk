var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cleanCSS = require('gulp-clean-css');

var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

var install = require("gulp-install");

gulp.task('default', ['scripts', 'less', 'minify-css'], function() {});

gulp.task('scripts', function() {
  return gulp.src(['scripts/*.js', 'view/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('web-src/js/'));
});

gulp.task('minify-css', function() {
    return gulp.src('content/css/**/*.css')
        .pipe(concatCss('style.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('web-src/css/'));
});

gulp.task('less', function () {
  return gulp.src('content/less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('content/css'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(['content/less/**/*.less', 'view/**/*.*', 'scripts/**/*.*'], ['default']);
});

// Server
gulp.task('server', ['default'], function() {

    browserSync.init({
        server: "./",
        notify: false
    });

    gulp.watch(['content/less/**/*.less', 'view/**/*.*', 'scripts/**/*.*'], ['default']).on('change', browserSync.reload);
});

// Install
gulp.task('install', function () {
  return gulp.src(['./package.json'])
    .pipe(install());
});
