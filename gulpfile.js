var gulp        = require('gulp'),
    concat      = require('gulp-concat'),
    sass        = require('gulp-sass'),
    connect     = require('gulp-connect'),
    ngAnnotate  = require('gulp-ng-annotate'),
    babel       = require('gulp-babel'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify'),
    htmlreplace = require('gulp-html-replace'),
    zip         = require('gulp-zip'),
    plumber     = require('gulp-plumber'),
    onError     = function () {console.log('error')};



//█████████████████████████████████████████████
//
//  ████████╗ █████╗ ███████╗██╗  ██╗███████╗
//  ╚══██╔══╝██╔══██╗██╔════╝██║ ██╔╝██╔════╝
//     ██║   ███████║███████╗█████╔╝ ███████╗
//     ██║   ██╔══██║╚════██║██╔═██╗ ╚════██║
//     ██║   ██║  ██║███████║██║  ██╗███████║
//     ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚══════╝
//
//█████████████████████████████████████████████

gulp.task('default', ['htmlreplacedev', 'concatSrc', 'sass', 'connect', 'watch']);

gulp.task('prod', ['concatSrc', 'sass', 'annotate', 'htmlreplaceprod', 'zip']);



//  ┌─┐┌─┐┌┐┌┌─┐┌─┐┌┬┐┬  ┬┌┐ ┌─┐
//  │  │ │││││  ├─┤ │ │  │├┴┐└─┐
//  └─┘└─┘┘└┘└─┘┴ ┴ ┴ ┴─┘┴└─┘└─┘

gulp.task('concatLibs', function () {
    return gulp.src([
        'bower_components/angular/angular.min.js',
        'bower_components/angular-ui-router/release/angular-ui-router.min.js'
    ])
        .pipe(concat('libs.js'))
        .pipe(gulp.dest('./build/'));
});




//  ┌─┐┌─┐┌┐┌┌─┐┌─┐┌┬┐┌─┐┬─┐┌─┐
//  │  │ │││││  ├─┤ │ └─┐├┬┘│
//  └─┘└─┘┘└┘└─┘┴ ┴ ┴ └─┘┴└─└─┘

gulp.task('concatSrc', function () {
    return gulp.src(['./js/namespaces/*.js',
        './js/controllers/*.js',
        './js/directives/**/*.js',
        './js/services/*.js',
        './js/app.js'
    ])
        .pipe(babel())
        .pipe(concat('build.js'))
        .pipe(gulp.dest('./build/'));
});




//  ┌─┐┌─┐┌─┐┌─┐
//  └─┐├─┤└─┐└─┐
//  └─┘┴ ┴└─┘└─┘

gulp.task('sass', function () {
    gulp.src('./sass/main.scss')
        .pipe(plumber({errorHandler: onError}))
        .pipe(sass({errorLogToConsole: true}))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('./css'));
});




//  ┬ ┬┌─┐┌┬┐┌─┐┬ ┬
//  │││├─┤ │ │  ├─┤
//  └┴┘┴ ┴ ┴ └─┘┴ ┴

gulp.task('watch', function () {
    gulp.watch(['index.html', './js/**/*.js', './sass/*.scss'], ['concatSrc', 'sass']);
});




//  ┌─┐┌─┐┌┐┌┌┐┌┌─┐┌─┐┌┬┐
//  │  │ │││││││├┤ │   │
//  └─┘└─┘┘└┘┘└┘└─┘└─┘ ┴

gulp.task('connect', function() {
    connect.server({
        livereload: true
    });
});




//  ┌─┐┌┐┌┌┐┌┌─┐┌┬┐┌─┐┌┬┐┌─┐
//  ├─┤│││││││ │ │ ├─┤ │ ├┤
//  ┴ ┴┘└┘┘└┘└─┘ ┴ ┴ ┴ ┴ └─┘

gulp.task('annotate', function () {
    return gulp.src('build/build.js')
        .pipe(ngAnnotate({
            remove: true,
            add: true,
            single_quotes: true
        }))
        .pipe(uglify())
        .pipe(rename('build.min.js'))
        .pipe(gulp.dest('./build/prod/'));
});




//  ┬ ┬┌┬┐┌┬┐┬  ┬─┐┌─┐┌─┐┬  ┌─┐┌─┐┌─┐┌─┐┬─┐┌─┐┌┬┐
//  ├─┤ │ ││││  ├┬┘├┤ ├─┘│  ├─┤│  ├┤ ├─┘├┬┘│ │ ││
//  ┴ ┴ ┴ ┴ ┴┴─┘┴└─└─┘┴  ┴─┘┴ ┴└─┘└─┘┴  ┴└─└─┘─┴┘

gulp.task('htmlreplaceprod', function () {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'js': 'build/prod/build.min.js'
        }, { keepBlockTags: true }))
        .pipe(gulp.dest('.'));
});




//  ┬ ┬┌┬┐┌┬┐┬  ┬─┐┌─┐┌─┐┬  ┌─┐┌─┐┌─┐┌┬┐┌─┐┬  ┬
//  ├─┤ │ ││││  ├┬┘├┤ ├─┘│  ├─┤│  ├┤  ││├┤ └┐┌┘
//  ┴ ┴ ┴ ┴ ┴┴─┘┴└─└─┘┴  ┴─┘┴ ┴└─┘└─┘─┴┘└─┘ └┘

gulp.task('htmlreplacedev', function () {
    return gulp.src('index.html')
        .pipe(htmlreplace({
            'js': 'build/build.js'
        }, { keepBlockTags: true }))
        .pipe(gulp.dest('.'));
});




//  ┌─┐┬┌─┐
//  ┌─┘│├─┘
//  └─┘┴┴

gulp.task('zip', function () {
    //return gulp.src('./!(node_modules)!(js/**)**')
    return gulp.src(['./**', '!node_modules/**', '!mock_data/**', '!assets/img/bg_14px.jpg', '!assets/img/CMS_Silicon_Tracker_Arty_HiRes.jpg', '!js/**', '!sass/**'])
        .pipe(zip('prod.zip'))
        .pipe(gulp.dest('build/prod/'));
});
