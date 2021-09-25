loadFromLocalStorage();
setInputsActions();

document.getElementById('addColumnBtn').onclick = () => {
    createColumn();
    setInputsActions();
};

document.getElementById('removeColumnBtn').onclick = () => {
    deleteColumn();
    setInputsActions();
};

document.getElementById('addRowBtn').onclick = () => {
    createRow();
    setInputsActions();
};

document.getElementById('removeRowBtn').onclick = () => {
    deleteRow();
    setInputsActions();
};

window.onunload = () => {
    saveToLocalStorage();
};
