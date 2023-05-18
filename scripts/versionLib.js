exports.versionValue = function (a, b) {
    return "Version Test v2.0.0";
}

exports.configTest = function () {
    return config.get("webhooksSharedKey");
}

exports.complexTest = function (a){
    var obj  = {
        value : 2,
        msg : "{{message here}}: ",
        other : '{}}}'
    }
    return obj.msg + a;
}

exports.depConfig = function(){
    var response = dependencies.crypto.base64.configTest();
    return response;
}

exports.setDependencyValue = function(value){
    dependencies.crypto.config().set('webhooksSharedKey', value);
    return "webhooksSharedKey configured on dependency with value:" + value
}