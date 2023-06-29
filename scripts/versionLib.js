exports.versionValue = function () {
    return "Version Test v3.5.0";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}