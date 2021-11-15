import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = insertGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryEl.addEventListener('click', onImageClick)

function insertGalleryItem(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item"><a class="gallery__link" href= ${original}>
            <img
            class="gallery__image"
            src=${preview}
            data-source=${original}
            alt=${description}
          />
        </a>
      </div>`;
    })
        .join('');
    
}

function onImageClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
    <img src=${evt.target.dataset.source} width="800" height="600">
    `);
    instance.show();

    console.log(evt.target.dataset.source)
}
 
console.log(galleryItems);
