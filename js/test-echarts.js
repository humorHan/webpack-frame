/**
 * Created by humorHan on 2016/8/24.
 */
var echarts = require("../dep/echarts/echarts.js");
require('echarts/chart/bar');
// 引入提示框和标题组件
require('echarts/component/tooltip');
require('echarts/component/title');
var myChart = echarts.init(document.getElementById('test'));
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
/*var echarts = require('../dep/echarts.min.js');
var myChart = echarts.init(document.getElementById('test'));
myChart.setOption({
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data:['销量']
    },
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});*/
