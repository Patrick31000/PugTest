// var gulp = require('gulp'),
//     pug = require('gulp-pug'),
//     browserSync = require('browser-sync');

// // run this task by typing in gulp pug in CLI
// gulp.task('pug', function() {
//     return gulp.src('templates/*.pug')
//         .pipe(pug()) // pipe to pug plugin
//         .pipe(gulp.dest('build')) // tell gulp our output folder
//         .pipe(browserSync.stream());
// });


// gulp.task('browser-sync', function() {
//     browserSync({
//         server: {
//             baseDir: 'build'
//         },
//     });
// })


// gulp.task('watch', ['browser-sync', 'pug'], function() {
//     gulp.watch('templates/*.pug', ['pug']);
//     // autres observations
// });


var gulp = require('gulp');
var pug = require('gulp-pug');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;


gulp.task('pug', function() {
    return gulp.src('templates/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});




gulp.task('serve', ['pug'], function() {
    browserSync.init({
        server: './build/',
        open: true,
        notify: false
    });
});


gulp.watch('templates/*.pug', ['pug']).on('change', reload);
gulp.watch("build/*.html");

gulp.task('default', ['serve']);