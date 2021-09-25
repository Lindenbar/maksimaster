let price_sort = (price) => {
    let input_min_price = document.getElementById('min_price');
    let input_max_price = document.getElementById('max_price');
    if (input_min_price.value === '' || input_min_price.value < 0) {
        input_min_price.value = 0;
    }
    if (input_max_price.value === '' || input_max_price.value < 0) {
        input_max_price.value = 0;
    }
    return price >= input_min_price.value && price <= input_max_price.value || price >= input_min_price.value && input_max_price.value == 0;
};