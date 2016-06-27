/**
 * Created by humorHan on 2016/6/17.
 */
$(".dom1").css("background", "1.jpg");

require.ensure(['test-ensure'], function(require){
    var s = require("test-ensure");
    s();
},"ensure1");
location.href="../demo/b.html";   //不能写./b.html，因为版本化会找不到