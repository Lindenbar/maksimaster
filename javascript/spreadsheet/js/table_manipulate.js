let createColumn = () => {
    const spreadsheet = $('#spreadsheet tbody');

    spreadsheet.find('tr').each((index, row) => {
        row.innerHTML += `<td>
                            <input type="text" readonly>
                          </td>`;
    });
};

let deleteColumn = () => {
    const spreadsheet = $('#spreadsheet tbody');
    const columnsCount = spreadsheet.find('tr:first td').length;
    const rows = spreadsheet.find('tr');
    let isEmpty = true;

    if (columnsCount > 1) {
        //Проверка на значения в столбце
        rows.each((index, row) => {
            if (row.lastElementChild.lastElementChild.value.length > 0) {
                isEmpty = false;
                return false;
            }
        });

        if (isEmpty) {
            rows.each((index, row) => {
                row.lastElementChild.remove();
            });
        } else {
            if (confirm('Подтвердите удаление столбца')) {
                rows.each((index, row) => {
                    row.lastElementChild.remove();
                });
            }
        }
    }
};

let createRow = () => {
    const spreadsheet = $('#spreadsheet tbody');
    const newRow = $('<tr></tr>');

    spreadsheet.find('tr:first td').each(() => {
        newRow.append('<td><input type="text" readonly></td>');
    });
    spreadsheet.append(newRow)
    $('.horizontal_center .btns_box').attr('oneRowAction', '');
};

let deleteRow = () => {
    const spreadsheet = $('#spreadsheet tbody');
    const rowsCount = spreadsheet.find('tr').length;
    const lastRow = spreadsheet.find('tr:last');
    let isEmpty = true;

    if (rowsCount > 1) {
        //Проверка на значения в строке
        lastRow.find('td input').each((index, input) => {
            if (input.value.length > 0) {
                isEmpty = false;
                return false;
            }
        });

        if (isEmpty) {
            lastRow.remove();
        } else {
            if (confirm('Подтвердите удаление строки')) {
                lastRow.remove();
            }
        }
    }
    if (rowsCount === 2) {
        $('.horizontal_center .btns_box').removeAttr('oneRowAction');
    }
};

let setInputsActions = () => {
    $('#spreadsheet input').each((index, input) => {
        input.ondblclick = () => {
            input.removeAttribute('readonly');
        }
        input.onblur = () => {
            input.setAttribute('value', input.value);
            input.setAttribute('readonly', '');
        }
    });
};