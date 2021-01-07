const access_key = 'ADCiZa38wWPHvH5AK7EnDTTqIOVAG0XOtRykNsGVfA0';
const count = 30;
const url = `https://api.unsplash.com/photos/random/?client_id=${access_key}&count=${count}`;

const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let totalImages = 0;
let imagesLoaded = 0;
let ready = false;

function setAttributes(ele, attrs) {
    for (const key in attrs) {
        ele.setAttribute(key, attrs[key]);
    }
}

function imageLoaded() {
    imagesLoaded++;

    if (imagesLoaded === totalImages) {
        ready = true;
        loader.hidden = true;
    }
}

function displayPhotos(photos) {
    imagesLoaded = 0;
    totalImages = photos.length;
    photos.forEach(photo => {
        const aTag = document.createElement('a');
        setAttributes(aTag, {
            href: photo.links.html,
            target: '_blank'
        });
        const imgTag = document.createElement('img');
        setAttributes(imgTag, {
            src: photo.urls.small,
            alt: photo.alt_description,
            title: photo.alt_description
        });
        imgTag.addEventListener('load', imageLoaded);
        aTag.appendChild(imgTag);
        imageContainer.appendChild(aTag);
    });
}

async function getImage() {
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        displayPhotos(data);
    } catch (err) {

    }
}

window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) {
        ready = false;
        getImage();
    }
});

getImage();
