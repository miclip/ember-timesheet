/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember-timesheet',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',    
    firebase: 'https://timesheet-poc.firebaseio.com/',
    torii: {
      sessionServiceName: 'session'
    },
    contentSecurityPolicy: {
      'style-src': '\'self\' fonts.googleapis.com',
      'font-src': '\'self\' fonts.gstatic.com',
      'img-src': '\'self\' *.gravatar.com data:image',
      'connect-src': '\'self\' wss://*.firebaseio.com https://auth.firebase.com'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    }, 
    moment: {
      allowEmpty: true, // default: false
      includeTimezone: 'all'
    },
    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

   if (environment === 'development') {
     ENV.APP.LOG_RESOLVER = false;
     ENV.APP.LOG_ACTIVE_GENERATION = false;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = false;
     ENV.APP.LOG_VIEW_LOOKUPS = false;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
