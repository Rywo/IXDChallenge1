var ctx = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Mannen", "Vrouwen"],
        datasets: [{
            label: "Aantal bemanning aan boord",
            backgroundColor: ['rgb(174, 214, 241)','rgb(33, 97, 140)'],
            borderColor: ['rgb(127, 179, 213)'],
            data: [48, 56],
        }]
    },

    // Configuration options go here
    options: {}
});
