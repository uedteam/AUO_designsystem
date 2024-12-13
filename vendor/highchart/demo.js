//圖表變數
var _Color = [
    '#005087',
    '#b491d7',
    '#87dc64',
    '#b491d7',
    '#64dcf0',
    '#ffe664',
    '#d84400',
    '#009e7a',
    '#2e3c56',
    '#754a28',
];
//

//
Highcharts.chart('basic_column_01', {
    chart: {
        zooming: {
            type: 'xy',
        },
    },
    title: {
        text: 'Chart Title',
        align: 'left',
    },
    credits: {
        text: 'description',
    },
    xAxis: [
        {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true,
        },
    ],
    yAxis: [
        {
            // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[1],
                },
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[1],
                },
            },
        },
        {
            // Secondary yAxis
            title: {
                text: 'Precipitation',
                style: {
                    color: Highcharts.getOptions().colors[0],
                },
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0],
                },
            },
            opposite: true,
        },
    ],
    tooltip: {
        shared: true,
    },
    legend: {
        align: 'left',
        verticalAlign: 'top',
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)',
    },
    series: [
        {
            name: 'Precipitation',
            type: 'column',
            yAxis: 1,
            data: [45.7, 37.0, 28.9, 17.1, 39.2, 18.9, 90.2, 78.5, 74.6, 18.7, 17.1, 16.0],
            tooltip: {
                valueSuffix: ' mm',
            },
        },
        {
            name: 'Temperature',
            type: 'spline',
            data: [-11.4, -9.5, -14.2, 0.2, 7.0, 12.1, 13.5, 13.6, 8.2, -2.8, -12.0, -15.5],
            tooltip: {
                valueSuffix: '°C',
            },
        },
    ],
});
//
Highcharts.chart('basic_column_02', {
    chart: {
        zooming: {
            type: 'xy',
        },
    },
    title: {
        text: 'Chart Title',
        align: 'left',
    },
    subtitle: {
        text: 'Source: WorldClimate.com',
        align: 'left',
    },
    xAxis: [
        {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            crosshair: true,
        },
    ],
    yAxis: [
        {
            // Primary yAxis
            labels: {
                format: '{value}°C',
                style: {
                    color: Highcharts.getOptions().colors[2],
                },
            },
            title: {
                text: 'Temperature',
                style: {
                    color: Highcharts.getOptions().colors[2],
                },
            },
            opposite: true,
        },
        {
            // Secondary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Rainfall',
                style: {
                    color: Highcharts.getOptions().colors[0],
                },
            },
            labels: {
                format: '{value} mm',
                style: {
                    color: Highcharts.getOptions().colors[0],
                },
            },
        },
        {
            // Tertiary yAxis
            gridLineWidth: 0,
            title: {
                text: 'Sea-Level Pressure',
                style: {
                    color: Highcharts.getOptions().colors[1],
                },
            },
            labels: {
                format: '{value} mb',
                style: {
                    color: Highcharts.getOptions().colors[1],
                },
            },
            opposite: true,
        },
    ],
    tooltip: {
        shared: true,
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        x: 80,
        verticalAlign: 'top',
        y: 55,
        floating: true,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || // theme
            'rgba(255,255,255,0.25)',
    },
    series: [
        {
            name: 'Rainfall',
            type: 'column',
            yAxis: 1,
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            tooltip: {
                valueSuffix: ' mm',
            },
        },
        {
            name: 'Sea-Level Pressure',
            type: 'spline',
            yAxis: 2,
            data: [1016, 1016, 1015.9, 1015.5, 1012.3, 1009.5, 1009.6, 1010.2, 1013.1, 1016.9, 1018.2, 1016.7],
            marker: {
                enabled: false,
            },
            dashStyle: 'shortdot',
            tooltip: {
                valueSuffix: ' mb',
            },
        },
        {
            name: 'Temperature',
            type: 'spline',
            data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6],
            tooltip: {
                valueSuffix: ' °C',
            },
        },
    ],
    responsive: {
        rules: [
            {
                condition: {
                    maxWidth: 500,
                },
                chartOptions: {
                    legend: {
                        floating: false,
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom',
                        x: 0,
                        y: 0,
                    },
                    yAxis: [
                        {
                            labels: {
                                align: 'right',
                                x: 0,
                                y: -6,
                            },
                            showLastLabel: false,
                        },
                        {
                            labels: {
                                align: 'left',
                                x: 0,
                                y: -6,
                            },
                            showLastLabel: false,
                        },
                        {
                            visible: false,
                        },
                    ],
                },
            },
        ],
    },
});

