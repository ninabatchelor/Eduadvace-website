const steps=[...document.querySelectorAll('.step')];
let i=0;
function show(n){steps.forEach((s,x)=>s.classList.toggle('active',x===n));
const b=document.querySelector('.bar'); if(b)b.style.width=((n+1)/steps.length*100)+'%';}
document.querySelectorAll('.next').forEach(b=>b.onclick=()=>{if(i<steps.length-2){i++;show(i);}});
document.querySelectorAll('.prev').forEach(b=>b.onclick=()=>{if(i>0){i--;show(i);}});
const sub=document.getElementById('submit'); if(sub) sub.onclick=()=>{i=steps.length-1;show(i);}
show(0);