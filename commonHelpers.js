import{S as l,i as n}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function u(s){return fetch(`https://pixabay.com/api/?key=45080955-c7c4547ab1841009711dd2978&q=${s}&image_type=photo&orientation=horizontal&safesearch=true`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).catch(r=>{iziToast.error({position:"topRight",message:`${r}`})})}function d(s){const o=new l(".gallery-list a",{captions:!0,captionsData:"alt",captionDelay:250}),i=document.querySelector(".gallery-list");let r=s.hits.map(e=>`<div class="image-frame"><a href="${e.largeImageURL}"><img class="image" src="${e.webformatURL}" alt="${e.tags}" /></a><div class ="text-wraper"><div class="text-block"><h5>likes</h5><p>${e.likes}</p></div><div class="text-block"><h5>views</h5><p>${e.views}</p></div><div class="text-block"><h5>comments</h5><p>${e.comments}</p></div><div class="text-block"><h5>downloads</h5><p>${e.downloads}</p></div></div></div>`).join("");i.insertAdjacentHTML("afterbegin",r),o.refresh()}function m(){const s=document.querySelector(".gallery-list");s.innerHTML=""}const f=document.querySelector(".gallery-form"),p=document.querySelector(".input-for-gallery"),c=document.querySelector(".loader");f.addEventListener("submit",g);function g(s){m(),s.preventDefault();let o=p.value.trim();if(o===""){n.error({position:"topRight",message:"Please fill the input"});return}u(`${o}`).then(async i=>{if(c.classList.remove("hiden"),i.total===0){n.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"});return}else d(i),c.classList.add("hiden")})}
//# sourceMappingURL=commonHelpers.js.map
