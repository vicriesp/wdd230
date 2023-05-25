/*document.querySelector("Button").disabled=true;*/

function addButton() {
    let input = document.querySelector('#favchap');

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
    
    
        document.querySelector('button').addEventListener('click', false)
    
    
        

    

    
}
function init() {
    addButton();
    
}

window.addEventListener('DOMContentLoaded', init);

/*------------------------Footer----------------------*/
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("currentdate").textContent = dateTime;