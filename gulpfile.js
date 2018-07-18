const gulp     = require('gulp');
const concat   = require('gulp-concat');
const uglify   = require('gulp-uglify');
const edit     = require('gulp-edit');
const date     = require('date-and-time');
const sprintf  = require('sprintf-js').sprintf;
const vsprintf = require('sprintf-js').vsprintf;
const merge    = require('merge-stream');
const yarn     = require('gulp-yarn');
const semver   = require('semver');
const fs       = require('fs');

var date_now = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

const getPackageVersion = (p_package_folder) =>
{
	const package_json = (p_package_folder) ? p_package_folder + '/package.json' : 'package.json';
	const json = JSON.parse(fs.readFileSync(package_json));
	return json.version;
}

const getNextPackageVersion = (p_package_folder) =>
{
	const package_json = (p_package_folder) ? p_package_folder + '/package.json' : 'package.json';
	const json = JSON.parse(fs.readFileSync(package_json));
	const result = semver.inc(json.version, 'patch');
	return result;
}

gulp.task('yarn_default', () => { return gulp.src(['package.json'     , 'yarn.lock'     ]).pipe(yarn()); });
gulp.task('yarn_vendor' , () => { return gulp.src(['demo/package.json', 'demo/yarn.lock']).pipe(yarn()); });

gulp.task
(
	'default',
	['yarn_default'],
	() =>
	{
		const version = getNextPackageVersion();

		const gulp_min = gulp
			.src('src/*.js')
			.pipe(uglify())
			.pipe(concat('jQuery.SimpleMask.min.js'))
			.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
			.pipe(gulp.dest('dist'))
		;

		const gulp_raw = gulp
			.src('src/*.js')
			.pipe(concat('jQuery.SimpleMask.js'))
			.pipe(edit(function(src, cb) { src = vsprintf('/* Version: %s - Last modified: %s */\n', [version, date_now]) + src; cb(null, src); }))
			.pipe(gulp.dest('dist'))
		;

		return merge(gulp_min, gulp_raw);
	}
);

gulp.task
(
	'vendor',
	['yarn_vendor'],
	() =>
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
);
