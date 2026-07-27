document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('consultationForm');
  const regionInput = document.getElementById('region');
  const directEmail = document.getElementById('directEmail');
  const address = 'consultation@eduadvance.uk';
  if (directEmail) directEmail.href = `mailto:${address}?subject=${encodeURIComponent('Consultation request')}`;
  const region = new URLSearchParams(window.location.search).get('region');
  if (regionInput && region) regionInput.value = region;
  if (!form) return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const subject = `Consultation request – ${data.get('school') || 'School enquiry'}`;
    const body = [
      `Name: ${data.get('name') || ''}`,
      `Role / position: ${data.get('role') || ''}`,
      `School / organisation: ${data.get('school') || ''}`,
      `Country / region: ${data.get('region') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Telephone: ${data.get('phone') || ''}`,
      `Area of support: ${data.get('service') || ''}`,
      '',
      'How EduAdvance can help:',
      `${data.get('message') || ''}`
    ].join('\n');
    window.location.href = `mailto:${address}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
});
