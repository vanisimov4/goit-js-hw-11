import getPhotosByText from './js/pixabay-api';
import templatePhotos from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
const listImages = document.querySelector('ul.gallery');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const searchText = form.elements.text.value.trim();

  if (searchText === '') {
    return;
  }

  listImages.innerHTML = '';
  loader.classList.add('is-visible');

  getPhotosByText(searchText)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.error({
          messageColor: 'white',
          color: '#EF4040',
          position: 'topRight',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }

      renderPhotos(data.hits);
      loader.classList.remove('is-visible');

      lightbox.refresh();
    })
    .catch(error => {
      console.error(error);
    });

  form.reset();
}

function renderPhotos(objPhotos) {
  const markup = templatePhotos(objPhotos);
  listImages.insertAdjacentHTML('afterbegin', markup);
}

var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
