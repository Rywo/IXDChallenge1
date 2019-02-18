var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: ["05:00", "08:00", "11:00", "14:00", "17:00", "20:00", "23:00", "nu"],
        datasets: [{
            label: "In km/s",
            backgroundColor: 'rgb(133, 193, 233)',
            borderColor: 'rgb(52, 152, 219)',
            data: [7.9, 7.7, 7.6, 8.4, 8.4, 7.9, 7.8, 7.9],
        }]
    },

    // Configuration options go here
    options: {}
});
