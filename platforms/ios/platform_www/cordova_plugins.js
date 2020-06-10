cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-network-information.network",
      "file": "plugins/cordova-plugin-network-information/www/network.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "navigator.connection",
        "navigator.network.connection"
      ]
    },
    {
      "id": "cordova-plugin-network-information.Connection",
      "file": "plugins/cordova-plugin-network-information/www/Connection.js",
      "pluginId": "cordova-plugin-network-information",
      "clobbers": [
        "Connection"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview-exec",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview-exec.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "cordova.exec"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-engine.ios-wkwebview",
      "file": "plugins/cordova-plugin-wkwebview-engine/src/www/ios/ios-wkwebview.js",
      "pluginId": "cordova-plugin-wkwebview-engine",
      "clobbers": [
        "window.WkWebView"
      ]
    },
    {
      "id": "onesignal-cordova-plugin.OneSignal",
      "file": "plugins/onesignal-cordova-plugin/www/OneSignal.js",
      "pluginId": "onesignal-cordova-plugin",
      "clobbers": [
        "OneSignal"
      ]
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.formdata-polyfill",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/formdata-polyfill.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.xhr-polyfill",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/xhr-polyfill.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.fetch-bootstrap",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/fetch-bootstrap.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    },
    {
      "id": "cordova-plugin-wkwebview-file-xhr.fetch-polyfill",
      "file": "plugins/cordova-plugin-wkwebview-file-xhr/src/www/ios/whatwg-fetch-2.0.3.js",
      "pluginId": "cordova-plugin-wkwebview-file-xhr",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-network-information": "2.0.2",
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-plugin-wkwebview-engine": "1.2.1",
    "onesignal-cordova-plugin": "2.7.0",
    "cordova-plugin-wkwebview-file-xhr": "2.1.4",
    "cordova-plugin-wkwebviewxhrfix": "0.1.0"
  };
});