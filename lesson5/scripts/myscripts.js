function addButton() {
    function addChapter() {
        let list = document.querySelector('#list');
        let input = document.querySelector('#favchap');
        let item = document.createElement('li');
        let button = document.createElement('button');

        item.innerText = input.value;

        button.innerText = 'X';

        button.addEventListener('click', x => {button.parentElement.remove()});

        item.appendChild(button);

        list.appendChild(item);

        input.value = ' ';

        input.focus();
    }
    document.querySelector('button').addEventListener('click', addChapter)
}
function init() {
    addButton();
}

window.addEventListener('DOMContentLoaded', init);
/*document.getElementById('modify').innerHTML = document.lastModified
document.getElementById('year').innerHTML = date().getFullYear()*/