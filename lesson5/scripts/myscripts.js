
    function addChapter() {
        let input = document.querySelector('#favchap');
        
        if (input.value.trim() === '') {
            alert("Empty text box");
        }
        else {
            let list = document.querySelector('#list');
            
            let item = document.createElement('li');
            let button = document.createElement('button');

            item.innerText = input.value;

            button.innerText = 'x';

            button.addEventListener('click', x => {button.parentElement.remove()});

            item.appendChild(button);

            list.appendChild(item);

            input.value = ' ';

            input.focus();
        }

        }// End of a chapter
        
        document.querySelector('button').addEventListener('click', addChapter)




/*------------------------Footer----------------------*/
var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("currentdate").textContent = dateTime;