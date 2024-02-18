import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const listImages = document.querySelector('ul.gallery');


form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const searchText = form.elements.text.value.trim();
  if (searchText === '') {
    console.log('Empty!');
    return;
  }
  console.log('searchText');

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
      console.log(data.hits);
      template(data.hits);
     
      var lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

    })
    .catch(error => {
      console.error(error);
    });
  // const options = {
  //   method: "GET",
  //   body: { API_KEY: "42434197-39cd5bed035ab257afa598fe1", q: "roses" },
  // };
  // fetch('https://pixabay.com/api/', options)
   form.reset();
}

function getPhotosByText(searchText) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const API_KEY = '?key=42434197-39cd5bed035ab257afa598fe1';
  const PARAMS =
    '&q=' +
    encodeURIComponent(`${searchText}`) +
    '&image_type=photo' +
    '&orientation=horizontal' +
    '&safesearch=true';
  const URL = BASE_URL + END_POINT + API_KEY + PARAMS;

  return fetch(URL).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function template(obj) {
    const markup = obj.map(
    image => `<li class='gallery-item'>
  <a class='gallery-link' href='${image.largeImageURL}'>
    <img
      class='gallery-image'
      src='${image.webformatURL}'
      alt='${image.tags}'
    />
  </a>
</li>`
  )
    .join('');
  
  listImages.insertAdjacentHTML('afterbegin', markup);

  // return ``
}