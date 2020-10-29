const load = document.querySelector(".load");

const showResult = (result) =>{
    if(Number(result[0]['skin cancer'])>=0.7){
        load.innerHTML = "Probabilidade de ser câncer de pele: "+Math.round(Number(result[0]['skin cancer'])*100)+"%";
        return;
    }

    load.innerHTML = "Ta safe mano B)";
        
    
};

const getImage = () => {
    const element = document.querySelector('.pic-preview').src;
    return { img: element };
};

const API_URL = "http://127.0.0.1:5000/process";

const fetchApiDesktop = async () => {
    const img = getImage();

    const options = {
        method: 'POST',
        body: JSON.stringify(img),
        headers: {
            "Content-Type": "application/json"
        }
    };
    
    load.innerHTML = '<img src="./images/load.gif" alt="Loading..."></img>';
    load.classList.remove("off");
    load.classList.add("on");

    window.scroll(0, 1000);

    const apiResponse = await fetch(API_URL, options);
    const parsedApiResponse = await apiResponse.json();
    
    showResult(parsedApiResponse);
};

//Desktop Button
document.querySelectorAll('.btn-submit-pic')[0].addEventListener('click', fetchApiDesktop);
//Mobile Button
document.querySelectorAll('.btn-submit-pic')[1].addEventListener('click', fetchApiDesktop);
