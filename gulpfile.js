var gulp = require('gulp');
var jade = require('jade');
var gulpJade = require('gulp-jade');
var sass = require('gulp-sass');

gulp.task('jade', function () {
  return gulp.src('./jade/**/*.jade')
    .pipe(gulpJade({
      jade: jade,
      pretty: true
    }))
    .pipe(gulp.dest('./dist/html'))
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});
 
gulp.task('watch', function () {
	gulp.watch('./jade/**/*.jade', ['jade']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', ['jade', 'sass']);