//
Highcharts.chart('basic_column_03', {
    title: {
        text: 'Chart Title',
        align: 'left',
    },
    xAxis: {
        categories: ['Jet fuel', 'Duty-free diesel', 'Petrol', 'Diesel', 'Gas oil'],
    },
    yAxis: {
        title: {
            text: 'Million liters',
        },
    },
    tooltip: {
        valueSuffix: ' million liters',
    },
    plotOptions: {
        series: {
            borderRadius: '25%',
        },
    },
    series: [
        {
            type: 'column',
            name: '2020',
            data: [59, 83, 65, 228, 184],
        },
        {
            type: 'column',
            name: '2021',
            data: [24, 79, 72, 240, 167],
        },
        {
            type: 'column',
            name: '2022',
            data: [58, 88, 75, 250, 176],
        },
        {
            type: 'line',
            step: 'center',
            name: 'Average',
            data: [47, 83.33, 70.66, 239.33, 175.66],
            marker: {
                lineWidth: 2,
                lineColor: Highcharts.getOptions().colors[3],
                fillColor: 'white',
            },
        },
        {
            type: 'pie',
            name: 'Total',
            data: [
                {
                    name: '2020',
                    y: 619,
                    color: Highcharts.getOptions().colors[0], // 2020 color
                    dataLabels: {
                        enabled: true,
                        distance: -50,
                        format: '{point.total} M',
                        style: {
                            fontSize: '15px',
                        },
                    },
                },
                {
                    name: '2021',
                    y: 586,
                    color: Highcharts.getOptions().colors[1], // 2021 color
                },
                {
                    name: '2022',
                    y: 647,
                    color: Highcharts.getOptions().colors[2], // 2022 color
                },
            ],
            center: [75, 65],
            size: 100,
            innerSize: '70%',
            showInLegend: false,
            dataLabels: {
                enabled: false,
            },
        },
    ],
});
Highcharts.chart('container', {
    chart: {
        type: 'bar',
    },
    title: {
        text: 'Historic World Population by Region',
        align: 'left',
    },
    subtitle: {
        text:
            'Source: <a ' +
            'href="https://en.wikipedia.org/wiki/List_of_continents_and_continental_subregions_by_population"' +
            'target="_blank">Wikipedia.org</a>',
        align: 'left',
    },
    xAxis: {
        categories: ['Africa', 'America', 'Asia', 'Europe'],
        title: {
            text: null,
        },
        gridLineWidth: 1,
        lineWidth: 0,
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Population (millions)',
            align: 'high',
        },
        labels: {
            overflow: 'justify',
        },
        gridLineWidth: 0,
    },
    tooltip: {
        valueSuffix: ' millions',
    },
    plotOptions: {
        bar: {
            borderRadius: '50%',
            dataLabels: {
                enabled: true,
            },
            groupPadding: 0.1,
        },
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'top',
        x: -40,
        y: 80,
        floating: true,
        borderWidth: 1,
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
        shadow: true,
    },
    credits: {
        enabled: false,
    },
    series: [
        {
            name: 'Year 1990',
            data: [632, 727, 3202, 721],
        },
        {
            name: 'Year 2000',
            data: [814, 841, 3714, 726],
        },
        {
            name: 'Year 2021',
            data: [1393, 1031, 4695, 745],
        },
    ],
});
