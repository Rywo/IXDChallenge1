var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ["Vis", "Vlees", "Groente", "Aardappelen"],
        datasets: [{
            label: "Voorraden voedsel",
            backgroundColor: ['rgb(174, 214, 241)', 'rgb(93, 173, 226)', 'rgb(52, 152, 219)','rgb(33, 97, 140)'],
            borderColor: ['rgb(127, 179, 213)', 'rgb(41, 128, 185)', 'rgb(36, 113, 163)', 'rgb(21, 67, 96)'],
            data: [45, 30, 20, 33],
        }]
    },

    // Configuration options go here
    options: {}
});
