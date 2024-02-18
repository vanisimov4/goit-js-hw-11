
const form = document.querySelector('.form');

form.addEventListener('submit', handleFormSubmit)

function handleFormSubmit(event) {
     event.preventDefault();
    
    if (form.elements.text.value.trim() == '') {
        return;
    }
    console.log(form.elements.text.value.trim());

    const API_KEY = '42434197-39cd5bed035ab257afa598fe1';
    const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + encodeURIComponent('red roses');
    fetch(URL)
    // fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
 if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
console.log(data);
  })
  .catch(error => {
		console.error(error);
  });
}