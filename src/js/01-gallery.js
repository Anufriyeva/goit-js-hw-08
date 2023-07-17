// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryElement = document.querySelector('.gallery');

function createElementGallery(items) {
  return items.map(({ original, preview, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}">
      </a>
    </li>
  `).join('');
}

const galleryMarkup = createElementGallery(galleryItems);
galleryElement.insertAdjacentHTML('beforeend', galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Space') {
    lightbox.close();
  }
});

console.log(galleryItems);
