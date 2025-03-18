import{a as u,S as g,b as p,i as a}from"./assets/vendor-DsRbAYL4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))l(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(r){if(r.ep)return;r.ep=!0;const t=n(r);fetch(r.href,t)}})();const f="49318761-deb5d950ade63202697546ac6",m="https://pixabay.com/api/";async function y(o){try{const e=await u.get(m,{params:{key:f,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,t:new Date().getTime()}});return console.log(e.data),e.data.hits}catch(e){return console.error("Error fetching images:",e),[]}}const c=document.querySelector(".gallery");function h(o){return o.map(e=>`
      <li class="gallery-item">
        <a href="${e.largeImageURL}" class="gallery-link">
          <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
        </a>
        <div class="info">
          <p><strong>Likes:</strong> ${e.likes}</p>
          <p><strong>Views:</strong> ${e.views}</p>
          <p><strong>Comments:</strong> ${e.comments}</p>
          <p><strong>Downloads:</strong> ${e.downloads}</p>
        </div>
      </li>
    `).join("")}function L(o){c.innerHTML="",c.insertAdjacentHTML("beforeend",h(o)),new g(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const w=document.querySelector(".form"),i=document.querySelector(".loader"),d=new p({color:"red",lines:12,width:8,radius:14});w.addEventListener("submit",async o=>{o.preventDefault();const e=o.target.elements["search-text"].value.trim();if(!e){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}document.querySelector(".gallery").innerHTML="",i.classList.remove("hidden"),d.spin(i);try{const n=await y(e);n.length===0?a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):L(n)}catch{a.error({title:"Error",message:"Something went wrong. Try again!",position:"topRight"})}finally{d.stop(),i.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
