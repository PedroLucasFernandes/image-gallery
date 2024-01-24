const inputTitle = document.getElementById("input-title");
const inputLink = document.getElementById("input-image");
const buttonAdd = document.getElementById("button-add");

const buttonPrev = document.getElementById("button-prev");
const buttonTrash = document.getElementById("button-trash"); 
const buttonNext = document.getElementById("button-next");

const h2 = document.getElementById("img-title");
const img = document.getElementById("img-display");

const currentIndexLocalStorage = localStorage.getItem("currentIndex");
let currentIndex = currentIndexLocalStorage === null ? 0 : Number(currentIndexLocalStorage);
const imagesLocalStorage = localStorage.getItem("images");
const images = imagesLocalStorage === null ? [] : JSON.parse(imagesLocalStorage);

if (images.length !== 0) {

const imageObj = images[currentIndex];

img.src = imageObj.link;
h2.innerText = imageObj.title;
}

buttonAdd.addEventListener("click", function () {
const imageLink = inputLink.value;
const imageTitle = inputTitle.value;

img.src = imageLink;
h2.innerText = imageTitle;

images.push({ link: imageLink, title: imageTitle });
currentIndex = images.length - 1;
localStorage.setItem("currentIndex", currentIndex);
localStorage.setItem("images", JSON.stringify(images));
});

buttonPrev.addEventListener("click", function () {
    if (currentIndex === 0) {
    currentIndex = images.length - 1;
    } else {
    currentIndex--;
    }

    const imageObj = images[currentIndex];

    img.src = imageObj.link;
    h2.innerText = imageObj.title;
    localStorage.setItem("currentIndex", currentIndex);
});

buttonNext.addEventListener("click", function () {
    if (currentIndex === images.length - 1) {
    currentIndex = 0;
    } else {
    currentIndex++;
    }

    const imageObj = images[currentIndex];

    img.src = imageObj.link;
    h2.innerText = imageObj.title;
    localStorage.setItem("currentIndex", currentIndex);
});

buttonTrash.addEventListener("click", function () {
    if (images.length > 0) {
        images.splice(currentIndex, 1);

        if (currentIndex === images.length) {
            currentIndex--;
        }

        const imageObj = images[currentIndex];

        img.src = imageObj ? (imageObj.link || "") : "";
        h2.innerText = imageObj ? (imageObj.title || "") : "";
        localStorage.setItem("currentIndex", currentIndex);
        localStorage.setItem("images", JSON.stringify(images));
    }
});