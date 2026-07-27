document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.menu-toggle');
  const nav=document.querySelector('.nav-links');
  if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');}));}
  const buttons=[...document.querySelectorAll('.region-btn')];
  const panels=[...document.querySelectorAll('.region-content')];
  buttons.forEach(button=>button.addEventListener('click',()=>{
    const id=button.dataset.region;
    buttons.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});
    panels.forEach(panel=>{const active=panel.id===id;panel.hidden=!active;panel.classList.toggle('active',active);});
  }));
});
