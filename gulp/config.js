global.SRC_FOLDER = 'app';
global.BUILD_FOLDER = 'build';
global.TMP_FOLDER = 'tmp';
global.ROOT = './';

global.config = {
    paths: {
        src: {
            index: SRC_FOLDER + '/index.html',
            images: SRC_FOLDER + '/assets/images/**/*',
            scripts: SRC_FOLDER + '/js/modules/**/*.js',
            styles: SRC_FOLDER + '/assets/less/index.less',
            stylesGlobal: SRC_FOLDER + '/assets/less/**/*.less',
            templates: SRC_FOLDER + '/html/**/*.html',
            templatesHTML: SRC_FOLDER + '/html/**/*.html',
            templatesCompiled: TMP_FOLDER,
            livereload: [BUILD_FOLDER + '/**/*.css'],
            modules: './' + SRC_FOLDER + '/js/index.js'
        },
        dest: {
            styles: BUILD_FOLDER + '/static/css',
            scripts: BUILD_FOLDER + '/static/js',
            maps: BUILD_FOLDER + '/static/maps',
            images: BUILD_FOLDER + '/static/images',
            index: BUILD_FOLDER,
            server: BUILD_FOLDER
        }
    },
    filenames: {
        styles: 'styles.min.css',
        scripts: 'app.min.js',
        templates: {
            compiled: 'templates.js',
            angular: {
                moduleName: 'app.templates',
                prefix: '',
                stripPrefix: 'app/'
            }
        }
    },
    ports: {
        staticServer: 8800,
        livereloadServer: 35729
    }
};
