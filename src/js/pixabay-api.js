export default function getPhotosByText(searchText) {
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
