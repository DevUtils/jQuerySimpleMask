var gulp     = require('gulp');
var concat   = require('gulp-concat');
var uglify   = require('gulp-uglify');
var beautify = require('gulp-beautify');
var edit     = require('gulp-edit');
var replace  = require('gulp-replace');
var date     = require('date-and-time');

var date_now = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

gulp.task
(
	'default',
	function()
	{
		gulp
			.src('src/*.js')
			.pipe(beautify({'indent_with_tabs': true, 'brace-style': 'expand'}))
			.pipe(uglify())
			.pipe(concat('jQuery.SimpleMask.min.js'))
			.pipe
			(
				edit
				(
					function(src, cb)
					{
						src = '// Last modified: ' + date_now + '\n' + src;
						cb(null, src);
					}
				)
			)
			.pipe(gulp.dest('dist'))
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
						src = '// Last modified: ' + date_now + '\n' + src;
						cb(null, src);
					}
				)
			)
			.pipe(gulp.dest('dist'))
		;
	}
);