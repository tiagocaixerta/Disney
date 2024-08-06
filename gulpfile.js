const gulp = require('gulp');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');

// Função para compilar SCSS
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist/css'));
}

// Função para minificar JavaScript
function scripts() {
    return gulp.src('./src/scripts/*.js') // Altere este caminho se necessário
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
}

// Função para otimizar imagens
function images() {
    return gulp.src('./src/images/**/*', { encoding: false })
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
}

// Exporta tarefas padrão
exports.default = gulp.parallel(styles, scripts, images);

// Função de observação para mudanças nos arquivos
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', styles);
    gulp.watch('./src/scripts/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
};
