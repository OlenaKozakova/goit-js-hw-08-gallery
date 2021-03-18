import galleryItems from './gallery-items.js';

/*Создание и рендер разметки по массиву данных и предоставленному шаблону.*/
const galleryContainerRef = document.querySelector('.js-gallery');
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

/*переменные*/
const lightboxImageRef = document.querySelector('.lightbox__image');
const buttonRef = document.querySelector('button.lightbox__button');
const lightboxRef = document.querySelector('.js-lightbox');

galleryContainerRef.addEventListener('click', openImageClick)
lightboxRef.addEventListener('click', btnCloseClick);
buttonRef.addEventListener('click', btnCloseClick);
window.addEventListener('keydown', keydownEvent);

function openImageClick(evt) {
  const imageGallery = evt.target.classList.contains('gallery__image');
  if (!imageGallery) {
    return;
  }
}

const artGalleryImg = galleryItems.map((img) => img.original);
const currentIndexImg = 0;

  appendClass(); 
  evt.preventDefault();
    lightboxImageRef.src = evt.target.dataset.source;
  currentIndexImg = artGalleryImg.indexOf(lightboxImageRef.src);

 
function keydownEvent(evt) {
  switch (evt.keyCode) {
    case label1: 
      removeClass();
      break;
    case label2: 
      if (currentIndexImg === 0) {
        currentIndexImg = artGalleryImg.length - 1;
      } else {
        currentIndexImg -= 1;
      }
      lightboxImageRef.src = artGalleryImg[currentIndexImg];
      break;
    case label3: 
      if (currentIndexImg === artGalleryImg.length - 1) {
        currentIndexImg = 0;
      } else {
        currentIndexImg += 1;
      }
      lightboxImageRef.src = artGalleryImg[currentIndexImg];
  }
}

function btnCloseClick(evt) {
  const imgBoxClose = evt.target.classList.contains('lightbox__image');
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