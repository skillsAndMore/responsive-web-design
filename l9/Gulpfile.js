var gulp = require('gulp');
var compass = require('gulp-compass');

gulp.task('compass', function () {
    gulp.src('sass/**/*.scss')
        .pipe(compass({
            config_file: './config.rb',
            css: 'css'
        }))
        .pipe(gulp.dest('./css/'));
});

//Watch task
gulp.task( 'default', function(){
    gulp.watch('sass/**/*.scss', ['compass']);
})
