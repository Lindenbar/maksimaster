const saveToLocalStorage = () => {
    localStorage.setItem('spreadsheet', document.getElementById('spreadsheet').innerHTML);
};
const loadFromLocalStorage = () => {
    if (localStorage.getItem('spreadsheet') !== null) {
        document.getElementById('spreadsheet').innerHTML = localStorage.getItem('spreadsheet');
    }
};