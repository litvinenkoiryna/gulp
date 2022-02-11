let projectFolder = 'dist';
let sourceFolder = 'src';

let path = {
    build: {
        html: projectFolder + "/",
        css: projectFolder + "/css/",
        js: projectFolder + "/js/",
    },
    src: {
        html: sourceFolder + "/",
        css: sourceFolder + "/css/**/*.css",
        js: sourceFolder + "/js/script.js/",
    },
    watch: {
        html: sourceFolder + "/**/*.html",
        css: sourceFolder + "/css/**/*.css",
        js: sourceFolder + "/js/**/*.js/",
    },
    clean: "./" + projectFolder + "/"
}
let { src, dest } = require('gulp');

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('prefixer', function (done) {
    gulp.src('*.css')
    return src(path.src.css)
              .pipe(autoprefixer({
                  browserlist: ['last 4 versions', '> 1%', 'IE 10'],
                  cascade: false
        }))
        .pipe(gulp.dest('dist'))
        .pipe(dest(path.build.css));
        done();
});

// gulp.task('sass', function() {
//     return gulp.src('scss/*.scss')
//         .pipe(sass({errLogToConsole: true}))
//         .pipe(postcss([autoprefixer()]))
//         .pipe(minifycss())
//         .pipe(gulp.dest(''))
//         .pipe(plumber({
//             errorHandler: onError
//         }))
//         .pipe(livereload(server));
// });