
const themeCheckBox = document.querySelector("#theme-option");

themeCheckBox.addEventListener('click',()=>{
    const themeCheckBox = document.querySelector("#theme-option");

    const body = document.body;

    themeCheckBox.checked ? body.style = "background-color: #080808" : body.style = "background-color: #EEE";

} );


