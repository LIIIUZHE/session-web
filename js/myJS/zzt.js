var myChart = echarts.init(document.getElementById('zzt'));

			var option = {
    color: ['#455a64'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {           
            type: 'shadow'        
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    yAxis: [
        {
            type: 'category',
            data: ['用户1', '用户2', '用户3', '用户4', '用户5'],
            axisTick: {
                alignWithLabel: true
            }
        }
    ],
    xAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '会话数量',
            type: 'bar',
            barWidth: '60%',
            data: [10, 5, 8, 4, 3],
            label:{
            	show: true,
            	position: "right"
            }
        }
    ]
};

			myChart.setOption(option);