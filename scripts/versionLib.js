exports.versionValue = function () {
    return "Version Test v3.9.2";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}