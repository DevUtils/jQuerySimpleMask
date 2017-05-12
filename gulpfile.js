var gulp        = require('gulp');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var beautify    = require('gulp-beautify');
var edit        = require('gulp-edit');
// var gutil       = require('gulp-util');
var replace     = require('gulp-replace');

gulp.task // build
(
	'build',
	function()
	{
		var dist = 'dist';
		var beautify_options = { 'indent_with_tabs': true, 'brace-style': 'expand' };

		gulp
			.src('src/*.js')
			.pipe(beautify(beautify_options))
			.pipe(uglify())
			.pipe(concat('jQuery.SimpleMask.min.js'))
			.pipe
			(
				edit
				(
					function(src, cb)
					{
						src = '// Last modified: ' + new Date().toLocaleString() + '\n' + src;
						cb(null, src);
					}
				)
			)
			.pipe(gulp.dest(dist))
		;

		gulp
			.src('src/*.js')
			.pipe(concat('jQuery.SimpleMask.js'))
			.pipe
			(
				edit
				(
					function(src, cb)
					{
						src = '// Last modified: ' + new Date().toLocaleString() + '\n' + src;
						cb(null, src);
					}
				)
			)
			.pipe(gulp.dest(dist))
		;
	}
);