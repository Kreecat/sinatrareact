//requiring all of my gulp stuff
var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	less = require('gulp-less'),
	watch = require('gulp-watch');

gulp.task('react', function(){
	return browserify('./client/clientReact/main.js')
		.transform('babelify', {presets: ["react"]})
		.bundle()
		.pipe(source('build.js'))
		.pipe(gulp.dest('./client/scripts/build'))
});

gulp.task('watch', function(){
	gulp.watch(['./sinatra/public/styles/*.less'], ['compile-less']);
});

gulp.task('compile-less', function(){
	gulp.src('./sinatra/public/styles/*.less')
		.pipe(less())
		.pipe(gulp.dest('./sinatra/public/styles/'));
});

gulp.task('watch', function(){
	gulp.watch(['./client/clientReact/*.js'], ['react'])
});

gulp.task('default', ['react', 'compile-less', 'watch'])