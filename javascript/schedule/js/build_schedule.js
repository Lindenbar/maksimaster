let ctx = document.getElementById('myChart').getContext('2d');
let chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Загруженность процессора 0%', 'Ресурсов свободно 100%'],
        datasets: [{
            backgroundColor: ['rgb(138, 43, 226)', "rgb(204, 204, 204)"],
            data: [0,100],
        }]
    },
    options: {
        plugins: {
            tooltip: false,
        },
    }
});