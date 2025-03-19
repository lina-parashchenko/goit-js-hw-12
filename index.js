import{a as L,S as w,b as S,i as l}from"./assets/vendor-DsRbAYL4.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const m of o.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&s(m)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();const v="49318761-deb5d950ade63202697546ac6",b="https://pixabay.com/api/";async function h(t,e=1,i=15){try{const s=await L.get(b,{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,t:new Date().getTime(),page:e,per_page:i}});if(s.data.hits.length===0)throw new Error("No images found");return{images:s.data.hits,total:s.data.totalHits}}catch(s){throw console.error("Error fetching images:",s),s}}const f=document.querySelector(".gallery");function q(t){return t.map(e=>`
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
    `).join("")}function y(t,e=!1){e||(f.innerHTML=""),f.insertAdjacentHTML("beforeend",q(t)),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const E=document.querySelector(".form"),R=document.querySelector(".gallery"),n=document.querySelector(".loader"),a=document.querySelector(".load-more"),c=new S({color:"red",lines:12,width:8,radius:14});let g="",d=1;const u=15;let p=0;E.addEventListener("submit",async t=>{if(t.preventDefault(),g=t.target.elements["search-text"].value.trim(),!g){l.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}R.innerHTML="",d=1,a.classList.add("hidden"),n.classList.remove("hidden"),c.spin(n),document.querySelector(".gallery").innerHTML="",n.classList.remove("hidden"),c.spin(n);try{const{images:e,total:i}=await h(g,d,u);p=i,e.length===0?l.error({title:"Error",message:"Sorry, no images found. Please try again!",position:"topRight"}):(y(e),u<p&&a.classList.remove("hidden"))}catch{l.error({title:"Error",message:"Something went wrong. Try again!",position:"topRight"})}finally{c.stop(),n.classList.add("hidden")}});function T(){const t=document.querySelector(".gallery-item");if(!t)return;const e=t.getBoundingClientRect().height;window.scrollBy({top:e*2,left:0,behavior:"smooth"})}a.addEventListener("click",async()=>{d+=1,a.classList.add("hidden"),n.classList.remove("hidden"),c.spin(n);try{const{images:t}=await h(g,d,u);t.length===0||d*u>=p?(l.info({title:"Info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}),a.classList.add("hidden")):(y(t,!0),a.classList.remove("hidden"),setTimeout(T,500))}catch{l.error({title:"Error",message:"Something went wrong. Try again!",position:"topRight"})}finally{c.stop(),n.classList.add("hidden")}});
//# sourceMappingURL=index.js.map
