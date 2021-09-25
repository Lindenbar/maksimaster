let create_comment = (targetId, name, text, date) => {
    let target = document.getElementById(targetId);
    let commentDiv = document.createElement('div');
    let nameDiv = document.createElement('div');
    let textDiv = document.createElement('div');
    let dateDiv = document.createElement('div');

    commentDiv.setAttribute('class', 'commBox');
    nameDiv.setAttribute('class', 'nameBox');
    textDiv.setAttribute('class', 'textBox');
    dateDiv.setAttribute('class', 'dateBox');

    nameDiv.innerHTML = name;
    textDiv.innerHTML = text;
    dateDiv.innerHTML = date;

    commentDiv.append(dateDiv, nameDiv, textDiv);
    target.append(commentDiv);
};