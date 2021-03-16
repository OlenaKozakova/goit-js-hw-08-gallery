import galleryItems from "./gallery-items.js";

/*Создание и рендер разметки по массиву данных и предоставленному шаблону.*/
const galleryContainerRef = document.querySelector(".js-gallery");
const cardImagesRef = createCardsGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML("beforeend", cardImagesRef);

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return`<li class="gallery__item">
    <a
        class="gallery__link"
        href = "${original}"
>
        <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
        />
    </a>
</li>`
    }).join('')
}



//const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
//const lightboxCloseRef = document.querySelector('.close-lightbox');
//const lightboxRef = document.querySelector('.js-lightbox');
//const lightboxImageRef = document.querySelector('.lightbox__image');
//const buttonRef = document.querySelector('.lightbox__button');