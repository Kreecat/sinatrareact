//requiring all of my gulp stuff
var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	watch = require('gulp-watch');

gulp.task('react', function(){
	return browserify('./clientReact/main.js')
		.transform('babelify', {presets: ["react"]})
		.bundle()
		.pipe(source('build.js'))
		.pipe(gulp.dest('./scripts/build'))
});

gulp.task('watch', function(){
	gulp.watch(['./clientReact/*.js'], ['react'])
})

gulp.task('default', ['react', 'watch'])