var gulp = require('gulp'),
    compass = require('gulp-compass'),
    gutil = require('gulp-util');
 

var sassSources = ['components/sass/style.scss'];


gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    })
    .on('error', gutil.log))
    .pipe(gulp.dest('builds/development/css'))
});


gulp.task('default', ['compass']);