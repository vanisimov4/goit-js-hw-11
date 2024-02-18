import{i as a,S as l}from"./assets/vendor-5b791d57.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const c=document.querySelector(".form"),u=document.querySelector("ul.gallery");c.addEventListener("submit",f);function f(n){n.preventDefault();const o=c.elements.text.value.trim();if(o===""){console.log("Empty!");return}console.log("searchText"),m(o).then(t=>{t.hits.length===0&&a.error({messageColor:"white",color:"#EF4040",position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"}),console.log(t.hits),g(t.hits),new l(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(t=>{console.error(t)}),c.reset()}function m(n){const o="https://pixabay.com",t="/api/",i="?key=42434197-39cd5bed035ab257afa598fe1",e="&q="+encodeURIComponent(`${n}`)+"&image_type=photo&orientation=horizontal&safesearch=true",r=o+t+i+e;return fetch(r).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})}function g(n){const o=n.map(t=>`<li class='gallery-item'>
  <a class='gallery-link' href='${t.largeImageURL}'>
    <img
      class='gallery-image'
      src='${t.webformatURL}'
      alt='${t.tags}'
    />
  </a>
</li>`).join("");u.insertAdjacentHTML("afterbegin",o)}
//# sourceMappingURL=commonHelpers.js.map
