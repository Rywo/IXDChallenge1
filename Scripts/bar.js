var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ["31/05", "01/06", "02/06", "03/06", "04/06", "05/06", "06/06"],
        datasets: [{
            label: "In kilometers x 100.000",
            borderColor: 'rgb(41, 128, 185)',
            backgroundColor: 'rgb(174, 214, 241)',
            data: [43, 50, 55, 61, 67, 72, 79],
        }]
    },

    // Configuration options go here
    options: {}
});
