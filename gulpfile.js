const gulp     = require('gulp');
const concat   = require('gulp-concat');
const uglify   = require('gulp-uglify');
const edit     = require('gulp-edit');
const date     = require('date-and-time');
const sprintf  = require('sprintf-js').sprintf;
const vsprintf = require('sprintf-js').vsprintf;
const fs       = require('fs');

var date_now = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

const getPackageVersion = () =>
{
	const json = JSON.parse(fs.readFileSync('./package.json'));
	return json.version;
}

gulp.task
(
	'default',
	() =>
	{
		const version = getPackageVersion();

		gulp
			.src('src/*.js')
			.pipe(uglify())
			.pipe(concat('jQuery.SimpleMask.min.js'))
			.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
			.pipe(gulp.dest('dist'))
		;

		gulp
			.src('src/*.js')
			.pipe(concat('jQuery.SimpleMask.js'))
			.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
			.pipe(gulp.dest('dist'))
		;
	}
);