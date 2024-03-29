const ALLOWED_TYPE = "image/jpeg";

const picBtn = document.getElementsByName("picDesk");
const error = document.querySelector(".error");

picBtn[0].addEventListener("input", ()=>{
    const uploadBtn = document.getElementsByName("submit")

    if(picBtn[0].files[0].type != ALLOWED_TYPE){
        error.classList.remove("off");
        error.classList.add("on");
        return;
    }

    error.classList.remove("on");
    error.classList.add("off");

    if(picBtn[0].files.length){
        uploadBtn[0].classList.remove("input-off");
        uploadBtn[0].classList.add("input-on");
        uploadBtn[0].removeAttribute("disabled");

        const img = document.createElement("img");
        img.setAttribute("class", "pic-preview");
        const divImgWrapper = document.querySelector(".image-preview");
        divImgWrapper.innerHTML = "";
        divImgWrapper.appendChild(img);

        const image = picBtn[0].files[0];
        const reader = new FileReader();

        const imageWrapper = document.querySelector(".pic-preview");
        imageWrapper.title = image.name;

        reader.onload = function(event) {
            imageWrapper.src = event.target.result;
        };
        
        reader.readAsDataURL(image);
    }

});
