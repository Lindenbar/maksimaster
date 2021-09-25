let requests_count = 0;
let bad_requests_count = 0;
let bad_requests_percent = 0;

let count_requests = (response) => {
    requests_count++;
    document.getElementById('requests').innerHTML = '' + requests_count;
    if (response.status > 399) {
        bad_requests_count++;
    }
    bad_requests_percent = 100 / requests_count * bad_requests_count;
    document.getElementById('bad_requests').innerHTML = Math.round(bad_requests_percent) + '%';
}
