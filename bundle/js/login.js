/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(15);


/***/ },

/***/ 7:
/***/ function(module, exports) {

	/**
	 * Created by humorHan on 2016/6/17.
	 */
	module.exports = {
		baseUrl: "http://localhost:63342/mfg_newb_webv2/html/demo/",
		//跳转页面，可以处理公用跳转逻辑
		redirectUrl: function(redirectUrl, fromUrl,logout) {
			if (redirectUrl == "login.html") {
				if(logout)			{
					window.location.href = this.baseUrl + redirectUrl;
				}
				else {
				window.location.href = this.baseUrl + redirectUrl+"?from="+this.baseUrl+fromUrl;}
			} else {
				if (this.getCookie("uname")) {
					window.location.href = this.baseUrl + redirectUrl;
				} else {
					window.location.href = this.baseUrl + "login.html";
				}
			}
		},
		//设置cookie
		setCookie: function(objName, objValue, objHours) {
			var str = objName + "=" + escape(objValue);
	
			if (objHours > 0) { //为0时不设定过期时间，浏览器关闭时cookie自动消失
				var date = new Date();
				var ms = objHours * 3600 * 1000;
				date.setTime(date.getTime() + ms);
				str += "; expires=" + date.toGMTString() + ";path=/";
			}
			document.cookie = str;
		},
		//获取cookie
		getCookie: function(objName) { //获取指定名称的cookie的值
			var arrStr = document.cookie.split("; ");
			for (var i = 0; i < arrStr.length; i++) {
				var temp = arrStr[i].split("=");
				if (temp[0] == objName) {
					return unescape(temp[1]);
				}
			}
		},
		// html转码
		htmlEncode: function(s) {
			var div = document.createElement('div');
			div.appendChild(document.createTextNode(s));
			return div.innerHTML;
		},
		// html解码
		htmldecode: function(s) {
			var div = document.createElement('div');
			div.innerHTML = s;
			return div.innerText || div.textContent;
		}
	}

/***/ },

