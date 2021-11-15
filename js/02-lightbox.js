import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = insertGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

var lightbox = new SimpleLightbox(".gallery a");

galleryEl.addEventListener('click', onGalleryElClick);


function insertGalleryItem(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
    <a class="gallery__item" href= ${original}>
     <img class="gallery__image" src= ${preview} alt= ${description}/>
    </a>`;
        })
        .join('');
};

function onGalleryElClick(evt) {
    evt.preventDefault();

    lightbox.options.captionsData = 'alt';
    lightbox.options.captionType = 'attr';
    lightbox.options.captionDelay = 250;
    console.log("Description :", lightbox.options.captionsData);
}

console.log(galleryItems);

