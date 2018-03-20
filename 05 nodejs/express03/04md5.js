/**
 * Created by Administrator on 2017/3/4 0004.
 */

//https://www.npmjs.com/package/md5-node

var crypto = require("crypto");

console.log(md5("nihao"));

function md5(mingma){
    var md5 = crypto.createHash('md5');
    var password = md5.update(mingma).digest('base64');
    return password;
}