var url="https://mylogger/log";

function log(message){
    console.log(message);
}


module.exports.log=log;
module.exports.endPoint=url;