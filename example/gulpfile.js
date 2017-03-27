const gulp = require('gulp');
const sass = require('gulp-sass');
const sassThemesByFolder = require('gulp-sass-themes-by-folder');

gulp.task('styles', function() {
    gulp.src('styles/*.scss')
        .pipe(sassThemesByFolder('themes/**/_*.scss'))
        .pipe(sass()).on('error', sass.logError)
        .pipe(gulp.dest('themes'));
});
