const access_key = 'ADCiZa38wWPHvH5AK7EnDTTqIOVAG0XOtRykNsGVfA0';
const count = 10;
const url = `https://api.unsplash.com/photos/random/?client_id=${access_key}&count=${count}`;

async function getImage() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
    } catch (err) {

    }
}

getImage();
