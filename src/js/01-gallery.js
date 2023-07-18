// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galleryItemsMarkup =
    galleryItems.map(({preview, original, description}) => {
        return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
    }).join('');

galleryEl.insertAdjacentHTML("afterbegin", galleryItemsMarkup);
galleryEl.style.listStyle = 'none';

    const lightbox =  new SimpleLightbox('.gallery a', {
                captionsData: 'alt',
                captionDelay: 250,
             }); 
            



