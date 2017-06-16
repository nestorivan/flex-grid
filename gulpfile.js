const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build', sassTranspiler(['./src/flex-grill.scss']));

gulp.task('watch', ['build'], function () {
    gulp.watch(['./src/*.scss', './src/**/*.scss'], ['build']);
});

/**
 * Compiles the sass files to css.
 * @param {Array} path array of file paths
 */
function sassTranspiler(path) {
    return function () {
        return gulp.src(path)
            .pipe(sass({outputStyle: 'compressed'}))
            .pipe(autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(gulp.dest('dist'));
    }
}