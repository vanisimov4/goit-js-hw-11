function templatePhoto(photo) {
  return `<li class='gallery-item'>
  <a class='gallery-link' href='${photo.largeImageURL}'>
    <img
      class='gallery-image'
      src='${photo.webformatURL}'
      alt='${photo.tags}'
    />
  </a>
    <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-likes'>
                    <h3 class="gallery-item-info-title">Likes</h3>
                <p class="gallery-item-info-text">${photo.likes}</p>
                </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-views'>
                    <h3 class="gallery-item-info-title">Views</h3>
                <p class="gallery-item-info-text">${photo.views}</p>
                  </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-comments'>
                    <h3 class="gallery-item-info-title">Comments</h3>
                <p class="gallery-item-info-text">${photo.comments}</p>
                 </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-downloads'>
                    <h3 class="gallery-item-info-title">Downloads</h3>
                <p class="gallery-item-info-text">${photo.downloads}</p>
                 </div>
    </li>
    </ul>  
</li>`;
}

export default function templatePhotos(photos) {
  console.log(photos);
  return photos.map(templatePhoto).join('');
}
