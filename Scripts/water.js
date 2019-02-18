var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: [ "tank in liters", "brandstof nu"],
        datasets: [{
            label: [""],
            backgroundColor: ['rgb(174, 214, 241)', 'rgb(33, 97, 140)'],
            borderColor: 'rgb(54, 189, 218)',
            data: ['2000000', '900000',],
        }]
    },

    // Configuration options go here
    options: {
                scales: {
                    yAxes: [{
                            display: true,
                            ticks: {
                                beginAtZero: true,
                                steps: 10,
                                stepValue: 5,
                                max: 2000000
                            }
                        }]
                },
                legend: {
                    display: false
                },
            }
});
