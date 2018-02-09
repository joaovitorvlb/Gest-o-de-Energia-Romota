//-------------------------------------------------------------------------------------
// -------------Criando do grafico de spline dinamico
//-------------------------------------------------------------------------------------

var chartingOptions = {
    chart: {
        renderTo: 'container-grafico-dinamico',
        type: 'spline',
              animation: Highcharts.svg,
    },
    xAxis: {
              tickAmount: 10,
              type: 'datetime',
              tickPixelInterval: 150


          },
          tooltip: {
              formatter: function () {
                  return '<b>' + this.series.name + '</b><br/>' +
                      Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                      Highcharts.numberFormat(this.y, 2);
              }
          },
    series: [{
        name: 'Tensao do Barramento',
        data: []

      },
      {
        name: 'Corrente consumida',
        data: []

      },
      {
        name: 'Temperatura',
        data: []

      }]

};
var chart = new Highcharts.Chart(chartingOptions);
//----------------------------------------------------------------------------------------
// ---------Fim do primeiro grafico
//----------------------------------------------------------------------------------------


//----------------------------------------------------------------------------------------
// ---------Criando do grafico de colunas
//----------------------------------------------------------------------------------------
var chartingOptions2 = {
 
            chart: {
                type: 'column',
                renderTo: 'container-grafico-colunas'
            },
            title: {
                text: 'Relatorio de Media diaria '
            },
            subtitle: {
                text: 'enargia captada nos ultimas 7 dias'
            },
            xAxis: {
            type: 'datetime'
                
            },
            
          tooltip: {
              formatter: function () {
                  return '<b>' + this.series.name + '</b><br/>' +
                      Highcharts.dateFormat('%Y-%m-%d %H:%M:%S', this.x) + '<br/>' +
                      Highcharts.numberFormat(this.y, 2);
              }
          },
            yAxis: {
                min: 0,
                title: {
                    text: 'Potencia (W)'
                }
            },
            
            plotOptions: {
                column: {
                    pointPadding: 0.2,
                    borderWidth: 0
                }
            },
            series: [{
                        name: 'Potencia (W)',
                        data: [ ]
            
                    }]
        };
var chart2 = new Highcharts.Chart(chartingOptions2);

//----------------------------------------------------------------------------------------
// ---------Criando o gauge 1
//----------------------------------------------------------------------------------------
var gauge1 = {

    chart: {
        type: 'gauge',
        renderTo:"test-gauge1",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Accel X'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ''
        }
    }]

};

var gauges1 = new Highcharts.Chart(gauge1);

//----------------------------------------------------------------------------------------
// ---------Criando o gauge 2
//----------------------------------------------------------------------------------------
var gauge2 = {

    chart: {
        type: 'gauge',
        renderTo:"test-gauge2",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Accel Y'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ''
        }
    }]

};
var gauges2 = new Highcharts.Chart(gauge2);


//----------------------------------------------------------------------------------------
// ---------Criando o gauge 3
//----------------------------------------------------------------------------------------
var gauge3 = {

    chart: {
        type: 'gauge',
        renderTo:"test-gauge3",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Accel Z'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ''
        }
    }]

};
var gauges3 = new Highcharts.Chart(gauge3);

//----------------------------------------------------------------------------------------
// ---------Criando o gauge 4
//----------------------------------------------------------------------------------------
var gauge4 = {

    chart: {
        type: 'gauge',
        renderTo:"container-gauge4",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Gyro X'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ''
        }
    }]

};

var gauges4 = new Highcharts.Chart(gauge4);

//----------------------------------------------------------------------------------------
// ---------Criando o gauge 5
//----------------------------------------------------------------------------------------
var gauge5 = {

    chart: {
        type: 'gauge',
        renderTo:"container-gauge5",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Gyro Y'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ''
        }
    }]

};
var gauges5 = new Highcharts.Chart(gauge5);


