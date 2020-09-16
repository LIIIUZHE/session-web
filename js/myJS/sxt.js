var myChart = echarts.init(document.getElementById('sxt'));

			// 指定图表的配置项和数据
			var option = {
				legend: {
					top: "50",
					
					left: "250",
					data: ["运行数量", "会话总量"]
				},
				series: [{
					type: "pie",
					data: [{
						value: 30,
						name: "会话总量"

					},{
						value: 12,
						name: "运行数量"
					}],
					radius:["0%","60%"],
					stillShowZeroSum: true,	
					right: "50%",
					top: "-20%",
					label: {
						color: "#F2F2F2",
						fontStyle: "normal",
						fontFamily: "sans-serif"
					},
					labelLine: {
						show: false
					},
					avoidLabelOverlap: true,
					legendHoverLink: true,
					animation: true,
					
					itemStyle: {
						normal:{
                                    color:function(params) {
                                    //自定义颜色
                                    var colorList = ['#455a64','#4caf50'];
                                        return colorList[params.dataIndex]
                                     }
                                }
					}
					
				}]
			}
			myChart.setOption(option);
			