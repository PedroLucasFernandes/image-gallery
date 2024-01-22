const button = document.getElementById("addBtn");
const gallery = document.getElementById("gallery-container");

button.addEventListener("click", function(){    
    const titleImg = document.getElementById("title").value;
    const urlImg = document.getElementById("url").value;

    const newCard = document.createElement("div");
    newCard.classList.add("card");

    const newTitle = document.createElement("h2");
    newTitle.innerText = titleImg;

    const newImg = document.createElement("img");
    newImg.src = urlImg;
    newImg.alt = titleImg;

    if(titleImg != "" && urlImg != ""){
        newCard.appendChild(newTitle);
        newCard.appendChild(newImg);
        gallery.appendChild(newCard);
    } else{
        alert("Insert a valid Title and URL");
        return;
    }

    document.getElementById("title").value = "";
    document.getElementById("url").value = "";

    newCard.addEventListener("click", function(){
        this.remove();
    });
});