document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.getElementById('site-nav');
  toggle.addEventListener('click',()=>{nav.classList.toggle('show')});
});
