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

 mix.autoload({
    jquery: ['$', 'window.jQuery']
});
mix.js('public/assets/js/main.js', 'public/js/app.js')
    .css('public/assets/css/main.css', 'public/assets/css/app.css')
    .sourceMaps();
