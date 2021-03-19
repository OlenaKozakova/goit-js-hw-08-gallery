import galleryItems from './gallery-items.js';

/*переменные*/
const lightboxImageRef = document.querySelector('.lightbox__image');
const buttonRef = document.querySelector('button.lightbox__button');
const lightboxRef = document.querySelector('.js-lightbox');
const galleryContainerRef = document.querySelector('.js-gallery');
/*Создание и рендер разметки по массиву данных и предоставленному шаблону.*/

const cardImagesRef = createCardsGallery(galleryItems);

galleryContainerRef.insertAdjacentHTML('beforeend', cardImagesRef);

function createCardsGallery(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return`<li class='gallery__item'>
    <a
        class='gallery__link'
        href = '${original}'
>
        <img
            class='gallery__image'
            src='${preview}'
            data-source='${original}'
            alt='${description}'
        />
    </a>
</li>`
    }).join('')
}

galleryContainerRef.addEventListener('click', openImageClick)
lightboxRef.addEventListener('click', btnCloseClick);
buttonRef.addEventListener('click', btnCloseClick);
window.addEventListener('keydown', keyCode);


const artGalleryImg = galleryItems.map((img) => img.original);
const currentIndexImg = 0;

function openImageClick(event) {
  const imageGallery = event.target.classList.contains('gallery__image');
  if (!imageGallery) {
    return;
  }

  appendClass(); 
  event.preventDefault();
    lightboxImageRef.src = event.target.dataset.source;
  currentIndexImg = artGalleryImg.indexOf(lightboxImageRef.src);
}

function btnCloseClick(event) {
  const imgBoxClose = event.target.classList.contains('lightbox__image');
  if (imgBoxClose) {
    return;
  }
  removeClass(); 
}

function appendClass() {
  lightboxRef.classList.add('is-open');
};

function removeClass() {
  lightboxRef.classList.remove('is-open');
    lightboxRef.src = '';
};

function keyCode(event) {
  switch (event.keyCode) {
    case 27: 
      removeClass();
  }
}