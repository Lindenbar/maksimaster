$('#my_form').submit(() => {
    let form = $('#my_form');
    let city = form.find('select').val();
    let weight = form.find('input').val();
    $.post(
        'delivery_calc.php',
        { 'choices[]': [city, weight]},
        function(msg) { // получен ответ сервера
            let response = msg.split('<!DOCTYPE html>')[0];
            let jsonResponse = JSON.parse(response);
            let result = $('#result');
            console.log(jsonResponse);
            if (jsonResponse.status === 'OK') {
                result.text(jsonResponse.message).css('color', 'black');
            } else {
                result.text(jsonResponse.message).css('color', 'red');
            }
            console.log(result);
        }
    );
    return false;
});