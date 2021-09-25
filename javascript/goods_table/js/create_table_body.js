async function create_table_body() {
    let json = await getJson('http://exercise.develop.maximaster.ru/service/products/');
    let tbody = document.getElementById('tbody');
    let tableHead = document.getElementById('table_head');
    tbody.innerHTML = '';
    tableHead.style.display = 'table-row';
    json.forEach((el, i) => {
        if (price_sort(el.price)) {
            tbody.innerHTML += `<tr>
                                   <td>${++i}</td> 
                                   <td>${el.name}</td>
                                   <td>${el.quantity}</td>
                                   <td>${el.price}</td>
                                   <td>${el.price * el.quantity}</td>
                               </tr>`
        }
    });
    if (tbody.innerHTML.length === 0) {
        tableHead.style.display = 'none';
        tbody.innerHTML += 'Нет данных, попадающих под условие фильтра';
    }
}

create_table_body();