exports.versionValue = function (a, b) {
    return "Version Test v4.0.0";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}