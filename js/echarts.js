$(function () {

    prdGroup();
    orderAnalysis();

    function prdGroup() {
        var myChart = echarts.init(document.getElementById('chart1'));
   
        option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                top: 'middle',
                left: '3%',
                right: '4%',
                bottom: '3%',
                top: '10%',
                containLabel: true
            },
            legend: {
                data: ['订单量', '累计', '累计2'],
                textStyle: {
                    color: "#fff"
                }

            },
            xAxis: [{
                type: 'category',
                data: ['Loc3-5W', 'Loc3-10W', 'Loc3-Pro Rx', 'Loc3-DM Rx', 'Loc3-ML Rx','Loc3-9800 Rx','Loc3-CAM Rx'],
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: "#ebf8ac" //X轴文字颜色
                        // width:%
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                    }
                },
            }],
            yAxis: [{
                type: 'value',
                name: '数量',
                axisLabel: {
                    formatter: '{value} 个',
                    textStyle: {
                        color: "#2EC7C9" //X轴文字颜色
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: '#01FCE3'
                    }
                },
            },
                {
                    type: 'value',
                    name: '占比',
                    axisLabel: {
                        formatter: '{value} %',
                        textStyle: {
                            color: "#2EC7C9" //X轴文字颜色
                        }
                    },axisLine: {
                        lineStyle: {
                            color: '#01FCE3'
                        }
                    },
                }
            ],
            
            series: [

                {
                    name: '订单数',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#00FFE3"
                            },
                                {
                                    offset: 1,
                                    color: "#4693EC"
                                }
                            ])
                        }
                    },
                    /*data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]*/
                    data: [26.4, 28.7, 70.7, 75.6, 82.2, 76.7, 135.6, 162.2, 32.6 ],
                },
                {
                    name: '占比',
                    type: 'bar',
                    itemStyle: {
                        normal: {
                            barBorderRadius: 5,
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "#C1B2EA"
                            },
                                {
                                    offset: 1,
                                    color: "#8362C6"
                                }
                            ])
                        }
                    },
                    data: [26.4, 28.7, 70.7, 75.6, 82.2,76.7, 135.6, 162.2, 32.6],
                },
                {
                    name: '累计',
                    type: 'line',
                    yAxisIndex: 1,
                    data: [26.4, 28.7, 70.7, 75.6, 82.2,76.7, 135.6, 162.2, 32.6],
                    lineStyle: {
                        normal: {
                            width: 5,
                            color: {
                                type: 'linear',

                                colorStops: [{
                                    offset: 0,
                                    color: '#AAF487' // 0% 处的颜色
                                },
                                    {
                                        offset: 0.4,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }, {
                                        offset: 1,
                                        color: '#47D8BE' // 100% 处的颜色
                                    }
                                ],
                                globalCoord: false // 缺省为 false
                            },
                            shadowColor: 'rgba(71,216,190, 0.5)',
                            shadowBlur: 10,
                            shadowOffsetY: 7
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#AAF487',
                            borderWidth: 10,
                            /*shadowColor: 'rgba(72,216,191, 0.3)',
                             shadowBlur: 100,*/
                            borderColor: "#AAF487"
                        }
                    },
                    smooth: true,
                },
               
            ],
            dataZoom:
                {
                    show:false,
                    realtime:true,
                    type:'slider',
                    height:20,
                    start:20,
                    end:80
                    
                }
               
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

    function orderAnalysis() {
        var myChart = echarts.init(document.getElementById('chart3'));

        option = {
            /*backgroundColor: '#000',*/
            "animation": true,
            "title": {
                /*"text": 24,*/
               /* "subtext": "沥青工",*/
                "x": "center",
                "y": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 10,
                    "fontWeight": "normal",
                    "align": "center",
                    "width": "200px"
                },
                "subtextStyle": {
                    "color": "#fff",
                    "fontSize": 12,
                    "fontWeight": "normal",
                    "align": "center"
                }
            },
            "legend": {
                "width": "40%",
                "left": "center",
                "textStyle": {
                    "color": "#fff",
                    "fontSize": 12
                },
                "icon": "circle",
                "right": "0",
                "bottom": "0",
                "padding": [70, 20],
                "itemGap": 5,
                "data": ["Loc3-Pro Rx", "vCam-5", "Spare PartsC", "vScan Tx","Loc3-10W" ]
            },
            "series": [{
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["20%", "43%"],
                "color": ["#FEE449", "#00FFFF", "#00FFA8", "#9F17FF", "#FFE400", "#F76F01", "#01A4F7", "#FE2C8A"],
                "startAngle": 135,
                "labelLine": {
                    "normal": {
                        "length": 15
                    }
                },
                "label": {
                    "normal": {
                        "formatter": "{b|{b}:}  {per|{d}%} ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 12,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#b3e5ff",
                                "fontSize": 16,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 8],
                                "borderRadius": 2
                            }
                        },
                        "textStyle": {
                            "color": "#fff",
                            "fontSize": 16
                        }
                    }
                },
                "emphasis": {
                    "label": {
                        "show": true,
                        "formatter": "{b|{b}:}  {per|{d}%}  ",
                        "backgroundColor": "rgba(255, 147, 38, 0)",
                        "borderColor": "transparent",
                        "borderRadius": 4,
                        "rich": {
                            "a": {
                                "color": "#999",
                                "lineHeight": 22,
                                "align": "center"
                            },
                            "hr": {
                                "borderColor": "#aaa",
                                "width": "100%",
                                "borderWidth": 1,
                                "height": 0
                            },
                            "b": {
                                "color": "#fff",
                                "fontSize": 14,
                                "lineHeight": 33
                            },
                            "c": {
                                "fontSize": 14,
                                "color": "#eee"
                            },
                            "per": {
                                "color": "#FDF44E",
                                "fontSize": 14,
                                "padding": [5, 6],
                                "borderRadius": 2
                            }
                        }
                    }
                },
                "data": [{
                    "name": "Loc3-Pro Rx",
                    "value": 3
                }, {
                    "name": "vCam-5",
                    "value": 2
                }, {
                    "name": "Spare Parts",
                    "value": 26
                }, {
                    "name": "vScan Tx",
                    "value": 24
                }]
            }, {
                "type": "pie",
                "center": ["50%", "40%"],
                "radius": ["15%", "14%"],
                "label": {
                    "show": false
                },
                "data": [{
                    "value": 78,
                    "name": "实例1",
                    "itemStyle": {
                        "normal": {
                            "color": {
                                "x": 0,
                                "y": 0,
                                "x2": 1,
                                "y2": 0,
                                "type": "linear",
                                "global": false,
                                "colorStops": [{
                                    "offset": 0,
                                    "color": "#9F17FF"
                                }, {
                                    "offset": 0.2,
                                    "color": "#01A4F7"
                                }, {
                                    "offset": 0.5,
                                    "color": "#FE2C8A"
                                }, {
                                    "offset": 0.8,
                                    "color": "#FEE449"
                                }, {
                                    "offset": 1,
                                    "color": "#00FFA8"
                                }]
                            }
                        }
                    }
                }]
            }]
        }

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }




});