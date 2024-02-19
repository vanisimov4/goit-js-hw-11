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
 
  listImages.innerHTML = '';

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
      lightbox.refresh();
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
  const markup = obj
    .map(
      image => `<li class='gallery-item'>
  <a class='gallery-link' href='${image.largeImageURL}'>
    <img
      class='gallery-image'
      src='${image.webformatURL}'
      alt='${image.tags}'
    />
  </a>
    <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-likes'>
                    <h3 class="gallery-item-info-title">Likes</h3>
                <p class="gallery-item-info-text">${image.likes}</p>
                </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-views'>
                    <h3 class="gallery-item-info-title">Views</h3>
                <p class="gallery-item-info-text">${image.views}</p>
                  </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-comments'>
                    <h3 class="gallery-item-info-title">Comments</h3>
                <p class="gallery-item-info-text">${image.comments}</p>
                 </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-downloads'>
                    <h3 class="gallery-item-info-title">Downloads</h3>
                <p class="gallery-item-info-text">${image.downloads}</p>
                 </div>
    </li>
    </ul>  
</li>`
    )
    .join('');

  listImages.insertAdjacentHTML('afterbegin', markup);

  // return ``
}

// function render(obj) {
  
// }