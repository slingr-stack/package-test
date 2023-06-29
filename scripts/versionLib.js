exports.versionValue = function () {
    return "Version Test v5.0.0";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}