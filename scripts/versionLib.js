exports.versionValue = function () {
    return "Version Test v6.0.0";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}