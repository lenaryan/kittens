document.addEventListener("DOMContentLoaded",(function(){let e,s,o=document.querySelector(".filter__input--min"),t=document.querySelector(".filter__input--max"),l=document.querySelectorAll(".room"),r=document.querySelector(".reset-btn");document.querySelector(".apply-btn").addEventListener("click",()=>{if(l.forEach(e=>{e.classList.remove("show-room"),e.classList.contains("hide-room")||(e.classList.add("hide-room"),e.style.display="none")}),e=document.querySelectorAll(".filter__block--square .filter__check:checked"),s=document.querySelectorAll(".filter__block--equip .filter__check:checked"),e.length&&!s.length&&!o.value&&!t.value){let s=[];e.forEach(e=>s.push(e.dataset.square)),l.forEach(e=>{s.includes(e.dataset.square)&&(e.style.display="flex",e.classList.add("show-room"),e.classList.remove("hide-room"))})}if(!o.value&&!t.value||e.length||s.length||(o.value&&t.value?l.forEach(e=>{e.dataset.price<o.value||e.dataset.price>t.value?(e.classList.add("hide-room"),e.classList.remove("show-room"),e.style.display="none"):(e.classList.remove("hide-room"),e.classList.add("show-room"),e.style.display="flex")}):o.value?l.forEach(e=>{e.dataset.price<o.value?(e.classList.add("hide-room"),e.classList.remove("show-room"),e.style.display="none"):(e.classList.remove("hide-room"),e.classList.add("show-room"),e.style.display="flex")}):t.value&&l.forEach(e=>{e.dataset.price>t.value?(e.classList.add("hide-room"),e.classList.remove("show-room"),e.style.display="none"):(e.classList.remove("hide-room"),e.classList.add("show-room"),e.style.display="flex")})),s.length&&!e.length&&!o.value&&!t.value){let e=[];s.forEach(s=>e.push(s.dataset.equip)),l.forEach(s=>{e.some(e=>s.dataset.equip.includes(e))&&(s.style.display="flex",s.classList.add("show-room"),s.classList.remove("hide-room"))})}e.length||s.length||o.value||t.value?r.style.display="block":(r.style.display="none",l.forEach(e=>{e.classList.remove("hide-room"),e.classList.remove("show-room"),e.removeAttribute("style")}))}),r.addEventListener("click",()=>{l.forEach(e=>{e.classList.remove("hide-room"),e.classList.remove("show-room"),e.removeAttribute("style")}),document.querySelectorAll(".filter__check:checked").forEach(e=>e.checked=!1),document.querySelectorAll(".filter__input").forEach(e=>e.value=null),r.removeAttribute("style")})})),document.addEventListener("DOMContentLoaded",(function(){document.querySelector(".header__burger").addEventListener("click",()=>{document.querySelector(".nav").classList.add("show-menu"),document.querySelector(".nav").classList.remove("hide-menu"),document.querySelector(".header__burger").style.display="none",document.querySelector(".header__cross").style.display="block"}),document.querySelector(".header__cross").addEventListener("click",()=>{document.querySelector(".nav").classList.remove("show-menu"),document.querySelector(".nav").classList.add("hide-menu"),document.querySelector(".header__burger").style.display="block",document.querySelector(".header__cross").style.display="none"})}));