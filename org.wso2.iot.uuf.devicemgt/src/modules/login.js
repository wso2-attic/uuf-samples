onSuccess = function (context) {
    var log = new Log("login");
    log.debug("User login success '" + stringify(context.user) + "'.");

    var utility = require("/app/modules/utility.js").utility;
    var apiWrapperUtil = require("/app/modules/api-wrapper-util.js").apiWrapperUtil;
    var userModule = require("/app/modules/user.js").userModule;

    utility.insertAppPermissions(userModule, "login");
    var properties = {username: context.input.username, password: context.input.password};
    apiWrapperUtil.setupAccessTokenPair("password", properties);
};

onFail = function (error) {
    var log = new Log("login");
    log.error("User login failed '" + stringify(error) + "'.");
};