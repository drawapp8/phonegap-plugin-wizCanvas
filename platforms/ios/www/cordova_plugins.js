cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/jp.wizcorp.phonegap.plugin.wizCanvasPlugin/www/phonegap/plugin/wizCanvas/wizCanvas.js",
        "id": "jp.wizcorp.phonegap.plugin.wizCanvasPlugin.wizCanvasPlugin",
        "clobbers": [
            "window.wizCanvas"
        ]
    }
]
});