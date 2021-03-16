import galleryItems from "./gallery-items.js";

const galleryContainerRef = document.querySelector(".js-gallery");
const cardImagesRef = createCardsGallery(galleryItems);

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return
            `<li class="gallery__item">
    <a
        class="gallery__link"
        href="${original}"
    >
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
</li>`}).join("");
}

galleryContainerRef.insertAdjacentHTML("beforeend", cardImagesRef);

//const lightboxOverlayRef = document.querySelector('.lightbox__overlay');
//const lightboxCloseRef = document.querySelector('.close-lightbox');
//const lightboxRef = document.querySelector('.js-lightbox');
//const lightboxImageRef = document.querySelector('.lightbox__image');
//const buttonRef = document.querySelector('.lightbox__button');