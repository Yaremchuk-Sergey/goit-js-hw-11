import{a as m,S as y,i as n}from"./assets/vendor-CauDeeDU.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g="https://pixabay.com/api/",h="51378325-85b2545a081812b2976a73b54";function p(o){const a={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:a}).then(t=>{if(!t.status.toString().startsWith("2"))throw new Error(`Помилка запиту: ${t.status}`);return t.data}).catch(t=>{throw console.error("Sorry, there are no images matching your search query. Please try again!",t.message),t})}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),L=new y(".gallery a",{captionsData:"alt",captionDelay:250});function b(o){const a=o.map(({webformatURL:t,largeImageURL:i,tags:e,likes:r,views:s,comments:d,downloads:f})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${i}">
        <img class="gallery-image" src="${t}" alt="${e}" />
      </a>
      <div class="info">
        <p>👍 ${r}</p>
        <p>👁️ ${s}</p>
        <p>💬 ${d}</p>
        <p>⬇️ ${f}</p>
      </div>
    </li>`).join("");c.insertAdjacentHTML("beforeend",a),L.refresh()}function S(){c.innerHTML=""}function w(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),q=u.elements["search-text"];u.addEventListener("submit",async o=>{o.preventDefault();const a=q.value.trim();if(!a){n.warning({title:"Warning",message:"Please enter a search term!"});return}S(),w();try{const t=await p(a);if(!t.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}b(t.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later."})}finally{P()}});
//# sourceMappingURL=index.js.map
