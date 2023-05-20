function toggleMenu() {
    document.getElementById('prim-nav').classList.toggle('open');
    document.getElementById('btn').classList.toggle('open');
}
const x = document.getElementById('btn');
x.onclick = toggleMenu;


const datefield = document.querySelector("time");
const datefieldUK = document.querySelector("aside");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);
const fulldateUK = new Intl.DateTimeFormat("en-UK", { dateStyle: "full"}).format(now);
datefieldUK.innerHTML = `<em>${fulldateUK}</em>`;


var today = new Date();
var date = (today.getMonth()+1)+'/'+today.getDate()+'/'+today.getFullYear();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var dateTime = date+' '+time;
document.getElementById("currentdate").textContent = dateTime;

