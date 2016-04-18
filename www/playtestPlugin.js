// Playtest Phonegap Plugin by Bartjezzz 04/2016

module.exports = {
  greet: function (name, successCallback, errorCallback) {
    cordova.exec(successCallback, errorCallback, "Hello", "greet", [name]);
  }
};


(function(window) {
  var cordova = window.cordova || window.Cordova || window.PhoneGap;


  // helper function to prevent Objective C bleed over into javascript
  function bool2ObjC(value) {
    
    if(value === true) {
      return 'YES';
    } else if(value === false) {
      return 'NO'
    }

    return value.toUpperCase();
  }


  function Playtest() {};

  // These functions must be called before you start the Playtest session

  Playtest.prototype.setAppVersion = function(version,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'PlaytestPlugin', 'setAppVersion', [version]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setShowErrorInLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setShowErrorInLogEnabled', [bool2ObjC(enableValue)]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setEventLoggingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setEventLoggingEnabled', [bool2ObjC(enableValue)]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setDebugLogEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setDebugLogEnabled', [bool2ObjC(enableValue)]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setSecureTransportEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setSecureTransportEnabled', [bool2ObjC(enableValue)]);
  };

  // seconds must be an integer
  Playtest.prototype.setSessionContinueSeconds = function(seconds, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setSessionContinueSeconds', [seconds]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setCrashReportingEnabled = function(enableValue, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setCrashReportingEnabled', [bool2ObjC(enableValue)]);
  };

  // End of functions that must be called before Playtest session starts

  // key is a string
  Playtest.prototype.startSession = function(feedbackKey,apiKey,successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'PlaytestPlugin', 'startSession', [feedbackKey, apiKey]);
  };

  Playtest.prototype.endSession = function(successCallback,failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'PlaytestPlugin', 'endSession', []);
  };

  // event must be a string
  Playtest.prototype.logEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'logEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  Playtest.prototype.logEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'logEventWithParameters', [event, parameters]);
  };

  Playtest.prototype.logPageView = function(successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'logPageView', []);
  };

  // timed must be Yes or No, because it's objective C
  Playtest.prototype.logTimedEvent = function(event, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'logTimedEvent', [event, bool2ObjC(timed)]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // timed must be Yes or No, because it's objective C
  Playtest.prototype.logTimedEventWithParameters = function(event, parameters, timed, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'logTimedEventWithParameters', [event, parameters, bool2ObjC(timed)]);
  };

  Playtest.prototype.endTimedEvent = function(event, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'endTimedEvent', [event]);
  };

  // parameters must be a JSON dictionary that contains only strings like {id:"4", price: "471", location: "New York"}
  // only used if you want to override the original parameters
  Playtest.prototype.endTimedEventWithParameters = function(event, parameters, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'endTimedEventWithParameters', [event, parameters]);
  };

  // userID must be a string
  Playtest.prototype.setUserID = function(userID, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setUserID', [userID]);
  };

  // gender must be a string. male and female are acceptable values
  Playtest.prototype.setGender = function(gender, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setGender', [gender]);
  };

  // age must be an integer
  Playtest.prototype.setAge = function(age, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setAge', [age]);
  };

  // latitude and longitude must be doubles; horizontal and vertical accuracy must be float
  Playtest.prototype.setLatitude = function(latitude, longitude, horizontalAccuracy, verticalAccuracy, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'setLatitude', [latitude,longitude,horizontalAccuracy,verticalAccuracy]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setSessionReportsOnCloseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'PlaytestPlugin', 'setSessionReportsOnCloseEnabled', [bool2ObjC(enabled)]);
  };

  // argument must be Yes or No, because it's objective C
  Playtest.prototype.setSessionReportsOnPauseEnabled = function (enabled, successCallback, failureCallback) {
    return cordova.exec(successCallback, failureCallback, 'PlaytestPlugin', 'setSessionReportsOnPauseEnabled', [bool2ObjC(enabled)]);
  };

  Playtest.prototype.logError = function(errorID, message, successCallback, failureCallback) {
    return cordova.exec( successCallback, failureCallback, 'PlaytestPlugin', 'logError', [errorID, message]);
  };

  Playtest.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins.playtest = new Playtest();
  };

  cordova.addConstructor(Playtest.install);



})(typeof global === "object" ? global : window);
