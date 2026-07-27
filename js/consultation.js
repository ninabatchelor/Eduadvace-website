document.addEventListener('DOMContentLoaded',()=>{
  const params=new URLSearchParams(window.location.search);
  const region=document.getElementById('regionField');
  if(region&&params.get('region')) region.value=params.get('region');
  const form=document.getElementById('consultationForm');
  if(!form)return;
  form.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(form);
    const lines=[
      `Name: ${data.get('name')||''}`,
      `Job title: ${data.get('role')||''}`,
      `School/organisation: ${data.get('school')||''}`,
      `Email: ${data.get('email')||''}`,
      `Phone: ${data.get('phone')||''}`,
      `Country/region: ${data.get('region')||''}`,
      `Preferred contact: ${data.get('contact')||''}`,
      `Area of support: ${data.get('service')||''}`,
      '',
      'How can EduAdvance help?',
      data.get('message')||''
    ];
    const subject=`EduAdvance consultation request - ${data.get('school')||data.get('name')||'School enquiry'}`;
    window.location.href=`mailto:consultation@eduadvance.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
});
