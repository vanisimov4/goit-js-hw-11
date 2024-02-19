import{i as c,S as f}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function e(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(t){if(t.ep)return;t.ep=!0;const i=e(t);fetch(t.href,i)}})();const n=document.querySelector(".form"),a=document.querySelector("ul.gallery");n.addEventListener("submit",m);function m(s){s.preventDefault();const o=n.elements.text.value.trim();if(o===""){console.log("Empty!");return}console.log("searchText"),a.innerHTML="",g(o).then(e=>{e.hits.length===0&&c.error({messageColor:"white",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(e.hits),u(e.hits);var r=new f(".gallery a",{captionsData:"alt",captionDelay:250});r.refresh()}).catch(e=>{console.error(e)}),n.reset()}function g(s){const o="https://pixabay.com",e="/api/",r="?key=42434197-39cd5bed035ab257afa598fe1",t="&q="+encodeURIComponent(`${s}`)+"&image_type=photo&orientation=horizontal&safesearch=true",i=o+e+r+t;return fetch(i).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function u(s){const o=s.map(e=>`<li class='gallery-item'>
  <a class='gallery-link' href='${e.largeImageURL}'>
    <img
      class='gallery-image'
      src='${e.webformatURL}'
      alt='${e.tags}'
    />
  </a>
    <ul class="gallery-item-info">
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-likes'>
                    <h3 class="gallery-item-info-title">Likes</h3>
                <p class="gallery-item-info-text">${e.likes}</p>
                </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-views'>
                    <h3 class="gallery-item-info-title">Views</h3>
                <p class="gallery-item-info-text">${e.views}</p>
                  </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-comments'>
                    <h3 class="gallery-item-info-title">Comments</h3>
                <p class="gallery-item-info-text">${e.comments}</p>
                 </div>
    </li>
    <li class='gallery-item-info-categories'> 
            <div class='gallery-item-info-downloads'>
                    <h3 class="gallery-item-info-title">Downloads</h3>
                <p class="gallery-item-info-text">${e.downloads}</p>
                 </div>
    </li>
    </ul>  
</li>`).join("");a.insertAdjacentHTML("afterbegin",o)}
//# sourceMappingURL=commonHelpers.js.map
