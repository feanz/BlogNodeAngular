Logger = function () {
};

Logger.prototype = {
    log: function (message) {
        console.log(message);
    }
};

exports.Logger = Logger;