//----------------------------------------------------------------------------------------
// ---------Criando o gauge 6
//----------------------------------------------------------------------------------------
var gauge6 = {

    chart: {
        type: 'gauge',
        renderTo:"container-gauge6",
        plotBackgroundColor: null,
        plotBackgroundImage: null,
        plotBorderWidth: 0,
        plotShadow: false
    },

    title: {
        text: 'Gyro Z'
    },

    pane: {
        startAngle: -150,
        endAngle: 150,
        background: [{
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#FFF'],
                    [1, '#333']
                ]
            },
            borderWidth: 0,
            outerRadius: '109%'
        }, {
            backgroundColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                    [0, '#333'],
                    [1, '#FFF']
                ]
            },
            borderWidth: 1,
            outerRadius: '107%'
        }, {
            // default background
        }, {
            backgroundColor: '#DDD',
            borderWidth: 0,
            outerRadius: '105%',
            innerRadius: '103%'
        }]
    },

    // the value axis
    yAxis: {
        min: 0,
        max: 200,

        minorTickInterval: 'auto',
        minorTickWidth: 1,
        minorTickLength: 10,
        minorTickPosition: 'inside',
        minorTickColor: '#666',

        tickPixelInterval: 30,
        tickWidth: 2,
        tickPosition: 'inside',
        tickLength: 10,
        tickColor: '#666',
        labels: {
            step: 2,
            rotation: 'auto'
        },
        title: {
            text: 'km/h'
        },
        plotBands: [{
            from: 0,
            to: 120,
            color: '#55BF3B' // green
        }, {
            from: 120,
            to: 160,
            color: '#DDDF0D' // yellow
        }, {
            from: 160,
            to: 200,
            color: '#DF5353' // red
        }]
    },

    series: [{
        name: 'Speed',
        data: [80],
        tooltip: {
            valueSuffix: ''
        }
    }]

};
var gauges6 = new Highcharts.Chart(gauge6);



//----------------------------------------------------------------------------------------
// ---------Inicio dos eventos
//----------------------------------------------------------------------------------------
$('#button2').click(function() 
{

            chart2.series[0].setData([
                                        [ 1511411609545 ,5 ],
                                        [ 1511411625470 ,50],
                                        [ 1511411635870 ,3 ],
                                        [ 1511411646270 ,45],
                                        [ 1511411656695 ,56],
                                        [ 1511411661895 ,22]
                                      ]); //Atualiza colunas do grafic0
        });

$(document).ready(
        function()
        {
            $.get("/media/8",{},
            function(data)
            {
                var x1 = new Date(data[0][3].replace(' ', 'T')).getTime();
                var x2 = new Date(data[1][3].replace(' ', 'T')).getTime();
                var x3 = new Date(data[2][3].replace(' ', 'T')).getTime();
                var x4 = new Date(data[3][3].replace(' ', 'T')).getTime();
                var x5 = new Date(data[4][3].replace(' ', 'T')).getTime();
                var x6 = new Date(data[5][3].replace(' ', 'T')).getTime();
                var x7 = new Date(data[6][3].replace(' ', 'T')).getTime();
                var x8 = new Date(data[7][3].replace(' ', 'T')).getTime();

                var y1 = parseInt(data[0][3]);
                var y2 = parseInt(data[1][3]);
                var y3 = parseInt(data[2][3]);
                var y4 = parseInt(data[3][3]);
                var y5 = parseInt(data[4][3]);
                var y6 = parseInt(data[5][3]);
                var y7 = parseInt(data[6][3]);
                var y8 = parseInt(data[7][3]);

              
                chart2.series[0].setData([
                                            [ x1 , y1 ],
                                            [ x2 , y2 ],
                                            [ x3 , y3 ],
                                            [ x4 , y4 ],
                                            [ x5 , y5 ],
                                            [ x6 , y6 ],
                                            [ x7 , y7 ],
                                            [ x8 , y8 ]
                                          ]); //Atualiza colunas do grafic0
              });
        })


var teste = 6; 

function update_test_grafico() 
{
    $.get("/graficos/1",{},   //Solicita get ao servidor e aguarda a ultima lina do BD
        function(data)
        {
            var series = chart.series[0];

            Xt = new Date(data[0][5].replace(' ', 'T')).getTime();    //Converte de data para formato calendario Unix
            Y1 = parseInt(data[0][1]);        //Garante que os valores sejam inteiros
            Y2 = parseInt(data[0][2]);        //Garante que os valores sejam inteiros
            Y3 = parseInt(data[0][3]);        //Garante que os valores sejam inteiros

            chart.series[0].addPoint({x: Xt, y: Y1}, false);
            chart.series[1].addPoint({x: Xt, y: Y2}, false);
            chart.series[2].addPoint({x: Xt, y: Y3}, false);
            chart.redraw();

            if(series.data.length > 20)              //Se a quandidade de plotagens for maior que 20
            {
              chart.series[0].data[0].remove();      //Remove data 0 da plotagem 0
              chart.series[1].data[0].remove();      //Remove data 0 da plotagem 1
              chart.series[2].data[0].remove();      //Remove data 0 da plotagem 2
            }

            $('#test-str1').text(series.data.length);
            $('#test-str2').text(teste);
        });          
}

function update_20_grafico() 
{
    $.get("/graficos/20",{},
        function(data)
        {
          var tebela = new Array();
          tebela = data;
          $('#test-tabela').text(tebela[3][3]);


        });          
}