/***/ 15:
/***/ function(module, exports, __webpack_require__) {

	var util = __webpack_require__(7);
	$(function() {
	
		$(".btnlogin").click(function() {
			var uname = $("#uname").val();
			var upwd = $("#upwd").val();
	
			if (uname == 'test' && upwd == '123456') {
				//alert('登录成功');
				util.setCookie("uname",uname);
				util.setCookie("style",1);
				util.redirectUrl('index.html', 'login.html');
			} else {
				if (uname == 'test1' && upwd == '123456') {
					//alert('登录成功');
					util.setCookie("uname",uname);
					util.setCookie("style",2);
					util.redirectUrl('index.html', 'login.html');
				}
				else {
				alert('用户名密码错误');
				return false;
				}
			}
	
		})
	});

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDViNDljNWYzY2Y2MTQ1YjhlZGI/OWRmZioqKioiLCJ3ZWJwYWNrOi8vLy4vZGVwL3V0aWwvdXRpbC5qcz8yMjIxKioiLCJ3ZWJwYWNrOi8vLy4vanMvbG9naW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBLHNCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFZLG9DQUFvQztBQUNoRDtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0EsZ0NBQStCO0FBQy9CLHdDQUF1QztBQUN2QyxrQkFBaUIsbUJBQW1CO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7O0FDdkRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFFO0FBQ0YsRUFBQyxFIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkNWI0OWM1ZjNjZjYxNDViOGVkYlxuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGh1bW9ySGFuIG9uIDIwMTYvNi8xNy5cclxuICovXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG5cdGJhc2VVcmw6IFwiaHR0cDovL2xvY2FsaG9zdDo2MzM0Mi9tZmdfbmV3Yl93ZWJ2Mi9odG1sL2RlbW8vXCIsXHJcblx0Ly/ot7PovazpobXpnaLvvIzlj6/ku6XlpITnkIblhaznlKjot7PovazpgLvovpFcclxuXHRyZWRpcmVjdFVybDogZnVuY3Rpb24ocmVkaXJlY3RVcmwsIGZyb21VcmwsbG9nb3V0KSB7XHJcblx0XHRpZiAocmVkaXJlY3RVcmwgPT0gXCJsb2dpbi5odG1sXCIpIHtcclxuXHRcdFx0aWYobG9nb3V0KVx0XHRcdHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsK1wiP2Zyb209XCIrdGhpcy5iYXNlVXJsK2Zyb21Vcmw7fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHRoaXMuZ2V0Q29va2llKFwidW5hbWVcIikpIHtcclxuXHRcdFx0XHR3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuYmFzZVVybCArIHJlZGlyZWN0VXJsO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5iYXNlVXJsICsgXCJsb2dpbi5odG1sXCI7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8v6K6+572uY29va2llXHJcblx0c2V0Q29va2llOiBmdW5jdGlvbihvYmpOYW1lLCBvYmpWYWx1ZSwgb2JqSG91cnMpIHtcclxuXHRcdHZhciBzdHIgPSBvYmpOYW1lICsgXCI9XCIgKyBlc2NhcGUob2JqVmFsdWUpO1xyXG5cclxuXHRcdGlmIChvYmpIb3VycyA+IDApIHsgLy/kuLow5pe25LiN6K6+5a6a6L+H5pyf5pe26Ze077yM5rWP6KeI5Zmo5YWz6Zet5pe2Y29va2ll6Ieq5Yqo5raI5aSxXHJcblx0XHRcdHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuXHRcdFx0dmFyIG1zID0gb2JqSG91cnMgKiAzNjAwICogMTAwMDtcclxuXHRcdFx0ZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpICsgbXMpO1xyXG5cdFx0XHRzdHIgKz0gXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCkgKyBcIjtwYXRoPS9cIjtcclxuXHRcdH1cclxuXHRcdGRvY3VtZW50LmNvb2tpZSA9IHN0cjtcclxuXHR9LFxyXG5cdC8v6I635Y+WY29va2llXHJcblx0Z2V0Q29va2llOiBmdW5jdGlvbihvYmpOYW1lKSB7IC8v6I635Y+W5oyH5a6a5ZCN56ew55qEY29va2ll55qE5YC8XHJcblx0XHR2YXIgYXJyU3RyID0gZG9jdW1lbnQuY29va2llLnNwbGl0KFwiOyBcIik7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFyclN0ci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgdGVtcCA9IGFyclN0cltpXS5zcGxpdChcIj1cIik7XHJcblx0XHRcdGlmICh0ZW1wWzBdID09IG9iak5hbWUpIHtcclxuXHRcdFx0XHRyZXR1cm4gdW5lc2NhcGUodGVtcFsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9LFxyXG5cdC8vIGh0bWzovaznoIFcclxuXHRodG1sRW5jb2RlOiBmdW5jdGlvbihzKSB7XHJcblx0XHR2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRkaXYuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocykpO1xyXG5cdFx0cmV0dXJuIGRpdi5pbm5lckhUTUw7XHJcblx0fSxcclxuXHQvLyBodG1s6Kej56CBXHJcblx0aHRtbGRlY29kZTogZnVuY3Rpb24ocykge1xyXG5cdFx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0ZGl2LmlubmVySFRNTCA9IHM7XHJcblx0XHRyZXR1cm4gZGl2LmlubmVyVGV4dCB8fCBkaXYudGV4dENvbnRlbnQ7XHJcblx0fVxyXG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2RlcC91dGlsL3V0aWwuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDIgMyA0IDVcbiAqKi8iLCJ2YXIgdXRpbCA9IHJlcXVpcmUoXCIuLi9kZXAvdXRpbC91dGlsXCIpO1xyXG4kKGZ1bmN0aW9uKCkge1xyXG5cclxuXHQkKFwiLmJ0bmxvZ2luXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIHVuYW1lID0gJChcIiN1bmFtZVwiKS52YWwoKTtcclxuXHRcdHZhciB1cHdkID0gJChcIiN1cHdkXCIpLnZhbCgpO1xyXG5cclxuXHRcdGlmICh1bmFtZSA9PSAndGVzdCcgJiYgdXB3ZCA9PSAnMTIzNDU2Jykge1xyXG5cdFx0XHQvL2FsZXJ0KCfnmbvlvZXmiJDlip8nKTtcclxuXHRcdFx0dXRpbC5zZXRDb29raWUoXCJ1bmFtZVwiLHVuYW1lKTtcclxuXHRcdFx0dXRpbC5zZXRDb29raWUoXCJzdHlsZVwiLDEpO1xyXG5cdFx0XHR1dGlsLnJlZGlyZWN0VXJsKCdpbmRleC5odG1sJywgJ2xvZ2luLmh0bWwnKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICh1bmFtZSA9PSAndGVzdDEnICYmIHVwd2QgPT0gJzEyMzQ1NicpIHtcclxuXHRcdFx0XHQvL2FsZXJ0KCfnmbvlvZXmiJDlip8nKTtcclxuXHRcdFx0XHR1dGlsLnNldENvb2tpZShcInVuYW1lXCIsdW5hbWUpO1xyXG5cdFx0XHRcdHV0aWwuc2V0Q29va2llKFwic3R5bGVcIiwyKTtcclxuXHRcdFx0XHR1dGlsLnJlZGlyZWN0VXJsKCdpbmRleC5odG1sJywgJ2xvZ2luLmh0bWwnKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0YWxlcnQoJ+eUqOaIt+WQjeWvhueggemUmeivrycpO1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0fSlcclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL2pzL2xvZ2luLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gNVxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=