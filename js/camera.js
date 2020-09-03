
function changeCamSize() {
        const cam = document.getElementsByTagName("video");
        cam[0].style="width=70vw; height=120vw";
}

function changeSubmit(input) {
    const uploadBtn = document.getElementsByName("submit")
    if(input){
        uploadBtn[1].classList.remove("input-off");
        uploadBtn[1].classList.add("input-on");
        uploadBtn[1].removeAttribute("disabled");
    }else{
        uploadBtn[1].classList.remove("input-on");
        uploadBtn[1].classList.add("input-off");
        uploadBtn[1].setAttribute("disabled", "disabled");
    }

}

function ShowCam() {
    Webcam.set({
        width: 480,
        height: 480,
        image_format: 'jpeg',
        jpeg_quality: 100,

    });
    Webcam.set('constraints',{
        video: true,
        facingMode: "environment"
    });
    Webcam.attach('.camera-preview');

    changeCamSize();
    changeSubmit(false);
}

window.addEventListener("load", ()=>{
    const desktop = document.querySelector(".tutorial-wrapper");
    const desktopDisplay = window.getComputedStyle(desktop).display;

    desktopDisplay === "none" ? null:ShowCam();
});


function snap() {
    Webcam.snap( function(data_uri) {
        document.querySelector(".camera-preview").innerHTML =
            '<img id="image" class="pic-preview" src="'+data_uri+'" style="width: 70vw; height: 120vw"/>';
    } );
    changeSubmit(true);
}

function upload() {
    console.log("Uploading...")
    let image = document.getElementById('image').src;
    let form = document.getElementById('myForm');
    let formData = new FormData(form);
    formData.append("file", image);
    let xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "/signup");

    // check when state changes,
    xmlhttp.onreadystatechange = function() {

        if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            alert(xmlhttp.responseText);
        }
    }

    xmlhttp.send(formData);
    console.log(formData.get('file'));
    console.log(formData.get('userID'));
}

const cancel = document.getElementsByName("clear");
const pic = document.getElementsByName("pic");

cancel[0].addEventListener("click", ShowCam);
pic[0].addEventListener("click", snap);
