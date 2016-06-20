// var mock =require("mock");

var util = require("util/util");
$(function() {
	setTimeout(function() {
		var style=util.getCookie('style');
		if(style==1) {
			require("../bundle/css/index.css");
		} else {
			//document.write('<link rel="stylesheet" type="text/css" href="../bundle/css/index1.css">');
			require("../bundle/css/index1.css");
		}
		//var arr = [0, 1,2, 3, 4, 5, 6];
		//document.write('<ul class="nav">		<li>在线作业</li>		<li>题库资源</li>		<li>同步教学</li>		<li>学生管理</li>		</ul>');
        //
		//for (var i = 0; i < arr.length; i++) {
		//	var index = arr[i];
		//	$(".nav li:eq(" + index + ")").show();
		//};

	}, 1000)

});