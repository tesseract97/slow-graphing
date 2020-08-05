requirejs.config({
    "baseUrl": "js",
    "paths": {
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min",
        "middle": "./middle",
        "slow": "./slow_control",
        //"pouchdb": "../node_modules/pouchdb",
        //"pouchdbA": "../node_modules/pouchdb-authentication"
    }
});

requirejs(["jquery", "slow", "middle"],
    $(function(middle, slow) {


    Highcharts.chart('container', {

        chart: {

            type: 'line'

        },

        title: {

            text: 'Climate Data for the West Island'

        },

        xAxis: {

            categories:  [ '1992-01-08 00:00:00',
                '1992-01-09 00:00:00',
                '1992-01-10 00:00:00',
                '1992-01-11 00:00:00',
                '1992-01-12 00:00:00',
                '1992-01-13 00:00:00',
                '1992-01-14 00:00:00',
                '1992-01-15 00:00:00',
                '1992-01-16 00:00:00',
                '1992-01-17 00:00:00',
                '1992-01-18 00:00:00',
                '1992-01-19 00:00:00',
                '1992-01-20 00:00:00',
                '1992-01-21 00:00:00',
                '1992-01-22 00:00:00',
                '1992-01-23 00:00:00',
                '1992-01-24 00:00:00',
                '1992-01-25 00:00:00',
                '1992-01-26 00:00:00',
                '1992-01-27 00:00:00',
                '1992-01-28 00:00:00',
                '1992-01-29 00:00:00',
                '1992-01-30 00:00:00',
                '1992-01-31 00:00:00',
                '1992-02-01 00:00:00',
                '1992-02-02 00:00:00',
                '1992-02-03 00:00:00',
                '1992-02-04 00:00:00',
                '1992-02-05 00:00:00',
                '1992-02-06 00:00:00',
                '1992-02-07 00:00:00',
                '1992-02-08 00:00:00',
                '1992-02-09 00:00:00',
                '1992-02-10 00:00:00',
                '1992-02-11 00:00:00',
                '1992-02-12 00:00:00',
                '1992-02-13 00:00:00',
                '1992-02-14 00:00:00',
                '1992-02-15 00:00:00',
                '1992-02-16 00:00:00',
                '1992-02-17 00:00:00',
                '1992-02-18 00:00:00',
                '1992-02-19 00:00:00',
                '1992-02-20 00:00:00',
                '1992-02-21 00:00:00',
                '1992-02-22 00:00:00',
                '1992-02-23 00:00:00',
                '1992-02-24 00:00:00',
                '1992-02-25 00:00:00',
                '1992-02-26 00:00:00',
                '1992-02-27 00:00:00',
                '1992-02-28 00:00:00',
                '1992-02-29 00:00:00',
                '1992-03-01 00:00:00',
                '1992-03-02 00:00:00',
                '1992-03-03 00:00:00',
                '1992-03-04 00:00:00',
                '1992-03-05 00:00:00',
                '1992-03-06 00:00:00',
                '1992-03-07 00:00:00',
                '1992-03-08 00:00:00',
                '1992-03-09 00:00:00',
                '1992-03-10 00:00:00',
                '1992-03-11 00:00:00',
                '1992-03-12 00:00:00',
                '1992-03-13 00:00:00',
                '1992-03-14 00:00:00',
                '1992-03-15 00:00:00',
                '1992-03-16 00:00:00',
                '1992-03-17 00:00:00',
                '1992-03-18 00:00:00',
                '1992-03-19 00:00:00',
                '1992-03-20 00:00:00',
                '1992-03-21 00:00:00',
                '1992-03-22 00:00:00',
                '1992-03-23 00:00:00',
                '1992-03-24 00:00:00',
                '1992-03-25 00:00:00',
                '1992-03-26 00:00:00',
                '1992-03-27 00:00:00',
                '1992-03-28 00:00:00',
                '1992-03-29 00:00:00',
                '1992-03-30 00:00:00',
                '1992-03-31 00:00:00',
                '1992-04-01 00:00:00',
                '1992-04-02 00:00:00',
                '1992-04-03 00:00:00',
                '1992-04-04 00:00:00',
                '1992-04-05 00:00:00',
                '1992-04-06 00:00:00',
                '1992-04-07 00:00:00',
                '1992-04-08 00:00:00' ]

        },

        yAxis: {

            title: {

                text: 'Temperature (Degrees Celsius)'

            }

        },

        series: [{

            name: 'Mean Temperature',

            data: [ -9.8,
                -8,
                -6.5,
                -13.5,
                -16.3,
                -6,
                1,
                -21,
                -24.8,
                -20.3,
                -17,
                -20,
                -16.5,
                -15.3,
                -14.3,
                -7.5,
                -5.3,
                -21.5,
                -17,
                -16.5,
                -10.8,
                -6.5,
                -0.5,
                -4.8,
                -10.3,
                -15,
                -12.8,
                -11.8,
                -9.8,
                -17,
                -9.8,
                -5.8,
                -18.5,
                -16.8,
                -6.8,
                -22.3,
                -15.5,
                -6,
                -6.8,
                -4.8,
                -2.8,
                -2.5,
                -0.3,
                -2.3,
                -5,
                -9,
                -6.5,
                -10.3,
                -6.5,
                -3.3,
                -1,
                -15,
                -16,
                -16.3,
                -17.8,
                -9.8,
                -9.3,
                -5.5,
                -2.8,
                0,
                2,
                2,
                4.5,
                -3,
                -13.8,
                -13.8,
                -13.5,
                -13,
                -8.5,
                -2.3,
                -9.5,
                -8.3,
                -7.5,
                -7.8,
                -11.3,
                -8,
                -7.3,
                -3.3,
                4.3,
                6.5,
                1,
                0.8,
                2,
                3.8,
                0,
                0.3,
                0.3,
                1,
                2.3,
                2.5,
                5.5,
                4.5 ]

        }]

    });

}));

