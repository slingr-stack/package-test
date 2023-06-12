exports.versionValue = function () {
    return "Version Test v3.0.0";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}