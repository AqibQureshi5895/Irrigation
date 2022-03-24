var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));


gulp.task('sass', function() {
  return gulp.src('scss/**/style.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass())
    .pipe(gulp.dest('css'))
})

gulp.task('watch', function () {
  gulp.watch('scss/**/*.scss', gulp.series('sass'));
})