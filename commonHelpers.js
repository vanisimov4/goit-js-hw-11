import{i as m,S as f}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(t){if(t.ep)return;t.ep=!0;const i=s(t);fetch(t.href,i)}})();function u(e){const r="https://pixabay.com",s="/api/",o="?key=42434197-39cd5bed035ab257afa598fe1",t="&q="+encodeURIComponent(`${e}`)+"&image_type=photo&orientation=horizontal&safesearch=true",i=r+s+o+t;return fetch(i).then(l=>{if(!l.ok)throw new Error(l.status);return l.json()})}function g(e){return`<li class='gallery-item'>
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
</li>`}function d(e){return console.log(e),e.map(g).join("")}const a=document.querySelector(".form"),n=document.querySelector(".loader"),c=document.querySelector("ul.gallery");a.addEventListener("submit",y);function y(e){e.preventDefault();const r=a.elements.text.value.trim();r!==""&&(c.innerHTML="",n.classList.add("is-visible"),u(r).then(s=>{s.hits.length===0&&m.error({messageColor:"white",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),h(s.hits),n.classList.remove("is-visible");var o=new f(".gallery a",{captionsData:"alt",captionDelay:250});o.refresh()}).catch(s=>{console.error(s)}),a.reset())}function h(e){const r=d(e);c.insertAdjacentHTML("afterbegin",r)}
//# sourceMappingURL=commonHelpers.js.map
