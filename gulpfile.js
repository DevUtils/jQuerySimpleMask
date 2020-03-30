const gulp     = require('gulp');
const concat   = require('gulp-concat');
const uglify   = require('gulp-uglify');
const edit     = require('gulp-edit');
const vsprintf = require('sprintf-js').vsprintf;
const merge    = require('merge-stream');
const semver   = require('semver');
const fs       = require('fs');
const strnow   = require('strnow');
const date_now = strnow.get();

const getNextPackageVersion = (p_package_folder) =>
{
	const package_json = (p_package_folder) ? p_package_folder + '/package.json' : 'package.json';
	const json = JSON.parse(fs.readFileSync(package_json));
	const result = semver.inc(json.version, 'patch');
	return result;
}

function task_default()
{
	const version = getNextPackageVersion();

	const gulp_min = gulp
		.src('src/*.js')
		.pipe(uglify())
		.pipe(concat('jQuery.SimpleMask.min.js'))
		.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
		.pipe(gulp.dest('dist'))
		.pipe(gulp.dest('demo/lib'))
		.pipe(gulp.dest('page/public/lib'))
		;
		
		const gulp_raw = gulp
		.src('src/*.js')
		.pipe(concat('jQuery.SimpleMask.js'))
		.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
		.pipe(gulp.dest('dist'))
		.pipe(gulp.dest('demo/lib'))
	;

	return merge(gulp_min, gulp_raw);
}

function task_vendor()
{
	const version = getNextPackageVersion('demo');

	console.log(version);

	const js_files = gulp
		.src
		(
			[
				'demo/node_modules/jquery/dist/jquery.min.js',
				'demo/node_modules/bootstrap/dist/js/bootstrap.min.js'
			]
		)
		.pipe(uglify())
		.pipe(concat('vendor.min.js'))
		.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
		.pipe(gulp.dest('demo/js'))
	;

	const css_files = gulp
		.src
		(
			[
				'demo/node_modules/bootstrap/dist/css/bootstrap.min.css'
			]
		)
		.pipe(concat('vendor.min.css'))
		.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
		.pipe(gulp.dest('demo/css'))
	;

	return merge(js_files, css_files);
}

exports.default = task_default;
exports.vendor  = task_vendor;