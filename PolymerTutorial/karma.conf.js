// Karma configuration
// Generated on Fri May 26 2017 13:32:31 GMT+0200 (South Africa Standard Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['jasmine'],

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'bower_components/**/**', included: false, watched: true, served: true },
      'src/**/*.html',
      'specs/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [
    ],

    plugins: [
      'karma-jasmine',
      'karma-chrome-launcher'
    ],


    preprocessors: {
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  })
}
