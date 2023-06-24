let imagesToLoad = document.querySelectorAll("img[data-src]");
const loadImages = (image) => {
  image.setAttribute("src", image.getAttribute("data-src"));
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

imagesToLoad.forEach((img) => {
    loadImages(img);
  });

/*-------------------Time user visits----------------------*/

const currentdate = Date.now();
const oldDate = localStorage.getItem("oldDate");
let daysLastVisiting = 0;
if (oldDate !== null) {
    daysLastVisiting = parseInt((oldDate - currentdate) / (1000 * 60 * 60 * 24));
}
 


localStorage.setItem("oldDate", currentdate);

document.querySelector("#total-days").innerHTML = daysLastVisiting;