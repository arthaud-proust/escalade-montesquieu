const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .js('resources/js/user.js', 'public/js')
    .js('resources/js/admin.js', 'public/js')
    .js('resources/js/blog.js', 'public/js')
    .js('resources/js/forum.js', 'public/js')
    .js('resources/js/client.js', 'public/js')
    .js('resources/js/worker.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/mobile.scss', 'public/css')
    .sass('resources/sass/large.scss', 'public/css')
