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

 mix.js(
    [
        'public/vendors/bootstrap/dist/css/bootstrap.css',
        'public/vendors/font-awesome/css/font-awesome.css',
        'public/vendors/nprogress/nprogress.css'
    ]
    ,'public/assets/js/app.js')
 .postCss([], 'public/assets/css/app.css');
