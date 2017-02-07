var server = require('browser-sync');
var gulp = require('gulp');
var less = require('gulp-less');
var plumber = require('gulp-plumber');
var pug = require('gulp-pug');
var del = require('del');
var run = require('run-sequence');
var debug = require('gulp-debug');

var src = './src';
var dist = './dist';

// Compile less
gulp.task('less', function() {
	gulp.src(['docs/src/less/docs.less'])
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest('docs/dist/css'))
		.pipe(server.stream());

	gulp.src([`${src}/less/*.less`])
		.pipe(plumber())
		.pipe(less())
		.pipe(gulp.dest(`${dist}/css`))
		.pipe(server.stream());
});

// Compile JS
gulp.task('js', function() {
	gulp.src(`docs/src/js/docs.js`)
		.pipe(plumber())
		.pipe(gulp.dest(`docs/dist/js`))
		.pipe(server.stream());

	return gulp.src(`${src}/js/main.js`)
		.pipe(plumber())
		.pipe(gulp.dest(`${dist}/js`))
		.pipe(server.stream());
});

// Compile Pug
gulp.task('views', function() {
	return gulp.src(`docs/src/views/*.pug`)
		.pipe(plumber())
		.pipe(pug())
		.pipe(gulp.dest(`docs/`))
		.pipe(server.stream());
});

// Watch for changes
gulp.task('watch', function() {
	gulp.watch(`${src}/less/**/*.less`, ['less']);

	gulp.watch(`docs/src/js/docs.js`, ['js']);
	gulp.watch(`docs/src/less/**/*.less`, ['less']);
	gulp.watch(`docs/src/views/**/*.pug`, ['views']);
});

// Setup local server with injection
gulp.task('serve', function() {
	server.init({
		server: {
			baseDir: '.'
		}
	});
});

// Clean the build folder
gulp.task('clean', function() {
	return del(`${dist}/*`);
});

gulp.task('default', function() {
	run('clean', 'less', 'js', 'views');
});

gulp.task('dev', ['default', 'watch', 'serve']);
