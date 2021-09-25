// "figure" from document "js/set_default_figure_size.js"

let getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};

let change_figure_color = () => {
    let red = getRandomInt(255);
    let green = getRandomInt(255);
    let blue = getRandomInt(255);
    figure.style.backgroundColor = `rgb(${red},${green},${blue})`;
};