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

    const apiResponse = await fetch(API_URL, options);
    console.log(await apiResponse.text());
};



document.querySelector('.btn-submit-pic').addEventListener('click', fetchApiDesktop);
//document.querySelector('input[type="submit"]').addEventListener('click', );
