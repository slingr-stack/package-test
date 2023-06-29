exports.versionValue = function () {
    return "Version Test v3.5.7";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}