let cpu_used = chart.data.datasets[0].data[0];
let cpu_free = chart.data.datasets[0].data[1];

setInterval(async () => {
    let response = await fetch('http://exercise.develop.maximaster.ru/service/cpu/');
    let json = await response.json();
    count_requests(response);
    if (json !== 0) {
        cpu_used = json;
        cpu_free = 100 - cpu_used;
        chart.data.datasets[0].data[0] = cpu_used;
        chart.data.datasets[0].data[1] = cpu_free;
        chart.data.labels[0] = 'Загруженность процессора ' + cpu_used + '%';
        chart.data.labels[1] = 'Ресурсов свободно ' + cpu_free + '%';
        chart.update();
    }
}, 5000);