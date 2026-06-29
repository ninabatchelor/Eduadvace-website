document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
    }
  });
});

const toggle = document.querySelector('.mobile-toggle');
const nav = document.querySelector('.main-nav');
if(toggle){
  toggle.addEventListener('click',()=>nav.classList.toggle('open'));
}

function showRegion(regionId, button){
  document.querySelectorAll('.region-detail').forEach(region=>region.classList.remove('active-region'));
  document.querySelectorAll('.region-tab-buttons button').forEach(btn=>btn.classList.remove('active'));

  const region = document.getElementById(regionId);
  if(region) region.classList.add('active-region');
  if(button) button.classList.add('active');
}

function showRegionAndScroll(regionId){
  const buttons = document.querySelectorAll('.region-tab-buttons button');

  buttons.forEach(button=>{
    const txt = button.textContent.toLowerCase();
    button.classList.remove('active');

    if(
      (regionId==='uk' && txt.includes('united kingdom')) ||
      (regionId==='usa' && txt.includes('united states')) ||
      (regionId==='gulf' && txt.includes('gulf')) ||
      txt.includes(regionId)
    ){
      button.classList.add('active');
    }
  });

  document.querySelectorAll('.region-detail').forEach(region=>region.classList.remove('active-region'));

  const region = document.getElementById(regionId);
  if(region) region.classList.add('active-region');

  document.getElementById('regions').scrollIntoView({
    behavior:'smooth',
    block:'start'
  });
}

function nextStep(stepNumber){
  document.querySelectorAll('.consultation-step').forEach(step=>{
    step.classList.remove('active-step');
  });

  const next = document.getElementById('step'+stepNumber);
  if(next) next.classList.add('active-step');

  document.querySelectorAll('.progress-dot').forEach((dot,index)=>{
    dot.classList.toggle('active-dot', index < stepNumber);
  });

  document.getElementById('consultation').scrollIntoView({
    behavior:'smooth',
    block:'start'
  });
}

document.querySelectorAll('.consultation-option').forEach(option=>{
  option.addEventListener('click',()=>{
    const grid = option.closest('.consultation-grid');

    if(grid){
      grid.querySelectorAll('.consultation-option').forEach(o=>{
        o.classList.remove('selected');
      });
    }

    option.classList.add('selected');
  });
});

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }
  });
},{threshold:.15});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
