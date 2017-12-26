var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('scss',function(){
    return gulp.src('scss/*.scss')
    .pipe(sass())
	    .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(sourcemaps.init())
			.pipe(sass().on('error', sass.logError))
			.pipe(sourcemaps.write(''))
        .pipe(gulp.dest('css/'))
});

gulp.task('watch',['scss'],function(){
   gulp.watch('scss/**/*.scss',['scss']);
});

gulp.task('default', ['scss', 'watch']);
