var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
// var sourcemaps = require('gulp-sourcemaps');
var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('default', ['scripts', 'minify-css'], function() {});

gulp.task('scripts', function() {
  return gulp.src(['scripts/*.js', 'view/**/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(gulp.dest('web-src/js/'));
});

gulp.task('minify-css', function() {
    return gulp.src('content/css/**/*.css')
        // .pipe(sourcemaps.init())
        .pipe(concatCss('style.min.css'))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest('web-src/css/'));
});

// Watch
gulp.task('watch', function() {
    gulp.watch(['content/less/**/*.less', 'view/**/*.*', 'scripts/**/*.*'], ['default']);
});

// Server
gulp.task('server', ['default'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch(['content/less/**/*.less', 'view/**/*.*', 'scripts/**/*.*'], ['default']).on('change', browserSync.reload);
});
