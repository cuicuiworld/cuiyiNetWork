var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	watch = require('gulp-watch'),
	livereload = require('gulp-livereload');

gulp.task('less',function(){
	gulp.src('less/**/*.less')
		.pipe(less())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
})

gulp.task('jsmin',function(){
	gulp.src('js/**/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
})

gulp.task('livereload',function(){
	gulp.src('**/*.*')
		.pipe(reload())
		.pipe(gulp.dest('dist/**/*'));
})

gulp.task('default',['less','jsmin']);

gulp.task('watch',function(){
	gulp.watch('less/**/*.less',['less']);
	gulp.watch('js/**/*.js',['jsmin']);
	gulp.watch('/**/*.*',['livereload']);
})