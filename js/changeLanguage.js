
const languageCheckBox = document.querySelector("#language-option");

languageCheckBox.addEventListener('click',()=>{
    const languageCheckBox = document.querySelector("#language-option");

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = null;
    script.id = "language-script";

    const legend = document.createElement("p");
    const error = document.createElement("p");
    const br = document.createElement("br");
    const legends = ["Clique no botão de camera ", "para selecionar o arquivo", "Click the camera button", "to select the file"];
    const errors = ["Formato inválido", "as imagens devem ser JPEG ou JPG", "Invalid format", "images must be JPEG or JPG"]

    const uploadLegend = document.querySelector(".upload-desktop-legend");

    if(languageCheckBox.checked){
        script.src = "js/enTutorial.js";
        legend.append(legends[2]);
        legend.append(br);
        legend.append(legends[3]);

        error.append(errors[2]);
        error.append(br.cloneNode());
        error.append(errors[3]);
    }else {
        script.src = "js/ptTutorial.js";
        legend.append(legends[0]);
        legend.append(br);
        legend.append(legends[1]);

        error.append(errors[0]);
        error.append(br.cloneNode());
        error.append(errors[1]);

    }

    document.querySelector(".tutorial").innerHTML = "";
    document.querySelector(".scripts").innerHTML = "";
    document.querySelector(".scripts").appendChild(script);

    document.querySelector(".upload-desktop-legend").innerHTML = "";
    document.querySelector(".upload-desktop-legend").appendChild(legend);
    document.querySelector(".error").innerHTML = "";
    document.querySelector(".error").appendChild(error);

} );


